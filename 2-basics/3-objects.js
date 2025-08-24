
//singleton  made by only constructor

//object literal
const sym = Symbol('key1')

const obj ={
    'full name' : 'vaibhav',
    age : 22,
    [sym] : 'mykey', //symbol mukey 
    location: 'nagpur',
    email : 'va@gmail.com',
    isLog : false,
    lastLogin : ['monday']
}

// console.log(obj["full name"]);// vaibhav
// console.log(obj.email);
// console.log(obj['email']); // preferred first
// console.log( obj[sym]);
// console.log(typeof obj['sym']); //undefined

obj.email =' vk@gmail.com'
// console.log(obj);

// Object.freeze(obj)
obj.email='vkb@gmail.com' //freeze this value
// console.log(obj);

obj.greeting = function(){
    console.log(`hello everyone`);  //string interporation
    
}

obj.greetingOne = function(){
    console.log(`hello everyone ${this.name}`); // acces element inside object
    
}

// console.log(obj.greeting); // return reference or undefined

// console.log(obj.greeting())//hello everyone
// console.log(obj.greetingOne());////hello everyone vaibhav





