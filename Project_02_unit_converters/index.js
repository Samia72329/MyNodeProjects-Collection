const inchToFeet = (inch) => {
    return inch / 12;
};
const feetToInch = (feet) => {
    return feet * 12;
};
const KgToLbs = (kg) => {
    return kg * 2.20462;
};
const lbsToKg = (lbs) => {
    return lbs / 2.2046;
};
const mtoKm = (m) => {
    return m / 1000;
};
const kmToM = (km) => {
    return km * 1000;
};
import inquirer from "inquirer";
let unit;
let answer = await inquirer.prompt([
    {
        name: "selection",
        type: "list",
        message: "Select from options",
        choices: ["inches to feet", "feet to inches", "Kg to pounds", "pounds to kg", "meter to kilometer", "kilometer to meter"]
    }
]);
switch (answer.selection) {
    case "inches to feet":
        unit = await inquirer.prompt([
            {
                name: "inch",
                type: "number",
                message: "Enter inches",
            }
        ]);
        console.log(inchToFeet(unit.inch));
        break;
    case "feet to inches":
        unit = await inquirer.prompt([
            {
                name: "feet",
                type: "number",
                message: "Enter feet",
            }
        ]);
        console.log(feetToInch(unit.feet));
    case "Kg to pounds":
        unit = await inquirer.prompt([
            {
                name: "kg",
                type: "number",
                message: "Enter kgs",
            }
        ]);
        console.log(KgToLbs(unit.kg));
    case "pounds to Kg":
        unit = await inquirer.prompt([
            {
                name: "lbs",
                type: "number",
                message: "Enter pounds",
            }
        ]);
        console.log(lbsToKg(unit.lbs));
    case "meter to kilometer":
        unit = await inquirer.prompt([
            {
                name: "m",
                type: "number",
                message: "Enter meters",
            }
        ]);
        console.log(mtoKm(unit.m));
    case "kilometer to meter":
        unit = await inquirer.prompt([
            {
                name: "km",
                type: "number",
                message: "Enter meters",
            }
        ]);
        console.log(kmToM(unit.km));
}
