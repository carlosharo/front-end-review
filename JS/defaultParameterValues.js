//Defaul parameter values
{
  //The way we've done this
  function test(a, b){
    a = a || 10;
    b = b || 20;
    console.log(a, b);
  }
  test(1, 2);   //correct asignation, 1, 2
  test(0, 42);    //wrong asignation, 0 is falsy, 10, 42
  test();   //correct asgination, 10, 20
}
// Default parameters values on ES6
{
  function foo(x = 11, y = 31) {
	  console.log( x, y );
  }

  foo();					// 11, 31
  foo( 5, 6 );			// 5, 6
  foo( 0, 42 );			// 0, 42
  foo(1, 0); //1, 0

  foo( 5 );				// 5, 31
  foo( 5, undefined );	// 5, 31
  foo( 5, null );			// 5, null

  foo( undefined, 6 );	// 11, 6
  foo( null, 6 );			// null, 6

  //Note: A rest/gather parameter (see "Spread/Rest") cannot have a default value.
}
