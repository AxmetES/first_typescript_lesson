
type UserFormData = {
    first_name: string,
    last_name: string,
    age: number,
    salary: number,
    position: Position,
    isEmployeed: boolean
}

type UserApplicationRequest = {
    full_name: string;
    age: number,
    salary : number,
    position: number,
    isEmployeed: boolean
}

type Position = "Devman" | "Product" | "UXUI"

const PositionDict: Record<Position, number> = {"Devman": 0, "Product": 1, "UXUI": 2}


function init() {
    const form = document.getElementById('userForm');
    form?.addEventListener('submit', handlerSubmit)
}

function handlerSubmit(e: SubmitEvent) {
    e.preventDefault()
    const form = e.target as HTMLFormElement;
    const data= (getFormData(form));
    if (data) {
       console.log(processData(data));
    }
}

function getFormData(form: HTMLFormElement){
    const first_name: string = form['firstName'].value;
    const last_name: string = form['lastName'].value;
    const age: number = form['age'].value;
    const salary: number = form['salary'].value as number;

    const userData: UserFormData = {
        first_name,
        last_name,
        age,
        salary,
        position: "Devman",
        isEmployeed: false
    }
    console.log(userData)
    return userData
}

function processData(userData: UserFormData): UserApplicationRequest {
    //send request
    return {
        full_name:`${userData.first_name} ${userData.last_name}`,
        age: userData.age,
        salary: userData.salary,
        position: PositionDict[userData.position],
        isEmployeed: userData.isEmployeed
    }
}

init();