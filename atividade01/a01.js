/*1. Crie uma variável e atribua um número e, depois mostre na console a tabuada de
multiplicação desse número (de 1 a 10).*/

const multiplicador = 5;

for (let i = 0; i <= 10; i++) {
  let resultado = multiplicador * i;
  console.log(`${multiplicador} * ${i} = ${resultado}`);
}

/*2. Crie uma função que receba um objeto com nome e idade, e diga se a pessoa é
maior de idade ou não.*/

function verificarIdade(nome, idade) {
  if (idade >= 18) {
    console.log(`${nome} possui ${idade} e é maior de idade`);
  } else {
    console.log(`${nome} possui ${idade} e é menor de idade`);
  }
}

console.log(verificarIdade("Kleyciane", 26));

/*3. Imprima os números de 1 a 100, mas:
  ● Para múltiplos de 3, imprima "Fizz"
  ● Para múltiplos de 5, imprima "Buzz"
  ● Para múltiplos de ambos, imprima "FizzBuzz"*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i, "FizzBuzz");
  } else if (i % 3 == 0) {
    console.log(i, "Fizz");
  } else if (i % 5 == 0) {
    console.log(i, "Buzz");
  } else {
    console.log(i);
  }
}

/*4. Implemente uma função calculadora(a, b, operação) que realiza as
operações +, -, * e /.*/

function calculadora(a, b, operacao) {
  let resultado

  if ((a == 0) || (b == 0)) {

    console.log("Somente números diferentes de zero (0)");
  } else {

    switch (operacao) {
      case "+":
        resultado = a + b;
        console.log(`Resultado: ${a} + ${b} = ${resultado}`);
        break
      case "-":
        resultado = a - b;
        console.log(`Resultado: ${a} - ${b} = ${resultado}`);
        break
      case "*":
        resultado = a * b;
        console.log(`Resultado: ${a} * ${b} = ${resultado}`);
        break
      case "/":
        resultado = a / b;
        console.log(`Resultado: ${a} / ${b} = ${resultado}`);
        break
      default:
        console.log("Operação Inválida");
        break
    }
  }
}

console.log(calculadora(10, 5, "+"))

/*5. Crie uma função que converta temperaturas de Celsius para Fahrenheit e
vice-versa, com base em um objeto de entrada. */

function converterTemperatura(temp) {
    let valor_resultado;
    
    if (temp.escala.toLowerCase() === 'celsius') {
        valor_resultado = {
            valor: temp.valor * 1.8 + 32,
            escala: 'Fahrenheit'
        };
    } else if (temp.escala.toLowerCase() === 'fahrenheit') {
        valor_resultado = {
            valor: (temp.valor - 32) / 1.8,
            escala: 'Celsius'
        };
    } else {
        throw new Error('Escala inválida. Use "Celsius" ou "Fahrenheit".');
    }
    
    return valor_resultado;
}

// Exemplo 1: Celsius para Fahrenheit
const temp1 = { valor: 25, escala: 'Celsius' };
console.log(converterTemperatura(temp1)); 

// Exemplo 2: Fahrenheit para Celsius
const temp2 = { valor: 77, escala: 'Fahrenheit' };
console.log(converterTemperatura(temp2));