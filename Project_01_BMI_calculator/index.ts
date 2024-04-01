import inquirer from 'inquirer';
console.log("--- BODY MASS INDEX CALCULATOR ---");
let answer;
let result : number;
let system = await inquirer.prompt([
    {
        name: "sys",
        type: "list",
        message: "Select system:",
        choices: ["Metric System", "English Units"],
    }
])
switch (system.sys) {
    case "Metric System": {
        answer = await inquirer.prompt([
            {
                name: "meter",
                type: "number",
                message: "Enter your height in meters:"

            },
            {
                name: "kg",
                type: "number",
                message: "Enter your weight in kgs:"

            },

        ])
        result = parseFloat((answer.kg / (Math.sqrt(answer.meter))).toFixed(1));
        break;
    }
    case "English Units": {
        answer = await inquirer.prompt([
            {
                name: "inch",
                type: "number",
                message: "Enter your height in inches:"

            },
            {
                name: "lbs",
                type: "number",
                message: "Enter your weight in pounds (LBS):"

            },

        ])
        result = parseFloat((703 * (answer.lbs / Math.sqrt(answer.inch))).toFixed(1));
        break;
    }
    default:
        result = 0;
}

console.log(`You BMI: ${result}`);
if (result < 18.5) {
    console.log("under weight");
}
else if (result >= 18.5 &&  result <= 24.9) {
    console.log("Normal Weight");
}
else if (result > 24.9 && result <= 29.9) {
    console.log("Over Weight");
}
else if (result > 29.9) {
    console.log("Obesity");
}
