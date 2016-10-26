
// in tung phan tu cu mang

var array = [1, 2, 3, 4, 5];

for (var i  = 0; i < array.length; i++) {
    var current = array[i];
    console.log(current);
}

// c2: tao 1 ham
function logEach(array, action) {
    for (var i = 0; i < array.length; i++) {
        action(array[i]);
    }
}
logEach(array, console.log);

// c3: toi uu c2

var numbers = [1, 2, 3, 4, 5], sum = 0;
forEach(numbers, function(number) {
    sum += number;
});
console.log(sum);
// → 15

// HIGHER-ORDER FUNCTIONS
