
// order: test1, real1, test2, real2
export var knownAnswers = [288, 1195150, 71503, 42550411]


export function part1(input = '') {
    var data = input.split('\n').map(line => {
        var tail = line.split(':')[1]
        return tail.trim().split(/\s+/).map(s => parseInt(s))
    })
    var [times, dists] = data

    var product = 1
    times.forEach((time, ix) => {
        // dist(n) = n * time-n
        // d = n*t - n^2
        // n^2 - t*n + d = 0
        var b = -time
        var c = dists[ix]
        var root = Math.sqrt(b * b - 4 * c)
        var sol1 = (-b - root) / 2
        var sol2 = (-b + root) / 2
        var e = 0.00001
        var ways = Math.floor(sol2 - e) - Math.ceil(sol1 + e) + 1
        product *= ways
    })
    return product
}



export function part2(input = '') {
    return part1(input.replace(/ /g, ''))
}


