// "use strict";
function Person(firstName, secondName){
  this.firstName = firstName;
  this.secondName = secondName;
}

const person = Person("Jane","Joe");
console.log(person);// undefined

const p1 = new Person("Jane","Joe");
console.log(p1)//Person {firstName: 'Jane', secondName: 'Joe'}

console.log(person.firstName);//error (when strict mode)
console.log(person.firstName);//refer to global, Jane
