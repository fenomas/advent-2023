
// order: test1, real1, test2, real2
export var knownAnswers = [13, 26443, 30, 6284877]


export function part1(input = '') {
    var sum = 0
    input.split('\n').forEach((line, y) => {
        var data = line.split(':')[1].split('|')
        var wins = data[0].trim().split(/\s+/).map(s => parseInt(s))
        var nums = data[1].trim().split(/\s+/).map(s => parseInt(s))
        var ct = nums.reduce((acc, n) => acc + (wins.includes(n) ? 1 : 0), 0)
        if (ct > 0) sum += Math.pow(2, ct - 1)
    })
    return sum
}



export function part2(input = '') {
    var matches = input.split('\n').map((line, y) => {
        var data = line.split(':')[1].split('|')
        var wins = data[0].trim().split(/\s+/).map(s => parseInt(s))
        var nums = data[1].trim().split(/\s+/).map(s => parseInt(s))
        var ct = nums.reduce((acc, n) => acc + (wins.includes(n) ? 1 : 0), 0)
        if (ct > 0) sum += Math.pow(2, ct - 1)
        return ct
    })
    var sum = 0
    var copies = []
    matches.forEach((n, i) => {
        var ct = 1 + (copies[i] || 0)
        var mat = matches[i]
        for (var j = 0; j < mat; j++) {
            var ix = i + 1 + j
            copies[ix] = (copies[ix] || 0) + ct
        }
        sum += ct
    })
    return sum
}


