"use strict";

function vowelsCount(arr){
    const vowels = /[aeiouAEIOUаеёиоуыэюяАЕЁИОУЫЭЮЯ]/g;
    const countvowels = arr.match(vowels);
    console.log("Гласных букв: " +countvowels.length );
}
vowelsCount("Гласные буквы");