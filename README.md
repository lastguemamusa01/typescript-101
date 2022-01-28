# typescript-101
tyspecript quickly book 101 resume and practices

TypeScript is great, but since it’s a compiled-to-JavaScript language

JavaScript is also a dynamically typed language, which gives additional freedom to software developers. There’s no need to declare an object’s properties up front, as the JavaScript engine will create the property at runtime if the object doesn’t already have it.

JavaScript is a very forgiving language, which is not a shortcoming if the codebase is small, and you’re the only person working on the project. Most likely, you’ll remember that x is supposed to be a number, and you don’t need any help with this.

To minimize the number of run- time errors, JavaScript developers write unit tests and perform code reviews.

Web developers needed a better language, but replacing JavaScript with another one that would be supported by all the different browsers was not realistic. Instead, new compile-to-JavaScript languages were created. They were more tool-friendly, but the program still had to be converted to JavaScript before deployment so every browser could support it.

## Part 1 - Mastering the typescript syntax

Explaining the benefits of TypeScript compared to Java- Script

You’ll see how to use built-in and declare custom types. We’ll introduce the use of classes and interfaces as well as generics, enums, decorators, mapped and conditional types

tooling used by Type- Script developers (such as compilers, linters, debuggers, and bundlers)

### getting familiar with typescript

### Why program in TypeScript

TypeScript is a compile-to-JavaScript language, which was released as an open source project by Microsoft in 2012.

A program written in TypeScript has to be transpiled into JavaScript first, and then it can be executed in the browser or a standalone JavaScript engine.

The difference between transpiling and compiling is that the latter turns the source code of a program into bytecode or machine code, whereas the former con- verts the program from one language to another, such as from TypeScript to Java- Script.

TypeScript is a superset of JavaScript, so you can take any JavaScript file, such as myProgram.js, change its file extension from .js to .ts, and myProgram.ts will likely become a valid TypeScript program. 

We say “likely” because the original JavaScript code may have hidden type-related bugs (it may dynamically change the types of object properties or add new ones after the object is declared) and other problems that will be revealed only after your JavaScript code is compiled.

In general, the word superset implies that the superset contains everything that the set has, plus something else

TypeScript as a superset of ECMAScript, which is a spec for all versions of JavaScript. ES.Next represents the very latest additions to ECMAScript that are still in the works.

Typescript contains ES.Next contains ES 3,5,6,7,8

In addition to the JavaScript set, TypeScript also supports static typing, whereas JavaScript supports only dynamic typing.
he word “typing” refers to assigning types to program variables.

In programming languages with static typing, a type must be assigned to a variable before you can use it. 

JavaScript, which doesn’t know about the types of your program variables until runtime. Even in the running program, you can change the type of a vari- able just by assigning it a value of a different type

```ts
let customerId: string;
customerId = 123;  // compile-time error
```


JavaScript decides on the variable type at runtime, and the type can be dynamically
changed, as in the following example:

```js
let customerId = "A15BN"; // OK, customerId is a string
customerId = 123;  // OK, from now on it's a number
```        

Now let’s consider a JavaScript function that applies a discount to a price. It has two arguments and both must be numbers.

```js
function getFinalPrice(price, discount) {
  return price - price / discount;
}
```

How do you know that the arguments must be numbers? First of all, you authored this function some time ago, and having an exceptional memory, you may just remember the types of all the arguments. Second, you used descriptive names for the arguments that hint at their types. Third, you can guess the types by reading the function code.
This is a pretty simple function, but let’s say someone invoked this function by pro- viding a discount as a string. This function would print NaN at runtime.

```js
console.log(getFinalPrice( 100, "10%")); // prints NaN
```

In typescript, this error is caught by the TypeScript static code analyzer while you type, even before you compile this code with the Typescript compiler (tsc). Moreover, if you specify the variable types, your editor or IDE will offer an autocomplete feature sug- gesting argument names and types for the getFinalPrice() function.

Use plaground on the typescript official page to code simple code snippet.

Typescript is used in angular, asp.net, react, others.

Some hard-core JavaScript developers say that TypeScript slows them down by requir- ing them to declare types, and that they’d be more productive in JavaScript. But remember that types in TypeScript are optional—you can continue writing in Java- Script but still introduce tsc in your workflow. Why? Because you’ll be able to use the latest ECMAScript syntax (such as async and await) and compile your JavaScript down to ES5 so your code can run in older browsers.

TypeScript gives you the benefits of statically typed languages when and where you want it, without stopping you from using the good old dynamic JavaScript objects when you want them

TypeScript stand out is that its cre- ators follow the ECMAScript standards and implement upcoming JavaScript features a lot faster than the vendors of web browsers.

In the summer of 2017, the async and await keywords (see section A.10.4 in the appendix) were included in ECMAScript specification ES2017 (a.k.a. ES8). It took more than a year for major browsers to start supporting these keywords, but Type- Script has supported them since November 2015

The best part is that you can use the future JavaScript syntax in today’s Type- Script code, and compile it down to the older JavaScript syntax (such as ES5) supported by all browsers!

ypeScript follows the latest specifications of ECMAScript and adds to them types, interfaces, decorators, class member variables (fields), generics, enums, the keywords public, protected, and private, and more.

the JavaScript code generated from TypeScript is easy to read, and it looks like hand- written code.

The core developer of TypeScript is Anders Hejlsberg, who also designed Turbo Pascal and Delphi and is the lead architect of C# at Microsoft.

