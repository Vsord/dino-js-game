// import './style.css'

const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function (event) {
    jump();
});

function jump() {
   if (dino.classList != "jump") {
       dino.classList.add("jump")
   }
   setTimeout( function() {
       dino.classList.remove("jump")
   }, 300)
};

let isAlive = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert("GAME OVER")
    }
}, 10);

var a = 32;
console.log(a);

var b = 11;
console.log(b);

function newFunc() {
    if (a > b) {
        return ('Right')
    }
    if (a < b) {
        return ('False')
    }
};

console.log(newFunc());