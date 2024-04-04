// created class Vehicle
class Vehicle {
  name;
  color;
  type;
  model;
  fuelType;

  constructor(nameOfVehicle,colorOfVehicle,typeOfVehicle,modelOfVehicle,fuelTypeOfVehicle) {
    this.name = nameOfVehicle;
    this.color = colorOfVehicle;
    this.type = typeOfVehicle;
    this.model = modelOfVehicle;
    this.fuelType = fuelTypeOfVehicle;
  }
  // creating method
  details(){
    console.log( `Name: ${this.name}, Color: ${this.color}, Type: ${this.type}, Model: ${this.model}, Fuel Type: ${this.fuelType}`);
  }
}

console.log(`============ Vehicle Details =============`);
//creating object
const v1 = new Vehicle("Swift", "White",4,"VXI CNG","CGN");
const v2 = new Vehicle("Honda", "Black", 2,"Activa 125", "Petrol");
const v3 = new Vehicle("BMW", "White", 2,"BMW Z3", "CNG");
const v4 = new Vehicle("Bolero", "Gray", 2,"B6", "Diesel");
const v5 = new Vehicle("Shine", "Black", 2,"Drum and Disc", "Petrol");

//creating array of above object
console.log(`============ Traversing array=============`);
const arrayOfVehicle = [v1,v2,v3,v4,v5];
for (const element of arrayOfVehicle) {
    element.details();
}

// created class college
class College{

    constructor(name,city,state, numOfStudent ){
           this.name = name;
           this.city = city;
           this.state = state;
           this.numOfStudent = numOfStudent
    }

    display(){
        console.log(`Name: ${this.name}, City: ${this.city}, State: ${this.state}, Number of stud: ${this.numOfStudent}`);
    }
}

console.log(`============College Details=============`);
const c1 = new  College("FTC Sangola", "Sangola", "Maharashtra",100000);
c1.display();
const c2 = new College("SMS Pandharpur", "Pandharpur", "Maharashtra",200000);
c2.display();
const c3 = new College("MHM", "Pune", "Maharashtra",300000);
c3.display();
const c4 = new College("KBP Mumbai", "Mumbai", "Maharashtra",700000);
c4.display();

