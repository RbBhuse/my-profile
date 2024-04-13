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
  const emp_sonali = new Employee(66, "Solnali", "Finance", 45000, "Infy");
  const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
  const emp_viny = new Employee(88, "Viny", "IT", 75000, "TCS");
  const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
//created emp objects inside array namely as ‘arrayEmployees
  const arrayEmployees =[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log(`==========Step no:1===========`);
console.log(`Find all the employees working in ‘TCS’ and log only employee names and company name`);

arrayEmployees.forEach(element => {
    
    if (element.emp_company=="TCS") {
        console.log(`Employee Name:${element.emp_name} Company Name: ${element.emp_company}`);
    }
   
});

console.log(`==========Step no:2===========`);
console.log(` Find the ‘Finance’ department employees, log only department and employee name`);

arrayEmployees.forEach(element => {
    if (element.emp_dept=="Finance") {
        console.log(`Department  Name:${element.emp_dept} Employee Name: ${element.emp_name}`);
    }
});

console.log(`==========Step no:3===========`);
console.log(`Find the employees whose name starts with ‘R’ `);
arrayEmployees.forEach(element => {
    
    if (element.emp_name.startsWith("R")) {
        console.log(`ID: ${element.emp_id} Name: ${element.emp_name} Department: ${element.emp_dept}  Salary:${element.emp_salary} Company Name:${element.emp_company}`);
    }
});

console.log(`==========Step no:4===========`);
console.log(`Find the employees whose salary is greater than 75000, and log on console emp name, company and salary`);
arrayEmployees.forEach(element => {
    if (element.emp_salary>75000) {
        console.log(`Employee Name: ${element.emp_name} Company Name:${element.emp_company} Salary:${element.emp_salary} `);
    }
});

console.log(`==========Step no:5===========`);
console.log(`Find the emp’s whose salary greater than or equal 50000 and from ‘IT’ department,`);

arrayEmployees.forEach(element => {
    if (element.emp_salary>=50000 && element.emp_dept=="IT") {
        console.log(`ID: ${element.emp_id} Name: ${element.emp_name} Department: ${element.emp_dept}  Salary:${element.emp_salary} Company Name:${element.emp_company}`);
    }
});

console.log(`==========Step no:6===========`);
console.log(`Find all the employees from company "Infy" `);
arrayEmployees.forEach(element => {
    
    if (element.emp_company=="Infy") {
        console.log(`ID: ${element.emp_id} Name: ${element.emp_name} Department: ${element.emp_dept}  Salary:${element.emp_salary} Company Name:${element.emp_company}`);
    }
});