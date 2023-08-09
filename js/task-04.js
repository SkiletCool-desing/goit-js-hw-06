let counterValue = 0;
const incrementValue = document.querySelector("[data-action = increment]");
const decrementValue = document.querySelector("[data-action = decrement]");
const valueEl = document.getElementById("value");

incrementValue.addEventListener("click", () => {
    counterValue += 1;
    valueEl.textContent = counterValue
});
decrementValue.addEventListener("click", () => {
    counterValue -= 1;
    valueEl.textContent = counterValue
});