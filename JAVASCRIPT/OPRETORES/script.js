//ternary opretores
{
let age = 18 ;

let result = 18 >= age ? 'adult' : 'child';

console.log(result); // : adult
}  





//typeof opretores

{

    let age = 18 ;
     let string = "name";
     let b = 10n;

     console.log(typeof age);
     console.log(typeof string);
     console.log(typeof b);


}


//logical opretores

{
    //and 

    let a = 10;
    let b = 5;

    console.log(a > 5 && b <= 5); // Output: true
    console.log(a > 5 && b === 5); // Output: true
    console.log(a > 5 && b > 5); // Output: false
    console.log(a > 5 && b < 5); // Output: false


    //OR 

     console.log(a < 5 || b <= 5); // Output: true
    console.log(a > 5 || b === 5); // Output: true
    console.log(a > 5 || b > 5); // Output: false
    console.log(a > 5 || b < 5); // Output: false

    // not

    console.log(!(a > 5)); // Output: false
     console.log(!(a <= 5)); // Output: true


}

// bitwise opretores

{
    let a = 1;
    let b = 0;

    console.log(a & b);
    console.log(b & a);
    console.log(b & b);

    // or

    console.log(a | b);
    console.log(b | a);
    console.log(b | b);


//xor

    console.log(a ^ b);
    console.log(b ^ a);
    console.log(b ^ b);





  
  

}


