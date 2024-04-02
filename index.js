#! /usr/bin/env node
import inquirer from "inquirer";
// create a variable for storing the our answer
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter seceond number", type: "number", name: "seceondNumber" },
    { message: "Select 1 of the operator for performing the operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }
]);
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.seceondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.seceondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.seceondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.seceondNumber);
}
else {
    console.log("please select valid operator");
}
