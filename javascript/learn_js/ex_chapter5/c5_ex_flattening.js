/*
 Flattening

 Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the input arrays.

 var arrays = [[1, 2, 3], [4, 5], [6]];
 // Your code here.
 // → [1, 2, 3, 4, 5, 6]
*/

var arrays = [[1, 2, 3], [4, 5], [6]];

function reduce(array, combine, start) {
    var current = start;
    for (var i = 0; i < array.length; i++)
        current = combine(current, array[i]);
    return current;
}
console.log(reduce(arrays, function (flat, current) {
    return flat.concat(current);
}, []));
// → [1, 2, 3, 4, 5, 6]