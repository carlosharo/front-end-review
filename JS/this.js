/*
Global context:
In the global execution context (outside of any function),
this refers to the global object whether in strict mode or not.
*/

// In web browsers, the window object is also the global object.
{
  console.log(this === window);     //expected output: true

  a = 37;
  console.log(window.a);    //expected output: 37
}

/*
Function context
Inside a function, the value of this depends on how the function is called.
*/

{
  //block scope
 var a = 'Global';

 function whatsThis() {
   return this.a;  // The value of this is dependent on how the function is called
 }

 console.log(whatsThis());   // expected output: Global
}

/*
As an object method
When a function is called as a method of an object, its this is set to the object the method is called on.
*/

{
  //block scope
  var o = {prop: 37};
  function independent() {
    return this.prop;
  }
  o.b = {g: independent, prop: 42};
  console.log(o.b.g());     //expected output: 42
}
