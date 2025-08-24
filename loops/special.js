//loops

const number = [1,2,3,4,5,6]
for (const num of number) {
    // console.log(num);  
}


const greeting = 'hello'
for (const greet of greeting) {
    // console.log(greet); 
}

const map = new Map();
map.set('In','india')
map.set('am','america')
map.set('jn','japan')

// console.log(key);

for (const [key,value] of map) {
    // console.log(key, value)
}

const myObj ={'game1': 'pop', 'game2':'hpaw' ,'game3':'h'}
// for (const [key , values] of myObj) {
//     console.log(key, values);
    
// }

for (const key in myObj) {
    // console.log(myObj[key]);
    
}

const lang = ['js','html','php','c++','c']

lang.forEach(function (item){
    // console.log(item);    
})

lang.forEach((item)=>{
    // console.log(item);   
})

lang.forEach((item, index, arr)=>{
    // console.log(item, index, arr);// return index item arr
    
})

function print(item){
    // console.log(item); 
}
lang.forEach(print)

const user =[
    {
        userName:'vaibhav',
        id:1
    },
    {
        userName:'kishor',
        id:2
    },
    {
        userName:'borkar',
        id:3
    },
]

user.forEach((item)=>{
    console.log(item.userName);
    
})


/*
maps hold key value pair with unique value
forof - array
forin - object
*/