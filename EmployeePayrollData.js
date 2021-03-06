class EmployeePayrollData {
  id;
  salary;
  gender;
  startDate;

  constructor(...params) {
    this.id = params[0];
    this.name = params[1];
    this.salary = params[2];
    this.gender = params[3];
    this.startDate = params[4];
  }

  get name() {
    return this._name;
  }
  set name(name) {
    let nameRegex = RegExp("^[A-Z][a-z]{3,}$");
    if (nameRegex.test(name)) {
      this._name = name;
    } else {
      throw "Name is Incorrect";
    }
  }

  get id() {
    return this._id;
  }
  set id(id) {
    let idRegex = RegExp("^d*[1-9]d*$");
    if (idRegex.test(id)) this._id = id;
    else throw "ID is incorrect";
  }

  get salary() {
    return this._salary;
  }
  set salary(salary) {
    let salaryRegex = RegExp("^[0-9.]+$");
    if (salaryRegex.test(salary)) this._salary = salary;
    else throw "Salary is incorrect";
  }

  get gender() {
    return this._gender;
  }
  set gender(gender) {
    let genderRegex = RegExp("^[MFmf]{1}$");
    if (genderRegex.test(gender)) this._gender = gender;
    else throw "gender is incorrect";
  }

  get startDate() {
    return this._startDate;
  }
  set startDate(startDate) {
    if (new Date() < startDate) throw "Start date is invalid!";
    else this._startDate = startDate;
  }

  toString() {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const empDate =
      this.startDate === undefined
        ? "undefined"
        : this.startDate.toLocaleDateString("en-US", options);
    return (
      "id: " +
      this.id +
      ", name=" +
      this.name +
      ", salary=" +
      this.salary +
      ", gender=" +
      this.gender +
      ", startDate=" +
      empDate
    );
  }
}

try {
  let employeePayrollData = new EmployeePayrollData(
    1,
    "Terissa",
    30000,
    "m",
    new Date("2021-01-01")
  );
  console.log("employeePayrollData: " + employeePayrollData.toString());
} catch (e) {
  console.error(e);
}
