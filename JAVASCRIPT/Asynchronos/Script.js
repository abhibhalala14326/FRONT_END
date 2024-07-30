//?  setTimeout

//! The setTimeout() method executes a block of code after the specified time. The method executes the code only once.

{
    //! setTimeout(function, milliseconds);

    //! function - a function containing a block of code
    //! milliseconds - the time after which the function is executed
}


// function sum(a,b) {
//     console.log(b*a)
// }

                                            
// let id = setTimeout(sum,4000,12,34); 
// clearTimeout(id)
//     console.log(id)


//? setInterval

//  let sum = () =>
//      {
  
//    console.log(' hey ')
//   }


//   setInterval(sum,2000)


// let a=0;
// let intervalid = setInterval(() => {
// console.log(++a)
// console.log('hey ')
    
// }, 2000);

// console.log(setIntervalid)
// console.log("Interval id: ", intervalid);

// let id = intervalid;
// clearInterval(intervalid)
// console.log(id)


// function date (){


//     let timeandDate = new Date();

//     let time = timeandDate.toLocaleTimeString();

//     console.log(time);

//     setTimeout(date,3000);




// };

// date();




{
    let count = false;

    let countvalue = new Promise(function(reject,resolve)
{
    if(count)
    {
        resolve('resolve true')
    }else
    {
        reject ("reject false");
    }
});

console.log(countvalue)


   }






