const value = document.querySelector("#value");
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

let counterValue = 0;
function increment() {
    counterValue++;
    value.innerHTML = counterValue;
}

function decrement() {
    counterValue--;
    value.innerHTML = counterValue;
}

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);