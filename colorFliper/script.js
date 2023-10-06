const colorHex = [1,2,3,4,5,6,7,8,9,0,"A","B","C","D","E","F"];
const button = document.getElementById('buttonColor');
const background = document.querySelector('body');
const h2 = document.querySelector('h2');


/*eventlistener*/
button.addEventListener('click', function (){
/*function*/
let text = '';
let hex = "#";
function randomNUmber(){
return Math.floor(Math.random() * colorHex.length);
}
for (let i = 1; i <= 6; i++){
    text += colorHex[randomNUmber()];
}
let hexNumber = hex + text;
background.style.backgroundColor = hexNumber;
h2.textContent = hexNumber;
});
