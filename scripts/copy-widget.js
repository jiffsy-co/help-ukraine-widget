const fs = require('fs')
const path = require('path')

const widgetPath = path.join(__dirname, '../widget-script/dist/index.js')
const cdnWidgetPath = path.join(__dirname, '../public/cdn/widget.js')

fs.copyFileSync(widgetPath, cdnWidgetPath)
