
// order: [real1, real2, test1, test2, ...]
export var knownAnswers = [674, 773, 102, 94]


export function part1(input = '') {
    return solver(input, 1, 3)
}

export function part2(input = '') {
    return solver(input, 4, 10)
}





var makeInputData = (input) => {
    var data = input.split('\n').map(line => {
        return line.trim().split('').map(char => ({
            cost: parseInt(char),
            best: [Infinity, Infinity],
        }))
    })
    var sx = data[0].length
    var sy = data.length
    var OOB = (x, y) => (x < 0 || y < 0 || x >= sx || y >= sy)
    var getData = (x, y) => data[y][x]
    var goalDist = (x, y) => Math.abs(sx - 1 - x) + Math.abs(sy - 1 - y)
    return { getData, OOB, goalDist }
}


function makePqueue() {
    var data = {}
    var pvals = []
    var pushQueue = (pri, obj) => {
        if (pri in data) return data[pri].push(obj)
        data[pri] = [obj]
        pvals.push(pri)
        pvals.sort((a, b) => b - a)
    }
    var popQueue = () => {
        if (pvals.length === 0) return null
        var pri = pvals.at(-1)
        var list = data[pri]
        if (list.length > 1) return list.pop()
        pvals.pop()
        delete data[pri]
        return list[0]
    }
    return { pushQueue, popQueue }
}



function solver(input = '', minMove = 1, maxMove = 3) {
    var { getData, OOB, goalDist } = makeInputData(input)
    var { pushQueue, popQueue } = makePqueue()

    var endMove = (x = 0, y = 0, dir = 0, cost = 0) => {
        if (OOB(x, y)) return
        var dtype = dir % 2
        var data = getData(x, y)
        if (cost >= data.best[dtype]) return
        data.best[dtype] = cost
        var h = cost + goalDist(x, y)
        pushQueue(h, { x, y, dir: (dir + 1) % 4, cost })
        pushQueue(h, { x, y, dir: (dir + 3) % 4, cost })
    }
    endMove(0, 0, 1, 0)
    endMove(0, 0, 2, 0)

    var result = -1
    var search = (move) => {
        var { x, y, dir, cost } = move
        if (goalDist(x, y) === 0) {
            result = cost
            return
        }
        for (var i = 1; i <= maxMove; i++) {
            x += [0, 1, 0, -1][dir]
            y += [-1, 0, 1, 0][dir]
            if (OOB(x, y)) return
            cost += getData(x, y).cost
            if (i >= minMove) endMove(x, y, dir, cost)
        }
    }

    while (result < 0) {
        var move = popQueue()
        if (!move) return -1
        search(move)
    }
    return result
}




