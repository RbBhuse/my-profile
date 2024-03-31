console.log(`=========Assignment no:1=========`);
let professor = {
  name: "Elon",
  age: 40,
  subject: "Javascript",
  isCertified: true,
  teachingStyle: "Interactive",
  degree: {
    engineering: "CSC",
    PHD: "Adv Computing",
    Diploma: "CSE",
    HSC: "Science with Maths",
  },
  certificate: [
    "Hacker Rank Participation",
    "Certificate in IFE course",
    "Certificate in Adv Programming",
  ],
};

console.log(`====== Adding 5 property in an object ======`);

console.log(
  `Name: ${professor.name}, age:${professor.age}, Subject: ${professor.subject}, isCertified: ${professor.isCertified}, Teaching Style: ${professor.teachingStyle}`
);

console.log(`====== Including Nested object ======`);
console.log(professor.degree);

console.log(`====== Adding Certificate array in object ======`);
console.log(professor.certificate);

console.log(`====== Add new property in "totalExperience ======`);
(professor.totalExperience = "14 years"),
  console.log(`Total Experience: ${professor.totalExperience}`);

console.log(`====== Modified property "isCertified" ======`);
professor.isCertified = false;
console.log(`Value after modification: ${professor.isCertified}`);

console.log(
  `====== Adding new value "Oracle Certified" in certificate array ======`
);
professor.certificate.splice(2, 0, "Oracle Certified");
console.log(professor.certificate);

console.log(`====== Last element of  Certificate array ======`);
len = professor.certificate.length;
  console.log(professor.certificate[len - 1]);

console.log(`====== Complete object in console ======`);
console.log(professor);

console.log(`====== Log certificate array using for loop ======`);
for (const key of professor.certificate) {
  console.log(key);
}
