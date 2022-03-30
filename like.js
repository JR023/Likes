//console.log("moshi mosh");
let likebutton = document.querySelector("#totallikes");
function countup() {
    let currentValue = parseInt(likebutton.innerHTML);
    console.log(currentValue);
    currentValue++
    likebutton.innerText = currentValue;
}
let likebutton1 = document.querySelector("#totallikes1");
function countup1() {
    let currentValue1 = parseInt(likebutton1.innerHTML);
    console.log(currentValue1);
    currentValue1++
    likebutton1.innerText = currentValue1;
}
let likebutton2 = document.querySelector("#totallikes2");
function countup2() {
    let currentValue2 = parseInt(likebutton2.innerHTML);
    console.log(currentValue2);
    currentValue2++
    likebutton2.innerText = currentValue2;
}