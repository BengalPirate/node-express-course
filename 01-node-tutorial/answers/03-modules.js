// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names')
const sayHi = require('./05-utils')
const data = require('./06-alternative-flavor')
require('./07-mind-grenade')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

// Logging the imported data from 06-alternative-flavor.js to verify
console.log(data.items)         // Should output: ['item1', 'item2']
console.log(data.singlePerson)   // Should output: { name: 'bob' }