 "use strict";

 function arrayToList(array) {
     var lengthArray = array.length ;
     var list = null;

     for (var i = lengthArray-1; i >= 0; i--) {
         list = {value: array[i], rest: list};
     }
     return list;
 }

 function listToArray(list) {
     var array = [];
     for (var node = list; node != null; node = node.rest)
         array.push(node.value);

     return array;
 }

 function prepend(value, list) {
     return {value: value, rest: list};
 }

 function nth(list, number) {
     var element;
     for (var i = 0, node = list; node != null; node = node.rest, i++) {
         if (i == number)
             return node.value;
     }
     return undefined;
 }
 
 console.log(arrayToList([10, 20]));
 console.log(listToArray(arrayToList([10, 20, 30, 40])));
 console.log(prepend(10, prepend(20, (prepend(30, null)))));
 console.log(nth(arrayToList([10, 20, 30]), 3));