export class calculator {
  a;
  b;
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  sum(a, b) {
    if (this.a != undefined && this.b != undefined)
      if (this.a != null || this.b != null) return Number(this.a + this.b);
    if (a == null || b == null)
      return console.error('Não há valores para calcular');
    return Number(a) + Number(b);
  }

  sub(a, b) {
    if (this.a != undefined && this.b != undefined)
      if (this.a != null || this.b != null) return console.log(this.a - this.b);
    if (a == null || b == null)
      return console.error('Não há valores para calcular');
    return a - b;
  }

  plus(a, b) {
    if (this.a != undefined && this.b != undefined)
      if (this.a != null || this.b != null) return console.log(this.a * this.b);
    if (a == null || b == null)
      return console.error('Não há valores para calcular');
    return a * b;
  }

  split(a, b) {
    if (this.a != undefined && this.b != undefined) {
      if (this.a != null || this.b != null)
        if (Number(this.b) == 0) return console.error('Invalid Number');
      return this.a / this.b;
    }
    if (a == null || b == null)
      return console.log('Não há valores para calcular');
    if (Number(b) == 0) return console.error('Invalid Number');
    return a / b;
  }
}

export function sum(a, b) {
  if (a == null || b == null)
    return console.error('Não há valores para calcular');
  console.log(a + b);
}
export function sub(a, b) {
  if (a == null || b == null)
    return console.log('Não há valores para calcular');
  if (Number(b) == 0) return console.error('Invalid Number');
  console.log(a - b);
}
export function split(a, b) {
  if (a == null || b == null)
    return console.log('Não há valores para calcular');
  if (Number(b) == 0) return console.error('Invalid Number');
  console.log(a / b);
}
export function plus(a, b) {
  if (a == null || b == null)
    return console.error('Não há valores para calcular');
  console.log(a * b);
}
