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

If you’d like to be able to open VS Code from the command prompt, its executable will have to be added to the PATH environment variable on your computer. In Win- dows, the setup process should do it automatically. In macOS, start VS Code, select the View > Command Palette menu option, type shell command, and pick this option: Shell Command: Install ‘code’ Command in PATH. Then restart your terminal win- dow and enter code . from any directory. 

### extensions and features for vs code : 

* ESLint—Integrates the JavaScript linter and checks your code for readability and maintainability
* Prettier—Enforces a consistent style by parsing your code and reformatting it with its own rules
* Path Intellisense—Autocompletes file paths

In addition to syntax highlighting, TypeScript and JavaScript also provide semantic highlighting.

Syntax highlighting colors the text based on lexical rules. Semantic highlighting enriches the syntax coloring based on resolved symbol information from the language service.

IntelliSense shows you intelligent code completion, hover info, and signature information so that you can write code more quickly and correctly.

VS Code includes basic TypeScript snippets that are suggested as you type

VS Code's TypeScript IntelliSense understands many standard JSDoc annotations, and uses them to show typing information and documentation in suggestions, hover info, and signature help.

Hover over a TypeScript symbol to quickly see its type information and relevant documentation:

As you write a TypeScript function call, VS Code shows information about the function signature and highlights the parameter that you are currently completing:

Automatic imports speed up coding by helping you find available symbols and automatically adding imports for them.

VS Code includes a TypeScript formatter that providers basic code formatting with reasonable defaults.
Use the typescript.format.* settings to configure the built-in formatter, such as making braces appear on their own line

VS Code's TypeScript features also work with JSX. To use JSX in your TypeScript, use the *.tsx file extension instead of the normal *.ts

Press F2 to rename the symbol under the cursor across your TypeScript project

VS Code includes some handy refactorings for TypeScript such as Extract function and Extract constant. Just select the source code you'd like to extract and then click on the lightbulb in the gutter or press (⌘.) to see available refactorings.

Quick Fixes are suggested edits that address simple coding errors. Example Quick Fixes include:

* Adding a missing this to a member access.
* Fixing a misspelled property name.
* Removing unreachable code or unused imports
* Declaring

Unused TypeScript code, such as the else block of an if statement that is always true or an unreferenced import, is faded out in the editor:

The Organize Imports source code action sorts the imports in a TypeScript file and removes unused imports:

The editor.codeActionsOnSave setting lets you configure a set of Code Actions that are run when a file is saved. For example, you can enable organize imports on save by setting:

You can also set editor.codeActionsOnSave to an array of Code Actions to execute in order.

Here are some source actions:

* "organizeImports" - Enables organize imports on save.
*  "fixAll" - Auto Fix on Save computes all possible fixes in one round (for all providers including ESLint).
*  "fixAll.eslint" - Auto Fix only for ESLint.
*  "addMissingImports" - Adds all missing imports on save.

VS Code automatically suggests some common code simplifications such as converting a chain of .then calls on a promise to use async and await

Inlay hints add additional inline information to source code to help you understand what the code does.

The TypeScript references CodeLens displays an inline count of reference for classes, interfaces, methods, properties, and exported objects:

When you move or rename a file that is imported by other files in your TypeScript project, VS Code can automatically update all import paths that reference the moved file.

The typescript.updateImportsOnFileMove.enabled setting controls this behavior. Valid settings values are:

* "prompt" - The default. Asks if paths should be updated for each file move.
* "always" - Always automatically update paths.
* "never" - Do not update paths automatically and do not prompt.

VS Code comes with great debugging support for TypeScript, including support for sourcemaps. Set breakpoints, inspect objects, navigate the call stack, and execute code in the Debug Console. 


Debug client side

You can debug your client-side code using a browser debugger such as the built-in Edge and Chrome debugger, or the Debugger for Firefox.

Debug server side

Debug Node.js in VS Code using the built-in debugger. Setup is easy and there is a Node.js debugging tutorial to help you.


Linters provides warnings for suspicious looking code. While VS Code does not include a built-in TypeScript linter, TypeScript linter extensions available in the marketplace.

ESLint is a popular linter, which also supports TypeScript



