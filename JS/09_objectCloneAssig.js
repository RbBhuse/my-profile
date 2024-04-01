console.log(`============= Creating object "bankSbi" with 4 properties ==============`);

const bankSbi = {
    name : "State bank of India",
    state: "Maharashtra",
    branch :"Hinjewadi",
    numOfEmployee : 10000
}
console.log(bankSbi);
console.log(`============= Creating object "bankLocation" ==============`);

const bankLocation = {
                     street : "Mann Road Hinjewadi",
                     city : "Pune",
                     pin : 1234
}
console.log(bankLocation);

console.log(`============= cloning the  object "bankSbi" and  "bankLocation"  using object.assign() ==============`);

const cloneObjet = Object.assign({},bankSbi,bankLocation);
console.table(cloneObjet);

console.log(`============= Creating object "rateOfInterest" ==============`);

const rateOfInterest = {
    homeLoanInterest : "6.2% to 8.5% p.a.",
    personalLoanInterest : "5.5% to 10.5% p.a.",
    dueInterest : "8.5% to 15.5% p.a.",
}
console.log(rateOfInterest);

console.log(`============= Merge "bankSbi", "bankLocation", "rateOfInterest" into object "sbiDetails" ==============`);

const sbiDetails = Object.assign({},bankSbi,bankLocation,rateOfInterest);
console.log(sbiDetails);
console.table(sbiDetails);

console.log(`============= Traverse object "sbiDetails" ==============`);
for (const key in sbiDetails) {
console.log(`${key}==>${sbiDetails[key]}`);
}

