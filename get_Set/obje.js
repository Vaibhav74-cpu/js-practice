const User= {
    _email : 'vai@gmail.com',
    _password : "abc",

    get email(){
        return this._email.toUpperCase()
     } ,
    set email(value){
        this._email=  value
    }
}

const user = Object.create(User)
console.log(user.email);



/**
 get and set are define because i want to  no anyone access theser values directly
get and set are special methods are put above the properties
 factory function
 */