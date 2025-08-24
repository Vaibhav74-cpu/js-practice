function mul(num){
    return num*5;
}

// mul.power = 2;
// console.log(mul.prototype);// every thing in js is objects
// console.log(mul.power);  // yes we can use function with object properties
// console.log(mul(3));  // perform multiplication

function createUser(username , score){
    this.username=username;
    this.score=score;
}

createUser.prototype.increment = function(){
    console.log(`score is ${this.score}`);
    this.score++
    
}


createUser.prototype.print =function(){
    console.log(`hello brother whith score ${this.score}`);
    
}

const chai = new createUser('hii',5);
const tea = new createUser('jack',10)
console.log(chai.print());
console.log(chai.increment());

