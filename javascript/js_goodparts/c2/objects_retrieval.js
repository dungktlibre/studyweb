var empty_object = {};

var stooge = {
    "first-name": "Jerome",
    "last-name": "Howard"
};


//====================================
var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
    }
};

console.log(stooge["first-name"]); // Jerome
console.log(flight.departure.IATA); // "SYD"

console.log(stooge["middle-name"]); // undefined
console.log(flight.status); // undefined

var middle = stooge["middle-name"] || "(none)";
var status = flight.status || "unknow";
console.log(middle);
console.log(status);
//=================== UPDATE ==============================
stooge['first-name'] = 'dung';
console.log(stooge["first-name"]);

stooge["middle-name"] = "Tien";
console.log(stooge["middle-name"]);
stooge.nickname = "freedom";
console.log(stooge.nickname);
flight.equipment = {
    model: "Boeing 777"
};
flight.status = 'overdue';
console.log(flight.equipment.model);
console.log(flight.status);

//============== Reference =================================
var x = stooge;
console.log(x['first-name']); // dung
console.log(x.nickname);     // freedom
x.nickname = "freddom1-2-3";
console.log(x.nickname); // freddom1-2-3
var nick = stooge.nickname;
console.log(nick);

var a = {}, b = {}, c = {};
    // a, b and e each refer to a
    // different empty object
a = b = c = {};
    // a, b, c all refer to
    // the same empty object

//============== Prototype ===============================



//============== Reflection
console.log(typeof flight.number);
console.log(typeof flight.status);
console.log(typeof flight.departure);
console.log(typeof flight.manifest);
console.log(typeof flight.toString);

console.log(flight.hasOwnProperty('number'));  // true
console.log(flight.hasOwnProperty('constructor')); // false

//============== Enumeration ==============================
var name;
for (name in stooge) {
    console.log(name + ": " + stooge)
}




