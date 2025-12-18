const text = document.getElementById("Text");
const button = document.getElementById("toggleBtn");
let x = false; 
button.addEventListener("click", function () {
    if (x) {
    text.textContent = "OFF";
    } else {
    text.textContent = "ON";
    }
    x = !x;
});