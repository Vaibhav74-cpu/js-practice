//for

for (let i = 0; i < 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log('a',element)
  }
  // console.log(element);
}

for (let i = 0; i < 10; i++) {
  //   console.log(`outer loop is ${i}`);

  for (let j = 0; j < 10; j++) {
    // console.log(`innee loop is ${i} and ${j}`);
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

let arr = ['flash', 'ww','thor']
// console.log(arr.length);
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}

for (let i = 0; i < 5; i++) {
    if (i==3) {
    //   console.log('a',i);
    //    break; 
    }
    // console.log(i);   
}

for (let i = 0; i < 5; i++) {
    if (i==3) {
    //   console.log('a',i);
    //   continue; 
    }
    // console.log(i);   
}

//while

let i=1
// while (i<5) {
//     console.log('v');
//     i=i+2;
// }

let hero = ['flash','ww','batman'];
let arr1=0;
while (arr1<hero.length) {
    // console.log(hero[arr1]);
    arr1++;
}


let score =11;
do{
    // console.log(score);
    score++
    
}while(score<5);