let dateElement = document.querySelector('.date');
let month = document.querySelector('.month');
let year = document.querySelector('.year');
let second = document.querySelector('.second');
let minute = document.querySelector('.minite');
let hour = document.querySelector('.hor');


async function updateDate() {
    const date = new Date();

    // y = date.getFullYear() //YEAR
    // mt = date.getMonth() + 1; //MONTH
    // dt = date.getDate()  //DATE
    s = date.getSeconds()  //SECOND
    m = date.getMinutes()   //MINITES
    h = date.getHours()   //HOURS

    // year.innerHTML = y;
    second.innerHTML = s;
    minute.innerHTML = m;
    hour.innerHTML = h;
    // month.innerHTML = mt;
    // dateElement.innerHTML = dt;
}

setInterval(updateDate, 1000);


