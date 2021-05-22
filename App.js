const validator = require("validator")
const yargs = require("yargs")
const getNotes = require("./notes.js")

const command = process.argv[2]

// if(command === "add") {
//      console.log("Adding note")
// } else if (command === "remove") {
//      console.log("Removing note")
// }


// create add command 
yargs.command({
     command: "add",
     describe: "add new note",
     handler: function(){ 
          console.log("adding a new note")
     }
})


yargs.command({
     command: "remove",
     describe: "remove a note",
     handler: function(){ 
          console.log("removing note")
     }
})

// console.log(process.argv)
// provides array containing node info and path to the file and any additional info added with script

console.log(yargs.argv)