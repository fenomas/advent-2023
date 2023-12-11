
// order: [real1, real2, test1, test2, ...]
export var knownAnswers = [9623138, 726820169514, 374, 82000210]




function makeData(input = '') {
    var xEmpty = []
    var yEmpty = []
    var locs = []
    input.split('\n').forEach((line, y) => {
        line = line.trim()
        if (!line) return
        if (xEmpty.length === 0) {
            xEmpty.length = line.length
            xEmpty.fill(true)
        }
        yEmpty[y] = true
        var x = -1
        while (true) {
            x = line.indexOf('#', x)
            if (x < 0) break
            xEmpty[x] = false
            yEmpty[y] = false
            locs.push({ x, y })
            x++
        }
    })
    var ct = 0
    var xEmptyBefore = xEmpty.map(val => val ? ++ct : ct)
    ct = 0
    var yEmptyBefore = yEmpty.map(val => val ? ++ct : ct)
    locs.forEach(obj => {
        obj.emptyLeft = xEmptyBefore[obj.x]
        obj.emptyAbove = yEmptyBefore[obj.y]
    })
    return { locs }
}



export function part1(input = '') {
    var { locs } = makeData(input)

    var dist = (i, j) => {
        var a = locs[i]
        var b = locs[j]
        var dx = Math.abs(a.x - b.x)
        var dy = Math.abs(a.y - b.y)
        var dEx = Math.abs(a.emptyLeft - b.emptyLeft)
        var dEy = Math.abs(a.emptyAbove - b.emptyAbove)
        return dx + dy + dEx + dEy
    }

    var sum = 0
    for (var i = 0; i < locs.length; i++) {
        for (var j = i + 1; j < locs.length; j++) {
            sum += dist(i, j)
        }
    }
    return sum
}




export function part2(input = '') {
    var { locs } = makeData(input)

    var expandBy = 1000000 - 1
    var dist = (i, j) => {
        var a = locs[i]
        var b = locs[j]
        var dx = Math.abs(a.x - b.x)
        var dy = Math.abs(a.y - b.y)
        var dEx = Math.abs(a.emptyLeft - b.emptyLeft) * expandBy
        var dEy = Math.abs(a.emptyAbove - b.emptyAbove) * expandBy
        return dx + dy + dEx + dEy
    }

    var sum = 0
    for (var i = 0; i < locs.length; i++) {
        for (var j = i + 1; j < locs.length; j++) {
            sum += dist(i, j)
        }
    }
    return sum
}
