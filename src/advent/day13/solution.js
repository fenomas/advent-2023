
// order: [real1, real2, test1, test2, ...]
export var knownAnswers = [35210, 31974, 405, 400]



var countDiffsHoriz = (arr = [''], a = 0, b = 1) => {
    var diffs = 0
    for (; a >= 0 && b < arr.length; a--, b++) {
        if (arr[a] === arr[b]) continue
        for (var i = 0; i < arr[0].length; i++) {
            if (arr[a][i] === arr[b][i]) continue
            diffs++
            if (diffs > 1) return 2
        }
    }
    return diffs
}

var countDiffsVert = (arr = [''], a = 0, b = 1) => {
    var diffs = 0
    for (; a >= 0 && b < arr[0].length; a--, b++) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i][a] === arr[i][b]) continue
            diffs++
            if (diffs > 1) return 2
        }
    }
    return diffs
}





export function part1(input = '') {
    return input.split('\n\n').reduce((acc, lines) => {
        var curr = lines.split('\n').map(s => s.trim())
        for (var i = 1; i < curr.length; i++) {
            var diffs = countDiffsHoriz(curr, i - 1, i)
            if (diffs > 0) continue
            return acc + i * 100
        }
        for (var j = 1; j < curr[0].length; j++) {
            var diffs = countDiffsVert(curr, j - 1, j)
            if (diffs > 0) continue
            return acc + j
        }
        throw '?'
    }, 0)
}




export function part2(input = '') {
    return input.split('\n\n').reduce((acc, lines) => {
        var curr = lines.split('\n').map(s => s.trim())
        for (var i = 1; i < curr.length; i++) {
            var diffs = countDiffsHoriz(curr, i - 1, i)
            if (diffs !== 1) continue
            return acc + i * 100
        }
        for (var j = 1; j < curr[0].length; j++) {
            var diffs = countDiffsVert(curr, j - 1, j)
            if (diffs !== 1) continue
            return acc + j
        }
        throw '?'
    }, 0)
}

