
const fruit = ['banana', 'apple', 'pineaaple', 'kiwi']
const values=fruit.forEach(item => {
    // console.log(item);
});

// console.log(values); // return undefined

const myNum = [1,2,3,4,5,6,7,8]
const val=myNum.filter(num => (num>4)); // implicit
// console.log(val);


const val1= myNum.filter(num =>{
    return num>5     //explicit
})
// console.log(val1);

const newNum = []
myNum.forEach((num)=>{
 if (num>4) {
    newNum.push(num)
 }
})
// console.log(newNum);






/*
Note
in foreach when we accessed it values outside the local scope it returns undefined (does not return value)
therefore we used filter (return values)
*/
