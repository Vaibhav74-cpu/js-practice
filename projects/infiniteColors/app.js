//infinite colors

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// console.log(randomColor());
let interval;
const startChange = function () {
    let change = function () {
        document.body.style.backgroundColor = randomColor();
    };
    if (!interval) {
        interval =setInterval(change, 1000);
    }
};

const stopChange = function () {
    clearInterval(interval)
    interval = null
};
document.querySelector("#start").addEventListener("click", startChange);
document.querySelector("#stop").addEventListener("click", stopChange);
