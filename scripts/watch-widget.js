const watch = require("node-watch");
const path = require("path");
const fs = require("fs");

const widgetPath = path.join(__dirname, "../widget-script/dist/index.js");
const cdnWidgetPath = path.join(__dirname, "../public/cdn/widget.js");

const widgetIndex = path.join(__dirname, "../widget-script/dist/index.js");
watch(widgetIndex, { recursive: false }, function (evt, name) {
  console.log("%s changed.", name);
  fs.copyFileSync(widgetPath, cdnWidgetPath);
});
