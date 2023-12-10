
// order: [real1, real2, test1, test2, ...]
export var knownAnswers = [249726565, 251135960, 6440, 5905]


export function part1(input = '') {
    var cards = '23456789TJQKA'.split('')
    var cardToChar = {}
    cards.forEach((card, i) => { cardToChar[card] = String.fromCharCode(65 + i) })

    var data = input.split('\n').map(line => {
        var [hand, bidStr] = line.trim().split(/\s+/)
        var bid = parseInt(bidStr)
        var chars = hand.split('').map(card => cardToChar[card])
        var cts = {}
        chars.forEach(char => {
            cts[char] = (cts[char] || 0) + 1
        })
        var ctList = Object.keys(cts).map(k => cts[k]).sort((a, b) => b - a)
        ctList.push(0, 0)
        return { chars, bid, ctList }
    })

    data.sort((a, b) => {
        for (var i = 0; i < 2; i++) {
            if (a.ctList[i] !== b.ctList[i]) return a.ctList[i] - b.ctList[i]
        }
        for (var j = 0; j < 5; j++) {
            var ca = a.chars[j]
            var cb = b.chars[j]
            if (ca !== cb) return (ca > cb) ? 1 : -1
        }
        return 0
    })

    return data.reduce((acc, { bid }, i) => acc + bid * (i + 1), 0)
}






export function part2(input = '') {
    var cards = 'J23456789TQKA'.split('')
    var cardToChar = {}
    cards.forEach((card, i) => { cardToChar[card] = String.fromCharCode(65 + i) })

    var data = input.split('\n').map(line => {
        var [hand, bidStr] = line.trim().split(/\s+/)
        var bid = parseInt(bidStr)
        var chars = hand.split('').map(card => cardToChar[card])
        var cts = {}
        var jokers = 0
        chars.forEach(char => {
            if (char === 'A') { jokers++; return }
            cts[char] = (cts[char] || 0) + 1
        })
        var ctList = Object.keys(cts).map(k => cts[k]).sort((a, b) => b - a)
        ctList.push(0, 0)
        ctList[0] += jokers
        return { chars, bid, ctList, hand }
    })

    data.sort((a, b) => {
        for (var i = 0; i < 2; i++) {
            if (a.ctList[i] !== b.ctList[i]) return a.ctList[i] - b.ctList[i]
        }
        for (var j = 0; j < 5; j++) {
            var ca = a.chars[j]
            var cb = b.chars[j]
            if (ca !== cb) return (ca > cb) ? 1 : -1
        }
        return 0
    })

    return data.reduce((acc, { bid }, i) => acc + bid * (i + 1), 0)
}


