const formSubmit = document.querySelector(".login-form");

formSubmit.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();

    const {elements: { email, password}
    } = event.currentTarget;

    if (email.value.trim() === "" || password.value.trim() === ""){
       return alert(`all fields must be filled`)
    } 
    const addForm = {
        email: email.value,
        password: password.value
    };
        console.log(addForm)
        event.currentTarget.reset(); 
}