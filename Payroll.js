const rangeVar = document.querySelector("#salary");
rangeVar.addEventListener("click", function () {
    let rangeValue = document.getElementById("salary");
    document.getElementById("salaryOutput").value = rangeValue.value;
});

class EmployeePayrollData {

    constructor(...params) {
        this._name = params[0];
        this._profileImage = params[1];
        this._gender = params[2];
        this._department = params[3];
        this._salary = params[4];
        this._startDate = params[5];
        this._notes = params[6];
    }

    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
        if (nameRegex.test(name))
            this._name = name;
        else {
            throw "Name is Incorrect";
        }
    }
    get profile() {
        return this._profile;
    }
    set profile(profile) {
        this._profile = profile;
    }
    get gender() {
        return this._gender;
    }
    set gender(gender) {
        this._gender = gender;
    }
    get department() {
        return this._department;
    }
    set department(department) {
        this._department = department;
    }
    get salary() {
        return this._salary;
    }
    set salary(salary) {
        this._salary = salary;
    }

    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        const future = new Date();
        future.setDate(future.getDate() + 30);
        if (startDate < new Date() || startDate < future) {
            this._startDate = startDate;
        } else {
            throw "Start date is invalid";
        }

    }
    // set startDate(startDate) {
    //     if (startDate <= new Date())
    //         this._startDate = startDate.toLocaleString(undefined, {
    //             timeZone: 'Asia/Kolkata'
    //         });
    //     else {
    //         throw "Invalid Start Date";
    //     }
    // }
    get note() {
        return this._notes;
    }
    set note(note) {
        this._note = note;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    toString() {
        return "Id = " + this.id + "\nName = " + this.name + "\nSalary = " + this.salary + "\nGender = " + this.gender + " \nStartdate = " + this.startDate + "\nDepartments = " + this.department + "\nProfile = " + this.profile + "\nNote = " + this.note;
    }
}

function save() {

    let empName = document.getElementById("name").value;
    let empProfileImage = document.querySelector('input[name="profile"]:checked').value;
    let empGender = document.querySelector('input[name="gender"]:checked').value;

    let empDepartment = document.querySelectorAll(".checkbox");
    let empDepartmentArr = [];
    for (let emp of empDepartment) {
        if (emp.checked) {
            empDepartmentArr.push(emp.value);
        }
    }
    // for salary
    let empSalary = document.querySelector("#salary").value;

    // for start date
    let day = document.querySelector("#day").value;
    let month = document.querySelector("#month").value;
    let year = document.querySelector("#year").value;
    let empStartDate = new Date(year, month, day);
    let empNotes = document.querySelector("#notes").value;

    try {
        let employeePayroll = new EmployeePayrollData(empName, empProfileImage, empGender, empDepartment, empDepartmentArr, empSalary, empStartDate, empNotes);
        console.log(employeePayroll.toString());
    } catch (e) {
        console.error(e);
    }


}