{
  // global escope
  let counter = (function() {   //anonymous function
    //private value
    let privateCounter = 0;
    //private function
    function changeBy(val) {
      privateCounter += val;
    }
    //public functions
    return {
      increment: function() {
        changeBy(1);
      },
      decrement: function() {
        changeBy(-1);
      },
      value: function() {
        return privateCounter;
      }
    };
  })();     // is executed as soon as it has been defined

  console.log(counter.value()); // logs 0
  counter.increment();    //public function called
  counter.increment();    //public function called
  console.log(counter.value()); // logs 2
  counter.decrement();    //public function called
  console.log(counter.value()); // logs 1
}
