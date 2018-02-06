// CommonJS
var test2 = require('./test2.js');
console.log(1);
console.log(test2);
test2.say();
test2.say('tom');

// es6: export{name}  or  import {name} from path
import {sex,age} from './test3.js';
console.log(sex,age);
sex.say();
age();
