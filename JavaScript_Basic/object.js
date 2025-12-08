const Person = {
    name : "Dharanish",
    age : 20,
    hobby: "play gae"
}
console.log(Person.name)

for (let key in Person){
    console.log(key+ " " +Person[key])
}

//object destructure