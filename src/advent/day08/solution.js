
// order: [real1, real2, test1, test2, ...]
export var knownAnswers = [18673, 17972669116327, 2, , 6, , , 6]


export function part1(input = '') {
    var nodes = {}
    var data = input.split('\n').map(line => {
        line = line.trim()
        if (!line) return
        if (!line.includes('=')) return line.split('')
        var [, label, L, R] = /(\S+) = \((\S+), (\S+)\)/.exec(line)
        nodes[label] = { L, R }
    })
    var dirs = data.shift()

    var loc = 'AAA'
    if (!nodes[loc]) return -1
    for (var i = 0, ix = 0; i < 1e7; i++) {
        if (loc === 'ZZZ') return i
        loc = nodes[loc][dirs[ix]]
        ix = (ix + 1) % dirs.length
    }
    return -1
}




export function part2(input = '') {
    var nodes = {}
    var heads = []
    var tails = {}
    var data = input.split('\n').map(line => {
        line = line.trim()
        if (!line) return
        if (!line.includes('=')) return line.split('')
        var [, label, L, R] = /(\S+) = \((\S+), (\S+)\)/.exec(line)
        if (/..A/.test(label)) heads.push(label)
        if (/..Z/.test(label)) tails[label] = true
        nodes[label] = { L, R }
    })
    var dirs = data.shift()

    var lens = heads.map(loc => {
        for (var i = 0, ix = 0; i < 1e7; i++) {
            if (loc in tails) return i
            loc = nodes[loc][dirs[ix]]
            ix = (ix + 1) % dirs.length
        }
    })

    lens.sort((a, b) => a - b)
    var lcm = lens.pop()
    while (lens.length > 0) {
        var add = lcm
        var val = lens.pop()
        while (lcm % val !== 0) lcm += add
    }
    return lcm
}


