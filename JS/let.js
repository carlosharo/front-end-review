/*
Variables declared by let have their scope in the block for which they are defined,
as well as in any contained sub-blocks. In this way, let works very much like var.
The main difference is that the scope of a var variable is the entire enclosing function:
*/

{
  let a = 1;
  {
    let a = 2;
    console.log(`nested scope ${a}`);
    //expected output 2
  }
  if(true){
     let a = 3;
     console.log(`if-scope ${a}`);
     //expected output 3
     }
  function x () {
    let a = 4
    console.log(`function-scope ${a}`);
    //expected output 4
  }
  x();

  for(let a = 0; a < 1; a++){
    console.log(`for-scope ${a}`);
    //expected output 0
  }

  console.log(`block-scope ${a}`);
  //expected output 1
}
