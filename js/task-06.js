const inputEl = document.getElementById("validation-input");
inputEl.addEventListener("blur", () => 
inputEl.value.length === Number(inputEl.dataset.length) ? listAdd("valid", "invalid") : listAdd("invalid", "valid"));

function listAdd(a,b) {
  inputEl.classList.add(a);
  inputEl.classList.remove(b);
}