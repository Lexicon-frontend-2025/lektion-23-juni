// en variabel
let courseName: string = 'Frontendutveckling'; // definiera variabel med typen string
let studentsEnrolled: number = 30; // definiera variabel med typen number
let isTypeScriptFun: boolean = true; // definiera variabel med typen boolean (true/false)

console.log(`Kursen heter ${courseName} och har ${studentsEnrolled}st studenter`);
console.log(studentsEnrolled, courseName);
console.log(isTypeScriptFun);

// funktion som tar en sträng som parameter och returnerar den i en annan sträng
function greetStudent(name: string): string {
    // template literals
    return `Välkommen, ${name}`;
};
// function <functionName>(<parameterName>: parameterType): functionReturnType {
// functionality
//}

function divideByTwo(num: number): number {
    return num / 2;
};

console.log(greetStudent("Alice"));

// kompilera koden genom `npx tsc` i terminalen - ni kommer att se att en ./dist-mapp skapas