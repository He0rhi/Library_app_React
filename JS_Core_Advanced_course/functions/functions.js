//Напишите функцию для поиска первого неповторяющегося символа
function fisrtNonRepeatingNum(str){
let countNum={};
for(let symbol of str){
    countNum[symbol] = (countNum[symbol] || 0) + 1;
}
for(let symbol of str){
    if(countNum[symbol]===1){
     return  symbol;
    }
}
return null;
}
console.log(
fisrtNonRepeatingNum("aabbcD"));