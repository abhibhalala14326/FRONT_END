//  Check if a number is odd or even in JavaScript

{
    let a = 1;

    if (a % 2 == 0) {
        console.log(a + " is an even number");
    } else {
        console.log(a + " is an odd number");
    }
}

// Find the larger of two number


{

    let num1 = 10;
    let num2 = 20;

    if (num1 > num2) {
        console.log(num1 + " is the larger number");
    } else {
        console.log(num2 + " is the larger number");
    }

}

// Perform arithmetic operations on two numbers

{
    let num1 = 10;
    let num2 = 20;

    if (num1 < num2) {
        console.log(`num1 is smaller than num2 ans -> ${num1}`);
    } if (num2 > num1) {
        console.log(`num2 is smaller than num1 ans -> ${num2}`);
    }
    if (num1 == num2) {
        console.log(`number is same -> ${num1}`);

    } else {
        console.log("number is different")
    } if (!(num1 == num2)) {
        console.log(false);
    }
}


//  Find the grade for input marks

{
    let eng = 100;
    let guj = 87;
    let math = 95;
    let sci = 78;
    let hist = 90;

    let Total = eng + math + sci + guj + hist;
    console.log(`total marks = ${Total}`);

    let pre = (Total * 100) / 500;

    console.log(`pre = ${pre}   `);


    if (pre <= 35) {
        console.log("fail");
    } else if (pre >= 35 && pre <= 65) {
        console.log("grad d");
    } else if (pre >= 65 && pre <= 85) {
        console.log("grad c");
    } else if (pre >= 85 && pre <= 90) {
        console.log("grad b");
    } else if (pre >= 100) {
        console.log("grad a");
    }

}


//  Sort three numbers

{
    let a = 210;
    let b = 567;
    let c = 155;
    let temp;

    console.log("unsorted numbers  ", a, b, c);

    if (a >= b) {
        temp = a;
        a = b;
        b = temp;
    }
 
    if (b >= c) {
        temp = b;
        b = c;
        c = temp;
    }

    if (a >= b) {
        temp = a;
        a = b;
        b = temp;
    }


    console.log(`The sorted numbers are: ${a}, ${b}, ${c}`);

}

//Evaluate each of the following JavaScript expressions and show the value.


{

    let a = -9;
    let b = 3;
    c = 50;
   

    if (a * b) {
        console.log(a * b);

        if (c >= 50) {

            console.log('value is 50')

        } else {

            console.log('value is less than 50')
        }
    }

    console.log(17 % 5)
    console.log(5 % 17)
    console.log(5 / 10)

    console.log(4 == 4)
    console.log(4 != 5)
    console.log(7 <= 8)



}

