// Break  and continue

{
    // for(let i = 1 ; i< 10 ; i++)
    //     {
    //         if(i == 5)
    //             {
    //                 break
    //             }

    //             console.log('break loop')
    //     }


//continue

    // for (let i = 1; i < 10; i++) {
    //     if (i == 4) {
    //         continue;
    //     }

    //     console.log('break loop',i)
    // }


}

//nested loop

{

    // for (let i = 0; i < 10; i++) {
    //     if (i == 4)
    //         {
    //             break;
    //         }
    //         console.log("main loop")

    //         for(let j = 1 ;j < 10 ; j++ ){
    //             {
    //                 if(i==2){
    //                 continue;}
    //             }

    //             console.log("child")}
        
    // }
}

// caal back function

{
    // function sum(a , b , callback)
    // {

    //     callback();
    //     return  a * b;
    // }

    // console.log(sum(4,10,callback))


    // function callback()
    // {
    //     console.log('callback function !');
    // }
    

}


// IIFE (Immediately invoked function expressions)

{
//     (function ()
// {
//         console.log('IIFE (" Immediately invoked function expressions")')
// })()

// (function(name)
// {
//     console.log(name);
// })('abhi bhalala')
}


// string methods

// 1. trim (start and end ni spase remove kare)
// 2. TrimEnd(string ni end ni spase remove kare che)
// 3. TrimStart(string ni start ni spase remove kare che)


{
//     let str =  '                            abhi bhalala                                     ';

//     // trim

//    str1 =  str.trim();

//     console.log(str1)

//     // trimEnd

//     str2 = str.trimEnd()

//     console.log(str2);

//     // trimStart


//     str3 = str.trimStart()

//     console.log()
}


// 4. string charAt(index) je index apne apisu ae index uper je charater hase aene print kri apse
// 5. charCodeat(index)

{
    // let str = "   abhi is best    "

    // str1 = str.charAt(5)

    // console.log(str1)


    // str2 = str.charCodeAt(5)  // je index apne apisu ae index uper je charater hase teni ascii value print kari apse.

    // console.log(str2)


}


//6. string.at ()

{
//     let str = "   abhi is best    "
                                   
//     str1 = str.at(-5) // CharAt() ma  negitive index not posibale but at()  negitive index  posible 

//     console.log(str1)

}


/*  7. includes(searchString)
     includes(searchString, position)  */

{
    let str = 'Abhi bhalala!  ASDFGHJHFDFGHGFFGHGGoHGHHH' ;

    str1 = str.includes('Abhi' , 1)

    console.log(str1)

  
}