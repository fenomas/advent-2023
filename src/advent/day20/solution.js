
// order: [real1, real2, test1, test2, ...]
export var knownAnswers = [896998430, 236095992539963, 32000000, , 11687500,]


var LOW = 'low'
var HIGH = 'high'


export function part1(input = '') {
    var data = {}
    input.split('\n').forEach(line => {
        var [head, tail] = line.trim().split(/\s*->\s*/)
        var type = head[0]
        var label = head.substring(1)
        var dest = tail.split(/\s*,\s*/)
        var state = false
        var inputs = []
        var remembered = {}
        data[label] = { type, label, dest, inputs, state, remembered }
    })
    Object.keys(data).forEach(key => {
        data[key].dest.forEach(tgt => {
            if (!(tgt in data)) return
            data[tgt].inputs.push(key)
            data[tgt].remembered[key] = LOW
        })
    })

    var queue = []
    var sent = { [LOW]: 0, [HIGH]: 0 }
    var send = (src = '', tgt = '', pulse = LOW) => {
        sent[pulse]++
        if (tgt in data) queue.push({ src, tgt, pulse })
    }
    var pressButton = () => {
        queue = []
        send('button', 'roadcaster', LOW)
        for (var ix = 0; ix < queue.length; ix++) {
            var { src, tgt, pulse } = queue[ix]
            var { type, label, dest, inputs, state, remembered } = data[tgt]
            if (type === 'b') {
                dest.forEach(key => send(label, key, pulse))
            } else if (type === '%') {
                if (pulse === HIGH) continue
                state = !state
                data[tgt].state = state
                dest.forEach(key => send(label, key, state ? HIGH : LOW))
            } else if (type === '&') {
                remembered[src] = pulse
                var allHigh = inputs.every(key => (remembered[key] === HIGH))
                dest.forEach(key => send(label, key, allHigh ? LOW : HIGH))
            }
        }
    }

    for (var i = 0; i < 1000; i++) pressButton()
    return sent.high * sent.low
}






export function part2(input = '') {
    var END_LABEL = 'rx'
    var endInput = ''
    var data = {}
    input.split('\n').forEach(line => {
        var [head, tail] = line.trim().split(/\s*->\s*/)
        var type = head[0]
        var label = head.substring(1)
        var dest = tail.split(/\s*,\s*/)
        var state = false
        var inputs = []
        var remembered = {}
        data[label] = { type, label, dest, inputs, state, remembered }
    })
    var endSeen = false
    Object.keys(data).forEach(key => {
        data[key].dest.forEach(tgt => {
            if (tgt === END_LABEL) endInput = key
            if (!(tgt in data)) return
            data[tgt].inputs.push(key)
            data[tgt].remembered[key] = LOW
        })
    })
    if (!endInput) return -1 // not possible to run on test inputs


    // this is tailored to inputs - deeeeeeeply unsatisfying
    var watchLabels = data[endInput].inputs.slice()
    var watchCount = 0
    var firedAt = {}
    for (var lab of watchLabels) firedAt[lab] = -1

    var presses = 0
    var send = (queue, src = '', tgt = '', pulse = LOW) => {
        if (src in firedAt && pulse === HIGH && firedAt[src] < 0) {
            firedAt[src] = presses
            watchCount++
        }
        if (tgt in data) queue.push({ src, tgt, pulse })
    }
    var pressButton = () => {
        var queue = []
        presses++
        send(queue, 'button', 'roadcaster', LOW)
        for (var ix = 0; ix < queue.length; ix++) {
            var { src, tgt, pulse } = queue[ix]
            var { type, label, dest, inputs, state, remembered } = data[tgt]
            if (type === 'b') {
                dest.forEach(key => send(queue, label, key, pulse))
            } else if (type === '%') {
                if (pulse === HIGH) continue
                state = !state
                data[tgt].state = state
                dest.forEach(key => send(queue, label, key, state ? HIGH : LOW))
            } else if (type === '&') {
                remembered[src] = pulse
                var allHigh = inputs.every(key => (remembered[key] === HIGH))
                dest.forEach(key => send(queue, label, key, allHigh ? LOW : HIGH))
            }
        }
    }

    for (var i = 0; i < 1e5; i++) {
        pressButton()
        if (watchCount === watchLabels.length) break
    }
    return watchLabels.reduce((sum, key) => sum * firedAt[key], 1)
}




