
// order: [real1, real2, test1, test2, ...]
export var knownAnswers = [3830, 637087163925555, 16,]


export function part1(input = '') {
    var start = [0, 0]
    var data = input.split('\n').map((line, y) => {
        return line.trim().split('').map((char, x) => {
            if (char === '#') return { val: -1 }
            if (char === 'S') start = [x, y]
            return { val: 0 }
        })
    })
    var sx = data[0].length
    var sy = data.length
    var get = ([x, y]) => data[y][x]


    var horizon = [start]
    var numSteps = (sx < 20) ? 6 : 64
    var answer = 0

    for (var i = 1; i <= numSteps; i++) {
        var nextHor = []
        horizon.forEach(([x, y]) => {
            for (var dir = 0; dir < 4; dir++) {
                var nx = x + [0, 1, 0, -1][dir]
                var ny = y + [-1, 0, 1, 0][dir]
                if (nx < 0 || nx >= sx) continue
                if (ny < 0 || ny >= sy) continue
                var nxt = get([nx, ny])
                if (nxt.val !== 0) continue
                nxt.val = 1
                if ((i % 2) === 0) answer++
                nextHor.push([nx, ny])
            }
        })
        horizon = nextHor
    }

    return answer
}








export function part2(input = '') {
    var start = [0, 0]
    var data = input.split('\n').map((line, y) => {
        return line.trim().split('').map((char, x) => {
            if (char === '#') return false
            if (char === 'S') start = [x, y]
            return true
        })
    })
    var sx = data[0].length
    var sy = data.length
    var get = (x, y) => {
        x = ((x % sx) + sx) % sx
        y = ((y % sy) + sy) % sy
        return data[y][x]
    }
    var addDir = (pos, dir) => [
        pos[0] + [0, 1, 0, -1][dir],
        pos[1] + [-1, 0, 1, 0][dir],
    ]


    var reachableAfter = [0]
    var horizon = [start]
    var seen = {}
    var searchFor = 1000

    var hw = Math.floor(sx / 2)
    var totalSteps = 26501365
    var vals1 = []
    var vals2 = []
    var vals3 = []

    for (var i = 1; i <= searchFor; i++) {
        // search
        var nextHor = [], ct = 0
        horizon.forEach((loc) => {
            for (var dir = 0; dir < 4; dir++) {
                var nloc = addDir(loc, dir)
                if (!get(...nloc)) continue
                var key = nloc.join(',')
                if (key in seen) continue
                ct++
                seen[key] = 1
                nextHor.push(nloc)
            }
        })
        ct += (reachableAfter[i - 2] || 0)
        reachableAfter.push(ct)
        horizon = nextHor

        // break/end condition
        if ((i % sx) === hw) {
            vals1.push(ct)
            if (vals1.length > 1) vals2.push(vals1.at(-1) - vals1.at(-2))
            if (vals2.length > 1) vals3.push(vals2.at(-1) - vals2.at(-2))
            if (vals3.length > 1 && vals3.at(-1) === vals3.at(-2)) {
                var iter = (totalSteps - i) / sx
                if ((iter % 1) !== 0) return -1
                // inspected: dist = v*t + a*triangle(t)
                var ret = vals1.at(-1)
                ret += vals2.at(-1) * iter
                ret += vals3.at(-1) * (iter + 1) * iter / 2
                return ret
            }
        }
    }
    return -1
}



