

let myName  ="vaibhav     "
// console.log(myName.trueLength);

let myHeroes = ['thor', 'spider']

let heroPower = {
    thor: 'hammer',
    spider: 'web',

    getSpider : function(){
        console.log(`spider man power is ${this.spider}`);
        
    }
}

Object.prototype.vaibhav = function(){   // Access this vaibhav methods by array myHeroes and Ohject hero power
    console.log(`vaibhav has more power`);
    
}

Array.prototype.vaibahvHey = function(){
    console.log(`array have a accessed `);
    
}

// heroPower.vaibhav()
// myHeroes.vaibhav()

myHeroes.vaibahvHey()
// heroPower.vaibahvHey()  // it is not a function or its can not accessible 

let myName1  =   "vaibhav     "

String.prototype.trueLength = function(){
    // console.log(`True length is ${this.trim().length}`);
    
}

myName1.trueLength()