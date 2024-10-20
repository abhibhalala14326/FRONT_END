let obj = {
    id: 1,
    name: 'abhi',
    Email: 'abhibhalala07@gmail.com'
}


let submit = () => {
    localStorage.clear()

}

let Add = () =>
{
    localStorage.setItem(obj.name, obj.Email);

}

let Get = () =>
{
    localStorage.getItem(obj.name)
    console.log(getItem);
    
}






