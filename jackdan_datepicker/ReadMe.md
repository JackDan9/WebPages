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

  [1]: ./images/questions.png "questions.png"
  [2]: ./images/redArrow.png "redArrow.png"
  [3]: ./images/yellowArrow.png "yellowArrow.png"
  [4]: http://api.jquery.com/category/selectors/

