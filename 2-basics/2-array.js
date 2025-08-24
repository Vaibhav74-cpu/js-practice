const marvel_heroes =['thor','hulk', 'antman']
const dc_heroes =['superman','flash','batman']

// marvel_heroes.push(dc_heroes) //get data/array as a element
// console.log(marvel_heroes);

const new_hero=marvel_heroes.concat(dc_heroes)// return single array
// console.log(new_hero)

const new_he = [...marvel_heroes , ...dc_heroes] // retuen single array
// console.log(new_he)

const another_array =[1,2,3,[2,5],[4,[4,5]]]
// console.log(another_array.flat(Infinity));//return one single array


// console.log(Array.isArray('hitseh'));
// console.log(Array.from('vaibhav'));
console.log(Array.from({name:'vaibhav' , id:2})); // return [] we to define elements as key pair

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3)) // combine in one single array
