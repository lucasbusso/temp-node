const { readFileSync, writeFileSync,  } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync('./content/result-sync.txt', `${first}`, {flag: 'a'})

console.log(first)
console.log(second)
