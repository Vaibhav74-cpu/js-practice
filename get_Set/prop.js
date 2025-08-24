function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', { // I want to overwriter this method 
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', { // I want to overwriter this method 
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}

const user = new User("vj@gmail.com", "abc")
console.log(user.email);
console.log(user.password);
