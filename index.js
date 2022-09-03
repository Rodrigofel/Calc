// Import stylesheets
import './style.css';
import { calculator } from './calculator.js';
import { sum, sub, split, plus } from './calculator.js';

console.clear;
const calcula = new calculator();

calcula.sum(10, 20);
calcula.sub(10, 20);
calcula.plus(10, 20);
calcula.split(10, 20);

console.log('----------------');

sum(1, 1);
sub(2, 2);
plus(3, 3);
split(4, 4);

console.log('----------------');

const calc = new calculator(10, 25);
calc.sum();
calc.sub();
calc.plus();
calc.split();
