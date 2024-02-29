#! usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000);
    });
};
async function welcome() {
    let rainbowtitle = chalkAnimation.rainbow('lets start calculation'); //start
    await sleep();
    rainbowtitle.stop();
    console.log(`
    ____________________
   |  _________________  |
   | | JO           0. | |
   | |_________________| |
   |  ___ ___ ___   ___  |
   | | 7 | 8 | 9 | | + | |
   | |___|___|___| |___| |
   | | 4 | 5 | 6 | | - | |
   | |___|___|___| |___| |
   | | 1 | 2 | 3 | | x | |
   | |___|___|___| |___| |
   | | . | 0 | = | | / | |
   | |___|___|___| |___| |
   |_____________________|`);
    //console.log("${rainbowtitle}is fine"):
}
await welcome();
async function askQuestion() { }
const answers = await inquirer
    .prompt([
/* Pass your answer here */
]);
// Use user feedback for ---whatever!!
//console.log(answers);
if (answers.operator == "Addition") {
    console.log('${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}');
}
else if (answers.operations == "Subtraction") {
    console.log('${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}');
}
else if (answers.operations == "Multiplication") {
    console.log('${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}');
}
else if (answers.operations == "Division") {
    console.log('${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}');
}
else {
    console.log("Invalid input");
}
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "do you want to continue? press y or n: "
        });
    } while (again.restart == 'y' || again.restart == 'Y' || again.restart == 'yes');
}
await startAgain();
