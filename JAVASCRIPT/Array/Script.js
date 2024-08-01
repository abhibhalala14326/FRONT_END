//! Array

// let arr = [12,24,23,12,32,12]
// console.log(arr.join())
//  data = new Array(1,2,3,4,5,6,7,4,2,2,3,5,4,2,2,4,5,23,3,5,3,2,3,4)
//  console.log(data.join())
// console.log(arr.join()) 

//! length

// console.log(arr.length)


//! push (insert the last index)

// arr.push(23232)
// console.log(arr.join())


//! pop (last position delete )

// arr.pop()
// arr.pop()
// arr.pop()

//  console.log(arr.join())



// ! unshift  (first index per element add)

// arr.unshift(12121212)
// console.log(arr.join())


//!  shift (first element delete )

// arr.shift()
// console.log(arr.join())


//! splice (start , remove_count , add)  // mid delete karva

// ? slice()
// ? slice(start)

// ? slice(start, end)


// arr.splice(2,2,13322)

// console.log(arr.join())

// !  sort 

// arr1 = ['abhi' , 'parth' , 'very' , 'Abhi' ,"Not"]

// arr1.sort()

// console.log(arr1.join())  //? string ne sort karva 

// arr.sort((a,b)=>a-b)
// console.log(arr.join())  //? number ne sort karva 

// ! max 

// const maxFun = (e) =>
// {
//     return Math.max.apply(null,e)
// }

// console.log(maxFun(arr))

// ! min 

// const minFun = (e) => {
//     arr[0] = 1;
//     console.log(arr.join())

//     return Math.min.apply(null, e)
// }

// console.log(minFun(arr))


// ! reverse

// arr.reverse()

// console.log(arr) 
 

let arr = [11,22,33,4,55,66]
 
// ! forEach

// let total = 0;
//  arr.forEach((ele) => {
//      total += ele;

// });
// console.log(total)

//! flat

// let data = [1,2,3,4,[1,2,[3]],3,4,4,[4,5],55]


// console.log(data.flat(2))



//! filter

a = arr.filter((ele)=>ele<=10)
console.log(a)


//! find

// console.log(arr.join())

// a = arr.find((ele)=>ele>=50)

// console.log(a)

// ! findIndex

// a = arr.findIndex((ele) => ele<=40)

// console.log(a)

// !  every

// a = arr.every((ele)=> ele>= 0)
// console.log(a)


// ! some 

// a = arr.some((ele) => ele>=70)
// console.log(a)


// ! reduce

// a = arr.reduce((total, ele) =>total+=(ele,150) )


// console.log(a)


// !  reduceright

a  = arr.reduceRight((total, ele) => total+=ele)

// console.log(a)

//! entries 

// a = arr.entries();

// console.log(a.next().value)
// console.log(a.next().value)
// console.log(a.next().value)
// console.log(a.next().value)
// console.log(a.next().value)
// console.log(a.next().value)
// console.log(a.next().value)


//! copyWithin

//? copyWithin(target, start)
//? copyWithin(target, start, end)


data = [1,2,3,4,5,6,7,8,9,0]

a = data.copyWithin(6,2,4)
// console.log(a)


//! at()

// a= arr.at(2)
// console.log(a)

//! fill

//? fill(value)
//? fill(value, start)
//? fill(value, start, end)


// a = arr.fill(3,3,6)

// console.log(a)
