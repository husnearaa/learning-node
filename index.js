// local module
const{a, add} = require('./local-1')
const{a:a2, add:add2} = require('./local-2')

console.log(add2(3,4,6))


// built-in module
const path = require("path")
// console.log(path.dirname("E:/Programming hero/Level-2/Mission-2/module-7/learning-node/index.js"));

// console.log(path.parse("E:/Programming hero/Level-2/Mission-2/module-7/learning-node/index.js"));

console.log(path.join("E:/Programming hero/Level-2/Mission-2/module-7/learning-node/", "local-1.js"));