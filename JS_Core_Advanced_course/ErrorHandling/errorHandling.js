/*Напишите функцию, которая принимает два числа в качестве параметров и выдаетпользовательскую ошибку, если второечисло равно нулю*/

function errorHandling(firstNum,secondNum){
if(secondNum===0){
    throw new Error("Ошибка! Второе число равно нулю");
}
else{
    return secondNum;
}
}
console.log(errorHandling(1,0));