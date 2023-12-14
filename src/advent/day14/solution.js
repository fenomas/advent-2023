import ndarray from 'ndarray'


// order: [real1, real2, test1, test2, ...]
export var knownAnswers = [108935, 100876, 136, 64]


var EMPTY = 0
var WALL = 1
var BOULDER = 2
var map = { '.': EMPTY, 'O': BOULDER, '#': WALL }


export function part1(input = '') {
    var lines = input.split('\n').map(s => s.trim())
    var data = ndarray([], [lines.length, lines[0].length])
    lines.forEach((line, y) => {
        line.split('').forEach((char, x) => { data.set(y, x, map[char]) })
    })

    rollNorth(data)
    return measure(data).load
}







var rollNorth = (data) => {
    for (var y = 0; y < data.shape[0]; y++) {
        for (var x = 0; x < data.shape[1]; x++) {
            var curr = data.get(y, x)
            if (curr !== BOULDER) continue
            var ty = y
            while (ty > 0 && data.get(ty - 1, x) === EMPTY) {
                data.set(ty, x, EMPTY)
                data.set(--ty, x, BOULDER)
            }
        }
    }
}

var measure = (data) => {
    var load = 0
    var hash = 0
    for (var y = 0, ct = 0; y < data.shape[0]; y++, ct++) {
        for (var x = 0; x < data.shape[1]; x++) {
            if (data.get(y, x) !== BOULDER) continue
            load += data.shape[0] - y
            hash += x * 17 + y * 177 + ct * 1777
        }
    }
    return { load, hash }
}





export function part2(input = '') {
    var lines = input.split('\n').map(s => s.trim())
    var data = ndarray([], [lines.length, lines[0].length])
    lines.forEach((line, y) => {
        line.split('').forEach((char, x) => { data.set(y, x, map[char]) })
    })

    var loadVals = []
    var hashVals = []
    for (var ix = 0; ix < 1e4; ix++) {
        for (var i = 0; i < 4; i++) {
            rollNorth(data)
            data = data.transpose(1, 0).step(1, -1)
        }
        var { load, hash } = measure(data)
        var px = hashVals.indexOf(hash) + 1
        if (px > 0) {
            var cx = ix + 2
            var tx = px + (1000000000 - cx) % (cx - px - 1)
            return loadVals[tx]
        }
        loadVals.push(load)
        hashVals.push(hash)
    }
    return -1
}


