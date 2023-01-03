const { readFile, writeFile } = require('fs').promises

// **** BAD SOLUTION
// getText('./content/first.txt')
//   .then(result => console.log(result))
//   .catch(err => console.log(err))


// **** INTERMEDIATE SOLUTION 
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8' ,(err, data) => {
//       if(err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }


// **** BETTER SOLUTION 
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const start = async () => {
//   try {
//     const first = await readFilePromise('./content/first.txt', 'utf8')
//     const second = await readFilePromise('./content/second.txt', 'utf8')
//     await writeFilePromise('./content/result.txt', `This is my test`)
//     console.log(first);
//     console.log(second);
//   } catch (error) {
//     console.log(error);
//   }
// }
// start()


// **** BEST SOLUTION 
const start = async () => {
  try {
    const second = await readFile('./content/second.txt', 'utf8')
    const first = await readFile('./content/first.txt', 'utf8')
    await writeFile('./content/result.txt', `This is my test hahaha`)
    console.log(first);
    console.log(second);
  } catch (error) {
    console.log(error);
  }
}
start()