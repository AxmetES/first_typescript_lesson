type UserData = {
    age: number,
    email: string,
    gender: string,
    name: string,
    password: string
}

let users: UserData[] = []


function signup() {
    let name = (document.getElementById("name") as HTMLInputElement).value;
    let email = (document.getElementById("sign-up-email") as HTMLInputElement).value;
    let age: number = parseInt((document.getElementById("age") as HTMLInputElement).value);
    let password = (document.getElementById("sign-up-password") as HTMLInputElement).value;
    let gender = (document.querySelector('input[name="gender"]:checked') as HTMLInputElement).value;
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
            } else {
                fieldElement.style.display = "none";
            }
    }});

    if (name && email && age && password) {
        let userdata = {
            name, email, age, password, gender: genderValue };
        users.push(userdata);
        clearFormFields();
        console.log(users);
    }
}


function clearFormFields(): void {
    const nameInput: HTMLInputElement | null = document.getElementById("name") as HTMLInputElement;
    const emailInput: HTMLInputElement | null = document.getElementById("sign-up-email") as HTMLInputElement;
    const passwordInput: HTMLInputElement | null = document.getElementById("sign-up-password") as HTMLInputElement;
    const ageInput: HTMLInputElement | null = document.getElementById("age") as HTMLInputElement;
    const maleRadioButton: HTMLInputElement | null = document.getElementById("gender-male") as HTMLInputElement;

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
    let email: string = (document.getElementById("login-email") as HTMLInputElement).value
    let password: string = (document.getElementById("login-password") as HTMLInputElement).value

    users.forEach(item => {
        if(item.email === email && item.password === password){
            document.getElementById("login-error").style.display = "none"
            alert("Welcome, " + item.name);
        } else {
            document.getElementById("login-error").style.display = "revert"
        }});
}