
// order: [real1, real2, test1, test2, ...]
export var knownAnswers = [505459, 228508, 1320, 145]



var hash = (str = '') => {
    var curr = 0
    for (var i = 0; i < str.length; i++) {
        curr += str.charCodeAt(i)
        curr *= 17
        curr %= 256
    }
    return curr
}


export function part1(input = '') {
    return input.split('\n').join('').split(',')
        .reduce((acc, str) => acc + hash(str), 0)
}


export function part2(input = '') {
    var boxes = Array(256).fill(1).map(n => [])

    input.split('\n').join('').split(',').forEach(str => {
        var [, label, tail] = /^(\w+)(.*)/.exec(str)
        var boxNum = hash(label)
        var box = boxes[boxNum]
        if (tail === '-') {
            boxes[boxNum] = box.filter(lens => lens.label !== label)
            return
        }
        var num = parseInt(tail.substring(1))
        var replaced = box.some((lens, i) => {
            if (lens.label !== label) return
            lens.num = num
            return true
        })
        if (!replaced) box.push({ label, num })
    })

    return boxes.reduce((acc, box, i) => {
        return acc + box.reduce((acc, lens, j) => {
            return acc + (i + 1) * (j + 1) * lens.num
        }, 0)
    }, 0)
}


