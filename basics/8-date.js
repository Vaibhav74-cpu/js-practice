let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString());

let fiDate = new Date('2023-4-14')
// console.log(fiDate)
// console.log(fiDate.toLocaleString());

// console.log(fiDate.getTime());



//timestamp

const mystamp = Date.now()

// console.log(mystamp)

// console.log(Math.floor(Date.now()/1000))// convert into seconds

// console.log(mystamp.getDay())


//internationalization
mystamp.toLocaleString('default', {
    weekDay: "long",
  
})