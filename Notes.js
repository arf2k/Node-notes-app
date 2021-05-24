const fs = require("fs");
const chalk = require("chalk")

const getNotes = function () {
  return "Your notes ...";
};

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note => note.title === title))
     if(!duplicateNotes.length){

  notes.push({
    title: title,
    body: body,
  });
  saveNotes(notes);

} else {
     console.log("Note title taken")
}
}

const saveNotes = function (notes) {
  const data = JSON.stringify(notes);
  fs.writeFileSync("notes.json", data);
};

const removeNote = function (title) {
     const notes = loadNotes();
     const notesToKeep = notes.filter(note => note.title !== title)
     
     if(notes.length > notesToKeep.length) {
          console.log(chalk.green.inverse("Note removed"))
          saveNotes(notesToKeep)
     } else {
          console.log(chalk.red.inverse("No note found"))
     }
    
}

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
};
