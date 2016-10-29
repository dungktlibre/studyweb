// METHODS

var rabbit = {};
rabbit.speak = function (line) {
    console.log("The " + this.type + " rabbit says '" + line + "'");
};

function speak(line) {
    console.log("The " + this.type + " rabbit says '" +
        line + "'");
}
var whiteRabbit = {type: "white", speak: speak};
var fatRabbit = {type: "fat", speak: speak};

whiteRabbit.speak("Oh my ears and whiskers, " +
    "how late it's getting!");
// → The white rabbit says 'Oh my ears and whiskers, how
//   late it's getting!'
fatRabbit.speak("I could sure use a carrot right now.");
// → The fat rabbit says 'I could sure use a carrot
//   right now.'
speak.apply(fatRabbit, ["Burp!"]);
speak.call({type: "old"}, "Oh my.");

// PROTOTYPES
var empty = {};
console.log(empty.toString);
// -> [Funtion: toSTring]
console.log(empty.toString());
// -> [object Object]

console.log(Object.getPrototypeOf({}) == Object.prototype);
// - >true
console.log(Object.getPrototypeOf(Object.prototype));
console.log(Object.getPrototypeOf(isNaN) == Function.prototype);
// -> true
console.log(Object.getPrototypeOf([]) == Array.prototype);
// -> true

// create a prototype
var protoRabbit = {
    speak: function(line) {
        console.log("The " + this.type + " rabbit says '" +
            line + "'");
    }
};

var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("hi");
//-> The killer rabbit says 'hi'

