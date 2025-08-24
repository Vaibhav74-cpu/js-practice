function setUser(username){
this.username = username
console.log(`called`);
}

function createrUser(username, email, password){

    setUser.call(this, username) // took the reference of serUser. and use the my current context
    this.email = email
    this.password= password
}
const user = new createrUser('vaibhav', 'vk@gmail.com', 123)
console.log(user);
