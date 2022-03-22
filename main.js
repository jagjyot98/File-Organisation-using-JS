let helpfun = require("./commands/help") //imorted help file
// console.log(helpfun.help())  // 'helpfun' contains the whole object exported from help.js file
//                             // calling 'help' function in help.js file with dot reference 

let treefun = require("./commands/tree")
let organizefun = require("./commands/organize")

let inputarr=process.argv.slice(2); // breaking our given command in terminal into array after 'node main.js'
let command=inputarr[0]     // accessing command 'tree','organize' or 'help'
let path = inputarr[1]      // accessing foledr path from the command upon which the operation to b performed

switch(command){
    case "tree":
        //call tree funtion
        treefun.treeFn(path)
        console.log("tree fucntion called and executed succesfully on path "+path)
        break;
    case "organize":
        //call organise fucntion
        organizefun.organize(path)
        console.log("organize fucntion called and executed succesfully on path "+path)
        break;
    case "help":
        //call help fucntion
        helpfun.help()
        console.log("help fucntion called and executed succesfully on path "+path)
        break;
    default:
        console.log("command not recognised:/")
}