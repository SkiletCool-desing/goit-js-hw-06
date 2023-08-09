const fontSizeInput = document.getElementById("font-size-control");
const text = document.getElementById("text");

fontSizeInput.addEventListener("input", () => {
    text.style.fontSize = fontSizeInput.value + "px";
})