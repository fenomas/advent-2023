
// magical glob imports
/** @ts-ignore */
var solImports = import.meta.glob('./advent/day*/solution.js', {
    eager: true,
})
/** @ts-ignore */
var inputImports = import.meta.glob('./advent/day*/input*.txt', {
    eager: true, as: 'raw',
})



// return data type
export function DayData(day, soln, input, testInputs) {
    this.day = day || '01'
    this.input = input || ''
    this.testInputs = testInputs || ['']
    /** @type {(string) => string} */
    this.part1 = soln.part1 || null
    /** @type {(string) => string} */
    this.part2 = soln.part2 || null
    /** @type {string[]} */
    this.knownAnswers = (soln.knownAnswers || []).map(s => String(s))
}


// API
export function getDataByDay() {
    var solsByDay = {}
    var inputsByDay = {}
    var testInputsByDay = {}

    Object.keys(solImports).forEach((path) => {
        var day = /day(\d+)/.exec(path)[1]
        solsByDay[day] = solImports[path] || null
    })
    Object.keys(inputImports).forEach((path) => {
        var day = /day(\d+)/.exec(path)[1]
        if (path.includes('test')) {
            testInputsByDay[day] = testInputsByDay[day] || []
            testInputsByDay[day].push(inputImports[path] || '')
        } else {
            inputsByDay[day] = inputImports[path] || ''
        }
    })

    var dataByDay = {}
    var days = Object.keys(solsByDay).sort()
    days.forEach(day => {
        var sol = solsByDay[day] || {}
        var input = inputsByDay[day] || ''
        var testInputs = testInputsByDay[day] || []
        dataByDay[day] = new DayData(day, sol, input, testInputs)
    })
    return dataByDay
}

