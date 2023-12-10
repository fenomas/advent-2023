
// order: [real1, real2, test1, test2, ...]
export var knownAnswers = [1772145754, 867, 114, 2]


export function part1(input = '') {
    var reducer = (arr = [1, 1]) => {
        if (arr.length < 2) return NaN
        var allZeroes = true, next = []
        for (var i = 1; i < arr.length; i++) {
            var diff = arr[i] - arr[i - 1]
            allZeroes &&= (diff === 0)
            next.push(diff)
        }
        var base = (allZeroes) ? 0 : reducer(next)
        return base + arr.at(-1)
    }
    return input.split('\n').reduce((sum, line) => {
        var nums = line.trim().split(/\s+/).map(s => parseInt(s))
        return sum += reducer(nums)
    }, 0)
}



export function part2(input = '') {
    var reducer = (arr = [1, 1]) => {
        if (arr.length < 2) return NaN
        var allZeroes = true, next = []
        for (var i = 1; i < arr.length; i++) {
            var diff = arr[i] - arr[i - 1]
            allZeroes &&= (diff === 0)
            next.push(diff)
        }
        var base = (allZeroes) ? 0 : reducer(next)
        return arr[0] - base
    }
    return input.split('\n').reduce((sum, line) => {
        var nums = line.trim().split(/\s+/).map(s => parseInt(s))
        return sum += reducer(nums)
    }, 0)
}
