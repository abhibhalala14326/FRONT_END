// Add two numbers input by the user
 {
    // let number1 = prompt("enter Thr Number")
    // let number2 = prompt("enter Thr Number")

    // console.log(`number1: ${number1} number2: ${number2} `);
    // let sum = +number1 + +number2;

    // console.log(sum);

 }

//  Calculate the area of a rectang

{
    let length = 10;
    let width = 5;

    console.log(`length : ${length} and width : ${width}`);

    let area = length * width;

    console.log(`area : ${area}`);
}

// Convert temperature from Celsius to Fahrenheit


{
    let Celsius = 12;

    console.log(`Celsius : ${Celsius}`);

    let Fahrenheit = (Celsius * 9/5) + 32;

    console.log(`Fahrenheit : ${Fahrenheit}`);
}


// .Find the remainder when one number is divided by another
  


{

    let a = 12 ;

    let b = 3;

    let divided = a/b ;

    console.log(`division : ${divided}`);

    let remainder = a % b;

    console.log(`remainder : ${remainder}`);




}

// Calculate the power of a number

{
    let number = 3;
    let power = 2;

    let result = number ** power;

    console.log(`number : ${number} power : ${power} result : ${result}`);
}


// .Combination of Arithmetic Operators

{

    let a = 4;
    let b = 6;

    let ans = a + b ;

    console
    console.log(`Addition : ${ans}`);

    ans = a - b ;
    console.log(`Subtraction : ${ans}`);

    ans = a * b ;
    console.log(`Multiplication : ${ans}`);

    ans = b / a;
    console.log(`Division : ${ans}`);

    ans = a % b;
    console.log(`Remainder : ${ans}`);

    ans = a ** b;
    console.log(`Power : ${ans}`);


}

// 8.Comparing Strings [5 String]


{
    let str1 = "apple";
    let str2 = "banana";
    let str3 = "apple";
    let str4 = "banana";
    let str5 = "20";
    console.log(`str1 and str2 : ${str1 == str2}`);
    console.log(`str1 and str3 : ${str1 == str3}`);
    console.log(`str2 and str4 : ${str2 == str4}`);
    console.log(`str1 and str5 : ${str1 == str5}`);
    console.log(`str1 and str2  : ${str1 === str2}`);
    console.log(`str1 and str3  : ${str1 === str3}`);
    console.log(`str2 and str4  : ${str2 === str4}`);
    console.log(`str1 and str5  : ${str4 === str5}`);

    
}

// Comparing Numbers [5 number]

{
    let num1 = 10;
    let num2 = 20;
    let num3 = 10;
    let num4 = 20;
    let num5 = 20.5;
    console.log(`num1 and num2 : ${num1 == num2}`);//false
    console.log(`num1 and num2 : ${num1 === num2}`);//false
    console.log(`num1 and num3 : ${num1 < num3}`);//false
    console.log(`num2 and num4 : ${num2 >= num4}`);//true
    console.log(`num1 and num5 : ${num1 <= num5}`);//true
   
}

// .Comparing Different Types [4 types]


{
    let str = "apple";
    let num = 10;
    let bool = true;
    console.log(`str and num : ${str == num}`);//false
    console.log(`str and bool : ${str == bool}`);//false
    console.log(`str and str : ${str != str}`);//false
    console.log(`num and bool : ${num == bool}`);//false
    console.log(`num and str : ${num == str}`);//flase
}


//Using Multiple Operators [4 types]
{

    let a = 10;
    let b = 20;
    let c = 30;

    a = b * a + c;

    console.log(`a : ${a}`);//230

    a = 5
    b = 5
    c = 4

    b = a * b * c - a + c;  //99

    console.log(`b : ${b}`); //99

    a = 2 
    b = 2
    c = 2

    c = a * b ** c;

    console.log(`c : ${c}`);//8

}

// Complex Assignments[2 types]

{
    let a = 10;
    let b = 20;

   c = a += b;

    console.log(`a : ${a}`);//30

    a = 10;
    b = 20;

    a *=  b;

    console.log(`a : ${a}`);//200

    a = 10;
    b = 2;

    a **= b;
    console.log(`a : ${a}`);

}


