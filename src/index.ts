import "@babel/polyfill";
import "./index.html";
import "./index.scss"
// import { sum } from "./modules/calc";
// import back from "./img/back.jpg"


// const imgWrap = document.querySelector(".image")
// const img = new Image();
// img.src = back;
// imgWrap?.append(img)

const A = 2;
const B = 5;
const V = "ser"

const sum = (A: number, B: number, V: string) => {
    const Ar = A + B;
    console.log(Ar, V)
}

console.log(1 + 3 + 2)

sum(A, B, V)