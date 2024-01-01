
// order: [real1, real2, test1, test2, ...]
export var knownAnswers = [2086, 6526, 94, 154]


export function part1(input = '') {
    var data = input.split('\n').map(line => {
        return line.split('').map(char => ({ char, max: -1, }))
    })
    var sx = data[0].length
    var sy = data.length
    var OOB = (x, y) => (x < 0 || y < 0 || x >= sx || y >= sy)
    var get = (x, y) => data[y][x]
    var addDir = (x, y, dir) => {
        x += [0, 1, 0, -1][dir]
        y += [-1, 0, 1, 0][dir]
        return [x, y]
    }
    var dirChars = '^>v<'
    var startLoc = [data[0].findIndex(o => (o.char === '.')), 0]
    var endLoc = [data[sy - 1].findIndex(o => (o.char === '.')), sy - 1]

    var queue = []
    var add = (x, y, dir, ct) => queue.push({ x, y, dir, ct })
    add(...startLoc, 2, 0)

    while (queue.length > 0) {
        if (queue.length > 1e5) throw 'inf loop'
        var { x, y, dir, ct } = queue.pop()
        var here = get(x, y)
        if (here.max > ct) continue
        here.max = ct

        if (here.char !== '.') {
            var di = dirChars.indexOf(here.char)
            if (di !== dir) continue
            add(...addDir(x, y, di), di, ct + 1)
            continue
        }

        var fromDir = (dir + 2) % 4
        for (var moveDir = 0; moveDir < 4; moveDir++) {
            if (moveDir === fromDir) continue
            var np = addDir(x, y, moveDir)
            if (OOB(...np)) continue
            var obj = get(...np)
            if (obj.char === '#') continue
            add(...np, moveDir, ct + 1)
        }
    }
    return get(...endLoc).max
}






export function part2(input = '') {
    var data = input.split('\n').map(line => {
        return line.split('').map(char => ({
            wall: (char === '#'),
            searched: Array(4).fill(false),
        }))
    })
    var sx = data[0].length
    var sy = data.length
    var OOB = (x, y) => (x < 0 || y < 0 || x >= sx || y >= sy)
    var get = (x, y) => data[y][x]
    var addDir = (x, y, dir) => {
        x += [0, 1, 0, -1][dir]
        y += [-1, 0, 1, 0][dir]
        return [x, y]
    }
    var startLoc = [data[0].findIndex(o => !o.wall), 0]
    var endLoc = [data[sy - 1].findIndex(o => !o.wall), sy - 1]


    // make list of lone paths from one point to another
    var paths = []
    var addPath = (dist, x0, y0, x1, y1) => paths.push({ dist, x0, y0, x1, y1 })
    var searchFrom = (sx, sy, dir) => {
        if (get(sx, sy).searched[dir]) return
        get(sx, sy).searched[dir] = true
        var d = 1
        var [x, y] = addDir(sx, sy, dir)
        var fromDir = (dir + 2) % 4
        for (var i = 0; i < 1e4; i++) {
            var out = [0, 1, 2, 3].filter(dir => {
                if (dir === fromDir) return false
                var np = addDir(x, y, dir)
                if (OOB(...np)) return false
                return (!get(...np).wall)
            })
            if (out.length === 1) {
                [x, y] = addDir(x, y, out[0])
                fromDir = (out[0] + 2) % 4
                d++
                continue
            }
            if (out.length === 0) {
                if (x !== endLoc[0] || y !== endLoc[1]) return // cull dead ends
            }
            addPath(d, sx, sy, x, y)
            out.forEach(dir => searchFrom(x, y, dir))
            return
        }
    }
    searchFrom(...startLoc, 2)


    // reformat and conform paths
    var nodes = {}
    var key = (x, y) => [x, y].join(',')
    paths.forEach(({ dist, x0, y0, x1, y1 }) => {
        var k0 = key(x0, y0)
        var k1 = key(x1, y1)
        if (!nodes[k0]) nodes[k0] = { out: [], dists: {}, painted: false }
        if (!nodes[k1]) nodes[k1] = { out: [], dists: {}, painted: false }
        nodes[k0].dists[k1] = dist
        nodes[k1].dists[k0] = dist
    })
    for (var k in nodes) nodes[k].out = Object.keys(nodes[k].dists)
    var skey = key(...startLoc)
    var ekey = key(...endLoc)
    if (!nodes[skey]) throw '?'


    // DFS
    var longestPathFrom = (fromKey = '') => {
        var from = nodes[fromKey]
        if (ekey in from.dists) return from.dists[ekey]
        from.painted = true
        var max = -Infinity
        for (var i = 0; i < from.out.length; i++) {
            var outKey = from.out[i]
            if (nodes[outKey].painted) continue
            max = Math.max(max, from.dists[outKey] + longestPathFrom(outKey))
        }
        from.painted = false
        return max
    }

    return longestPathFrom(skey)
}



