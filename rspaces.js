const fs = require('fs')

const data = fs.readFileSync('./index.html').toString()

fs.writeFileSync('./index.html', data.replace(/\s/g, ''))
