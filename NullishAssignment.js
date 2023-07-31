//It assigns a value to a variable only if the variable is empty or undefined(??=)

let obj1={
    name:'Priyanshu',
    age:21,
    subject:'javaScript'
}

obj1 ??= {}
console.log(obj1) //{ name: 'Priyanshu', age: 21, subject: 'javaScript' }

obj2=null

obj2 ??= {name:'Alex',age:21}
console.log(obj2) //{ name: 'Alex', age: 21 }