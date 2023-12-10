
// order: [real1, real2, test1, test2, ...]
export var knownAnswers = [539637, 82818007, 4361, 467835]


export function part1(input = '') {
    var nums = []
    var symbols = []
    input.split('\n').forEach((line, y) => {
        nums[y] = []
        symbols[y] = []
        for (var x = 0; x < line.length; x++) {
            var char = line[x]
            if (char === '.') continue
            if (/\d/.test(char)) {
                var value = parseInt(line.substring(x))
                var len = String(value).length
                nums[y].push({ y, x, value, len })
                x += len - 1
            } else {
                symbols[y].push({ y, x })
            }
        }
    })

    var sum = 0
    nums.forEach(arr => {
        arr.forEach(num => {
            for (var y = num.y - 1; y < num.y + 2; y++) {
                var symList = symbols[y] || []
                var adj = symList.some(sym => {
                    if (sym.x < num.x - 1) return
                    if (sym.x > num.x + num.len) return
                    return true
                })
                if (!adj) continue
                sum += num.value
                return
            }
        })
    })
    return sum
}





export function part2(input = '') {
    var nums = []
    var gears = []
    input.split('\n').forEach((line, y) => {
        nums[y] = []
        gears[y] = []
        for (var x = 0; x < line.length; x++) {
            var char = line[x]
            if (char === '.') continue
            if (/\d/.test(char)) {
                var value = parseInt(line.substring(x))
                var len = String(value).length
                nums[y].push({ y, x, value, len })
                x += len - 1
            } else if (char === '*') {
                gears[y].push({ y, x })
            }
        }
    })

    var sum = 0
    gears.forEach(arr => {
        arr.forEach(sym => {
            var adj = 0
            var prod = 1
            for (var y = sym.y - 1; y < sym.y + 2; y++) {
                var numList = nums[y] || []
                numList.forEach(num => {
                    if (sym.x < num.x - 1) return
                    if (sym.x > num.x + num.len) return
                    adj++
                    prod *= num.value
                })
            }
            if (adj === 2) sum += prod
        })
    })
    return sum
}


