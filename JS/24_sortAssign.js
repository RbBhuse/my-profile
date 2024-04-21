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

console.log(`Sort of an arrayEmployee in descending order of employee ID`);
arrayEmployees.sort((p1, p2)=>{
    return p1.emp_id>=p2.emp_id ? -1 : 1
});
arrayEmployees.forEach(element => {
    console.log(`Employee ID: ${element.emp_id} Employee Name: ${element.emp_name}, Employee Department:${element.emp_dept}`);
});
console.log(`========= Sort of an arrayEmployee in acceding order of employee department =========`);

arrayEmployees.sort((p1, p2)=>{
    return p1.emp_dept>=p2.emp_dept ? 1 : -1
});
arrayEmployees.forEach(element => {
    console.log(`Employee ID: ${element.emp_id}, Employee Department:${element.emp_dept},Employee Company:${element.emp_company}`);
});

console.log(`========= Sort of an arrayEmployee in descending order of employee salary =========`);
arrayEmployees.sort((p1, p2)=>{
    return p1.emp_salary>=p2.emp_salary ? 11 : -1
});
arrayEmployees.forEach(element => {
    console.log(`Employee Name: ${element.emp_name}, Employee Salary:${element.emp_salary},Employee Company:${element.emp_company}`);
});
console.log(`============================================`);