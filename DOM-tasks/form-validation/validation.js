const form = document.getElementById("registrationForm");
let fields = form.querySelectorAll(".form-group input,.form-group select")
const submitBtn = document.getElementById("submitButton");

const errorMsg = document.getElementById("termsError");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

fields = Array.from(fields);

fields.forEach(field => {
    field.addEventListener("change", () => {
        submitBtn.disabled = !fields.every(_field => _field.value && _field.checkValidity());
    })
})

form.addEventListener("submit", () => {
    e.preventDefault();

    const validity = fields.every(_field => _field.value && _field.checkValidity());
    const passwordMatch = password.value === confirmPassword.value;

    if (!validity || !passwordMatch) {
        errorMsg.textContent = "Something went wrong";
    } else {
        errorMsg.textContent = "Form submitted successfully";
    }
})

