let one = document.querySelector(".one");
let problem1 = document.querySelector(".problem1");
let two = document.querySelector(".two");
let problem2 = document.querySelector(".problem2");
let three = document.querySelector(".three");
let problem3 = document.querySelector(".problem3");
let four = document.querySelector(".four");
let problem4 = document.querySelector(".problem4");
let five = document.querySelector("#five");
let problem5 = document.querySelector(".problem5");
let problem5p = document.querySelector(".problem5p");
let cond = document.querySelector("h2");
let styletag = document.querySelector("style");
let container = document.querySelector(".container");
let container2 = document.querySelector("#container2");
let container3 = document.querySelector("#container3");
let container4 = document.querySelector("#container4");
let container5 = document.querySelector("#container5");
let container6 = document.querySelector("#container6");
let time1 = setInterval(problemOne, 13);
let time2;
let time3;
let time4;
let time5;

function problemOne() {
    problem1.style.color = one.value;
    if (problem1.style.color == "blue") {
        cond.innerHTML = "Benar!";
        setTimeout(function () {
            container2.classList.add('hide');
            container3.style.display = "flex";
            cond.innerHTML = "Set warna tajuk/header dengan RGB, merah yaitu 142, biru adalah 55, hijau adalah 15";
        },1500);
        time2 = setInterval(problemTwo, 13);
        clearInterval(time1);
    }
}

function problemTwo() {
    problem2.style.color = two.value;
    if (problem2.style.color == "rgb(142, 15, 55)" && two.value.includes("(") && two.value.includes(")")) {
        cond.innerHTML = "Benar!";
        setTimeout(function () {
            container3.classList.add('hide');
            container4.style.display = "flex";
            cond.innerHTML = "Set warna tajuk/header dengan HEX, kode warna 00FA38";
        },1500);
        time3 = setInterval(problemThree, 13);
        clearInterval(time2);
    }
}

function problemThree() {
    problem3.style.color = three.value;
    if (problem3.style.color == "rgb(0, 250, 56)") {
        cond.innerHTML = "Benar!";
        setTimeout(function () {
            container4.classList.add('hide');
            container5.style.display = "flex";
            cond.innerHTML = "Set heading/sub tajuk h1 menjadi tulisan berwarna hijau dan paragrafnya menjadi tulisan berwarna merah serta latar belakang berwarna kuning menggunakan nama-nama warna";
        },1500);
        time4 = setInterval(problemFour, 13);
        clearInterval(time3);
    }
}

let check1;
let check2;
let check3;
let check4;
let check5;
let check6;
function problemFour() {
    styletag.innerHTML = five.value;
    check1 = window.getComputedStyle(problem5).color;
    check2 = window.getComputedStyle(problem5p).color;
    check3 = window.getComputedStyle(problem5p).backgroundColor;
    check4 = five.value.match(/{/g);
    check5 = five.value.match(/}/g);
    check6 = five.value.match(/;/g);
    if (check1=="rgb(0, 128, 0)" && check2=="rgb(255, 0, 0)" && check3=="rgb(255, 255, 0)" && check4.length>=2 && check5.length>=2 && check6.length>=3) {
        cond.innerHTML = "Benar!";
        setTimeout(function () {
            container5.classList.add('hide');
            container6.style.display = "flex";
            cond.innerHTML = "Set latar belakang tajuk dengan cara apapun";
        },1500);
        time5 = setInterval(problemFive, 13);
        clearInterval(time4);
    }
}

let codes = ['longing', 'rusted', 'furnace', 'daybreak', 'seventeen', 'benign', 'nine', 'homecoming', 'one', 'freight car'];
let number;
function problemFive() {
    problem4.style.backgroundColor = four.value;
    if (problem4.style.backgroundColor != "") {
        number = Math.round(Math.random()*(codes.length-1));
        setTimeout(function () {
            container.innerHTML = "<h2>Benar sekali! Code: " + codes[number] + "</h2>";
        },1500);
        clearInterval(time5);
    }
}
