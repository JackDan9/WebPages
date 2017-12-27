---
title: jackdan_datepicker
tags: datepicker, dateData, input, jackdan
author: jackdan9

---

# jackdan_datepicker
## A question:
- How can you get datapicker data ? As follows:

![questions][1]


- Red arrow indicates the page is displayed. As follows:

![Red arrow][2]

- Yellow arrow indicates the page code. As follows:

![Yellow arrow][3] 

------

## datepicker properties:
### **Options**:
#### `altField`:
- **Type**: **Selector** or **jQuery** or **Element**
    - **Selector**:
        - A selector is used in jQuery to select DOM elements from a DOM document. That document is, in most cases, the DOM document present in all browsers, but can also be an XML document received via Ajax.
        - The selectors are a composition of CSS and custom additions. All selectors available in jQuery are documented on the [Selectors API page][4].
        - There are lot of plugins that leverage jQuery's selectors in other ways. The validation plugin accepts a selector to specify a dependency, whether an input is required or not:
        - `emailrules: { required: "#email: filled" }`
        - This would make a checkbox with name "emailrules" required only if the user entered an email address in the email field, selected via its id, filtered via a custom selector "filled" that the validation plugin provides.
        - If Selector is specified as the type of an argument, it accepts everything that the jQuery constructor accepts, eg. Strings, Elements, Lists of Elements.
    - **jQuery**:
        - A jQuery object contains a collection of Document Object Model(DOM) elements that have been created from an HTML string or selected from a document. Since jQuery methods often use CSS selectors to match elements from a document, the set of elements in a jQuery object is often called a set of "matched elements" or "selected elements".
        - The jQuery object itself behaves much like an array; it has a `length` property and the elements in the object can be accessed by their numeric indices `[0]` to `[length - 1]`. Note that a jQuery object is not actually a Javascript Array object, so it does not have all the methods of a true Array object such as `join()`.
        - Most frequently, you will use the `jQuery()` function to create a jQuery object. `jQuery()` can also be accessed by its familiar single-character alias of `$()`, unless you called `jQuery.noConflict()` to disable this option. Many jQuery methods return the jQuery object itself, so that method calls can be chained:
        - In API calls that return `jQuery`, the value returned will be the original jQuery object unless otherwise documented by that API. API methods such as `.filter` or `.not` modify their incoming set and thus return a new jQuery object.
        - `$( "p" ).css( "color", "red" ).find( ".special" ).css( "find", "green" );`
        - Whenever you use a "destructive" jQuery method that potentially changes the set of elements in the jQuery object, such as `.filter()` or `.find()`, that method actually returns a new jQuery object with the resulting elements. To return to the previous jQuery object, you use the `.end()` method.
        - A jQuery object may be empty, containing no DOM elements. You can create an empty jQuery object with `$()` (that is, passing no arguments at all). A jQuery object may also be empty if a selector doesn't select any elements, or if a chained method filters out all the elements. It is not an error; any further methods called on that jQuery object simply have no effect since they have no elements to act upon. So, in this example if there are no bad entries on the page then no elements will be colored red:
        - `$( ".badEntry" ).css({ color: "red" });`
    - **Element**:
        - An element in the Document Object Model(DOM) can have attribute, text, and children. It provides methods to traverse the parent and children and to get access to its attributes. Due to inconsistencies in DOM API specifications and implementations, however, those methods can be a challenge to use. jQuery provides a "wrapper" around those elements to help interacting with the DOM. But sometimes you will be working directly with DOM elements, or see methods that(also) accept DOM elements as arguments.
        - Whenever you call jQuery's `.each()` method or one of its event methods on a jQuery collection, the context of the callback function - `this` - is set to a DOM element.
        - Some properties of DOM elements are quite consistent among browsers. Consider this example of a simple `onblur` validation:
        - `$( "input[type='text']" ).on( "blur", function() { if( !this.value ) { alert( "Please enter some text!" );} });`
        - You could replace `this.value` with `$(this).val()` to access the value of the text input via jQuery, but in that case you wouldn't gain anything.
- **Default**: `""`
- An input element that is to be updated with the selected date from the datepicker. Use the `altFormat` option to change the format of the date within this field. Leave as blank for no alternate filed.
- **Code example**:
- Initialize the datepicker with the `altField` option specified:
```
$( ".selector" ).datepicker({
    altFiled: "#actualDate"
});
```
- Get or set the `altFiled` option, after initialization:
```
var altField = $( ".selector" ).datapicker( "option", "altField" );
$( ".selector" ).datepicker( "option", "altField", "#actualDate" );
```

