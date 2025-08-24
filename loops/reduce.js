const myNum = [1, 2, 3, 4, 5, 6, 7, 8];

// const newnum=myNum.map(num => (num + 10))
// console.log(newnum);

// chaining

const newnum = myNum
  .map((num) => num * 10)//first collecting elements in array
  .map((num) => num + 1)
  .filter(num => (num>40))
// console.log(newnum);

const mynum = [1,2,5]

const newn=mynum.reduce(function (acc, curr){
    // console.log(`accumulator ${acc} and current value ${curr}`);
    return acc+curr    //explicit return
},0) // accumulator
// console.log(newn);

const newnum1 = mynum.reduce((acc, curr)=> acc+curr , 0)  // impliciit
// console.log(newnum1);

const courses = [
    {
        langName : 'c++',
        price : 2000
    },
    {
        langName : 'c',
        price : 1500
    },
    {
        langName : 'java',
        price : 5000
    },
    {
        langName : 'advance java',
        price : 7000
    },
]
const total=courses.reduce((acc, item) =>  acc+item.price ,0)
console.log(total);
