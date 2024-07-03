//  Write a program that calculates the sum of all numbers from 1 to 100

// {

//     let number = 100,sum=0;

//     for(let i = 0; i < number; i++)
//         {

//          sum +=  i;
//         }

//         console.log( sum);
// }

//Write a program that prints the multiplication table of a given number(for example, 5).


// {
//     let table =  3 ;

//     for (let i= 1; i <= 10 ; i++)
//         {

//             console.log(`${table} * ${i} = ${table * i}`)
//         }
// }


// . Write a program that prints the first 10 numbers in the Fibonacci

// {
//     let fibonacci = 5 ;

// let a =0 ,b = 1 ,next;

// for(let i = 0 ; i < fibonacci ; i++)
//     {
//         console.log(a)
//         next = a;
//         a += b ;
//         b = next;

//     }
// }


// Write a program that calculates the factorial of a given number(forexample, 5!).
// {
// let factorial = 4;

// let result = 1;
// for(let i = 0; i <factorial; i++)
//     {
//         result *=factorial;
//     }

//     console.log(result);


// }


// Write a program that reverses a given string
// {
// let str = "abhishekh"

// let a = "";

// for (let i = str.length-1 ; i >= 0 ; i--)
//     {
//         a += str[i];
//     }

//     console.log(a);
// }


//  Write a program that finds the largest number in an array.


// {
//     let arr = [4, 8, 1, 2, 5, 9]

//     for (let i = 0; i < arr.length; i++)
//         {
//             if (arr[0]<arr[i])
//                 {
//                     arr[0] = arr[i];
//                     console.log(`Largest number is ${arr[0]}`);
//                 }
//         }
// }

//Write a program that calculates the sum of all elements in an array

// {
//     let arr = [4, 8, 1, 2, 5, 9]
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i]
//         }

//         console.log(`Sum of all elements in the array is ${sum}`);
//     }


// Write a program that counts the number of vowels in a given string

{
    let str = "abhishek"
    let counts = 0;

    for(let i= 0; i<=str.length; i++)
        {
            if(str[i] == 'i' || str[i] == 'o' || str[i] == 'u' ||str[i] == 'e' || str[i] == 'a')
                {
counts++;
                }
        }
        console.log(counts)
    
}
