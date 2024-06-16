const fs = require('fs')
const readStream = fs.createReadStream('README.md', {encoding: 'utf8'})
const writeStream = fs.createWriteStream('blog3.txt')


readStream.on('data', (chunk) => {
    console.log(chunk);
    writeStream.write(chunk)
})

 readStream.pipe(writeStream)