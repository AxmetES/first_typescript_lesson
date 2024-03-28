const PositionDict = { "Devman": 0, "Product": 1, "UXUI": 2 };
function init() {
    const form = document.getElementById('userForm');
    form === null || form === void 0 ? void 0 : form.addEventListener('submit', handlerSubmit);
}
function handlerSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = (getFormData(form));
    if (data) {
        console.log(processData(data));
    }
}
function getFormData(form) {
    const first_name = form['firstName'].value;
    const last_name = form['lastName'].value;
    const age = form['age'].value;
    const salary = form['salary'].value;
    const userData = {
        first_name,
        last_name,
        age,
        salary,
        position: "Devman",
        isEmployeed: false
    };
    console.log(userData);
    return userData;
}
function processData(userData) {
    //send request
    return {
        full_name: `${userData.first_name} ${userData.last_name}`,
        age: userData.age,
        salary: userData.salary,
        position: PositionDict[userData.position],
        isEmployeed: userData.isEmployeed
    };
}
init();
