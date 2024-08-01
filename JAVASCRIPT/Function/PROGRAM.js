// Write a program to convert temperatures between Celsius and Fahrenheit.

// function Celsius(c)
// {
//     f = c * 9/5 + 32;

//     console.log(" temperatures = >" ,f)
// },

// Celsius(3)

//  Write a program that acts as a simple calculator performing addition, subtraction, multiplication, and division.

// let simple = (a, b) => {
//   console.log("addition = >", a + b);
//   console.log("subtraction = >", a - b);
//   console.log("multiplication = >", a * b);
//   console.log("division = >", a / b);
// };
// simple(2, 2);

// Write a program to find the largest of three numbers.

let largest = (a ,b ,c) =>
{
   console.log(Math.max(a,b,c))
}

// largest(100,4,90)

//  Write a program to find the factorial of a given number

let factorial1 = (factorial) =>
    {
    let result = 1;
    for(let i = 1; i <=factorial; i++)
        {
            result *= i; 
        }

        console.log(result);

    }

    // factorial1(6)

// Write a program to print the first n terms of the Fibonacci sequence.

let fibonacci = (fibo) =>
{
    let a = 0, b = 1, next;

    for(let i = 0 ; i < fibo ; i++)
        {
            console.log(a)
            next = a;
            a += b ;
            b = next;

        }
}

fibonacci(9) //0,1,1,2,3,5

// Write a program to reverse a given string

let reverse =  (str) =>
{
    let a = "";

    // for (let i = str.length-1 ; i >= 0 ; i--)
    //     {
    //         a += str[i];
    //     }

    //     console.log(a);
    // }

   a = str.split("").reverse().join("");

    console.log(a)
}
// reverse("Abhishek")

// ? palindrome.

function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[str.length - 1 - i]) 
          {
            return 'not palindrome' ;
        }
    }
    return 'palindrome';
}

let str1 = "avva";
let str2 = "nitin";
let str3 = "abhi";

// console.log(isPalindrome(str1));
// console.log(isPalindrome(str2));
// console.log(isPalindrome(str3));
// 
// Write a program to find the sum of the first n natural numbers.\

// let natural = (a) =>
// {
//     let sum= 0;
//     for (let i=0; i<=a; i++)
//     {
//       sum =sum+ i;
//     }
//     console.log(sum);
// }

// natural(10)

// Write a program to check if a year is a leap year or not.

// {
//     let Leep = (a)  =>
//     {
//         if(a%4==0)
//         {
//             console.log('leep yeer',a)
//         }else{
//             console.log("not a leep year" , a)
//         }
//     }

//     Leep(2024)

// }

// Write a program to count the number of vowels and consonants in a given string.

// {
//     let vowels = (str) =>
//     {
//         let count = 0;

//         for (let i = 0; i<=10; i++)
//         {
//             if (str[i] == 'a' || str[i] == 'i' || str[i] == 'e' || str[i] == 'u' || str[i] == 'g' || str[i] == 'h')
//             {
//                 count++
//             }

//         }
//         console.log(count)
//     }

//     vowels('abhishek')
// }

// 1. Write a JS function that reverse a number.
// Example x = 15438
// Expected Output: 83451

// {

let revnumber = () => {
let num1 = 123456789;
let result = num1.toString()

let a = "";

    for (let i = result.length-1 ; i >= 0 ; i--)
        {
            a += result[i];
        }

        console.log(a);
    }


    // revnumber()

// }

//  Write a JS function that returns a passed string with letters in alphabetical order.
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

// let alfaorder = () =>
// {
//     str = "abhishek"
//    console.log(str.split('').sort().join(""))

// }

// alfaorder();

//  Write a JS function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox'

{
    let largest = (str) =>
    {
let word = str.split(' ')
let long = "";

for(let i = 0 ; i< word.length; i++)

    {
        if(word[i].length > long.length)
        {
            long = word[i];
        }
    }
    console.log(long)

}
// largest("abhi bhalala")
}

//  Write a JS function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox'

{
  // function capitalFirstLetter(str) {
  //     let words = str.split(' ');
  //     for (let i = 0; i < words.length; i++) {
  //       words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  //     }
  //     let capitalizedStr = words.join(' ');
  //    console.log(capitalizedStr)
  //   }
  // capitalFirstLetter("abhi bhalala")
}

// Write a JavaScript function that checks whether a number is perfect.

let perfect = () => {
  let a = 28;
  let sum = 0;
  for (let i = 0; i < a; i++) {
    if (a % i == 0) {
      sum += i;
    }
  }
  if (sum == a) {
    console.log("yes perfect_number");
  } else {
    console.log("not perfect_number");
  }
};
perfect();
