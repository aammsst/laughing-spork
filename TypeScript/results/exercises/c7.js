"use strict";
function countWords(string) {
    string = string.toLowerCase();
    let arrayStr = string.split(' ');
    let finalStr = '';
    for (let i = 0; i < arrayStr.length; ++i) {
        let count = 1;
        if (arrayStr[i].match(/[^A-Za-z0-9]/g)) {
            arrayStr[i] = arrayStr[i].replace(/[^A-Za-z0-9]/g, '');
        }
        if (finalStr.search(arrayStr[i]) > 0) {
            continue;
        }
        for (let j = i + 1; j <= arrayStr.length; ++j) {
            if (arrayStr[i] == arrayStr[j]) {
                count += 1;
            }
        }
        if (count == 1) {
            finalStr += `- The word "${arrayStr[i]}" appears only ${count} time\n`;
        }
        else {
            finalStr += `- The word "${arrayStr[i]}" appears ${count} times\n`;
        }
    }
    return finalStr;
}
console.log(countWords("Hello Fabri! Hello world! Hello xd!"));
