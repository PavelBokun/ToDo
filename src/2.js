
let a={
    name:"it- incubator",
    protocol:'https',
    maxStudentsCount:10,
    isOnline:true,
    students:['ivan','andrey','farid'],
    classroom:{
        teacher:{
            name:'wew',
            age:'18'
        }
    }

}
let b={...a};
const obj1 = { a: 1, b: 2 };
const obj21 = { a: 4, b: 7 };

console.log(obj1.a)
console.log(obj1.a)
function rez(a,b){
  return  a+b
}
console.log (rez(obj1.a,obj21.a ))

b.classroom.teacher.name="Dimich";
b.classroom={...a.classroom}
b.classroom.teacher={...a.classroom.teacher}
b.students=[...a.students]
b.classroom.teacher.name='Ivan'
console.log(a);
console.log(b)
console.log(a===b)
console.log(b.classroom.teacher.name)
