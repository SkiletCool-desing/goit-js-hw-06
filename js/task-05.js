const nameIn = document.getElementById("name-input");
const nameOut = document.getElementById("name-output");

nameIn.addEventListener("input", () => {
    nameOut.textContent = nameIn.value.trim() || "Anonymous";
});