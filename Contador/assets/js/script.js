var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;


function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    currentNumber < 0 ? document.getElementById('currentNumber').style.color = "red" : document.getElementById('currentNumber').style.color = "black"
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    currentNumber < 0 ? document.getElementById('currentNumber').style.color = "red" : document.getElementById('currentNumber').style.color = "black"
}





