// ? pomise

// let promise = new Promise((resolve , reject )  =>
// {
//     reject('my name is abhi')
// })



// promise.then((res) =>
// {
//     console.log('my name is abhi' , res)
// })

// promise.catch((err) =>{
//     console.log('my name is not abi' , err);
// })



// promise Chain

function fun1(a,b){
    return new Promise((resolve , reject) =>
    {
        setTimeout(() =>
        {
            console.log('data :'  , a)
            resolve('done')

        },6000)
    })
}

//? api calling

// fun1(12).then((res) =>
// {
// console.log(res)

// fun1(13).then((res) =>
// {
//     console.log(res);
// })
// });

//? api calling 


// fun1(11).then((res)=>
// {
//     return fun1(12);
// }).then((res) =>
// {
//     console.log(res)
// });