------

- `altFormat()`:
- Type: `String`
    - `String`:
    - An string in JavaScript is an immutable primitive value that contains none, one or many characters.
    - `I'm a String in JavaScript!`
    - `So am I!`
    - The type of a string is "string".
    - `**typeof** "some string" // string`
- Default: `""`
- The  `dataFormat` to be used for the `altField` option. This allows one date format to be shown to the user for selection purpose, while a different format is actually sent behind the scenes. For a full list of the possible format see the `formatData` function.
- Code Examples:
- Initialize the datepicker with the `altFormat` option specified:
```
$( ".selector" ).datapicker({
    altFormat: "yy-mm-dd"
});
```
- Get or set the `altFormat` option, after initialization:
```
// Getter
var altFormat = $( ".selector" ).datepicker( "option", "altFormat" );
// Setter
$( ".selector" ).datepicker( "option", "altFormat", "yy-mm-dd" );
```

------

- `appendText`:
- Type: `String`
- Default: `""`
- The text to display after each date field, e.g., to show the required format.
- Code examples:
- Initialize the datepicker with the `appendText` option specified:
```
$( ".selector" ).datepicker({
    appendText: "yyyy-mm-dd"
});
```
- Get or set the `appendText` option, after initialization:
```
// Getter
var appendText = $( ".selector" ).datepicker( "option", "selector"  );

//Setter
$( ".selector" ).datepicker( "option", "appendText", "yyyy-mm-ddd" );
```

------

- `autoSize`:
- Type: `Boolean`
    - `Boolean`:
    - A boolean in JavaScript can be either true or false:
    - `if ( true ) console.log( "always!" );`
    - `if ( false ) console.log( "never!" );`
- Default: `false`
- Set to `true` to automatically resize the input field to accommodate dates in the current `dateFormat`.
- Code Example:
- Initialize the datepicker with the `autoSize` option specified:
```
$( ".selector" ).datepicker({
    autoSize: true
});
```
- Get or set the `autoSize` option, after initialization:
```
// Getter
var autoSize = $( ".selector" ).datepicker( "option", "autoSize" );

// Setter
$( ".selector" ).datepicker( "option", "autoSize", true );
```

------

