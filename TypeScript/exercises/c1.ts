// * Write a function that receives two words and verifies whether they
// * are anagrams or not
// * When two different words have the same characters and the same 
// * amount of them, they are anagrams of each other.
// * It's not necessary to verify the existence of those words.

function isAnagram(w1: string, w2: string): boolean {

    w1 = w1.toLowerCase();
    w2 = w2.toLowerCase();

    if (w1 === w2 || w1.length !== w2.length) { // w1 and w2 have to be diffrent words
        // and they have to have the same amount of characters
        return false;
    }
    for (let i = 0; i < w2.length; i++) {
        if (w1.includes(w2[i])) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}

isAnagram("Roma", "Amor") ? console.log("- They are anagrams!") : console.log("- They are NOT anagrams");
isAnagram("alaska", "alaskian") ? console.log("- They are anagrams!") : console.log("- They are NOT anagrams");
isAnagram("europe", "Perueo") ? console.log("- They are anagrams!") : console.log("- They are NOT anagrams");
