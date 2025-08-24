
let userName = []

if(userName){
    // console.log('valid user'); 
}else{
    // console.log('invalid user');  
}

/*
note:
true values: "0", "false", [],{}," ", function(){}
false value: 0, null, undefined, NaN, -0, Bigint, false, 
*/


let gmail = []
if(gmail.length===0){
    // console.log('array is empty');
}

let mail ={}
if(Object.keys(mail.length===0)){
    // console.log('object is empty');
    
}


// nullish coalesing opearator
// suppose we get response empty from database so our code is disturb that why we used nco(??)
// its provide default value when a variable is explicitly null or undefineed
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
console.log(val1);


//ternary oprator   
// condition ? true :false

let tea = 15
tea>20 ? console.log('price is less') : console.log('price is greater');



