// CONSTRUCTORS
function Rabbit(type) {
    this.type = type;
}

var killerRabbit = new Rabbit("killler");
var blackRabbit = new Rabbit("black");
console.log(blackRabbit.type);
// -> black

Rabbit.prototype.speak = function (line) {
    console.log("The " + this.type + " rabbit says '" + line + "'");
};
blackRabbit.speak("Doom...");
console.log(Object.getPrototypeOf(Rabbit));


// OVERRIDING DERIVED PROPERTIES
Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
// -> small
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
// -> long, sharp, and bloody
console.log(blackRabbit.teeth);
// -> small
console.log(Rabbit.prototype.teeth);

console.log(Array.prototype.toString == Object.prototype.toString);
// -> false
console.log([1, 3].toString());
// -> 1,2

/// PROTOTYPE INTERFERENCE
Rabbit.prototype.dance = function () {
    console.log("The " + this.type + " rabbit dances a jig.");
};
killerRabbit.dance();
// -> The killer rabbit dances a jig.

var map = {};
function storePhi(event, phi) {
    map[event] = phi;
}
storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);
//Object.prototype.nonsense = "hi";
for (var name in map)
    console.log(name);
// → pizza
// → touched tree
// → nonsense

console.log("nonsense" in map);
// -> true
console.log("toString" in map);
// -> true;

Object.defineProperty(Object.prototype, "hiddenNonsense",
    {enumerable: false, value: "hi"});
for (var name in map)
    console.log(name);
// → pizza
// → touched tree
console.log(map.hiddenNonsense);
// -> hi
console.log(map.hasOwnProperty("toString"));
// -> false
console.log(Object.hasOwnProperty("hiddenNonsense"));

for (var name in map) {
    if (map.hasOwnProperty(name)) {
        // ... this is an own property
    }
}
// PROTOTYPE-LESS OBJECTS
var map = Object.create(null);

console.log(map);
map["pizza"] = 0.069;
console.log("toString" in map);
// --> false
console.log("pizza" in map);

/// POLYMORPHISM

