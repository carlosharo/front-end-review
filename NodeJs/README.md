# NodeJs Review

## Sources
[Codevolution channel: (Nodejs)](https://www.youtube.com/watch?v=LAUi8pPlcUM&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=1)
[multithreading](https://medium.com/@mohllal/node-js-multithreading-a5cd74958a67)

## Menu
[ECMAScript](#ECMAScript)

[Chromes V8 engine](#Chromes-V8-engine)

[JavaScript Runtime](#JavaScript-Runtime)

[Module](#Module)

[Module Wrapper](#Module-Wrapper)


## ECMAScript
Is a scripting language specification on which JavaScript is based. Ecma International is in charge of standardizing ECMAScript.

## Chromes V8 engine
V8 is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++. It is used in Chrome and in Node.js, among others. It implements ECMAScript and WebAssembly, and runs on Windows, macOS, and Linux systems that use x64, IA-32, or ARM processors. V8 can be embedded into any C++ application.

## JavaScript Runtime
A runtime environment is where your program will be executed. It determines what global objects your program can access and it can also impact how it runs. This article covers the two JavaScript runtime environments:

-The runtime environment of a browser (like Chrome, or Firefox)
-The Node runtime environment

The Node Runtime Environment
In 2009, the Node runtime environment was created for the purpose of executing JavaScript code without a browser, thus enabling programmers to create full-stack (front-end and back-end) applications using only the JavaScript language.

## Module 
In node.js each file is a module that is isolated by default. 
To load a module into another file, we use the require function.

## Module Wrapper
NodeJS does not run our code directly, it wraps the entire code inside a function before execution. This function is termed as Module Wrapper Function.

<details>
  <summary>Example</summary>
  By doing this, Node.js achieves a few things:

  It keeps top-level variables (defined with var, const, or let) scoped to the module rather than the global object.

  It helps to provide some global-looking variables that are actually specific to the module, such as:  
  
  __dirname: The directory name of the current module. 
  __filename: The file name of the current module. This is the current module file's absolute path with symlinks resolved.
  exports: A reference to the module.exports that is shorter to type.
  module: A reference to the current module
  require: Used to import modules, JSON, and local files.

```
    (function(exports, require, module, __filename, __dirname) {
        // Module code actually lives in here
    }); 
```

</details>

## Module caching

Modules are cached after the first time they are loaded. This means (among other things) that every call to require('foo') will get exactly the same object returned, if it would resolve to the same file.

Provided require.cache is not modified, multiple calls to require('foo') will not cause the module code to be executed multiple times. This is an important feature. With it, "partially done" objects can be returned, thus allowing transitive dependencies to be loaded even when they would cause cycles.

To have a module execute code multiple times, export a function, and call that function.

<details>
  <summary>Example</summary>
  
  ### Module caching 
  
  ```
  class SuperHero {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
  }

  module.exports = new SuperHero('Dead Pool') 
  ```

  ```
    const superHero = require('./superHero');

    console.log(superHero.getName()); // Dead Pool
    superHero.setName('Wolverine');
    console.log(superHero.getName()); // Wolverine

    // Nodejs caches the superHero file an uses the same reference from the previous require.
    const nweSuperHero = require('./superHero');
    console.log(superHero.getName()); // Wolverine
  ```
</details>