//Напишите код, в котором попытаетесьобратиться к переменной до её объявления сиспользованием var, let и const. 
//Определите,какие переменные допускают такое использование, а какие нет.

try{
console.log(varVariable);//undefined
}
catch(error)
{
    console.log(error);
}
var varVariable=10; 
try{
console.log(letVariable); //ReferenceError: Cannot access 'letVariable' before initialization
}
catch(error)
{
    console.log(error);
}
let letVariable=10;
try
{
console.log(constVariable); //ReferenceError: Cannot access 'constVariable' before initialization
}
catch(error)
{
    console.log(error)
}
const constVariable=10;
   