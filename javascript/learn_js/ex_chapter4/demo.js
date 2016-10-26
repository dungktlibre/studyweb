// hello
'use strict';

var listOfNumbers = [2, 3, 5, 7 , 11];
console.log(listOfNumbers[1]);

// -> 3

console.log(listOfNumbers[1 - 1]);

// Demo Object

var day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running", "television"]
};

console.log(day1.squirrel);
// -> false
console.log(day1.woft);
//-> undefined
day1.wolf = false;
console.log(day1.wolf);


var anObject = {left:1, right: 2};
console.log(anObject.left);
// -> 1

delete anObject.left;
console.log(anObject.left);
// -> undefined
console.log("left" in anObject);
// -> false
anObject.left = 1;
console.log("left" in anObject);


// Array of objects

var journal = [
    {events: ["word", "touched tree", "pizza", "running", "television"],
     squirrel: false},
    {events: ["work", "ice cream", "cauliflower",
        "lasagna", "touched tree", "brushed teeth"],
        squirrel: false},
    {events: ["weekend", "cycling", "break",
        "peanuts", "beer"],
        squirrel: true}
    /* and so on... */
];
//console.log(journal[1].events);

var object1 = {value:10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 == object2);
// ->true
console.log(object1 == object3);
// ->false

object1.value = 15;
console.log(object2.value);
// -> 15
console.valueOf(object3.value);

// Further arrayology
// demo shift: remove the front item from the list <> unshift: add a elements to the front the list
var todoList = [];

function rememberTo(task) {
    todoList.push(task);
}

function whatIsNext() {
    return todoList.shift();
}

function urgentlyRememberTo(task) {
    todoList.unshift();
}

// indexOf and lastIndexOf
console.log([1, 2, 3, 2, 1].indexOf(2));
// -> 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// -> 3

// slice
console.log([0, 1, 2, 3, 4].slice(2, 4));
// -> [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// -> [2, 3, 4]

// concat method can be used to glue arrays together

function remove(array, index) {
    return array.slice(0, index).concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// -> ["a", "b", "d", "e"]

// Strings and their properties
var myString = "Fido";
//myString.myProperty = "value";
//console.log(myString.myProperty);
// ->>> Values of type string, number, and Boolean are not objects, and though the language doesn’t complain if you try to set new properties on them, it doesn’t actually store those properties. The values are immutable and cannot be changed.

console.log("coconuts".slice(4, 7));
// -> nut
console.log("coconuts".indexOf("u"));
// -> 5
console.log("one two three".indexOf("ee"));
// -> 11
console.log("    \n \n okay \n ".trim());
// -> imamokay

var string = "abc";
console.log(string.length);
// -> 3
console.log(string.charAt(0));
// -> a
console.log(string[1]);
// -> b

// The arguments object
function noAgruments() {

}
noAgruments(1, 2, 3);

function threeArguments(a, b, c) {
}
threeArguments();

function argumentCounter() {
    console.log("You gave me", arguments.length, "arguments.");
}
argumentCounter(1, 2, 3);

// THE GLOBAL OBJECT
//var myVar = 10;
//console.log("myVar" in window);
//// → true
//console.log(window.myVar);
//// → 10

