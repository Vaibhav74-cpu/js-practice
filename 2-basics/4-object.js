// const tinderUser = new Object() // return ({}) empty object and it is singleton object

const tinderUser = {}; // non singleton object with empty block

tinderUser.id = "12xyz";
tinderUser.isLog = false;
tinderUser.name = "rahul";

// console.log(tinderUser) // return object
// console.log(Object.keys(tinderUser)); //retutn array
// console.log(Object.values(tinderUser)); //return array
// console.log(Object.entries(tinderUser)); //  make each key-value as an aray
// console.log(tinderUser.hasOwnProperty('id')); //return true

const users = {
  email: "xyz@gmail.com",
  fullname: {
    userName: {
      fname: "vaibhav",
      lname: "borkar",
    },
  },
};

// console.log(users.fullname.userName)

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = { obj1, obj2 };
// console.log(obj3);  // return object inside object {obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3); // retun singlr object  {'1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj3 = { ...obj1, ...obj2 }; // preferred this
// console.log(obj3)

const emp = [
  {
    id: 1,
    email: "xyz@gmail.com",
  },
  {
    id: 2,
    email: "pqz@gmail.com",
  },
  {
    id: 3,
    email: "vbn@gmail.com",
  },
];

// console.log(emp[1].id);

// note
// if you hava a thing with multiple properties used object ptherwise used array

// ++++++  +++++

const course = {
  courseName: "js",
  price: "333",
  courseTeacher: "vaibhav",
};
const { courseTeacher } = course;
const { courseTeacher: teacher } = course;
// console.log(teacher);


