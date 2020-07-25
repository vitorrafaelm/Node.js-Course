// const square = function(x){
//     return x * x; 
// }
 
// const square = (x) =>  x * x;

// console.log(square(4));

const event = {
    name: 'Birthday party',
    guestList: ['Andrew', 'Jem', 'Alisson'], 
    printGuestList(){
        // const that = this; ann put this into de function below
        console.log('Guest list for ' + this.name);
        this.guestList.forEach((guest) => {
            console.log(guest + 'is attending ' + this.name); 
        }) 
    }
}

event.printGuestList();