
// order: [real1, real2, test1, test2, ...]
export var knownAnswers = [571753, 1, 54, 1]


export function part1(input = '') {
    var data = {}
    var makeNode = key => ({ outKeys: {}, out: [], painted: false })
    var addConnection = (a, b) => {
        data[a] = data[a] || makeNode(a)
        data[b] = data[b] || makeNode(b)
        data[a].outKeys[b] = data[b].outKeys[a] = true
    }
    input.split('\n').forEach((line, y) => {
        var [a, tail] = line.trim().split(/\s*:\s*/)
        tail.split(/\s+/).forEach(b => addConnection(a, b))
    })
    Object.keys(data).forEach(a => {
        data[a].out = Object.keys(data[a].outKeys).map(b => data[b])
    })
    var countPainted = node => node.out.reduce((t, n) => t + (n.painted ? 1 : 0), 0)

    var trial = () => {
        var plain = Object.keys(data).map(k => data[k])
        plain.forEach(a => a.red = false)

        for (var i = 0; i < 1e4; i++) {
            var maxIx = -1, maxCt = -1
            plain.forEach((n, i) => {
                var ct = countPainted(n)
                if (ct > maxCt) { maxCt = ct; maxIx = i }
            })
            if (maxCt < 0) return -1
            plain[maxIx].painted = true
            plain.splice(maxIx, 1)
            var totalCuts = plain.reduce((t, n) => t + countPainted(n), 0)
            if (totalCuts === 3) return plain.length * (Object.keys(data).length - plain.length)
            if (plain.length === 0) return -1
        }
    }

    for (var i = 0; i < 1000; i++) {
        var cuts = trial()
        if (cuts > 0) return cuts
    }
    return -1
}




export function part2(input = '') {
    return 1
}



