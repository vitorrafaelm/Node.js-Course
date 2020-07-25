const fs = require("fs");
const chalk = require('chalk')

const getNotes = function(){
    return 'Your notes...' ;
}

const AddNotes = function(title, body){
    const notes = loadNote();

    const duplicateNotes = notes.filter((note) => {
        return note.title === title; 
    })

    if(duplicateNotes.length === 0) {
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

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes); 
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNote = function() {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString(); 
        return JSON.parse(dataJson);
    }catch(e){
        return []; 
    }
}

const removeNote = function (title){
    console.log(title);
    const notes = loadNote();
    
    const noteFilter = notes.filter((note) => {
        return note.title === title;
    }); 

    if(noteFilter.length){
        notes.splice(notes.indexOf(noteFilter), 1); 
        saveNotes(notes); 
        console.log(chalk.green.inverse('Note deleted with success')); 
    }else {
        console.log(chalk.red.inverse("No note found")); 
    }
}


module.exports = {
    getNotes: getNotes(),
    AddNotes: AddNotes, 
    removeNote: removeNote
} 