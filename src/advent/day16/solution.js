
// order: [real1, real2, test1, test2, ...]
export var knownAnswers = [6361, 6701, 46, 51]



export function part1(input = '') {
    var { countFrom } = makeInputData(input)
    return countFrom(-1, 0, 1)
}


export function part2(input = '') {
    var { countFrom, clearData, sx, sy } = makeInputData(input)

    var trial = (x, y, dir) => {
        clearData()
        return countFrom(x, y, dir)
    }
    var max = 0
    for (var x = 0; x < sx; x++) {
        max = Math.max(max, trial(x, -1, 2))
        max = Math.max(max, trial(x, sy, 0))
    }
    for (var y = 0; y < sy; y++) {
        max = Math.max(max, trial(-1, y, 1))
        max = Math.max(max, trial(sx, y, 3))
    }
    return max
}





var makeInputData = (input) => {
    var data = input.split('\n').map(line => {
        return line.trim().split('').map(char => ({
            char,
            flags: [],
        }))
    })
    var sx = data[0].length
    var sy = data.length
    var OOB = (x, y) => (x < 0 || y < 0 || x >= sx || y >= sy)

    var getReflectDirs = (char, dir) => {
        if (char === '/') return [[1, 0, 3, 2][dir]]
        if (char === '\\') return [[3, 2, 1, 0][dir]]
        if (char === '|' && (dir % 2)) return [0, 2]
        if (char === '-' && !(dir % 2)) return [1, 3]
        return [dir]
    }

    var countFrom = (x, y, dir) => {
        // dir: 0=N, 1=E, ...
        x += [0, 1, 0, -1][dir]
        y += [-1, 0, 1, 0][dir]
        if (OOB(x, y)) return 0
        var { char, flags } = data[y][x]
        if (flags[dir]) return 0
        flags[dir] = true
        var count = (flags[4]) ? 0 : 1
        flags[4] = true

        if (char === '.') return count + countFrom(x, y, dir)
        getReflectDirs(char, dir).forEach(dir => {
            return count += countFrom(x, y, dir)
        })
        return count
    }

    var clearData = () => {
        data.forEach(arr => {
            arr.forEach(obj => { obj.flags = [] })
        })
    }

    return { sx, sy, countFrom, clearData }
}



