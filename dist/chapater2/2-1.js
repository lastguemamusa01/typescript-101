/*
TypeScript offers the following type annotations:

this is from javascript and converted to typescrit :

string — For textual data
boolean — For true/false values
number — For numeric values
symbol — A unique value created by calling the Symbol constructor
any — For variables that can hold values of various types, which may be unknown when you’re writing the code. not recomend use any
unknown — A counterpart of any, but no operations are permitted on an unknown without first asserting or narrowing it to a more specific type
never — For representing unreachable code (we’ll provide an example shortly)
void — An absence of a value -> more for function, not for variable declaration

only typescript special type annotation :
Being a superset of JavaScript, TypeScript also has two special values: null and undefined

TypeScript includes other types that are used in interactions with the web browser, such as HTMLElement and Document.

HTMLElement
Documen t

Also, you can use the key- words type, class, and interface to declare your own types, such as Cus- tomer or Person.

class
interface

As in most programming languages, if you declare a function that returns string, you can still return null, but being explicit about what a function can return increases code readability.

You can assign null and undefined values to variables of any type, but more often they’re used in combination with values of other types.

If a function body doesn’t have a return statement, it still returns a value of type undefined.

Type widening
If you declare a variable without initializing it with a specific value, TypeScript uses the internal types null or undefined, which are converted to any. This is called type widening

javascirpt any -> assign to null and undefined  ->
but if typescript compileoption is --strictNullCheck -> this will compiler error



*/
// function that return never type -> the void function does complete its execution, but it returns no value.
function logError(errorMessage) {
    console.error(errorMessage);
}
// In terms of code style, specifying types is redundant here.  :string is not necessary
var name2 = 'John Smith';
// TypeScript also allows you to use literals as types. The following line declares a variable of type John Smith.
// We can say that the variable name3 has a literal type John Smith. The name3 variable will only allow one value, John Smith
var name3;
