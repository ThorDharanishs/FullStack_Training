const greet = (name) =>{
    console.log("welcome "+ this.name) // will give undefined 
    console.log("welcome "+name )
}

greet("Thor")


//this keyword cannot be used in the arrow function