//Напишите функцию, которая принимает число и выводит в консоль сумму первой и последней цифры этого числа.
function sumfirstlast(num){
const numToString = num.toString();
const firstNum=Number(numToString[0]);
const lastNum=Number(numToString[numToString.length-1]);
console.log(`${firstNum+lastNum}`);
}

sumfirstlast(123);