- `belowShow`:
- Type: `Function`(`Element` input, `Object` inst)
    - Function:
        - A function in JavaScript can be either named or anonymous. Any function can be assigned to a variable or passed to a method, but passing memeber functions this way can cause them to be called in the context of another object(i.e. with a different "this" object).
        - `function named() {}`
        - `var handler = function() {}`
        - You see a lot of anonymous functions in jQuery code:
        - `$( document ).ready(function() {});`
        - `$( "a" ).click(function() {});`
        - `$.ajax({ url: "sourceurl.php", success: function() {} });`
        - The type of a function is "function".
        - `Arguments`:
            - Inside a function a special variable "arguments" is always available. It's similar to an array in that it has a length property, but it lacks the built-in methods of an array. The elements of the pseudo-array are the argument of the function call.
            - `function log( x ) { console.log( typeof x, arguments.length ); }`
            - `log(); // "undefined", 0`
            - `log( 1 ); // "number", 1`
            - `log( "1", "2", "3" ); // "string", 3`
            - The arguments object also has a callee property, which refers to the function you're inside of. For instance:
            - `var awesome = function() { return arguments.callee; }`
            - `awesome() === awesome // true`
        - `Context, Call And Apply`:
            - In JavaScript, the variable "this" always refers to the current context. By default, "this" refers to the window object. Within a function this context can change, depending on how the function is called.
            - All event handlers in jQuery are called with the handing element as the context.
            - `$( document ).ready(function() { // this refers to window.document });`
            - `$( "a" ).click(function() { // this refers to an anchor DOM element });`
            - You can specify the context for a function call using the function-built-in methods call and apply. The difference between them is how they pass arguments. Call passes all arguments through as arguments to the function, while apply accepts an array as the arguments.
            - `function scope() { console.log( this, arguments.length ); }`
            - `scope() // window, 0`
            - `scope.call( "foobar", [ 1, 2 ] ); // "foobar", 1 `
            - `scope.apply( "foobar", [ 1, 2 ] ); // "foobar", 2 `
        - `Scope`:
            - In JavaScript, all variables defined inside a function are only visible inside that function scope. Consider the following example:
            - `// global `
            - `var = 0; (function() { var x = 1; console.log( x ) // 1; })(); console.log(x); //0`
            - It defines a variable `x` in the global scope, then defines an anonymous function and executes it immediately(the additional parentheses are required for immediate execution). Inside the function another varibale `x` is defined with a different value. it is only visible within that function and doesn't overwrite the global variable.
        - `Closures`:
            - Closures are created whenever a variable that is defined outside the current scope is accessed from within some inner scope. In the following example, the variable `counter` is visible within the create, increment, and print functions, but not outside of them.
            - `function create() { var counter = 0; return { increment: function() { counter++; }, print: function() { console.log( counter ); } } } var c = create(); c.increment(); c.print(); // 1`
            - The pattern allows you to create objects with methods that operate on data that isn't visible to the outside-the very basis of object-orient programming.
        - `Proxy Pattern`:
            - Combining the above knowledge gives you as a JavaScript developer quite a lot of power. One way to continue that is to implement a proxy pattern in JavaScript, enabling the basics of aspect-oriented programming(AOP):
            - `(function() { // log all calls to setArray var proxied = jQuery.fn.setArray; jQuery.fn.setArray = function() { console.log( this, arguments ); return proxied.apply( this, arguments ); }; })();`
            - The above wraps its code in a function to hide the "proxied" -variable. It saves `jQuery's` setArray-method in a closure and overwrites it. The proxy then logs calls to the method and delegates the call to the original. Using apply(this, arguments) guarantees that the caller won't be able to notice the difference between the original and the proxied method.
    - `Object`:
        - Everything in JavaScript is an object, though some are more objective. The easiest way to create an object is the object literal:
        - `var x = {};`
        - `var y = { name: "Pete", age: 15 };`
        - The type of an object is "object":
        - `typeof {} // "object"`
        - `Dot Notation`:
            - You can write and read properties of an object using the dot notation:
            - `y.name // "Pete"`
            - `y.age // 15`
            - `x.name = y.name + " Pan " // "Pete Pan"`
            - `x.age = y.age + 1 // 16`
        - `Array Notation`:
            - Or you write and read properties using the array notation, which allows you do dynamically choose the property:
            - `var obj = { name: "Pete", age: 15 }; for( key in obj ) { alert( "key is " + [ key ] + ", value is " + obj[ key ] ); }`
            - Note that for-in-loop can be spoiled by extending Object.prototype( see [Object.prototype is verboten][5] ) so take care when using other libraries.
            - jQuery provides a generic [`each` function][6] to iterate over properties of objects, as well as elements of arrays:
            - `jQuery.each( obj, function( key, value ) { console.log( "key", key, "value", value ); });`
            - The drawback is that the callback is called in the context of each value and you therefore lose the context of your own object if applicable. More on this below at Functions.
        - `Boolean default`:
            - An object, no matter if it has properties or not, never defaults to false:
            - `!{ } // false`
            - `!!{ } // true`
        - `Prototype`:
            - All objects have a prototype property. Whenever the interpreter looks for a property, it also checks in the object's prototype if the property is not found on the object itself. jQuery uses the prototype extensively to add methods to jQuery instances. Internally, jQuery makes `jQuery.fn` an alias of alias of `jQuery.prototype` so you can use either one(though plugin developers have standardized on `fn`).
            - `var form = $( "#myform" ); console.log( form.clearForm ); // undefined`
            - `// jQuery.fn === jQuery.prototype`
            - `jQuery.fn.clearForm = function() { return this.find ( ":input" ).each(function() { this.value = ""; }).end(); };`
            - `// works for all instances of jQuery objects, because the new method was added to the prototype`
            - `console.log( form.clearForm ); // function`
            - `form.clearForm();`
- Default: `null`
- A function that takes an input field and current datepicker instance and returns an options object to update the datepicker with. It is called just before the datepicker is displayed.

  [1]: ./images/questions.png "questions.png"
  [2]: ./images/redArrow.png "redArrow.png"
  [3]: ./images/yellowArrow.png "yellowArrow.png"
  [4]: http://api.jquery.com/category/selectors/
  [5]: http://erik.eae.net/archives/2005/06/06/22.13.54/
  [6]: http://api.jquery.com/jQuery.each/

