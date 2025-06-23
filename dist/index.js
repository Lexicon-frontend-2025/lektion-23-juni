"use strict";
// en variabel
let courseName = '"Frontendutveckling"'; // definiera variabel med typen string
let studentsEnrolled = 30; // definiera variabel med typen number
let isTypeScriptFun = true; // definiera variabel med typen boolean (true/false)
console.log(`Kursen heter ${courseName} och har ${studentsEnrolled}st studenter`);
console.log(studentsEnrolled, courseName);
console.log(isTypeScriptFun);
// funktion som tar en sträng som parameter och returnerar den i en annan sträng
function greetStudent(name) {
    // template literals
    return `Välkommen, ${name}`;
}
;
// function <functionName>(<parameterName>: parameterType): functionReturnType {
// functionality
//}
function divideByTwo(num) {
    return num / 2;
}
;
console.log(greetStudent("Alice"));
// kompilera koden genom `npx tsc` i terminalen - ni kommer att se att en ./dist-mapp skaas
//# sourceMappingURL=index.js.map