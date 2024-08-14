// string methods

// ! 1. trim (start and end ni spase remove kare)
// ! 2. TrimEnd(string ni end ni spase remove kare che)
// ! 3. TrimStart(string ni start ni spase remove kare che)


{
        // let str =  '                            abhi bhalala                                     ';

        // trim

    //    str1 =  str.trim();

        // console.log(str1)

    //     // trimEnd

        // str2 = str.trimEnd()

        // console.log(str2);

    //     // trimStart


        // str3 = str.trimStart()

        // console.log(str3)
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

//? The at() method of String values takes an integer value and returns a new String consisting of the single UTF - 16 code unit located at the specified offset.This method allows for positive and negative integers.Negative integers count back from the last string character.


// {
//         let str = "   abhi is best    "

//         str1 = str.at(5) //  

//         console.log(str1)

// }


/*  7. includes(searchString)
     includes(searchString, position)  */

// {
    // let str = 'Abhi bhalala!  ASDFGHJHFDFGHGFFGHGGoHGHHH';
            //    12345678901234567890 
    // str1 = str.includes('Abhi',3)
// str2 = str.includes('A' , 17)


    // console.log(str1)
// console.log(str2)



// }

// string methods

//8. slice
//9 .slice(start,  end)index


{

    // let str = " abhishek bhalala  "

    // str1= str.slice(5 )

    // // console.log(str1)

    // str2 = str.slice(4 ,-8)

    // console.log(str2)

}


// 10. substring .
// 11. substring (start , end )  (index).


{
    // let str = " abhishek bhalala  "

    // str1 = str.substring(3 , -18)  //negitive index  lagse nai (0)

    // console.log(str1)
}

//12.concat()

{
    // let str1 = "abhishek bhalala" ;
    // let str2 = "bhalala" ;
    // let str3 = " " ;


    // let strmain = str1.concat(str3, str2 )

    // console.log(strmain)



}



//13. stratwith 
//14. endwith


// {
//         let str = "  abhishek bhalala   !!@#$%%^^ "
//                    012345678901234567890123456789
//     str1 = str.startsWith("!" ,21 )
//     str2 = str.endsWith("!", 22 )

//     console.log(str1, str2)

// }



//15. indexof(search , position)

{
    // let str = "  abhishek bhalala    "
    //            0123456789012345678901
    // let str1 = str.indexOf('h' ,8)

    // console.log(str1)

}
// 16. padstart
// 17. padend

{
    // let str = "  abhishek bhalala   "

    // str1 = str.padStart(25 , 0)
    // str2 = str.padEnd(28 , 'abhi')

    // console.log(str1)
    // console.log(str2)

}


//18. repeat 

{
    // let str = "  abhishek   " + '\n'

    // str1 = str.repeat(5,)

    // console.log(str1)

}

//20. touppercase
//21. tolowercase

{
    //         let str = "  Abhishek bhalala    "

    //         let str2 = str.toUpperCase()

    //     let str3 = str.toLowerCase()

    //          console.log(str2)
    //          console.log(str3)



}


// 22. split(separator)
// 23. split(separator, limit)


{
    let str = "Abhishek bhalala"


    let str1 = str.split(" ")
    // let str2 = str.split("")

    console.log(str1)
    // console.log(str2)

}



//24. value of
{
    //     let str = "  Abhishek bhalala    "

    // let str1 = new String ('name is so small')

    // str2 = str.valueOf()

    // str3 = str1.valueOf()


    // console.log(str2)
    // console.log(str3)

    // console.log(typeof(str2))
    // console.log(typeof(str3))

    // console.log(typeof(str1))
    // console.log(typeof(str))

}
