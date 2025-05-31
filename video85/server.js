var slugify = require('slugify')

var a=slugify('some string') // some-string
console.log(a);
// if you prefer something other than '-' as separator
const b=slugify('some@3!@$%%^z^%ZZ()>/,{}[] string', '_')  // some_string
console.log(b);