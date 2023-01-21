"use strict";
function isAnagram(w1, w2) {
    w1 = w1.toLowerCase();
    w2 = w2.toLowerCase();
    if (w1 === w2 || w1.length !== w2.length) {
        return false;
    }
    for (let i = 0; i < w2.length; i++) {
        if (w1.includes(w2[i])) {
            continue;
        }
        else {
            return false;
        }
    }
    return true;
}
isAnagram("Roma", "Amor") ? console.log("- They are anagrams!") : console.log("- They are NOT anagrams");
isAnagram("alaska", "alaskian") ? console.log("- They are anagrams!") : console.log("- They are NOT anagrams");
isAnagram("europe", "Perueo") ? console.log("- They are anagrams!") : console.log("- They are NOT anagrams");
