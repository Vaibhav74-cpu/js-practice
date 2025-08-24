// Arrays

const myarr =[0,1,2,3,4,5]
const myHero = ['spiderman', 'hulk', 'thor']

// console.log(myArr[1])
// myArr[0]='vaibhav'
// console.log(myArr);

const myArr = new Array(0,1,2,3,4,5,7,8)
console.log('a', myArr);

// console.log(myArr[2])

myArr.push(6);// add element in end of array
// console.log(myArr)

myArr.pop() //remove element from end
// console.log(myArr)

// myArr.unshift(9) // add element in start of array
// console.log(myArr);

// myArr.shift()// remove elemet from start of array
// console.log(myArr);

// console.log(myArr.includes(3)); // return true or false
// console.log(myArr.indexOf(2));

const newArr =myArr.join()

// console.log(myArr); // return array format
// console.log(newArr); // return string
// console.log(typeof newArr) // string


console.log('slice', myArr.slice(1,3)); // return slice from array
console.log('b', myArr)

console.log('splice', myArr.splice(1,3));
console.log('c', myArr); // manipulating in original arrays



