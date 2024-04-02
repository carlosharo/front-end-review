# JavaScript Review

## Usefull data sources for data structures and algorithms
[data-structures+](https://www.youtube.com/@Codevolution)

## Menu
[Arithmetic operator](#Arithmetic-operator)

[Let declaration](#let-declaration)

[Const declaration](#const-declaration)

[Block scoped functions](#Block-scoped-functions)

[Array includes](#Array-includes)

[Padding a string](#Padding-a-string)

[Spread operator (...)](#Spread-operator)

[Rest parameters (...)](#Rest-parameters)

[Default parameters values](#Default-parameters-values)

[Default value expressions](#Default-value-expressions)

[Destructuring](#Destructuring)

[Object Property Assignment Pattern (renaming)](#Object-Property-Assignment-Pattern-(renaming))

[Object Literal Extensions](#Object-Literal-Extensions)

[Template literals](#Template-literals)

[Interpolated Expressions](#Interpolated-Expressions)

[Tagged Template Literals](#Tagged-Template-Literals)

[Arrow functions](#Arrow-functions)

[for..of loops](#for..of-loops)

[Symbols](#Symbols)

[Classes](#Classes)

[Promises](#Promises)

[Import & Export](#Import-&-Export)

[Prototype inheritance](#Prototype-inheritance)

[Mutable/Immutable](#Mutable/Immutable)

[Datatypes](#Datatypes)

[Closure](#Closure)

[Generator](#Generator)

[Hoisting](#Hoisting)

[this](#this)

[try...catch](#try...catch)

[async & await](#asyasync-&-awaitnc)

[suggestion](#suggestion)


## Arithmetic operator
take numerical values (either literals or variables) as their operands and return a single numerical value

<details>
  <summary>Example</summary>

  * Addition(+)
    The addition operator produces the sum of numeric operands or string concatenation.
    Operator: x + y

  * Subtraction(-)
    The subtraction operator subtracts the two operands, producing their difference.
    Operator: x - y

  * Division(/)
    The division operator produces the quotient of its operands where the left operand is the dividend and the right operand is the divisor.
    Operator: x / y

  * Multiplication(* )
    The multiplication operator produces the product of the operands.
    Operator: x * y

  * Remainder(%)
    The remainder operator returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.
    Operator: var1 % var2

  * Exponentiation(** )
    The exponentiation operator returns the result of raising first operand to the power second operand.
    Exponentiation operator is right associative. a ** b ** c is equal to a ** (b ** c).
    Operator: var1 ** var2
    2 ** 3 // 8
    3 ** 2 // 9

  * Increment (++)
    The increment operator increments (adds one to) its operand and returns a value.
    Operator: x++ or ++x

  * Decrement (--)
    The decrement operator decrements (subtracts one from) its operand and returns a value.
    Operator: x-- or --x

</details>

## let declaration

The let statement declares a block scope local variable, optionally initializing it to a value.

<details>
  <summary>Example</summary>

```
{
  let x = 1;

  if (x === 1) {
    let x = 2;
    console.log(x);   // expected output: 2
  }
  console.log(x);   // expected output: 1
}
```

Reference: [let MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

</details>

## const declaration

Constants are block-scoped, much like variables defined using the let statement. The value of a constant cannot change through reassignment, and it can't be redeclared.

<details>
  <summary>Example</summary>

```
const number = 42;

try {
  number = 99;
} catch(err) {
  console.log(err);
  // expected output: TypeError: invalid assignment to const `number'
  // Note - error messages will vary depending on browser
}

console.log(number);    // expected output: 42
```

Reference: [const MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
</details>

## Block scoped functions

The foo() function is declared inside the { .. } block, So it's not available outside that block.
But also note that it is "hoisted" within the block, as opposed to let declarations.

<details>
  <summary>Example</summary>

```
{
	foo();   // works!

	function foo() {
		// ..
	}
}

foo();    // ReferenceError
```
</details>

## Array includes

The includes() method determines whether an array includes a certain value among its entries,
returning true or false as appropriate.

<details>
  <summary>Example</summary>

```
const array1 = [1, 2, 3, 4, 5 ];
console.log(array1.includes(2)); // expected output: true

const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat')); // expected output: true
console.log(pets.includes('spider'));// expected output: false

const text = "Array.prototype.includes()";
console.log(text.includes('proto')); // expected output: true
```

</details>

## Padding a string

The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start (left) of the current string.

<details>
  <summary>Example</summary>

```
  const fullNumber = '2034399002125581';
  const last4Digits = fullNumber.slice(-4);
  const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

  console.log(maskedNumber);
  // expected output: "************5581"
```

</details>

The padEnd() method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end (right) of the current string.

<details>
  <summary>Example</summary>
  
```
const str1 = 'Breaded Mushrooms';

console.log(str1.padEnd(25, '.'));
// expected output: "Breaded Mushrooms........"
```

</details>

## Object entries

The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs

<details>
  <summary>Example</summary>

```
// array like object
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// iterate through key-value gracefully
const obj = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}
```

</details>


## Spread operator

When ... is used in front of an array it acts to "spread" it out into its individual values.

<details>
  <summary>Example</summary>

```
{
  //Array to values
  const a = [1,2,3,4,5];
  const b = [ 0, ...a, 6 ];
  console.log(...a);    //expected output: 1 2 3 4 5
  console.log(b); // expected output: [0,1,2,3,4,5,6]

  //Values to array
  function foo(...z) {
	  console.log( z );   //expected output: [1,2,3,4,5]
  }

  foo( 1, 2, 3, 4, 5 );
}
```
</details>

## Rest parameters

The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

<details>
  <summary>Example</summary>

```
//rest parameters
function foo(x, y, ...z) {
  console.log( x, y, z );
}
//The ...z argument "gather the rest of the values (if any) into an array called z."
foo( 1, 2, 3, 4, 5 );			// 1 2 [3,4,5]
```
</details>

## Default parameters values
<details>
  <summary>Example</summary>

```
//setting a default value for a function parameter
{
  function foo (n = 0, a = [0], o = {'value': '0'}) {
    console.log(n, a, o);
  }

  foo();    //expected output: 0 [0] {value:0}
  foo(1);   //expected output: 0 [0] {value:0}
  foo(1, [1,2]);    //expected output: 1 [1,2] {value:0}
}
```
</details>

## Default value expressions

Default values can be also a function call.

<details>
  <summary>Example</summary>

```
{
  //function used as parameters
  function missedData(){
    return 'there is no data to show';
  }

  //function with default values, b is equal to function
  function test (a=1, b = missedData() ) {
    console.log(a, b);
  }

  test();   //expected output: 1 "there is no data to show"
  test(10);   //expected output: 10 "there is no data to show"
  test(10, undefined);    //expected output: 10 "there is no data to show"
  test(10, null);   //expected output: 10 "there is no data to show"
  test(10, {'language': 'JavaScript'}); //expected output: 10 {language: JavaScript}
}
```
</details>

## Destructuring

ES6 introduces a new syntactic feature called destructuring

<details>
  <summary>Example</summary>

```
//Destructuring array
const array = [1,2,3];
{
  //before to ES6
  let a = array[0];
  let b = array[1];
  let c = array[2];
  console.log(a,b,c);   //expected output: 1,2,3
}
{
  //ES6
  let [a, b, c] = array;
  console.log(a,b,c);   //expected output: 1,2,3
}

//Destructuring object
const obj = {'languaje': 'JavaScript', 'version': 'ES6'};
{
  //before to ES6
  let languaje = obj.languaje;
  let version = obj.version;
  console.log(languaje, version);   //expected output: JavaScript ES6
}
{
  //ES6
  let {languaje, version} = obj;
  console.log(languaje, version);
}
```
</details>

## Object Property Assignment Pattern (renaming)
<details>
  <summary>Example</summary>

```
allows you to assign a property to a different variable name

const obj = {'x': 'JavaScript', 'y': 'ES6'};
{
  //source: target
  let {x: languaje, y: version} = obj;
  console.log(languaje, version);   //expected output JavaScript ES6
}
```
</details>

## Object Literal Extensions
Define a property that is the same name as a lexical identifier, you can shorten it from x: x to x

<details>
  <summary>Example</summary>

```
{
  const x = 1, y = 2, f1 = function () {return 'f1'}, f2 = function () {return 'f2'};

  //Properties
  let obj = {
    x,
    y
  };
  console.log(x, y);    //expected output 1 2

  //Methods
  let func = {
    f1,
    f2
  };
  console.log(func.f1());   //expected output f1
  console.log(func.f2());   //expected output f2
}
```
</details>

## Template literals

As you can see, we used the `..` around a series of characters, which are interpreted as a string literal, but any expressions of the form ${..} are parsed and evaluated inline immediately

<details>
  <summary>Example</summary>

```
//general scope
let name = "JavaScript";
//pre-ES6
{
  //blocked scope
  let greeting = "Hello world, this is " + name + "!";
  console.log(greeting);    //expected output: Hello world, this is JavaScript!
}
//ES6
{
  //blocked scope
  let greeting = `Hello world
this is ${name}!`;  //works as line-break
  console.log(greeting);    //expected output: Hello world,
                            //                 this is JavaScript!
}
```
</details>

## Interpolated Expressions

Any valid expression is allowed to appear inside ${..} in an interpolated string literal, including function calls

<details>
  <summary>Example</summary>

```
//global scope
{
  //blocked scope
  function upper(s) {
	  return s.toUpperCase();
  }

  let who = "reader";
  let language = 'JavaScript';

  let message = `${upper( `${who}s` )} welcome to ${upper( `${language}` )}!`;

  console.log( message );    //expected output: READERS welcome to JAVASCRIPT!
}
```
Warning: As a word of caution, be very careful about the readability of your code

</details>

## Tagged Template Literals
<details>
  <summary>Example</summary>

```
//global scope
{
  //blocked scope
  function foo(strings, ...values) {
    console.log( strings );   // is an array of all the plain strings
    console.log( values );    //array of the results of the already-evaluated interpolation expressions found in the string literal.
  }

  var language = "javaScript";

  foo`This is ${language} ES6`;   //expected output
                                // [ "Everything is ", " ES6"]
                                // [ "JavaScript" ]
}
```
</details>

## Arrow functions

The arrow function definition consists of a parameter list (of zero or more parameters, and surrounding ( .. ) if there's not exactly one parameter), followed by the => marker, followed by a function body.

<details>
  <summary>Example</summary>

```
//global scope
//PRE-ES6
{
  //blocked scope
 function foo(x,y) {
	return x + y;
 }
}

//ES6
{
  //blocked scope
 let foo = (x,y) => x + y;    // If there's only one expression, and you omit the surrounding { .. }, there's an implied return in front of the expression
}

//Arrow functions are always function expressions; there is no arrow function declaration. It also should be clear that they are anonymous function expressions

//Note: All the capabilities of normal function parameters are available to arrow functions, including default values, destructuring, rest parameters, and so on.


//it is easeier to add function as parameter
{
  let a = [1,2,3,4,5];
  a = a.map( v => v * 2 );
  console.log( a );   //expected output: [2,4,6,8,10]
}
```
</details>

## for..of loops

Let's compare for..of to for..in to illustrate the difference:
<details>
  <summary>Example</summary>

```
//global scope
{
  //block scope
  var a = ["a","b","c","d","e"];

  for (var idx in a) {
	  console.log( idx );    //expected output: 0 1 2 3 4
  }

  for (var val of a) {
    console.log( val );   //expected output: // "a" "b" "c" "d" "e"
  }

}
```

for..in loops over the keys/indexes in the a array, while for..of loops over the values in a.
</details>

## Symbols

 New primitive type has been added to JavaScript: the symbol.
 This is how to create a Symbol

 <details>
   <summary>Example</summary>

 ```
 //global scope
{
  //block scope
  let sym = Symbol( "symbol description" );
  console.log(typeof sym);		//expected output:  "symbol"

  //The description, if provided, is solely used for the stringification representation of the symbo
  console.log(sym.toString());    //expected output: Symbol(symbol description)
}
```
</details>

## Classes
<details>
  <summary>Example</summary>

```
Classes are in fact "special functions"

{
  class foo {   //lass Foo implies creating a (special) function of the name Foo
    constructor (a, b){   //identifies the signature of that Foo(..) function, as well as its body contents.
      this.x = a;
      this.y = b;
    }
    addition(){
      return this.x + this.y;
    }
  }

  let f = new foo(1,2);
  console.log(f.addition());    //expected output: 3
  console.log(f.x);   //expected output: 1
}
```
</details>

## Promises

Promises are not about replacing callbacks. Promises provide a trustable intermediary -- that is, between your calling code and the async code that will perform the task -- to manage callbacks.

A Promise can only have one of two possible resolution outcomes: fulfilled or rejected, with an optional single value
Promises can only be resolved (fulfillment or rejection) once.

<details>
  <summary>Example</summary>

To construct a promise instance, use the Promise(..) constructor:

* Constructor
```
// do something asynchronous which eventually calls either:
{
  let promise = new Promise( function pr(resolve,reject){
	//  resolve('success message'); // fulfilled
  //  or
  //  reject("failure reason"); // rejected
  } );
}
```

* How to use it

```
promise.then(function(result) {
  console.log(result); // "success message!"
}, function(err) {
  console.log(err); // failure reason"
});
```

The Promise(..) constructor takes a single function (pr(..)), which is called immediately and receives two control functions as arguments, usually named resolve(..) and reject(..). They are used as:

* If you call reject(..), the promise is rejected, and if any value is passed to reject(..), it is set as the reason for rejection.

* If you call resolve(..) with no value, or any non-promise value, the promise is fulfilled.

* If you call resolve(..) and pass another promise, this promise simply adopts the state -- whether immediate or eventual -- of the passed promise (either fulfillment or rejection)

</details>

## Import & Export

Import:
The static import statement is used to import bindings which are exported by another module.

<details>
  <summary>Example</summary>

* Syntax
import defaultExport from "module-name";

Export:
The export statement is used when creating JavaScript modules to export functions, objects, or primitive values from the module so they can be used by other programs with the import statement.

export { name1, name2, …, nameN };

</details>

## Prototype inheritance

JavaScript objects have a link to a prototype object
When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.

<details>
  <summary>Example</summary>

```
//Prototype inheritance
{
  let parent = function (){
    this.property1 = 'property1';
    this.property2 = 'property2';
  }

  let child = new parent();
  console.log(child); // expected output: {property1: 'property1', property2: 'property2'}

  //Parent updated
  parent.prototype.property3 = 'property3'; // __proto__ = {property3: 'property3'}
  console.log(parent);

  //Property3 inherited to child
  console.log(child.property3);   //Expected output: property3
}
```
</details>

## Mutable/Immutable

Mutable is a type of variable that can be changed.
In JavaScript, only objects and arrays are mutable, not primitive values.

* Mutable
A mutable object is an object whose state can be modified after it is created.

* Immutable
Immutable are the objects whose state cannot be changed once the object is created.

## Datatypes

JavaScript is a loosely typed or a dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

<details>
  <summary>Example</summary>

The latest ECMAScript standard defines seven data types:

### Six data types that are primitives
*  Boolean:
    Boolean represents a logical entity and can have two values: true, and false.
    ```
    {
      let boolean = true;
      console.log(boolean);   //expected output: true
      console.log(typeof(boolean));   //expected output: boolean
    }
    ```
*  Null
    The Null type has exactly one value: null
    ```
    {
      let n = null;
      console.log(n);   //expected output: null
      console.log(typeof(n));   //expected output: object
    }
    ```
*  Undefined:
    A variable that has not been assigned a value has the value undefined
    ```
    {
      let u;
      console.log(n);   //expected output: undefined
      console.log(typeof(u));   //expected output: undefined
    }
    ```
*  Number:
    According to the ECMAScript standard, there is only one number type: the double-precision 64-bit binary format IEEE 754 value (numbers between -(253 -1) and 253 -1).
    ```
    {
      let number = 10;
      console.log(n);   //expected output: 10
      console.log(typeof(number));   //expected output: number
    }
    ```

*  String:
    JavaScript's String type is used to represent textual data. It is a set of "elements" of 16-bit unsigned integer values
    ```
    {
      let s = 'text';
      console.log(n);   //expected output: text
      console.log(typeof(s));   //expected output: string
    }
    ```
*  Symbol (new in ECMAScript 6):
    A Symbol is a unique and immutable primitive value and may be used as the key of an Object property

### and Object
    Objects can be seen as a collection of properties.
    ```
    {
      let o = {'null': null, 'number': 10, 'string':'text'};
      console.log(o);   //expected output: {'null': null, 'number': 10, 'string':'text'}
      console.log(typeof(o));   //expected output: object
    }
    ```
</details>

## Closure

A closure is the combination of a function and the lexical environment within which that function was declared.
JavaScript variables can belong to the local or global scope.
Global variables can be made local (private) with closures.

<details>
  <summary>Example</summary>

```
{
  //Global counter
  let counter = 0;

  // Function to increment counter
  function add() {
    counter += 1;
  }

  // Call to add 1
  add();
  // The counter should now be 1
}

```

The problem is any code on the page can change the counter, without calling add().

```
{
  //block scope
  let add = (function () {
    let counter = 0;
    return function () {
      counter += 1;
      return counter;
    }
  })();   //self-invoking function

  console.log(add());   //Expected output: 1
  console.log(add());   //Expected output: 2
  //counter is not defined
  console.log(counter);
}
```

Now counter is private, the scope belongs to add() function
Counter can't be used from outside of the add scope

</details>

## Generator
Functions in JavaScript, as we all know, “run until return/end”.  
Generator Functions on the other hand, “run until yield/return/end”.  
Generator Functions once called, returns the Generator Object,  
which holds the entire Generator Iterable that can be iterated using next() method or for…of loop.

<details>
  <summary>Example</summary>

```

//generator.next() returns a value yielded by the yield expression.

function* idMaker() {
    var index = 0;
    while(true)
        yield index++;
}

var idGenerator = idMaker(); // "Generator { }"

console.log(idGenerator.next().value); //expected output: 0
console.log(idGenerator.next().value); //expected output: 1
console.log(idGenerator.next().value); //expected output: 2

```

</details>

## Hoisting

A strict definition of hoisting suggests that variable and function declarations are physically moved to the top of your code, but this is not in fact what happens. Instead, the variable and function declarations are put into memory during the compile phase, but stay exactly where you typed them in your code.

One of the advantages of JavaScript putting function declarations into memory before it executes any code segment is that it allows you to use a function before you declare it in your code

<details>
  <summary>Example</summary>

```
{
  //the function is called before is the function is written
  console.log(print());   //Expected output: Hello world
  function print(){
    return `Hello world`;
  }
}
```

JavaScript only hoists declarations, not initializations. If a variable is declared and initialized after using it, the value will be undefined.
```
{
  //the function is called before is the function is written
  console.log(a);   //Expected output: a is not defined
  let a;
  a = 'variable declaration';
}
```

</details>

## this

The JavaScript context object in which the current code is executing.

In most cases, the value of this is determined by how a function is called.
ES5 introduced the bind() method to set the value of a function's this regardless of how it's called, and ES2015 introduced arrow functions which don't provide their own this binding.

<details>
  <summary>Example</summary>

```
{
  //block scope
  let prop = 0;

  let test = {
    prop: 42,
    func: function() {
      return this.prop;
    },
  };

  console.log(test.func());   // expected output: 42
}
```

</details>

## try...catch

The try...catch statement marks a block of statements to try, and specifies a response, should an exception be thrown.

<details>
  <summary>Example</summary>

```
{
  //block scope
  try {
    //this could brake the application flow
    let x = notDefined();   //this cause a... is not defined error
  }
  catch(error){
    //the application flow continue and throw the error message
    console.log(`error message: ${error}`);   //Expected output: error message: ReferenceError: notDefined is not defined
  }
  finally {
    //You can use the finally clause to make your script fail gracefully when an exception occurs; for example, to do general cleanup
    console.log(`this alway executes`);
  }
  console.log(`continuing`);    //expected output: continuing
}
```

</details>

## async & await

The async function declaration defines an asynchronous function.
An asynchronous function is a function which operates asynchronously via the event loop,  
using an implicit Promise to return its result.

return value:
A Promise which will be resolved with the value returned by the async function,  
or rejected with an uncaught exception thrown from within the async function.

An async function can contain an await expression that pauses the execution of the async function and waits for the passed Promise's resolution, and then resumes the async function's execution and returns the resolved value.

<details>
  <summary>Example</summary>

  ```
  //create promise
  function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }

  //create async function
  async function asyncCall() {
    console.log('calling');
    return result = await resolveAfter2Seconds();
  }

  //handle asyncCall as a Promise
  asyncCall().then(result => console.log(`result: ${result}`));
  // expected output: 'resolved'

  ```

</details>

## suggestion

* Syntax validation

  Add jshint
  Validate JavaScript with JSHint. In realtime or on save. Supports JSX (React).
  add .jshintrc file at the root project with { "esversion": 6 }
  for more configuration options check
  [jshint](https://jshint.com/docs/options/)
