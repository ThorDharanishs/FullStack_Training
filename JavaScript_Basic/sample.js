const num1=10
const num2=10

const sum=num1+num2

console.log("The sum is:", sum)

if(num1===num2){
    console.log("The numbers are equal.")
}

let name=5
let name1='5'

if(name===name1){
    console.log("The names are the same.")
}
else{
    console.log("The names are different.")
}

function greet(){
    console.log("welcome")

}
greet()

function findAge(age){
    if (age>=18){
        console.log("you are major")
    }
    else{
        console.log("you are minor")
    }
}

findAge(20)
findAge(16)

console.log("loop concept")
for(let i=0;i<5;i++){
    console.log(i)
}


//Array and object

let fruit = ["Apple","Orange","Mango"]
console.log(fruit[0])


let car = {
    brand : "TATA",
    model : "vista",
    year : 2012
}
console.log(car)
console.log(car.brand)

//the below code will create error - Cannot access 'x' before initialization

/*
console.log(x)
let x=5
*/

//but when using var this error will not occur but give as undifined

console.log(x)
var x=5

//null and undifiend

let q=null
let q1
console.log("The value of q",q)
console.log("The value of q1",q1)

//switch

let fruits= "Apple"

function displayFruit(fruit){
    switch(fruit){
        case "Apple":
            console.log("apple juice")
            break
        case "Mango":
            console.log("Mango juice")
            break
        default:
            console.log("no juice")
            break
    }
}

displayFruit("Apple")
displayFruit("orange")

