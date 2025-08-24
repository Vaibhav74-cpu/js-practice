const obj = {
  username: "vaibhav",
  id: 2,
  isLogin: true,

  getUser: function () {
    // console.log(`get an  user datails from database ${this.username}`);
    // console.log(this);
  },
};
// console.log(this);

// console.log(obj.username);
// console.log(obj.getUser());

function User(username, userId, isLogin) {
  this.username = username;
  this.userId = userId;
  this.isLogin = isLogin;
}

const user1 = new User("vaibhav", 3, true);
const user2 = new User("sagar", 2, false);
// console.log(user1);
// console.log(user2);

/*
Note
objects: collection of properties and methods
abstraction: hide details
encapsulation: wrap up data
*/
