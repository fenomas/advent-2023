
// order: [real1, real2, test1, test2, ...]
export var knownAnswers = [54304, 54418, 142, , , 281,]



export function part1(input = '') {
    return input.split(/\n/).reduce((acc, line) => {
        var nums = line.split('').filter(char => /\d/.test(char))
        return acc + parseInt(nums[0] + nums.at(-1)) || 0
    }, 0)
}


export function part2(input = '') {
    // solution:
    var digits = [
        ...'0123456789'.split(''),
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
    ]

    return input.split(/\n/).reduce((acc, line) => {
        var dig1 = -1, ix1 = Infinity
        var dig2 = -1, ix2 = -1
        digits.forEach((str, i) => {
            var a = line.indexOf(str)
            if (a > -1 && a < ix1) {
                ix1 = a
                dig1 = i % 10
            }
            var b = line.lastIndexOf(str)
            if (b > -1 && b > ix2) {
                ix2 = b
                dig2 = i % 10
            }
        })
        return acc + parseInt(dig1 + '' + dig2)
    }, 0)
}

