import * as inquirer from "inquirer";
import chalk from "chalk";
// calculator operators
var operator;
(function (operator) {
    operator["ADD"] = "Addition";
    operator["SUBTRACT"] = "Subtraction";
    operator["MULTIPLY"] = "Multiplication";
    operator["DIVID"] = "Division";
})(operator || (operator = {}));
const prompt = inquirer.createPromptModule();
function validateNumber(input) {
    if (isNaN(parseFloat(input))) {
        Retrn: "please enter a valid number";
    }
    return true;
}
async function main() {
    const input = await prompt([
        {
            type: "input",
            name: "num1",
            message: "Please enter the first number",
            validate: validateNumber,
        },
        {
            type: "rawlist",
            name: "operator",
            message: "select an operation",
            choices: Object.values(operator)
        },
        {
            type: "input",
            name: "num2",
            message: "please enter the second number:",
            validate: validateNumber,
        }
    ]);
    const num1 = parseFloat(input.num1);
    const num2 = parseFloat(input.num2);
    let result;
    const selectedOperator = input.operator;
    let Result;
    if (selectedOperator === operator.ADD) {
        result = num1 + num2;
        console.log(chalk.green.bgRedBright('Result is : ${result}'));
    }
    else if (selectedOperator === operator.DIVID) {
        result = num1 / num2;
        console.log(chalk.yellow.bgBlack('Result is : ${result}'));
    }
    else if (selectedOperator === operator.MULTIPLY) {
        result = num1 * num2;
        console.log(chalk.blue.bgYellowBright('Result is : ${result}'));
    }
    else if (selectedOperator === operator.SUBTRACT) {
        result = num1 - num2;
        console.log(chalk.blue.bgYellowBright('Result is : ${result}'));
    }
}
main();
