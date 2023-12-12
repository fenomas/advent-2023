
// order: [real1, real2, test1, test2, ...]
export var knownAnswers = [7379, 7732028747925, 21, 525152]



export function part1(input = '') {
    var countWays = (str = '', ix = 0, numsLeft = 0, nums = [1]) => {
        if (ix > str.length - 1) return (numsLeft === 0) ? 1 : 0
        if (numsLeft > str.length - ix) return 0
        if (numsLeft === 0) return (str.substring(ix).includes('#')) ? 0 : 1
        if (str[ix] === '.') return countWays(str, ix + 1, numsLeft, nums)

        var ways = 0
        if (str[ix] === '?') {
            ways += countWays(str, ix + 1, numsLeft, nums)
        }
        var num = nums[0]
        if (str.substring(ix, ix + num).includes('.')) return ways
        if (str[ix + num] === '#') return ways
        var newNums = nums.filter((n, i) => i > 0)
        var newLeft = numsLeft - num - ((nums.length > 1) ? 1 : 0)
        return ways + countWays(str, ix + num + 1, newLeft, newNums)
    }

    return input.split('\n').reduce((acc, line) => {
        line = line.trim()
        if (!line) return acc
        var [head, tail] = line.split(/\s+/)
        var str = head.split(/\.+/).join('.')
        var nums = tail.split(',').map(s => parseInt(s))
        var numsLeft = nums.reduce((a, b) => a + b) + nums.length - 1
        return acc + countWays(str, 0, numsLeft, nums)
    }, 0)
}




export function part2(input = '') {
    var charInSpan = (str, char, a, b) => {
        while (a < b) { if (str[a++] === char) return true }
    }

    var memoize = (fn) => {
        var memoCache = {}
        return (ix, numsLeft, nums) => {
            var key = (ix << 12) + numsLeft
            if (key in memoCache) return memoCache[key]
            return memoCache[key] = fn(ix, numsLeft, nums)
        }
    }

    var makeCounter = (str = '') => {
        var countWays = (ix = 0, numsLeft = 0, nums = [1]) => {
            if (ix > str.length - 1) return (numsLeft === 0) ? 1 : 0
            if (numsLeft > str.length - ix) return 0
            if (numsLeft === 0) return charInSpan(str, '#', ix, str.length) ? 0 : 1
            if (str[ix] === '.') return countWays(ix + 1, numsLeft, nums)

            var ways = 0
            if (str[ix] === '?') ways += countWays(ix + 1, numsLeft, nums)
            var num = nums[0]
            if (charInSpan(str, '.', ix, ix + num)) return ways
            if (str[ix + num] === '#') return ways
            var newNums = nums.filter((n, i) => i > 0)
            var newLeft = numsLeft - num - ((nums.length > 1) ? 1 : 0)
            return ways + countWays(ix + num + 1, newLeft, newNums)
        }
        countWays = memoize(countWays)
        return countWays
    }

    return input.split('\n').reduce((acc, line) => {
        line = line.trim()
        if (!line) return acc
        var [head, tail] = line.split(/\s+/)
        var str = head.split(/\.+/).join('.')
        var nums = tail.split(',').map(s => parseInt(s))

        var dupes = 5
        str = [...Array(dupes).fill(str)].join('?')
        nums = [].concat(...Array(dupes).fill(nums))
        var numsLeft = nums.reduce((a, b) => a + b) + nums.length - 1
        return acc + makeCounter(str)(0, numsLeft, nums)
    }, 0)
}

