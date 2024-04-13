/*
The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

Promises have a then(..) method that accepts one or two callback functions.
The first function (if present) is treated as the handler to call if the promise is fulfilled successfully.
The second function (if present) is treated as the handler to call if the promise is rejected explicitly,
or if any error/exception is caught during resolution.

The Promise API also provides some static methods for working with Promises.
*/

{
  //The promise constructor takes one argument, a callback with two parameters, resolve and rejec
  let promise1 = new Promise(function(resolve, reject) {
    // do a thing, possibly async, then…
    setTimeout(function() {
      /*
      Promise.resolve()
      Returns a Promise object that is resolved with the given value.
      */
      resolve({data: { items: [1,2,3,4,5,6,7]}});
    }, 300);
  });

  let promise2 = new Promise(function(resolve, reject) {
    // do a thing, possibly async, then…
    setTimeout(function() {
      /*
      Promise.reject()
      Returns a Promise object that is rejected with the given reason.
      */
      reject('Error');
    }, 300);
  });

  //then() takes two arguments, a callback for a success case, and another for the failure case. Both are optional, so you can add a callback for the success or failure case only.
  promise1.then(function(value) {
  console.log(...value.data.items);  //expected output: 1 2 3 4 5 6 7
  });

  /*
  Promise.prototype.then()
  Appends fulfillment and rejection handlers to the promise, and returns a new promise resolving to the return value of the called handler,
  or to its original settled value if the promise was not handled
  */
  promise2.then(function(result) {
    console.log(result);  //expected to call error
  },function(err) {
    console.log(err);  //expected output: Error
  });

  //Chaining
  promise1.then(function(result){
    return result.data.items;
  }).then(function(result){
    //will tranform the data after the promise is returned
    console.log(...result.map(value => `item#${value}`));   //expected output: item#1 item#2 item#3 item#4 item#5 item#6 item#7
  });


/*
A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation completed successfully.
rejected: meaning that the operation failed.

Methods

Promise.all()
Returns a promise that either fulfills when all of the promises in the iterable argument have fulfilled or
rejects as soon as one of the promises in the iterable argument rejects.
*/
Promise.all([promise1, promise2]).then((resolve) => {
  console.log('Promise all - resolved: ', resolve);
}, (reject) => {
  console.log('Promise all - rejected: ', reject); // Promise all - rejected:  Error
})

/*
Promise.race()
Returns a promise that fulfills or rejects as soon as one of the promises in the iterable fulfills or rejects,
with the value or reason from that promise.

Promise prototype

Promise.prototype.finally()
Appends a handler to the promise, and returns a new promise which is resolved when the original promise is resolved
*/

}