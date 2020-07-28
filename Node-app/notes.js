const fs = require("fs");
const chalk = require('chalk');
const { Console } = require("console");

const AddNotes = (title, body) => {
    const notes = loadNote();

    const duplicateNotes = notes.find(note => note.title === title);

    if(!duplicateNotes) {
        notes.push({
            title: title, 
            body: body
        });
        
        saveNotes(notes); 
        console.log(chalk.green.inverse('New note added'));
    }else {
        console.log(chalk.red.inverse('Note title taken'));
    }
    
}

const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes); 
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNote = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString(); 
        return JSON.parse(dataJson);
    }catch(e){
        return []; 
    }
}

const removeNote = title => {
    console.log(title);
    const notes = loadNote();
    
    const noteFilter = notes.filter(note => note.title === title); 

    if(noteFilter.length){
        notes.splice(notes.indexOf(noteFilter), 1); 
        saveNotes(notes); 
        console.log(chalk.green.inverse('Note deleted with success')); 
    }else {
        console.log(chalk.red.inverse("No note found")); 
    }
}

const listNotes = () => {
    console.log(chalk.blue.inverse("This is yout list note: ")); 
    const notes = loadNote(); 

    notes.forEach(note => {
        console.log(note.title);
    });
}

const readNote = (title) => {
    const notes = loadNote();
    
    const note = notes.find(note => note.title == title);
    
    if(note){
        console.log(chalk.green.inverse(note.title)); 
        console.log(note.body); 
    }else {
        console.log(chalk.red.inverse('Note not found')); 
    }
      
}

module.exports = {
    AddNotes: AddNotes, 
    removeNote: removeNote, 
    listNotes: listNotes,
    readNote: readNote 
} 