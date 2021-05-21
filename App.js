const validator = require("validator")
const chalk = require("chalk")

const getNotes = require("./Notes.js")

const msg = getNotes()
console.log(msg)

console.log(validator.isEmail("alex@email.com"))

console.log(chalk.green("Success"))
