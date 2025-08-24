/* primitive (value type )
number, string, null, undefined, symbol, bigInt, boolean
*/

const score = 5
const name ='rahul'
const Islogin = true
const temper = null
let email;
let bigNum = 2546871n

const id = Symbol('123')
const userId = Symbol('123')
// even if we give same value to symbol but return value is consider as unique
console.log(id===userId)//false

//Non-primitive (reference type)
//arrays, object, function

let hero =['superman', 'hulk', 'thor']
// console.log(hero)

const obj={
    name:'rahul',
    age:47,
}
// console.log(obj);

const myfunc=function(){
    console.log("hello world")
}

console.log(typeof Object)//function


// note
// return type of non primitive data type is object and for function is objectFunction
// return type for null is object 



// ++++++     ++++++     ++++++

//  stack (primitive dataType) Get copy of variable value
//  heap (non primitive dataTpe) // Get reference of variable value

let myName = 'vaibhav'//original variable
let otherName = myName //vaibhav

otherName='borkar'

//in primitive data type changes not applied on original variable . we get copy of that variable
console.log(myName)//vaibhav
console.log(otherName);//borkar

let userOne = {
    email:'vb@gmail.com',
    upi:'vk@ybl'
}

let userTwo=userOne;

userTwo.email ='vkb@gmail.com'

console.log(userOne.email)// vkb@gmail.com
console.log(userTwo.email)// vkb@gmail.com
// In non primitive data types changes are applied on original variable. we get reference of that variable.


