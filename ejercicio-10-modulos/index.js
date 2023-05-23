import { suma, mult } from "./modulos/controller.js"
import chalk from 'chalk';

console.log(chalk.blue.bgRed.bold('Hello world!'));


const sum = suma(1, 2)
console.log(sum);

const mul = mult(4, 5)
console.log(chalk.green.bold(mul));