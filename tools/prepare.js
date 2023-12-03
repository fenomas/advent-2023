#!/usr/bin/env node

import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { existsSync, mkdirSync, writeFile } from 'fs'


var __dirname = dirname(fileURLToPath(import.meta.url))
var daysDir = resolve(__dirname, '..', 'src', 'advent')


var onErr = (err) => { if (err) console.warn(err) }
var touchDir = (dirName) => {
    var path = resolve(daysDir, dirName)
    if (existsSync(path)) return
    onErr(mkdirSync(path))
}
var touchFile = (dirName, fileName) => {
    var path = resolve(daysDir, dirName, fileName)
    if (existsSync(path)) return
    writeFile(path, '', onErr)
}


for (var i = 1; i <= 25; i++) {
    var dstr = (i < 10) ? '0' + i : String(i)
    var dayDir = 'day' + dstr
    touchDir(dayDir)
    touchFile(dayDir, `solution.js`)
    touchFile(dayDir, `input.txt`)
    touchFile(dayDir, `input-test.txt`)
}


