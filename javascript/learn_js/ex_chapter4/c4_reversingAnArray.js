"use strict";

function reverseArray(array) {
    var arr = [];
    var lengthArray = array.length;
    var halfArray = lengthArray / 2;
    var startArray = 0, endArray = lengthArray - 1;

    if (lengthArray <= 1) {
        return array;
    }
    else if (lengthArray == 2) {
        arr[0] = array[1];
        arr[1] = array[0];
    }
    else {
        for (var i = 0; i < lengthArray; i++) {
            arr[i] = array[endArray];
            arr[endArray] = array[i];
            endArray--;
        }
    }

    return arr;
}

function reverseArrayInPlace(array) {
    var lengthArray = array.length;
    var halfArray = lengthArray / 2;
    var endElement = lengthArray - 1;

    for (var i = 0; i < halfArray; i++) {
        var tempElement = array[i];
        array[i] = array[endElement];
        array[endElement] = tempElement;
        endElement -= 1;
    }
}

console.log(reverseArray(["a", "b", "c", "d", "e", "f"]));

var arrayValue = [1, 2, 3, 4, 5, 6];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);