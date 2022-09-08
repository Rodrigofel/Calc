// Import stylesheets
import './style.css';
import { calculator } from './calculator.js';
import { sum, sub, split, plus } from './calculator.js';
import { asyncOperation } from './request';

/*
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
*/

const app = document.querySelector('#app');
const calculadora = new calculator();

const header = document.createElement('h3');
header.textContent = 'Calculadora';
app.append(header);

const form = document.createElement('form');

form.append(createInput({ name: 'input-a' }));
form.append(createInput({ name: 'input-b' }));

form.append(
  createButton({
    label: '+',
    onclick: () => {
      const { a, b } = getValues();
      const value = calculadora.sum(a, b);
      saveResult(`${a} + ${b} = ${value}`);
    },
  })
);

form.append(
  createButton({
    label: '-',
    onclick: () => {
      const { a, b } = getValues();
      const value = calculadora.sub(a, b);
      saveResult(`${a} - ${b} = ${value}`);
    },
  })
);

form.append(
  createButton({
    label: 'x',
    onclick: () => {
      const { a, b } = getValues();
      const value = calculadora.plus(a, b);
      saveResult(`${a} x ${b} = ${value}`);
    },
  })
);

form.append(
  createButton({
    label: '÷',
    onclick: () => {
      const { a, b } = getValues();
      const value = calculadora.split(a, b);
      saveResult(`${a} ÷ ${b} = ${value}`);
    },
  })
);

app.append(form);

const resultListSection = document.createElement('section');
const resultList = document.createElement('ul');
const resultHeader = document.createElement('h4');
resultHeader.textContent = 'Resultado';

resultListSection.append(resultHeader);
resultListSection.append(resultList);
app.append(resultListSection);

function createInput({ name }) {
  const input = document.createElement('input');
  input.name = name;
  return input;
}

function createButton({ label, onclick }) {
  const button = document.createElement('button');
  button.textContent = label;
  button.onclick = onclick;
  button.type = 'button';

  return button;
}

function getValues() {
  const { value: a } = document.querySelector('input[name=input-a]');
  const { value: b } = document.querySelector('input[name=input-b]');

  return { a, b };
}

function saveResult(value) {
  const li = document.createElement('li');
  li.textContent = value;
  resultList.insertBefore(li, resultList.firstChild);
}

asyncOperation();
