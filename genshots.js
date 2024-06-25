const fs = require('fs')

const repoDir = './src/photos'
const varsFile = './src/vars.js'
const varName = 'photos'
const relPath = 'photos/'

const files = []
fs.readdirSync(repoDir).forEach((file) => {
    files.push(file)
})
console.log(files)

const file = fs.createWriteStream(varsFile)
file.on('error', function (err) {
    console.error('err', err)
})
file.write(`const ${varName} = [`)
files.forEach(function (x) {
    file.write(`    '${relPath}${x}',\n`)
})
file.write(']\n')
file.end()
