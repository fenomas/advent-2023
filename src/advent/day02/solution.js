
// order: [real1, real2, test1, test2, ...]
export var knownAnswers = [2727, 56580, 8, 2286]


export function part1(input = '') {
    var sum = 0
    var limits = { red: 12, green: 13, blue: 14 }
    input.split('\n').forEach(line => {
        var [intro, data] = line.split(':')
        var possible = data.split(';').every(str => {
            return str.split(',').every(el => {
                var [, num, col] = /(\d+)\s+(\S+)/.exec(el)
                if (!limits[col]) return true
                return parseInt(num) <= limits[col]
            })
        })
        if (possible) sum += parseInt(/\d+/.exec(intro)[0])
    })
    return sum
}


export function part2(input = '') {
    var sum = 0
    input.split('\n').forEach(line => {
        var mins = { red: 0, green: 0, blue: 0 }
        var [, data] = line.split(':')
        data.split(';').forEach(str => {
            str.split(',').forEach(el => {
                var [, num, col] = /(\d+)\s+(\S+)/.exec(el)
                var n = parseInt(num)
                if (n > mins[col]) mins[col] = n
            })
        })
        sum += mins.red * mins.green * mins.blue
    })
    return sum
}


