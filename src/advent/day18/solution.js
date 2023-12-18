
// order: [real1, real2, test1, test2, ...]
export var knownAnswers = [38188, 93325849869340, 62, 952408144115]


export function part1(input = '') {
    var x = 0, y = 0
    var area = 0, perimeter = 0
    input.split('\n').forEach(line => {
        var [dir, numStr, colStr] = line.trim().split(/\s+/)
        var dist = parseInt(numStr)
        var dx = { R: 1, L: -1 }[dir] || 0
        var dy = { D: 1, U: -1 }[dir] || 0
        perimeter += dist
        area -= y * dx * dist
        x += dx * dist
        y += dy * dist
    })
    return area + perimeter / 2 + 1
}


export function part2(input = '') {
    var x = 0, y = 0
    var area = 0, perimeter = 0
    input.split('\n').forEach(line => {
        var [, , colStr] = line.trim().split(/\s+/)
        var dir = 'RDLU'[colStr.substring(7, 8)]
        var dist = parseInt(colStr.substring(2, 7), 16)
        var dx = { R: 1, L: -1 }[dir] || 0
        var dy = { D: 1, U: -1 }[dir] || 0
        perimeter += dist
        if (dx !== 0) {
            area += y * -dx * (dist)
        }
        x += dx * dist
        y += dy * dist
    })
    return area + perimeter / 2 + 1
}



