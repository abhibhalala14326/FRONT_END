// Reverse Strign

// let str = "Abhishek"

// console.log(str);

// let st = str.split("").reverse().join("");
// console.log(st);

// let str = "abhishek"

// txt = "";

// for (let rev = str.length-1 ; rev>=0; rev--)
//     {
//      txt += str[rev]    
//     }

//     console.log(txt);


// Vowel NUmber  (a,e,i,o,u)

// let str = "Hello world ";

// console.log(str);


// let count = 0;

// for ( i=0; i<=str.length; i++) {
    
//     if (str == "a" || str == "e" || str == "o" || str == "u" || str == "i");
//         { 
//             count++;
//             console.log(count)
//         }
//     }


// function vowels(string) {
//     var counter = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u') {
//             counter++;
//         } 
//         return counter;
//     }
// }


// console.log(vowels("hello world"))
function vowels(value) {
    let counter = 0;
    let char = '';
    for (let i = 0; i < value.length; i++) {
        char = value[i].toLowerCase();
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            counter++
        }

    }
    return counter;
}

console.log(vowels("hello world e"));