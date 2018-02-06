// CommonJS
var test2 = require('./public-resource/js/test2.js');
console.log(1);
console.log(test2);
test2.say();
test2.say('tom');

// es6: export{name}  or  import {name} from path
import {sex,age} from './public-resource/js/test3.js';
console.log(sex,age);
sex.say();
age();

//css
import './public-resource/css/test.css';
import './public-resource/css/test2.less';
