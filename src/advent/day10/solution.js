
// order: [real1, real2, test1, test2, ...]
export var knownAnswers = [6757, 523, 8, , , 10]



function makeData(input = '') {
    var data = []
    var startLoc = [0, 0]
    input.split('\n').forEach((line, y) => {
        data[y] = []
        line.trim().split('').forEach((char, x) => {
            if (char === 'S') startLoc = [y, x]
            data[y].push({ x, y, char })
        })
    }, 0)
    var sy = data.length
    var sx = data[0].length
    var getAt = (y, x) => {
        if (y < 0 || y >= sy) return null
        if (x < 0 || x >= sx) return null
        return data[y][x]
    }
    var start = getAt(...startLoc)

    var flood = (y, x, predicate) => {
        var node = getAt(y, x)
        if (!node) return
        var list = [node]
        var ct = 0
        var visit = (y, x, dir) => {
            var nab = getAt(y, x)
            if (nab && predicate(curr, nab, dir)) list.push(nab)
        }
        while (list.length > 0 && ct++ < 1e6) {
            var curr = list.pop()
            visit(curr.y - 1, curr.x, 0)
            visit(curr.y + 1, curr.x, 2)
            visit(curr.y, curr.x + 1, 1)
            visit(curr.y, curr.x - 1, 3)
        }
    }

    return { start, sx, sy, getAt, flood }
}





export function part1(input = '') {
    var { start, sx, sy, getAt, flood } = makeData(input)

    var dirs = {
        '|': [0, 2],
        '-': [1, 3],
        'L': [0, 1],
        'J': [0, 3],
        '7': [2, 3],
        'F': [1, 2],
        'S': [0, 1, 2, 3],
    }

    var d = 0
    flood(start.y, start.x, (curr, next, dir) => {
        curr.seen = true
        if (next.seen) return false
        var dout = dirs[curr.char] || []
        if (!(dout.includes(dir))) return false
        var din = dirs[next.char] || []
        var oppDir = (dir + 2) % 4
        if (!(din.includes(oppDir))) return false
        d++
        return true
    })
    return d / 2
}





export function part2(input = '') {
    var { start, sx, sy, getAt, flood } = makeData(input)

    var dirs = {
        '|': [0, 2],
        '-': [1, 3],
        'L': [0, 1],
        'J': [0, 3],
        '7': [2, 3],
        'F': [1, 2],
        'S': [0, 1, 2, 3],
    }

    var leftList = []
    var rightList = []
    var pushToList = (y, x, dir, arr) => {
        if ((dir % 2) === 0) y += dir - 1
        if ((dir % 2) === 1) x += 2 - dir
        var node = getAt(y, x)
        if (node && !node.seen) arr.push(node)
    }

    flood(start.y, start.x, (curr, next, dir) => {
        curr.seen = true
        if (next.seen) return false
        var currOutDirs = dirs[curr.char] || []
        if (!(currOutDirs.includes(dir))) return false
        var nextInDirs = dirs[next.char] || []
        if (!(nextInDirs.includes((dir + 2) % 4))) return false
        if (curr === start) return true

        var din = currOutDirs[(currOutDirs.indexOf(dir) + 1) % 2]
        var list = rightList
        for (var i = 1; i < 4; i++) {
            var d = (dir + i) % 4
            if (d === din) {
                list = leftList
                continue
            }
            pushToList(curr.y, curr.x, d, list)
        }
        return true
    })


    var getSideInfo = (arr) => {
        var ct = 0
        var borderSeen = false
        arr.forEach(node => {
            if (node.seen) return
            flood(node.y, node.x, (curr, next) => {
                if (curr.seen) return false
                curr.seen = true
                ct++
                var { y, x } = curr
                if (x === 0 || x === sx - 1) borderSeen = true
                if (y === 0 || y === sy - 1) borderSeen = true
                return !next.seen
            })
        })
        return { ct, borderSeen }
    }

    var result = getSideInfo(leftList)
    if (result.borderSeen) result = getSideInfo(rightList)
    return result.ct
}