There is an excellent online IDE called StackBlitz (https://stackblitz.com).
It’s powered by VS Code, but you don’t need to install it on your computer.


### Summary

* TypeScript is a superset of JavaScript. A program written in TypeScript has to be transpiled into JavaScript first, and then it can be executed in the browser or a standalone JavaScript engine.
* Errors are caught by the TypeScript static code analyzer as you type, even before you compile code with the Typescript compiler (tsc).
* TypeScript gives you the benefits of statically typed languages when and where you want it, without stopping you from using the good old dynamic JavaScript objects when you want them.
* TypeScript follows the latest specifications of ECMAScript and adds to them types, interfaces, decorators, class member variables (fields), generics, enums, the keywords public, protected, and private, and more. Check the Type- Script roadmap at https://github.com/Microsoft/TypeScript/wiki/Roadmap to see what’s available now and what’s coming in future releases of TypeScript.
* To start a new TypeScript project, run the command tsc --init in any direc- tory. It’ll create the tsconfig.json file for you, containing all the compiler’s options with most of them commented out. Uncomment them as needed.


## 2 Basic and custom types

* Declaring variables with types, and using types in function declarations
* Declaring type aliases with the type keyword
* Declaring custom types with classes and interfaces

You can think of TypeScript as JavaScript with types.

Although declaring types of identifiers before their use is highly recommended, it’s still optional.

### Declaring variables with types

Moreover, in JavaScript, you can assign a numeric value to a variable, and later assign a text value to that variable. This isn’t the case in TypeScript, where once the type is assigned to a variable, you can’t change its type

In typescript, We didn’t do it explicitly assign type, but since we initialized it with a numeric value, TypeScript assigns the type number to taxCode.

Although declaring variable types forces developers to write more code, their pro- ductivity increases in the long run because, more often than not, if a developer tries to assign a string value to a variable that already stores a number, it’s a mistake. It helps that the compiler can catch such errors during development rather than not discover- ing it until runtime.

A type can be assigned to a variable either explicitly by the software developer or implicitly (an inferred type) by the Typescript compiler

inferred type -> let taxCode = 1; 
explicit type -> let taxCode: number = 1;

### Basic type annotations

TypeScript offers the following type annotations:


* string — For textual data
* boolean — For true/false values
* number — For numeric values
* symbol — A unique value created by calling the Symbol constructor
* any — For variables that can hold values of various types, which may be unknown when you’re writing the code
* unknown — A counterpart of any, but no operations are permitted on an unknown without first asserting or narrowing it to a more specific type
* never — For representing unreachable code (we’ll provide an example shortly)
* void — An absence of a value

Starting with ECMAScript 2015, symbol is a primitive data type that is always unique and immutable. 
In the following code snippet, sym1 is not equal to sym2: 

```js
const sym1 = Symbol("orderID");
const sym2 = Symbol("orderID");
```


When you create a new symbol (note the absence of the new keyword), you can optionally provide its description, such as orderID. Symbols are typically used to create unique keys for object properties.

Symbols as object properties

```js
const ord = Symbol('orderID');

const myOrder = {
  ord: "123"
};

console.log(myOrder[ord]);
```

Being a superset of JavaScript, TypeScript also has two special values: null and undefined

You can assign null and undefined values to variables of any type, but more often they’re used in combination with values of other types.

The following code snippet shows how you can declare a function that returns either a string or a null value

```ts
function getName(): string | null {

}

```

As in most programming languages, if you declare a function that returns string, you can still return null, but being explicit about what a function can return increases code readability.

If you declare a variable of type any, you can assign any value to it, whether it’s numeric, textual, Boolean, or a custom type like Customer

You should avoid using the type any, because you’re losing the benefits of type checking, and the readability of your code suffers.

The never type is assigned to a function that never returns—one that either keeps running forever or that just throws an error. The arrow function in the next listing never returns, and the type checker will infer (guess) its return type as never.

```js
const logger = () => {
  while(true) {
    console.log("The server is up and running");
  }
}
```

In the preceding listing, the type assigned to logger is () => never. In listing 2.9 you’ll see another example where the never type is assigned.
The void type is not something you’d use in a variable declaration. It’s used to declare a function that doesn’t return a value:

```ts
function logError(errorMessage: string): void {
  console.error(errorMessage);
}
```

Unlike the never type, the void function does complete its execution, but it returns no value.

If a function body doesn’t have a return statement, it still returns a value of type undefined. The void type annotation can be used to prevent programmers from accidentally returning an explicit value from the function.

```ts
let name2: string = 'John Smith';
```

In terms of code style, specifying types is redundant here.

Although the second line is correct TypeScript syntax, specifying the type string is unnecessary, because the variable is initialized with the string and TypeScript will infer that the type of name2 is string.

You should avoid explicit type annotations where the Typescript compiler can infer them. 

TypeScript also allows you to use literals as types. The following line declares a variable of type John Smith.

```ts
let name3: 'John Smith';
```

We can say that the variable name3 has a literal type John Smith. The name3 variable will only allow one value, John Smith. Any attempt to assign another value to a vari- able of a literal type will result in a type checker error:

It’s not likely that you’ll be using string literals for declaring a type as shown in the name3 variable, but you may use string literals as types in unions (explained in section 2.1.3) and enums (explained in chapter 4).

Add explicit type annotations for function or methods signatures and public class members.


#### Type widening

If you declare a variable without initializing it with a specific value, TypeScript uses the internal types null or undefined, which are converted to any. This is called type widening.


The value of the following variable would be undefined.
let productId;
productId = null;
productId = undefined;


The Typescript compiler applies type widening and assigns the type any to null and undefined values. 

It’s worth mentioning that the Typescript compiler supports a --strictNullCheck option that prohibits the assignment of null to variables with known types

let productId = 123;
productId = null;  // compiler error
productId = undefined;  // compiler error


The --strictNullCheck option also helps in catching potentially undefined values. For example, a function may return an object with an optional property, and your code might wrongly assume that this property is there and try to apply a function on it.

TypeScript includes other types that are used in interactions with the web browser, such as HTMLElement and Document. Also, you can use the key- words type, class, and interface to declare your own types, such as Cus- tomer or Person. We’ll show how to do that in the next section. You’ll also see how you can combine types using unions.

Type annotations are used not only for declaring variable types, but also for declaring types of function arguments and their return values. We’ll discuss that next.

### Types in function declarations

TypeScript functions and function expressions are similar to JavaScript functions, but you can explicitly declare the types of arguments and return values.

calculating tax in js

```js
function calcTax(sate, income, dependents) {
  if(state === 'NY') {
    return income * 0.06 - dependents * 500;
  } else if(state === 'NJ') {
    return income * 0.05 -dependents * 300;
  }
}
```

- correct way of calling function
let tax = calcTax('NJ', 50000, 2);

- wrong way of calling function -> NAN(not a number)
let tax = calcTax('NJ', 50000, 'two');

```ts
function calcTax(satet: string. income: number, dependents: number) : number | undefined {
  if(state === 'NY') {
    return income * 0.06 - dependents * 500;
  } else if(state === 'NJ') {
    return income * 0.05 -dependents * 300;
  }
}
```

The Typescript compiler will display an error: “Argument of type string is not assign- able to parameter of type number.” Moreover, the return value of the function is declared as number, which stops you from making another mistake and assigning the result of the tax calculation to a non-numeric variable:

The compiler will catch this, producing the error “The type ‘number’ is not assignable to type ‘string’: var tax: string.” This kind of type-checking during compilation can save you a lot of time on any project.

This section has JavaScript and TypeScript versions of the calcTax() function, but they only process two states: NY and NJ. Invoking either of these functions for any other state will return undefined at runtime.
The Typescript compiler won’t warn you that the function in listing 2.5 is poorly written and may return undefined, but the TypeScript syntax allows you to warn the person who reads this code that the function in listing 2.5 may return not only a number but also an undefined value, if you invoke it with any other state but NY or NJ. You should change this function signature to declare such a use case as follows:

```ts
function calcTax(state: string, income: number, dependents: number) : number | undefined
```

### The union type

Unions allow you to express that a value can be one of several types. You can declare a custom type based on two or more existing types. For example, you can declare a vari- able of a type that can accept either a string value or a number (the vertical bar means union):

```ts
let padding: string | number;
```

Although the padding variable can store the value of either of the two specified types, at any given time it can be only of one type—either a string or a number.

TypeScript supports the type any, but the preceding declaration provides some benefits compared to the declaration let padding: any

```ts

function padLeft(value: string, padding: any ): string {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") { 
    return padding + value; 
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

console.log( padLeft("Hello world", 4));
console.log( padLeft("Hello world", "John says "));
console.log( padLeft("Hello world", true));
```

### Type guards typeof and instanceof

An attempt to apply conditional statements to refine a variable’s type is called type narrowing. In the if statement in listing 2.6, we used the typeof type guard to nar- row the type of a variable that can store more than one TypeScript type. We used typeof to find out the actual type of padding at runtime.

Similarly, the instanceof type guard is used with custom types (with constructors), as will be explained in section 2.2. The instanceof guard allows you to check the actual object type at runtime:

```ts
if (person instanceof Person) {...}
```

The difference between typeof and instanceof is that the former is used with the built-in TypeScript types and the latter with the custom ones.

If we now change the type of padding to the union of string and number (as shown in the following listing), the compiler will report an error if you try to invoke padLeft() providing anything other than string or number. This will also eliminate the need to throw an exception.

```ts
function padLeft(value: string, padding: string | number ): string {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
}
```

If you need to declare a variable that can hold values of more than one type, don’t use the type any; use a union such as let padding: string | number. Another choice is to declare two separate variables: let paddingStr: string; let paddingNum: number;.


Let’s modify the code in listing 2.8 to illustrate the type never by adding an else clause to the if statement. This next listing shows how the type checker will infer the never type for an impossible value.

else return padding, that blcok is never executed.

the never type of an impossible value
```ts
function padLeft(value: string, padding: string | number ): string {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  } else {
    return padding;
  }
}
```

Since we declared in the function signature that the padding argument can be either string or number, any other value for padding is impossible. In other words, the else case is not possible, and the type checker will infer the type never for the padding vari- able in the else clause.

Another benefit of using the union type is that IDEs have an autocom- plete feature that will prompt you with allowed argument types, so you won’t even have the chance to make such a mistake.

If you use the union, the Typescript compiler will prevent incorrect invoca- tions of padLeft() by reporting an error at compile time.

We just used a union of primitive types (string and number), but in the next sec- tion you’ll see how to declare unions of custom types.

### Defining custom types

TypeScript allows you to create custom types with the type keyword, by declaring a class or an interface, or by declaring an enum (covered in chapter 4). Let’s get familiar with the type keyword first.

### Using the type keyword

The type keyword allows you to declare a new type or a type alias for an existing type. Let’s say your app deals with patients who are represented by their name, height, and weight. Both height and weight are numbers, but to improve the readability of your code, you can create aliases hinting at the units in which the height and weight are measured.

Declaring alias types Foot and Pound

You can create a new Patient type and use the preceding aliases in its declaration.

Declarations of type aliases don’t generate code in the compiled JavaScript. In Type- Script, declaring and initializing a variable of type Patient can look like the following.

```ts
type Foot = number;
type Pound = number;

type Patient = {
  name: string;
  hiehgt: Foot;
  weight: Pound;
}

let patient: Patient = {
    name: 'Joe Smith',
    height: 5,
    weight: 100
}
```

What if, while initializing the patient variable, you forget to specify the value of one
of the properties, such as weight?

TypeScript will complain:
"Type '{ name: string; height: number; }' is not assignable to type 'Patient'.
  Property 'weight' is missing in type '{ name: string; height: number; }'."

If you want to declare some of the properties as optional, you must add a question mark to their names. In the following type declaration, providing the value for the weight property is optional, and there won’t be any errors.

```ts
type Patient = {
    name: string;
    height: Height;
    weight?: Weight;
}

let patient: Patient = {
    name: 'Joe Smith',
    height: 5
}

```
You can use the question mark to define optional properties in classes or interfaces as well. 

You can also use the type keyword to declare a type alias for a function signature. Imagine you’re writing a framework that should allow you to create form controls and assign validator functions to them. A validator function must have a specific signature— it must accept an object of type FormControl and return either an object describing the errors of the form control value, or null if the value is valid. You can declare a new ValidatorFn type as follows:

```ts
type ValidatorFn = (c: FormControl) => { [key: string]: any }| null
```

Here, { [key: string]: any } means an object that can have properties of any type, but the key has to be either of type string or convertable to a string.

The constructor of the FormControl can have a parameter for the validator function, and it can use the custom ValidatorFn type as follows:


```ts
class FormControl {
    constructor (initialValue: string, validator: ValidatorFn | null) {...};
}
```

### Using classes as custom types

We assume you’re familiar with the JavaScript classes covered in the appendix. In this section we’ll start showing you additional features that TypeScript brings to JavaScript classes

JavaScript doesn’t offer any syntax for declaring class properties, but TypeScript does. In figure 2.2, on the left, you can see how we declared and instantiated a Person class that has three properties. The right side of figure 2.2 shows the ES6 version of this code produced by the Typescript compiler.

![image](https://user-images.githubusercontent.com/25869911/151487930-b9412d4c-b852-43bf-bcdf-c8468365305e.png)

```ts
class Person {
  firstName: string;
  lastNmae: string;
  age: number;
}
```

As you can see, there are no properties in the JavaScript version of the Person class. Also, since the Person class didn’t declare a constructor, we had to initialize its proper- ties after instantiation. A constructor is a special function that’s executed once when the instance of a class is created.
Declaring a constructor with three arguments would allow you to instantiate the Person class and initialize its properties in one line. In TypeScript you can provide type annotations for a constructor’s arguments, but there’s more.
TypeScript offers the access level qualifiers public, private, and protected (cov- ered in chapter 3), and if you use any of them with the constructor arguments, the Typescript compiler will generate the code for adding these arguments as properties in the generated JavaScript object.

![image](https://user-images.githubusercontent.com/25869911/151488277-a8b8b764-ff43-4d92-b50a-19a98ac7de56.png)

```ts
class PersonWithContructor {
    constructor(public firstName: string, public lastName: string, public age: number) {};
}
```

Now the code of the TypeScript class (on the left) is more concise, and the generated JavaScript code creates three properties in the constructor. Note line 6 in figure 2.3 on the left. We declared the constant without specifying its type, but we could rewrite this line explicitly specifying the type of p as follows:

```ts
const p: Person = new Person("John", "Smith", 25);
````

This would be an unnecessary use of an explicit type annotation. Since you declare a constant and immediately initialize it with an object of a known type (Person),

the TypeScript type checker can easily infer and assign the type to the constant p. The generated JavaScript code will look the same regardless of whether you specify the type of p or not.

 we used the public access level with each constructor argu- ment in the TypeScript class, which simply means that the generated corre- sponding properties can be accessed from any code located both inside and outside of the class.

 When you declare properties of a class, you can also mark them as readonly. Such properties can be initialized either at the declaration point or in the class constructor, and their values can’t be changed afterwards. The readonly qualifier is similar to the const keyword, but the latter can’t be used with class properties.


```ts
class block {
  readonly nonce: number;
  readonly hash: string;

  constructor (
    readonly index:  number,
    readonly previousHash: string,
    readonly timestamp: number,
    readonly data: string
  ) {
    this.nonce = nonce;
    this.hash = hash;
  }
}
```

The Block class includes six readonly properties. Note that we don’t need to explic- itly declare class properties for constructor arguments that have readonly, private, protected, or public qualifiers as we would in other object-oriented languages

### Using interfaces as custom types

Many object-oriented languages include a syntax construct called interface, which is used to enforce the implementation of specified properties or methods on an object.

JavaScript doesn’t support interfaces, but TypeScript does. In this section, we’ll show you how to use interfaces to declare custom types

TypeScript includes the keywords interface and implements to support inter- faces, but interfaces aren’t compiled into JavaScript code. They just help you to avoid using wrong types during development. Let’s get familiar with using the interface keyword to declare a custom type.

Suppose you want to write a function that can save information about people in some storage. This function should take an object that represents a person, and you want to ensure that it has specific properties of specific types. You can declare a Person interface as follows.

Declaring a custom type using an interface

```ts
interface Person {
  firstName: string;
  lastNmae: string;
  age: number;
}
```

 If you declare a custom type as class, you can use it as a value, meaning you can instantiate it using the new keyword

 Also, if you use the class keyword in the TypeScript code, it’ll have the corre- sponding code in generated JavaScript (a function in ES5, and a class in ES6). If you use the interface keyword, there won’t be any corresponding code in JavaScript, 

![image](https://user-images.githubusercontent.com/25869911/151490504-446c7184-9954-4a8c-86c8-6fcc3783c46a.png)

