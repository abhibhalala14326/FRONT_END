//?  // Javscript async/await

// We use the async keyword with a function to represent that the function is an asynchronous function. The async function returns a promise.


{
    // async function name(parameter1, parameter2, ...paramaterN) {
    //     // statements
    // }

    // // name - name of the function
    // // parameters - parameters that are passed to the function     
}

// async function sum()
// {
//     console.log("job is best")
//     return Promise.resolve("abhi");
// };
// sum();
// console.log(sum().then(data => console.log(data)));



// ? await 

// let promise1 = new Promise(function (resolve,reject)
// {
// setTimeout(function()

// {
//     resolve('promise 1')

// },2000)
   
// });

// let promise2 = new Promise(function (resolve,reject ) {
//     setTimeout(function () {
//         resolve('promise 1')

//     }, 4000);

// });

// let promise3 = new Promise(function (resolve,reject) {
//     setTimeout(function () {
//         resolve('promise 1')

//     }, 6000);

// });


// async function PrintData()
// {
//     result1 = await promise1;

//     result2 = await promise2;
//     result3 = await promise3;

//     console.log(result2);
//     console.log(result3);
//     console.log(result1);


// }

// PrintData()


// let promise1 = new Promise(function (resolve, reject) {
        //     setTimeout(function () {
        //     resolve("Promise 1")}, 2000); 
        // });
//     let promise2 = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//         resolve("Promise 2")}, 4000);
//     });
//     let promise3 = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//         resolve("Promise 3")}, 6000);
//     });

//     async function asyncFunc() {
//         let result1 = await promise1;
//         let result2 = await promise2;
//         let result3 = await promise3;
        
//         console.log(result1);
//         console.log(result2);
//         console.log(result3);
//     }
//     asyncFunc()
    

//! The other way you can handle an error is by using try/catch block.

// ? try/catch - ex
// let promise = new Promise(function (resolve, reject) {
    //     setTimeout(function () {
    //     reject('Promise resolved')}, 3000); 
    // });

 //! async function asyncFunc() {
    //     try {
    //         // wait until the promise resolves 
    //         let result = await promise; 

    //         console.log("try Block: ",result);
    //     }   
    //     catch(error) {
    //         console.log("Catch Block",error);
    //     }
    //! }

//     let promise = new Promise(function(resolve,reject)
// {
//     setTimeout(function()
// {
//     reject("promise")
// },3000)
// })

//     async function tryAndCatch()
//     {
//         try{

//             let result = await promise

//             console.log("try ",result)
            
//         }catch(error)
//         {
//             console.log("catch ", error)

//         }
//     }


//     tryAndCatch();