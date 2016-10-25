// requirement: http://eloquentjavascript.net/04_data.html
"use strict";

function range(startNumber, endNumber, step) {
    var arr = [];
    var lengthArgument = arguments.length;

    if (lengthArgument == 2)
        step = 1;

    if (lengthArgument < 2)
        return -1;
    else if (lengthArgument == 2) {
        if (startNumber >= endNumber) {
            return -1;
        }
        else {
            for (var i = 0, stepAdd = startNumber; stepAdd <= endNumber; i++) {
                arr[i] = stepAdd;
                stepAdd += step;
            }
        }
    } else {
        if (step > 0) {
            for (var i = 0, stepAdd = startNumber; stepAdd <= endNumber; i++) {
                arr[i] = stepAdd;
                stepAdd += step;
            }
        }
        else {
            for (var i = 0, stepAdd = startNumber; stepAdd >= endNumber; i++) {
                arr[i] = stepAdd;
                stepAdd += step;
            }
        }
    }

    return arr;
}

function sum(arr) {
    var sumArr = 0;
    for (var i = 0; i < arr.length; i++)
        sumArr += arr[i];

    return sumArr;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));