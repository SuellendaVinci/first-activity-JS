// 1 - Faça um Programa que peça as 4 notas bimestrais e mostre a média.

const grades = (a, b, c, d) => {
  let average = (a + b + c + d) / 4;
  average = average.toFixed(1);
  return average;
};

let g1 = parseFloat(prompt("Type the first grade:"));
let g2 = parseFloat(prompt("Type the second grade:"));
let g3 = parseFloat(prompt("Type the third grade:"));
let g4 = parseFloat(prompt("Type the fourth grade:"));

console.log("The grade average is equal to: " + grades(g1, g2, g3, g4));

// 2 - Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.

const circleArea = (r) => {
  let area = Math.PI * r ** 2;
  area = area.toFixed(1);
  return area;
};

let r = parseFloat(prompt("Type the circle's radius:"));

console.log("The circle's area is equal to: " + circleArea(r) + " u.a");

// 3 - Faça um Programa que peça a temperatura em graus Fahrenheit,
// transforme e mostre a temperatura em graus Celsius. C = 5 * ((F-32) / 9).

const celsiusConversion = (f) => {
  let c = 5 * ((f - 32) / 9);
  c = c.toFixed(1);
  return c;
};

let f = parseFloat(prompt("Type the temperature in Fahrenheit:"));
console.log(
  "The temperature in celsius is equal to: " + celsiusConversion(f) + "°C"
);

// 4 - Faça um programa que calcule e mostre a área e o perímetro de uma sala retangular
//  cujas medidas são fornecidas pelo usuário.

const area = (l, w) => {
  let area = l * w;
  area = area.toFixed(1);
  return area;
};

const perimeter = (l, w) => {
    let perimeter = 2 * l + 2 * w;
    perimeter = perimeter.toFixed(1);
    return perimeter;
  };

let l = parseFloat(prompt("Type the room's length:"));
let w = parseFloat(prompt("Type the room's width:"));

console.log("The room's area is equal to: " + area(l,w) + " u.a");
console.log("The room's perimeter is equal to: " + perimeter(l,w) + " u.c");


// 5 - Escreva um programa para ler as dimensões de uma cozinha retangular,
//  em seguida calcular e escrever a quantidade de caixas de azulejos necessárias
//  para cobrir o chão da cozinha. Cada caixa de azulejos possui 2,5 m2.

const tileBoxes = (l, w) => {
  let tileBox = 2.5;
  let kitchenArea = l * w;
  let numberOfTileBoxes = kitchenArea / tileBox;
  return numberOfTileBoxes;
};

let lenght = parseFloat(prompt("Type the kitchen's length:"));
let width = parseFloat(prompt("Type the kitchen's width:"));


console.log("The number of tile boxes to cover the floor is equal to: " + tileBoxes(lenght,width) + " square meters");

