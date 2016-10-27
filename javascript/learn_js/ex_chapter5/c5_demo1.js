
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

//var numbers = [1, 2, 3, 4, 5], sum = 0;
//forEach(numbers, function(number) {
//    sum += number;
//});
//console.log(sum);
//// → 15

// HIGHER-ORDER FUNCTIONS
function graterThan(n) {
    return function (m) { return m > n;};
}

var greaterThan10 = graterThan(10);
console.log(greaterThan10(11));

function noisy(f) {
    return function (arg) {
        console.log("calling with", arg);
        var val = f(arg);
        console.log("called with", arg, "- got", val);
        return val;
    };
}
noisy(Boolean)(0);

function unless(test, then) {
    if (!test) then();
}
function repeat(times, body) {
    for (var i = 0; i < times; i++) body(i);
}
repeat(3, function (n) {
    unless(n % 2, function () {
        console.log(n, "is even");
    });
});