At the end of 2014, Google approached Microsoft asking if they could intro- duce decorators in TypeScript so this language could be used for developing the Angular 2 framework. Microsoft agreed, and this gave a tremendous boost to TypeScript’s popularity, given that hundreds of thousands of develop- ers use Angular.

### Typical TypeScript workflows

But do you really want to stick to the ES5 version of JavaScript, ignoring all the latest syntax introduced by ES6, 7, 8, through to ES.Next? If not, you’ll have a compilation step in your workflow anyway—you’ll need to compile your source written in a newer Java- Script version into the well-supported ES5 syntax.

Developers don’t want to deploy so many files in the web server or a standalone JavaScript app, so we usually bundle these files (think “concatenate”) together.

JavaScript developers use different bundlers, like Webpack or Rollup, which not only concatenate multiple JavaScript files, but can optimize the code and remove unused code (performing tree-shaking). If your app consists of several modules, each module can be deployed as a separate bundle.

The JavaScript ecosystem includes thousands of libraries, which won’t be rewritten in TypeScript. The good news is that your app doesn’t have to be TypeScript-only, and it can use any of the existing JavaScript libraries.

If you just add the JavaScript library to your app, tsc(typescript compilerre) won’t help with autocomplete or error messages when you use the APIs of these libraries. But there are special type definition files with the extension .d.ts (covered in chapter 6), and if they’re present, tsc will show you errors and offer context-sensitive help for this library.

![image](https://user-images.githubusercontent.com/25869911/151261840-cfcdf9a4-f114-4ead-b040-13894e984a84.png)

Includes the type definition file lodash.d.ts, which is used by tsc during development. It also includes the actual JavaScript library lodash.js, which will be bundled with the rest of your app during deployment.The term bundle refers to the pro- cess of combining several script files into one.


### Using the Typescript compiler

The compiler, tsc, can be bundled with your IDE of choice or can be installed as an IDE plugin, but we prefer to install it independently of an IDE by using the npm pack- age manager that comes with Node.js.

Node.js (or simply Node) isn’t just a framework or a library—it’s a JavaScript run- time environment as well. We use the Node runtime for running various utilities like npm or launching JavaScript code without a browser.

Using npm, you can install software either locally inside your project directory, or globally where it can be used across projects. We’ll use npm to install tsc and other packages from the npm repository located at www.npmjs.com, which hosts more than half a million packages.

```bash
npm install -g typescript
```

In real-world projects, however, we prefer to install tsc locally in the project directory by adding it in the devDependencies section of the project’s package.json. 

to check typescript compiler version
```bash
tsc -v
```

to compiler the main.ts file

```bash
tsc main
```

You may ask, “What’s the point of producing the JavaScript file if there’s a compilation error?” Well, from the JavaScript perspective, the content of the main.js file is valid. But in real-world TypeScript projects, we won’t want to allow code generation for erro- neous files.
tsc offers dozens of compilation options, described in the TypeScript documenta- tion (http://mng.bz/rf14), and one of them is noEmitOnError. 

```bash
tsc main --noEmitOnError true
```

The compiler’s --t option allows you to specify the target JavaScript syntax. For exam- ple, you can use the same source file and generate its JavaScript peer compliant with ES5, ES6, or newer syntax. Here’s how to compile the code to ES5-compatible syntax:

```bash
tsc --t ES5 main
```

If you have a tsconfig.json file in the proj- ect directory, you can just enter tsc on the command line, and the compiler will read all the options from tsconfig.json. A sample tsconfig.json file is shown here.

tsc allows you to preconfigure the process of compilation (specifying the source and destination directories, target, and so on). If you have a tsconfig.json file in the proj- ect directory, you can just enter tsc on the command line, and the compiler will read all the options from tsconfig.json. A sample tsconfig.json file is shown here.

```json
{
    "compilerOptions": {
        "baseUrl": "src",
        "outDir": "./dist",
        "noEmitOnError": true,
        "target": "es5",
        "watch": true
    }
}
```

The compiler’s target option is also used for syntax checking. For exam- ple, if you specify es3 as the compilation target, TypeScript will complain about the getter methods in your code. It simply doesn’t know how to com- pile getters into the ECMAScript 3 version of the language.

Note the last option, watch. The compiler will watch your typescript files, and when they change, tsc will recompile them.

for run the tsconfig.json

```bash
tsc
```

ctlr+c to exit the watch mode

To start a new TypeScript project, run the command tsc --init in any directory. It’ll create a tsconfig.json file for you with all the compiler’s options, most of which will be commented out. Uncomment them as needed.

```bash
tsc --init
```

A tsconfig.json file can inherit configurations from another file by using the extends property. 

### The REPL environment for TypeScript

REPL stands for Read-Evaluate-Print-Loop, and it refers to a simple interactive language shell that allows you to quickly execute a code fragment. 

### getting familiar with visual studio code

Integrated development environments (IDEs) and code editors increase developers’ productivity, and TypeScript is well supported by such tools: Visual Studio Code, Web- Storm, Eclipse, Sublime Text, Atom, Emacs, Vim.

VS Code is written in TypeScript.

On real-world projects, good context-sensitive help and support for refactoring are very important. Renaming all occurrences of a TypeScript variable or function name in statically typed languages can be done by IDEs in a split second, but this isn’t the case in JavaScript, which doesn’t support types.

VS Code supports two modes for TypeScript code: file scope and explicit project. The file scope is pretty limited, as it doesn’t allow a script in a file to use variables declared in another. The explicit project mode requires you to have a tsconfig.json file in the project directory.

