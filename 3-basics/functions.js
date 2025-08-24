function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

const result = add(3, 5);
// console.log(result);

// console.log(typeof add)

function loginUser(username = 'borkar') { // default value
//   if (username === undefined) {
  if (!username) {
    return console.log("username not defined");
  }
  return `${username} just log in`;
}

const user = loginUser('vaibhav');
// console.log(user);


// function calculateCart(...num){ // retuen array
//    return num;
// }

function calculateCart(val1, val2, ...num){ // var=100. var2=200
   return num;
}

const price=calculateCart(100,200,300,400)
// console.log(price);


//function with object

const user1={
    username:'vaibhav',
    price:300
}

function handleUser1(anyObj){ // we can use user1 instead of anyobj
    // console.log(`${anyObj.username} is buy product of price ${anyObj.price}`)
}

// handleUser1(user1)
handleUser1({
    username:'rahul',
    price:300
})


//array
const arr =[100,200,300]

function myFunc(getArr){
    console.log(getArr[1])
}

// myFunc(arr)
myFunc([100,300,400])