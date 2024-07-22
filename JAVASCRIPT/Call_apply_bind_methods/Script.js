// let UserData = {
//     prin : function(city) {

//         return `this name ${this.name} and my age : ${this.age} city : ${city}`

//     }

//     }

//     let data = {
//         name : 'abhi',
//         age : 19,
//     }

//     let data1 = {
//         name :'akash',
//         age :34,
//     }

//     console.log(UserData.prin.call(data,'surat'))
// console.log(UserData.prin.call(data1 , 'ahmdabad'))

// ? apply =>argument  [] apvana thai

// let UserData = {
//     prin: function (city) {

//         return `this name ${this.name} and my age : ${this.age} city : ${city}`

//     }

// }

// let data = {
//     name: 'abhi',
//     age: 19,
// }

// let data1 = {
//     name: 'akash',
//     age: 34,
// }

// console.log(UserData.prin.apply(data, ['surat']))
// console.log(UserData.prin.apply(data1, [2]))

//? bind

//! => The bind() method of Function instances creates a new function that, when called, calls this function with its this keyword set to the provided value, and a given sequence of arguments preceding any provided when the new function is called.

// let userdata = {

//     name : 'abhi',
//     age : 45,

//     dataPrint : function (){
//         return `my name is ${this.name} or my age ${this.age}`
//     }

// }

// let data = {
//     name : 'akash',
//     age : 45,
// }

// console.log(userdata.dataPrint.bind(data)())



//?  apply  and Call

// let user = {
//     PrintToData : function()
//     {
//         return `T-Shirt name : ${this.T_Shirt_name} \nT-Shirt price :${this.price} \nT-Shirt Color : ${this.color} `
//     }
// }

// let user1 = {
//     T_Shirt_name:'Plain T-shirt',
//     price : 499,
//     color : 'red',
// }
// let user2 = {
//     T_Shirt_name:'Beyoung Trial Pack',
//     price : 999,
//     color : 'blue',
// }

// console.log(user.PrintToData.call(user1))
// console.log(user.PrintToData.apply(user2)) //argument [] apvanu thai




