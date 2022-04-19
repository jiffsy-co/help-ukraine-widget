const fs = require('fs')
const path = require('path')

const domains = fs.readFileSync(path.join(__dirname, '../domains.txt'), 'utf-8').split('\n')

const processed = domains.map((d) => {
  return 'https://' + d
})
console.log(processed)

fs.writeFileSync(path.join(__dirname, '../domains.txt'), processed.join('\n'), {
  encoding: 'utf-8',
})

// const domains = fs.readFileSync(path.join(__dirname, '../domains-all.txt'), 'utf-8').split('\n')

// const processed = domains.map((d) => {
//   if (/\.goog$/i.test(d)) {
//     return d.replace('.translate.goog', '').replace('-', '')
//   }
//   return d
// })
// console.log(processed)

// fs.writeFileSync(path.join(__dirname, '../domains.txt'), processed.join('\n'), {
//   encoding: 'utf-8',
// })
