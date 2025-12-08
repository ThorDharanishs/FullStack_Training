let fruits = ["Apple","Mango","Orange"]

for (let fruit of fruits){
    console.log(fruit)
}


//assign values using array

//array destructure

const num = [1,2,3,4]
const [a,b,c,d]= num
console.log(a,b,c,d)
console.log(fruits[a])



//built-in function

const arr = [1,2,3,4]
arr.push(5)
console.log(arr)
arr.pop()
console.log(arr)
arr.shift()
console.log(arr)