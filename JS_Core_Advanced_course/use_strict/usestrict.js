//Напишите функцию, которая принимает строку и возвращает количество гласных букв в ней. Используйте строгий режим
"use strict";

function vowelsCount(arr){
    const vowels = /[aeiouAEIOUаеёиоуыэюяАЕЁИОУЫЭЮЯ]/g;
    const countvowels = arr.match(vowels);
    console.log("Гласных букв: " +countvowels.length );
}
vowelsCount("Гласные буквы");