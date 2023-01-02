const fs = require('fs')

console.log("1");
fs.readFile('./content/first.txt', 'utf8', (err, result) => {
  if(err) {
    return
  }
  const first = result

  fs.readFile('./content/second.txt', 'utf8', (err, result) => {
    if(err) {
      return
    }
    const second = result

    fs.writeFile('./content/result-async.txt', 'This is the result', (err, result) => {
      if(err) {
        return
      }
      console.log("2");
    })
  })
})
console.log("3");