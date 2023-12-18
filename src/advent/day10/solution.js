
// order: [real1, real2, test1, test2, ...]
export var knownAnswers = [6757, 523, 8, , , 10]


export function part1(input = '') {
    var { perimeter } = makeSolver(input)
    return perimeter / 2
}

export function part2(input = '') {
    var { perimeter, area } = makeSolver(input)
    return area - perimeter / 2 + 1
}



var makeSolver = (input) => {
    var data = []
    var startLoc = [0, 0]
    input.split('\n').forEach((line, y) => {
        data[y] = line.trim()
        var sx = data[y].indexOf('S')
        if (sx > -1) startLoc = [sx, y]
    }, 0)
    var get = (x, y) => {
        if (y < 0 || y >= data.length) return '.'
        return data[y][x] || '.'
    }
    var addDir = (x, y, dir) => {
        x += [0, 1, 0, -1][dir]
        y += [-1, 0, 1, 0][dir]
        return [x, y]
    }

    var nextDir = {
        '|': [0, -1, 2, -1],
        '-': [-1, 1, -1, 3],
        'L': [-1, -1, 1, 0],
        'F': [1, -1, -1, 2],
        '7': [3, 2, -1, -1],
        'J': [-1, 0, 3, -1],
        '.': [-1, -1, -1, -1],
    }

    var [x, y] = startLoc
    var moveDir = [0, 1, 2, 3].filter(dir => {
        var npos = addDir(...startLoc, dir)
        var nchar = get(...npos)
        return nchar && (nextDir[nchar][dir] >= 0)
    })[0]
    var area = 0
    var perimeter = 0
    for (var i = 0; i < 1e5; i++) {
        perimeter++
        var [nx, ny] = addDir(x, y, moveDir)
        var char = get(nx, ny)
        if (char === 'S') break
        var dirs = nextDir[char]
        if (!char || !dirs) throw '?'
        area -= y * (nx - x);
        [x, y] = [nx, ny]
        moveDir = dirs[moveDir]
    }
    area -= y * (startLoc[0] - x);
    return { perimeter, area }
}



