console.log(`============== Assignment no:1 ==============`);
const employeeInfo =`{
    "name": "Aleix Melon",
    "id": "E00245", 
    "role": ["Dev", "DBA"], 
    "age": 23,
    "doj": "11-12-2019", 
    "married": false, 
    "address": {  
    "street": "32, Laham St.",   
    "city": "Innsbruck",  
    "country": "Austria" 
    },   
    "referred-by": "E0012"
    
    }
    `;

console.log(`======== Convert JSON to Object ===========`);
const employeeObject = JSON.parse(employeeInfo);
console.log(employeeObject);

console.log(`========== Log "DEV" on console ========`);
const firstRoleValue= employeeObject.role[0];
console.log(firstRoleValue);

console.log(`============== Log only Last name "Melon" ==================`);
const nameArray = employeeObject.name.split(" ");
const len = nameArray.length;
console.log(nameArray[len-1]);

console.log(`============== Log only Joining year of employee "2019" ==================`);
const yearValue = employeeObject.doj.split("-") ;
const lengthOfYearStr = yearValue.length;
console.log(yearValue[lengthOfYearStr-1]);


