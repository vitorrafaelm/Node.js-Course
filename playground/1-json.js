const fs = require('fs'); 

// const book = {
//     title: 'Ego is the enemy', 
//     author: 'Rayn Holiday'
// }

// //Fs core module only knows how to work rith string data. 
// const bookJSON = JSON.stringify(book); 
// fs.writeFileSync('1-json.json', bookJSON);

// console.log(bookJSON);
// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.title);

//It will retorn de text in hexa and then we need to covnert this to string
// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const myInfoBuffer = fs.readFileSync('1-json.json'); 
const myInfoToString = myInfoBuffer.toString(); 
var myInfoJson = JSON.parse(myInfoToString);

myInfoJson.name = 'Vitor'; 
myInfoJson.age = '20'; 

const Mydata = JSON.stringify(myInfoJson); 
fs.writeFileSync('1-json.json', Mydata);



