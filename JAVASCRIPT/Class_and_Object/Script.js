//! object


// let data = {}
// let data1 =new Object()

// console.log(data)
// console.log(data1)


// ? create a object

let data = {
    name : 'abhi',
    age : 18,
    favsong: "dilber",
    hobbie: ["song" , 'gaming'],
    marks : {
        eng : 39 ,
        gujrati : 35 ,

    } 
}

// console.log(data)
// console.log(data.age)
// console.log(data.marks.eng)
// console.log(data.hobbie[1])
// console.log(data['marks']['gujrati'])
// console.log(data.name.toUpperCase())


// ? new filde object
// data.lastname='abhibhalala'
// console.log(data.lastname)

//! class 

class object{
    constructor(name,age){
        this.name = name
        this.age = age;
        this.hobbie = "song" 

    }

    print(){
        return `my name : ${this.name} - and my age ${this.age} or hobbie ${this.hobbie}`
    }
}

let pritToData =new object('abhishek' , 18)

console.log(pritToData.print())

object.new = "Akash "

console.log(object.new)


