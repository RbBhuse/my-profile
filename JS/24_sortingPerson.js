class Person {
    constructor(name, city, age){
        this.name = name;
        this.city = city;
        this.age = age;
    }
    detail(){
        console.log(`Person Details => Name: ${this.name}, City: ${this.city}, Age: ${this.age}`);
    }
}
const jenny = new Person("Jenny", "Pune", 22);
const bill = new Person("Bill", "Bangalore", 24);
const elon = new Person("Elon", "LA", 38);
const stew = new Person("Stew", "Mumbai", 58);
const arrayPerson = [jenny, bill, elon, stew];
//sorting of an array of person with its name
arrayPerson.sort((p1, p2)=>{
    return p1.name>=p2.name ? 1 : -1
});
arrayPerson.forEach(element => {
    console.log(element.name, element.city, element.age);
});

console.log(`sorting of an array of person with it's city name`);
arrayPerson.sort((p1, p2)=>{
    return p1.city>=p2.city ? 1 : -1
});
arrayPerson.forEach(element => {
    console.log(element.name, element.city, element.age);
});