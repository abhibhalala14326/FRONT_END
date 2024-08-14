function celsius() {
    cel = document.querySelector('.main')
    cel.style.display = "flex";

    km = document.querySelector('.main2 ');
    km.style.display = "none";

    gram = document.querySelector('.main3');
    gram.style.display = "none";


    
    input = document.querySelector('.input');
    a = input.value;
    Result =  a * (9 / 5) + 32

    b = document.querySelector('.output');
    b.value = Result






}

function Kilomitere() {
    km = document.querySelector('.main2')
    km.style.display = "flex";

    celsius = document.querySelector('.main');
    celsius.style.display = "none"

    gram = document.querySelector('.main3');
    gram.style.display = "none"

    input1 = document.querySelector('.input1');
    a = (input1.value);
    Result = 100000 * a

    b = document.querySelector('.output1');
    b.value = Result


}

function Gram() {
    G = document.querySelector('.main3')
    G.style.display = "flex";

    celsius = document.querySelector('.main ');
    celsius.style.display = "none"

    Kilomitere = document.querySelector('.main2 ');
    Kilomitere.style.display = "none"



    input2 = document.querySelector('.input2');
    a = (input2.value);
    Result = 1000 * a

    b = document.querySelector('.output2');
    b.value = Result


}