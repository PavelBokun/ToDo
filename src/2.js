
// let a={
//     name:"it- incubator",
//     protocol:'https',
//     maxStudentsCount:10,
//     isOnline:true,
//     students:['ivan','andrey','farid'],
//     classroom:{
//         teacher:{
//             name:'wew',
//             age:'18'
//         }
//     }

// }
// let b={...a};
// const obj1 = { a: 1, b: 2 };
// const obj21 = { a: 4, b: 7 };

// console.log(obj1.a)
// console.log(obj1.a)
// function rez(a,b){
//   return  a+b
// }
// console.log (rez(obj1.a,obj21.a ))

// b.classroom.teacher.name="Dimich";
// b.classroom={...a.classroom}
// b.classroom.teacher={...a.classroom.teacher}
// b.students=[...a.students]
// b.classroom.teacher.name='Ivan'
// console.log(a);
// console.log(b)
// console.log(a===b)
// console.log(b.classroom.teacher.name)

// 1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()

function repeatString(substr,repeat,rd){
 return substr.repeat(repeat).split('').join(rd)
}
const repeated=repeatString("yo",3,"")
console.log (repeated )// "yo yo yo"
// repeatString("yo", 3, ",") // "yo,yo,yo"

function controler(str,substr){
    if(substr===''){
      return false
    }
    return str.includes(substr)
    
}

const re=controler("hellow",'h')

console.log(re)


function cuter (str,num){
   if (str.length>num){
    return str.slice(0,num)+'...'
   }
return str.split
}
let re2= cuter("hellow",2)
console.log(re2)

function returner (str){
return str.split( )
}