
// using clss and objects
class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password =password
    }

    encryptedPwd(){
        return `${this.password}`        
    }
    userUpper(){
        return `${this.username.toUpperCase()}`
    }
}

const user = new User('vaibhav', 'bb@gamil.com', 123)
// console.log(user);
// console.log(user.encryptedPwd());
// console.log(user.userUpper());



//by functin 
function User1(username, email, password){
    this.username = username;
        this.email = email;
        this.password =password
}

User1.prototype.encryptedPwd1 = function(){
    return `${this.password}`
}

User1.prototype.userUpper1 = function(){
     return `${this.username.toUpperCase()}`
}

const user1 = new User1('borakr', 'bk@gmail.com', 123)
// console.log(user1.encryptedPwd1());
// console.log(user1.userUpper1());



// inheritance
class User2{
    constructor(username1){
        this.username1 = username1
    }

    logMe(){
        console.log(`User ${this.username1} is successfullly log`);
        
    }
}

class Teacher extends User2{
    constructor(usernam1, email, password){
        super(usernam1)
        this.email=email;
        this.password=password;
    }

    profession(){
        console.log(`teacherv${this.username1} profession is teaching `);
        
    }
}

const teacher = new Teacher('vaibahv', 'bk@gamil.xom' , 203)
// console.log(teacher.logMe());
// console.log(teacher.profession());

const user22 = new User2('vaibahv borkar')
// console.log(user22.logMe());

// console.log(teacher instanceof User2); // instanceof return imstamce of clss 



// static keryword

class student{
    constructor(username){
        this.username=username;
    }

    static createId(){
        return `123`; //static keywoed does not allowed access for both chlld and parent
    }
}

class Teach extends student{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const stude = new student('borkar')
console.log(stude.createId());

const t1 = new Teach('vaibahv', 'vk@gmail.com')
console.log(t1.createId());
