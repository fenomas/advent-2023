
// order: test1, real1, test2, real2
export var knownAnswers = [35, 525792406, 46, 79004094]


export function part1(input = '') {
    var data = []
    var inner = null
    input.split('\n').forEach((line, y) => {
        if (/:/.test(line)) {
            var [, tail] = line.split(':')
            data.push(inner = [])
            line = tail
        }
        var nums = line.trim().split(/\s+/).filter(s => s).map(s => parseInt(s))
        if (nums.length > 0) inner.push(nums)
    })

    var seeds = data.shift()[0]
    data.forEach(arr => {
        var done = {}
        arr.forEach(([a, b, c]) => {
            seeds.forEach((num, i) => {
                if (done[i]) return
                if (num >= b && num < b + c) {
                    seeds[i] += a - b
                    done[i] = true
                }
            })
        })
    })
    return seeds.reduce((acc, num) => Math.min(acc, num), Infinity)
}



export function part2(input = '') {
    /** @type {number[]} */
    var seeds
    var mappings = [], currMapping
    input.split('\n').forEach((line, y) => {
        if (/:/.test(line)) {
            var [, tail] = line.split(':')
            if (!seeds) {
                seeds = tail.trim().split(/\s+/).map(s => parseInt(s))
                return
            }
            mappings.push(currMapping = [])
            line = tail
        }
        line = line.trim()
        if (!line) return
        var [dest, src, len] = line.split(/\s+/).map(s => parseInt(s))
        currMapping.push([src, src + len, dest - src])
    })
    mappings.forEach(map => {
        map.sort((a, b) => a[0] - b[0])
    })


    var minResult = Infinity
    var mapRange = (lo, hi, mapIx = 0) => {
        if (mapIx >= mappings.length) {
            if (lo < minResult) minResult = lo
            return
        }
        var maps = mappings[mapIx]
        maps.some(([start, end, offset]) => {
            if (lo >= end) return
            if (hi <= start) return true
            if (lo < start) {
                mapRange(lo, start, mapIx + 1)
                lo = start
            }
            var upTo = Math.min(hi, end)
            mapRange(lo + offset, upTo + offset, mapIx + 1)
            lo = upTo
        })
        if (lo < hi) mapRange(lo, hi, mapIx + 1)
    }

    for (var i = 0; i < seeds.length; i += 2) {
        mapRange(seeds[i], seeds[i] + seeds[i + 1])
    }
    return minResult
}


