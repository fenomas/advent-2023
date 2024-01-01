
// order: [real1, real2, test1, test2, ...]
export var knownAnswers = [15558, 765636044333842, 2, 47]


export function part1(input = '') {
    var data = input.split('\n').map((line, ix) => {
        var [posStr, velStr] = line.split('@')
        var pos = posStr.split(',').map(s => parseInt(s))
        var vel = velStr.split(',').map(s => parseInt(s))
        // y = mx + b
        var m = vel[1] / vel[0]
        if (vel[0] === 0) throw 'fix'
        var b = pos[1] - m * pos[0]
        return { pos, vel, m, b, ix }
    })

    var testRange = [200000000000000, 400000000000000]
    if (data.length < 20) testRange = [7, 27]

    var ct = 0
    data.forEach(a => {
        data.forEach(b => {
            if (a.ix <= b.ix) return
            if (a.m === b.m) {
                if (a.b === b.b) ct++
                return
            }
            var xInt = (b.b - a.b) / (a.m - b.m)
            var yInt = xInt * a.m + a.b

            if (Math.min(xInt, yInt) < testRange[0]) return
            if (Math.max(xInt, yInt) > testRange[1]) return
            var ta = (xInt - a.pos[0]) / a.vel[0]
            if (ta < 0) return
            var tb = (xInt - b.pos[0]) / b.vel[0]
            if (tb < 0) return
            ct++
        })
    })
    return ct
}






export function part2(input = '') {
    var data = input.split('\n').map((line, ix) => {
        var [posStr, velStr] = line.split('@')
        var pos = posStr.split(',').map(s => parseInt(s))
        var vel = velStr.split(',').map(s => parseInt(s))
        return { pos, vel, ix }
    })

    // given two inputs with an equal vel component, narrow down possible answer velocities
    var velOptions = []
    for (var i = 0; i < 3; i++) {
        var opts = Array(2000).fill(0).map((n, i) => i - 1000)
        data.forEach((a, ai) => {
            data.forEach((b, bi) => {
                if (bi <= ai) return
                if (a.vel[i] !== b.vel[i]) return
                var gap = Math.abs(a.pos[i] - b.pos[i])
                opts = opts.filter(v => {
                    var dv = v - a.vel[i]
                    return (gap % dv) === 0
                })
            })
        })
        velOptions[i] = opts
    }

    // if given vel is the answer, in its frame of reference all paths collide at same point
    var checkVel = (vel) => {
        // find intercept of any two paths
        var intercept = [0, 0, 0]
        var found = data.some((a, i) => {
            var avel = a.vel.map((v, i) => v - vel[i])
            if (avel[0] === 0) return // skip verticals for convenience
            var ma = avel[1] / avel[0]
            var ba = a.pos[1] - ma * a.pos[0]
            return data.some((b, j) => {
                if (j <= i) return
                var bvel = b.vel.map((v, i) => v - vel[i])
                if (bvel[0] === 0) return // skip verticals for convenience
                var mb = bvel[1] / bvel[0]
                var bb = b.pos[1] - mb * b.pos[0]

                var xInt = (bb - ba) / (ma - mb)
                var t = (xInt - a.pos[0]) / avel[0]
                intercept = a.pos.map((x, i) => x + t * avel[i])
                return true
            })
        })
        if (!found) throw 'fix'
        for (var x of intercept) { if ((x % 1) !== 0) return }

        // check if all paths intersect the same point
        for (var a of data) {
            var t
            if (a.vel[0] === 0) continue // meh
            for (var i = 0; i < 3; i++) {
                var avel = a.vel[i] - vel[i]
                if (avel === 0) continue // meh
                var pdiff = intercept[i] - a.pos[i]
                if (i === 0) {
                    t = pdiff / avel
                } else {
                    if (t !== pdiff / avel) return
                }
            }
        }

        // candidate velocity works
        return intercept.reduce((t, val) => t + val, 0)
    }

    for (var vx of velOptions[0]) {
        for (var vy of velOptions[1]) {
            for (var vz of velOptions[2]) {
                var result = checkVel([vx, vy, vz])
                if (!isNaN(result)) return result
            }
        }
    }
    return -1
}


