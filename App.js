const validator = require("validator");
const yargs = require("yargs");
const notes = require("./notes.js");
const getNotes = require("./notes.js");

const command = process.argv[2];

// if(command === "add") {
//      console.log("Adding note")
// } else if (command === "remove") {
//      console.log("Removing note")
// }

// create add command
yargs.command({
  command: "add",
  describe: "add new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    console.log("Adding a new note");
    // console.log("Title: " + argv.title);
    // console.log("Body: " + argv.body);
    notes.addNote(argv.title, argv.body)
  },
});

// create remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    console.log("Removing note");
    notes.removeNote(argv.title)
  },
});

// create list command
yargs.command({
  command: "list",
  describe: "list of notes",
  handler() {
    notes.listNotes()
  },
});

// create read command
yargs.command({
  command: "read",
  describe: "read a note",
  handler(argv) {
    notes.readNote(argv.title)
  },
});

// console.log(process.argv)
// provides array containing node info and path to the file and any additional info added with script

// console.log(yargs.argv)
// must have this to parse args or put yargs.parse

yargs.parse();
