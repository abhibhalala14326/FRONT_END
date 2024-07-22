  //function

 //  basic function

 // function name()
 // {
 //     console.log('name ')
 // }


//  name()

// perametar function 

 // function name(a , b)
 // {
 //     console.log('sum => ' , a+b)
 // }

//  name(4,7);


// return function

//  function name(a , b)
// {
//     return 'sum => ' , a+b;
// }

// let a= name(12,34)

// console.log(a);

// consturtor


// let data = new Function("a" , "b" ,"return a*b")
// console.log(data(12,12))


// functiom as variable (anonymous function)

// let data = function()
// {

// }

// data()

// IIFE

(function name(a,b,c)
{
    console.log(a+b-c)

})(3.4,45,5)



// arrow function 

// let data = (a,b)  =>
// {
// console.log(a*b)
// }

// data(34,34)





// !high order function

//! fonction is Object


function sum()
{
    let sum = 0;
    for(let i = 0; i<arguments.length;i++)
    {
        sum +=arguments[i]

        console.log(arguments[0])
    }
    console.log(sum);

    
}



sum(112,3,4,4,5,6,7,8,9,9,9,6,5,4,3)



// rest parametar(...)

// function name(...arge)
// {

//     console.log(arge.join())

// }

// name(1,2,3,4,5,6)

//! generator function
// {
//     function* generator()
//     {
//         yield 5;
//         yield 2;
//         yield 3;
//         yield 4;
// }

// let a= generator()
// console.log(a.next().value)
// console.log(a.next().value)
// console.log(a.next().value)
// console.log(a.next().value)
// console.log(a.next().value)
// console.log(a.next().value)

// }


//! this keyword

// let data = 
// {
//     firstName : "ahishek",
//     LastName : "BHalala",
//     Age : 19 ,
//     hobbies : ['coding' , "riding"  ],


//     test : function()
//     {
//         console.log(`this is my firstname : ${this.firstName} \n lastname : ${this.LastName} \n age : ${this.Age}  \n hobbies : ${this.hobbies[0]} `)

//     }

    

// }

// data.test();