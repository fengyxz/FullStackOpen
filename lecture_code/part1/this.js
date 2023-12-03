const arto = {
  name: "Arto",
  age: 35,
  education: "PhD",
  greet: function(){
    console.log('hello, my name is '+this.name)
  },
  doAddition: function(a,b){
    console.log(a + b);
  }
}
/** We can assign methods to an object by defining properties that are functions */
arto.greet();

/** Methods can be assigned to objects even after the creation of the object */
arto.growOlder = function() {
  this.age += 1;
}
console.log(arto.age);
arto.growOlder();
console.log(arto.age);

/** use the object to invoke the addition */
arto.doAddition(1,2);

/** by store a method reference in a variable and call the method through the variable */
const referenceToAddition = arto.doAddition;
referenceToAddition(10,15);

const referenceToGreet = arto.greet;
referenceToGreet();//undefined
/** Contray to other languages, in JavaSccript the value of this is defined base on how the method is called */
/** When calling the method through a reference, the value of this becomes the so-called global object */
/** So, we avoid these issues by using 'this-less' javascript */

setTimeout(arto.greet, 1000);// undefined
/** as mentioned, this refer to arto. Actually, it refers to global object */
/** there are several mechanisms by which the original this can be preserved */
/** 1. use a method called bind */

setTimeout(arto.greet.bind(arto), 1000);
/** Calling arto.greet.bind(arto) creates a new function where this is bound to point to Arto,
 * independent of where and how the method is being called. */

/**Using arrow functions it is possible to solve some of the problems related to this. 
 * They should not,
 *  however, be used as methods for objects because then this does not work at all.  */
setTimeout(() => arto.greet(), 1000);
