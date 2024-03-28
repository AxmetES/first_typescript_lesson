let users = [];
function signup() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("sign-up-email").value;
    let age = parseInt(document.getElementById("age").value);
    let password = document.getElementById("sign-up-password").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let genderValue = gender ? gender : '';
    const fields = [
        { id: "name", value: name, fieldId: "signup-name-field" },
        { id: "sign-up-email", value: email, fieldId: "signup-email-field" },
        { id: "age", value: age, fieldId: "age-field" },
        { id: "sign-up-password", value: password, fieldId: "signup-password-field" }
    ];
    fields.forEach(field => {
        let fieldElement = document.getElementById(field.fieldId);
        if (fieldElement) {
            if (field.value === "") {
                fieldElement.style.display = "revert";
            }
            else {
                fieldElement.style.display = "none";
            }
        }
    });
    if (name && email && age && password) {
        let userdata = {
            name, email, age, password, gender: genderValue
        };
        users.push(userdata);
        clearFormFields();
        console.log(users);
    }
}
function clearFormFields() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("sign-up-email");
    const passwordInput = document.getElementById("sign-up-password");
    const ageInput = document.getElementById("age");
    const maleRadioButton = document.getElementById("gender-male");
    if (nameInput) {
        nameInput.value = "";
    }
    if (emailInput) {
        emailInput.value = "";
    }
    if (passwordInput) {
        passwordInput.value = "";
    }
    if (ageInput) {
        ageInput.value = "";
    }
    if (maleRadioButton) {
        maleRadioButton.checked = true;
    }
}
function login() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;
    users.forEach(item => {
        if (item.email === email && item.password === password) {
            document.getElementById("login-error").style.display = "none";
            alert("Welcome, " + item.name);
        }
        else {
            document.getElementById("login-error").style.display = "revert";
        }
    });
}
