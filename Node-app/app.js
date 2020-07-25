const chalk = require(`chalk`);
const yargs = require('yargs'); 
const notes = require('./notes.js'); 

//Customize yargs version
yargs.version('1.1.0');

//Create add command 
yargs.command({
   command: 'add', 
   describe: 'Add a new note',
   builder: {
    title: {
        describe: 'Note title',
        demandOption: true, 
        type: 'string'
    }, 
    body: {
        describe: 'This is the description of the note', 
        demandOption: true, 
        type: 'string'
    }
   },
   handler: function (argv) {
       notes.AddNotes(argv.title, argv.body); 

   }
});

//Create remove command 
yargs.command({
    command: 'remove', 
    describe: 'Remove a note', 
    builder: {
        title: {
            describe: 'Note to remove', 
            demandOption: true, 
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title); 
    }
}); 

//Create read command 
yargs.command({
    command: 'read', 
    describe: 'Read a note', 
    handler: () => console.log('Reading note...'), 
}); 

//Create list command 
yargs.command({
    command: 'list', 
    describe: 'List the notes', 
    handler: () => console.log('Listing out all notes...')
}); 


yargs.parse(); 

//Add, remove, read, list
// const log = console.log; 
// nota();
// log(chalk.red.inverse.bold('Success'));
// log(chalk.inverse(`I'm Vitor`));
// log("I'm Vitor");
// console.log(process.argv[2]); 
// console.log(validator.isEmail('@gmail.com'));
// console.log(validator.isURL('https://mead.io')); 
// const validator = require('validator');
