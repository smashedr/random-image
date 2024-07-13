const fs = require('fs')
const path = require('path')

const src = 'src'
const dirs = ['aviation']

for (const dir of dirs) {
    console.log('dir:', dir)
    const source = path.join(src, dir)
    console.log('source:', source)
    // const images = path.join(source, 'images')
    // console.log('images:', images)
    const files = []
    fs.readdirSync(source).forEach((file) => {
        if (file === 'index.html') {
            return
        }
        files.push(file)
    })
    // console.log(files)
    const json = JSON.stringify(files, null, 2)
    // console.log(json)
    // const result = path.join(source, `${dir}.json`)
    const jsonFile = path.join(source, `images.json`)
    console.log('jsonFile:', jsonFile)
    fs.writeFileSync(jsonFile, json)
    const jsFile = path.join(source, `images.js`)
    console.log('jsFile:', jsFile)
    fs.writeFileSync(jsFile, 'const images = ' + json)
}
