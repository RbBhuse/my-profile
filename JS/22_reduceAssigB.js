class Employee {
  // Data member or properties
  // Constructor
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
//created emp objects inside array namely as ‘arrayEmployees
const arrayEmps = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];

console.log(`================Step no:1 ===============`);
console.log(`Find all employees from "Wipro" company`);
const newArray = arrayEmps
  .filter((currentValue) => {
    return currentValue.emp_company == "Wipro";
  })
  .forEach((element) => {
    console.log(
      `ID: ${element.emp_id} Name: ${element.emp_name} Department: ${element.emp_dept}  Salary:${element.emp_salary} Company Name:${element.emp_company}`
    );
  });

console.log(`================Step no:2 ===============`);
console.log(`Find all employees from "IT" OR "HR" department`);
const arrayOfITandHRDeptEmps = arrayEmps
  .filter((currentValue) => {
    return currentValue.emp_dept == "IT" || currentValue.emp_dept == "HR";
  })
  .forEach((element) => {
    console.log(
      `ID: ${element.emp_id} Name: ${element.emp_name} Department: ${element.emp_dept}  Salary:${element.emp_salary} Company Name:${element.emp_company}`
    );
  });

console.log(`================Step no:3 ===============`);
console.log(`Find all employees whose empId is greater than 50`);

const arrEMPIdGreaterThan50 = arrayEmps
  .filter((currentValue) => {
    return currentValue.emp_id > 50;
  })
  .forEach((element) => {
    console.log(
      `ID: ${element.emp_id} Name: ${element.emp_name} Department: ${element.emp_dept}  Salary:${element.emp_salary} Company Name:${element.emp_company}`
    );
  });

console.log(`================Step no:4 ===============`);
console.log(
  `Find all employees whose name start with letter "A" of "V" or "M"`
);

const nameArray = arrayEmps
  .filter((currentValue) => {
    return (
      currentValue.emp_name.startsWith("A") ||
      currentValue.emp_name.startsWith("V") ||
      currentValue.emp_name.startsWith("M")
    );
  })
  .forEach((element) => {
    console.log(
      `ID: ${element.emp_id} Name: ${element.emp_name} Department: ${element.emp_dept}  Salary:${element.emp_salary} Company Name:${element.emp_company}`
    );
  });

console.log(`================Step no:5 ===============`);
console.log(`Find average salary of employee of all department`);
const avgArray = arrayEmps.filter((currentValue) => {
  return currentValue.emp_salary;
});

const sumSalary = avgArray.reduce((runningTotal, currentValue) => {
  return runningTotal + currentValue.emp_salary;
}, 0);
console.log(sumSalary);
console.log(
  `Average salary from all department is: ${sumSalary / avgArray.length}`
);

console.log(`================Step no:6 ===============`);

console.log(`Find average salary for IT department`);

const avgSalaryItDept = arrayEmps.filter((currentValue) => {
  return currentValue.emp_dept == "IT";
});

const sumSalaryOfItDept = avgSalaryItDept.reduce((Total, currentValue) => {
  return Total + currentValue.emp_salary;
}, 0);
console.log(sumSalaryOfItDept);
console.log(
  `Average salary from all department is: ${
    sumSalaryOfItDept / avgSalaryItDept.length
  }`
);
