input = document.querySelector('.input');


function display(inputdata)
{
    input.value += inputdata;
    // console.log(inputdata)

}

function clearAll()
{
    input.value = '';
    


}

function allsum()
{
    input.value = eval(input.value)
}
