
// order: [real1, real2, test1, test2, ...]
export var knownAnswers = [512, 98167, 5, 7]


export function part1(input = '') {
    var data = []
    input.split('\n').forEach((line, y) => {
        var [sa, sb] = line.trim().split('~')
        if (!sa) return
        var a = sa.split(',').map(s => parseInt(s))
        var b = sb.split(',').map(s => parseInt(s))
        var min = a.map((x, i) => Math.min(x, b[i]))
        var max = a.map((x, i) => Math.max(x, b[i]))
        data.push({ min, max, belowMe: [], aboveMe: [], restingOn: [], restedOnBy: [] })
    })
    data.forEach((a, i) => {
        data.forEach((b, j) => {
            if (i === j) return
            if (a.min[0] > b.max[0] || a.max[0] < b.min[0]) return
            if (a.min[1] > b.max[1] || a.max[1] < b.min[1]) return
            if (a.min[2] < b.min[2]) {
                b.belowMe.push(a)
                a.aboveMe.push(b)
            }
        })
    })
    data.sort((a, b) => a.min[2] - b.min[2])

    // fall blocks
    data.forEach(a => {
        var maxBelow = a.belowMe.reduce((acc, b) => Math.max(acc, b.max[2]), 0)
        var moveBy = a.min[2] - (maxBelow + 1)
        a.min[2] -= moveBy
        a.max[2] -= moveBy
    })

    // calc resting states
    var isRestingOn = (lower, higher) => (lower.max[2] + 1 === higher.min[2])
    data.forEach(a => {
        a.restingOn = a.belowMe.filter(b => isRestingOn(b, a))
        a.restedOnBy = a.aboveMe.filter(b => isRestingOn(a, b))
    })

    var canRemove = (a) => {
        for (var higher of a.restedOnBy) {
            if (higher.restingOn.length === 1) return false
        }
        return true
    }
    return data.reduce((acc, a) => acc + (canRemove(a) ? 1 : 0), 0)
}






export function part2(input = '') {
    var data = []
    input.split('\n').forEach((line, y) => {
        var [sa, sb] = line.trim().split('~')
        if (!sa) return
        var a = sa.split(',').map(s => parseInt(s))
        var b = sb.split(',').map(s => parseInt(s))
        var min = a.map((x, i) => Math.min(x, b[i]))
        var max = a.map((x, i) => Math.max(x, b[i]))
        var char = String.fromCharCode(65 + y)
        data.push({
            char, min, max, belowMe: [], aboveMe: [],
            restingOn: [], restedOnBy: [],
            chainsTo: [], flag: false,
        })
    })
    data.forEach((a, i) => {
        data.forEach((b, j) => {
            if (i === j) return
            if (a.min[0] > b.max[0] || a.max[0] < b.min[0]) return
            if (a.min[1] > b.max[1] || a.max[1] < b.min[1]) return
            if (a.min[2] < b.min[2]) {
                b.belowMe.push(a)
                a.aboveMe.push(b)
            }
        })
    })
    data.sort((a, b) => a.min[2] - b.min[2])

    // fall blocks
    data.forEach(a => {
        var maxBelow = a.belowMe.reduce((acc, b) => Math.max(acc, b.max[2]), 0)
        var moveBy = a.min[2] - (maxBelow + 1)
        a.min[2] -= moveBy
        a.max[2] -= moveBy
    })

    // calc resting states
    var isRestingOn = (lower, higher) => (lower.max[2] + 1 === higher.min[2])
    data.forEach(a => {
        a.restingOn = a.belowMe.filter(b => isRestingOn(b, a))
        a.restedOnBy = a.aboveMe.filter(b => isRestingOn(a, b))
    })

    // calc which blocks would cause which to fall
    data.forEach(a => {
        a.chainsTo = a.restedOnBy.filter(b => (b.restingOn.length === 1))
    })

    var count = toRemove => {
        data.forEach(a => a.flag = false)
        toRemove.flag = true
        var ct = 0
        data.forEach(a => {
            if (a.restingOn.length === 0) return
            var wouldFall = a.restingOn.every(b => b.flag)
            if (!wouldFall) return
            ct++
            a.flag = true
        })
        return ct
    }

    return data.reduce((acc, a) => acc + (count(a)), 0)
}



