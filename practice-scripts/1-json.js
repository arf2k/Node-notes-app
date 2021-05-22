const dag = {
     title: "Xander",
     author: "Xanny Xanderson"
}

const dagJSON = JSON.stringify(dag)

console.log(dagJSON)

const dagParse = JSON.parse(dagJSON)

console.log(dagParse.author)