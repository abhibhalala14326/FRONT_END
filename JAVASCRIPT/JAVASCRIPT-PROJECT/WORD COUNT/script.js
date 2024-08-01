let counts = document.querySelector('#count')
let input = document.querySelector('.input-text')
let wordCount = document.querySelector('.wordcount')


function checksCharaters()
{

  //Charaters counts

 let Charaters_counts = input.value

 counts.innerHTML = Charaters_counts.split('').length

   //word counts

    let Word_counts = input.value
    
    
    
    wordCount.innerHTML = Word_counts.split(' ').length


}


