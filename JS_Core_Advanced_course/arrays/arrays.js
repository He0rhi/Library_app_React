//Напишите функцию, которая принимает массив с числами и находит сумму квадратов элементов этого массива.
function SumSquare(arr){
return arr.reduce((sum,current)=>
     sum + current*current
)}
console.log( SumSquare([1,2,3,4,5]));