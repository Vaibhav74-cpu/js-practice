const user = {
  username: "vaibhav",
  id: 4,
  msg: function () {
    console.log(`${this.username} is a boy with id ${this.id}`);
    // console.log(this);// retuen current context
  },
};

// console.log(this); //empty object
// user.msg()
// user.username='sam'
// user.msg()

function one() {
  const username = "vaibhav";
  console.log(this.username); // return undefined
}
// one()

const two = function () {
  let username = "vaibhav";
  console.log(this.username); //undefined
};
// two()

const three = () => {
  let username = "borkar";
  console.log(this.username); //undefined
};
// three()

// const add = (num1 , num2)=>{
//     return num1+num2  //explicit
// }

// const add =(num1 , num2)=> num1+num2 //implicit
// const add = (num1, num2) => num1 + num2; //implicit

const add = () => ({ username: "vaibhav" });
// console.log(add(2, 3));

// IIFE
//used to avoid polution from global scope

(function demo(name){ // name iief
    console.log(`we in the ${name}`)
})('class');

((name)=>{
    console.log(`my name is ${name}`);
    
})('vaibhav'); //argument

/*
when we used engine(node) outside the browser . this keyword give empty {}
but in case of browser it returns global object window
*/
