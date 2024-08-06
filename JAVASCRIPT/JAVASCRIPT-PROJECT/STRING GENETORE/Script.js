



input = document.querySelector('.inputs')
StrinGenerator = document.querySelector('.output')
StrinDelete = document.querySelector('.output')


// string Generator 


function string()

{
    const characters = 'zxcvbnmasdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP1234567890';

    let Result = '';


    for (let i = 1; i <=input.value; i++)
    {

             Result += characters.charAt(Math.round(Math.random() * characters.length)) ;

    }
    
    StrinGenerator.innerHTML = Result;


}

function deleteALL()
{
    Result = "String Generate";
    StrinDelete.innerHTML = Result;
}




