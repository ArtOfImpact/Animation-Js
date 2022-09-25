import "@babel/polyfill";
import "./index.html";
import "./index.scss"
import { Animation } from "./modules/animation"
import { body } from "./modules/elements";

function Scroll() {
    Animation()
}

function Click(event) {
    if (event.target.className === "btn" || event.target.className === "active") {
        Animation()
    }
}

body.addEventListener("click", Click)

document.addEventListener("wheel", Scroll)

function live() {
    const eye = document.querySelectorAll(".circle-big");
    eye.forEach(function (eye) {
        let x = (eye.getBoundingClientRect().left)
            + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top)
            + (eye.clientHeight / 2);

        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rotation = (radian * (180 / Math.PI) * -1) + 270;
        eye.style.transform = "rotate(" + rotation + "deg)"
    })
}



function live2() {
    const eye = document.querySelectorAll(".circle-small");
    eye.forEach(function (eye) {
        let x = (eye.getBoundingClientRect().left)
            + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top)
            + (eye.clientHeight / 2);

        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rotation = (radian * (180 / Math.PI) * -1) + 270;
        eye.style.transform = "rotate(" + rotation + "deg)"
    })
}

function live3() {
    const eye = document.querySelectorAll(".circle-normal");

    eye.forEach(function (eye) {
        let x = (eye.getBoundingClientRect().left)
            + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top)
            + (eye.clientHeight / 2);

        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rotation = (radian * (180 / Math.PI) * -1) + 270;
        eye.style.transform = "rotate(" + rotation + "deg)"
    })
}

document.querySelector("body").addEventListener("mousemove", live)

document.querySelector("body").addEventListener("mousemove", live2)

document.querySelector("body").addEventListener("mousemove", live3)
