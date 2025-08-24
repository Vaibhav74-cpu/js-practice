let a = 100;
// const b=20
// var c=300

if (true) {
  //block scope
  let a = 10;
  const b = 20;
  var c = 30;
//   console.log("inside a ", a);
}

// console.log("a", a);
//   console.log("b", b);
//   console.log("c", c);

/* Note
    All global variables can be accessible inside local scope
    but All local variables cannot accessible outside the local scope except var
*/

// ++++ ++++    ++++    ++++

function one() {
  const username = "vaibhav";

  function two() {
    const email = "vb@gmail.com";
    // console.log(username);
  }

//   console.log(email);
  two();
//   console.log('borkar')
}
one();


if(true){
   let username='rahul'
    if(username==='rahul'){
        let id =7;
        console.log(username);     
    }
    // console.log(id)
}
// console.log(username)

console.log(addone(5));
function addone(num){
    return num+1
}

// addtwo()//error
const addtwo= function(num){
    return num+1
}


