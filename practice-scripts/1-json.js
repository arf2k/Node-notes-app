const fs = require("fs")
// const dag = {
//      title: "Xander",
//      author: "Xanny Xanderson"
// }

// const dagJSON = JSON.stringify(dag)

// console.log(dagJSON)

// const dagParse = JSON.parse(dagJSON)

// console.log(dagParse.author)

// fs.writeFileSync("1-json.json", dagJSON)

const dataBuffer = fs.readFileSync("1-json.json")
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)
// change it
user.name = "Billy"
user.age = 68

const userJson = JSON.stringify(user)
fs.writeFileSync("1-json.json")
