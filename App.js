const validator = require("validator")
const chalk = require("chalk")
const yargs = require("yargs")
const getNotes = require("./Notes.js")

const command = process.argv[2]

// if(command === "add") {
//      console.log("Adding note")
// } else if (command === "remove") {
//      console.log("Removing note")
// }

// console.log(process.argv)
// provides array containing node info and path to the file and any additional info added with script

console.log(yargs.argv)

