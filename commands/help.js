function help() {
    console.log(`
        These are some myCLI commands used in various situations:
            1. node main.js tree <path>
            2. node main.js organize <path>
            3. node main.js help
    `);
}

// function abc() {
//     console.log("in help.js"); 
// }

//for exporting single fucntion
// module.exports = help; //can directly export help function which wiill be directly accessed by the catching variable in main

//for exporting multiple fucntions 
module.exports = {  //while exporting, this whole object conating key value value pairs of functions and their alias names will be shared
   //key: value
    help: help,     //'value' help fucntion code will be exported outside the help.js with the key name 'help'
    // haathi:help
    // ghoda:abc
}