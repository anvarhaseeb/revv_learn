console.log("Hello world");
//global object instance
//console.log(global)
//commonjs modules insted of ES6 modules
const os = require("os"); //os module
const path = require("path"); //path module     
const {add,subtract,multiply,divide} = require('./math')

console.log(add(1,2))

/* console.log(os.userInfo());
console.log(os.type());
console.log(os.platform());
console.log(os.homedir());

console.log(__dirname); //current directory
console.log(__filename); //current file       

console.log(path.dirname(__filename)); //file name                      

console.log(path.basename(__filename));        

console.log(path.extname(__filename));           

console.log(path.parse(__filename)); //parse the file name                                  
 */

