"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magicians = ["John", "Jose", " Magdi"];
function show_magicians(magicians) {
    magicians.forEach(magicians => {
        console.log(magicians);
    });
}
show_magicians(magicians);
