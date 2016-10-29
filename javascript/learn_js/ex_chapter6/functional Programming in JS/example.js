var triple = function(x) {
    return x * 3;
}

var waffle = triple;
console.log(waffle(30));

// Higher-ordor functions
var animals = [
    {name: "Fluffykins", species: "rabbit"},
    {name: "Caro",       species: "dog"},
    {name: "Hamilton",   species: "dog"},
    {name: "Harold",     species: "fish"},
    {name: "Ursula",     species: "cat"},
    {name: "Jimmy",      species: "fish"}
]

// how to using filter
var dog = animals.filter(function (animal) {
    return animal.species === "dog";
});
console.log(dog);

/*
// nomal function
var dogs = [];
for(var i = 0; i < animals.length; i++) {
    if (animals[i].species === "dog")
        dogs.push(animals[i]);
}
console.log(dogs);
*/


// how to using Map
// example:

/*
var names = animals.map(function (animal) {
    return animal.name;
});
*/

// ES6 version
var names = animals.map((animal) => animal.name);

/*
var names = [];
for (var i = 0; i < animals.length; i++) {
    names.push(animals[i].name);
}
*/
console.log(names);

// Reduce
var orders = [
    { amount: 100},
    { amount: 200},
    { amount: 300},
    { amount: 400}
];
// ES6 reduce
var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);

/*
var totalAmount = orders.reduce(function (sum, order) {
    return sum + order.amount;
}, 0);
*/

/*
var totalAmount = 0;
for (var i = 0; i < orders.length; i++) {
    totalAmount += orders[i].amount;
}
*/
console.log(totalAmount);

var fs = require('fs');

var output = fs.readFileSync('data.txt', 'UTF8')
    .trim()
    .split('\n')
    .map(line => line.split('    '))
    .reduce((customers, line) => {
        //console.log('hello', line);
        //console.log('hello', customers);
        customers[line[0]] = customers[line[0]] || [];
        customers[line[0]].push({
            name: line[1],
            price: line[2],
            quantity: line [3]
        });
        return customers;
    }, {});
console.log("hello", JSON.stringify(output, null, 2));
