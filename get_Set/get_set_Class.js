class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value.toUpperCase();
    }
}

const vaibhav = new User("borkar@gmail.com", "123")
console.log(vaibhav.email);


/*
Note:
_represent private property
get amd set use and perform overwriter operation
get is used only for take values form database
*/