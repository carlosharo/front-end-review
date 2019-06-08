/*
This declaration creates a constant whose scope can be either global or local to the block in which it is declared.
*/

{
  //block-scope
  const number = 42;
  const obj = {'code': 'js'};

  try {
    number = 99;
    //reasignment is not allowed
  } catch(err) {
    console.log(err);
  }
  console.log(number);
  //expected output: 42

  obj.version = 'ES6';
  obj.code = 'JavaScript';
  console.log(obj);
  //obj can't be reasigned but can be manipuladed
  //expected output: object {code: JavaScript, version: ES6}

  //Temporal dead zone
  //Accessing the variable before the initialization results in a ReferenceError.
  //The variable is in a "temporal dead zone" from the start of the block until the initialization is processed.
  console.log(a); // undefined
  console.log(b); // ReferenceError
  var a = 1;
  const b = 2;
}
//const works similar to let, is block-scoped
console.log(number);
//expected output: number is not defined
