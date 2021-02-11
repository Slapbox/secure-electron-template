const fs = require('fs')

const doAThing = () => {
  fs.writeFile('test.txt', '', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  })
}

module.exports = { doAThing }