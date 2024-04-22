const elementProfile = document.getElementById("profile");
console.log(elementProfile);
console.log(elementProfile.innerHTML);
console.log(`======querySelector() with element name =======`);
const elementH2 = document.querySelector('h2');
console.log(elementH2);
console.log(elementH2.innerHTML);
console.log(`======querySelector() with id techStack =======`);
const elementTechStack = document.querySelector('#techStack');
console.log(elementTechStack.innerHTML);
console.log(`======querySelector() with class ui =======`);
const elementUI = document.querySelector('.ui');
console.log(elementUI.innerHTML);

console.log(`======querySelectorAll() with element name =======`);
const elementsLi = document.querySelectorAll('li');
for (const element of elementsLi) {
    console.log(element.innerHTML);
}

console.log(`======querySelectorAll() with class name =======`);
const elementsUi = document.querySelectorAll('.ui');
for (const element of elementsUi) {
    console.log(element.innerHTML);
}
console.log('Modifying an existing element text');
const techStackElement = document.querySelector('#techStack');
techStackElement.innerHTML = "My Expertise in UI";

console.log('Changing CSS ');
techStackElement.style.color = "orange";





