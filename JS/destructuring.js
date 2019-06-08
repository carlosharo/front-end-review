//Destructuring

//global data
function createItems() {
  return {
    data: {
      items: {
        code: {
          language: 'JavaScript',
          description: {
            v: 'ES6',
            n: 'ECMAScript 2015'
          },
          features: [['let','const'],['arrow function', 'destructuring'],['spread','block scope']]
        }
      }
    }
  }
}

//Nested object destructuring
{
  //just language, version & name are created as variables
  //v & n are renamed to version and name
  let {data: { items: {code: {language, description: { v: version, n: name }, features }} } } = createItems();
  console.log(language, version, name);   //expected output: JavaScript ES6 ECMAScript 2015
}

//Nested array destructuring
{
  //topic1 & topic2 are created as variables
  let { data: { items: { code: {features: [ [topic1, topic2] ] }} }} = createItems();
  console.log(topic1, topic2);    //expected output let, const
}

//mappings/transformation
//will create an object equal to: x = a, y = b, z = c
let o1 = { a: 1, b: 2, c: 3 };
{
	o2 = {};
  //source:target
  ( { a: o2.x, b: o2.y, c: o2.z } = o1 );
  console.log( o2.x, o2.y, o2.z );	// expected output 1 2 3

}

//object to array
{
	a2 = [];
  ( { a: a2[0], b: a2[1], c: a2[2] } = o1 );
  console.log( a2 );	// expected output: [1,2,3]
}

//Direct asignation
{
  let a1 = [ 1, 2, 3 ],
	o2 = {};

  [ o2.a, o2.b, o2.c ] = a1;
  // will asign the array element to the object name specified o2.a = 1, o2.b = 2, o2.c = 3
  console.log( o2.a, o2.b, o2.c );	//expected output: 1 2 3
}

//swap variables
{
  var x = 10, y = 20;
  [ y, x ] = [ x, y ];

  console.log( x, y );				//expected output:  20 10
}

//skip Variables
const rgb = [200, 255, 100];
{
  // Skip the first two items
  // Assign the only third item to the blue variable
  const [,, blue] = rgb;
  console.log(blue);    //expected output 100

  //spread operator
  let [ red, ...gb ] = rgb;   //gb creates an array with [255, 100]
  console.log(red, gb );    //expected output: 200 [255, 100]
}

//Asignment expression
{
  let o = { a:1, b:2, c:3 },
	a, b, c, p;
  p = { a, b, c } = o;
  console.log( a, b, c );			//expected output: 1 2 3
  //p is assigned the o object reference
  p === o;    //expected output: { a:1, b:2, c:3 }
}

//destructuring parameters & default value
{
  const data = {
    name: 'JavaScript',
    version: 'ES6'
  }

  function createMessage({name, version}, message = 'Hello world this is') {
    return `${message} ${name} ${version}`;
  }

  console.log(createMessage(data));   //expected output: Hello world this is JavaScript ES6
}
