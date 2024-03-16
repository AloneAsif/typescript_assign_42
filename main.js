"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Question no 43       Unchanged Magicians
const originalMagicians = ['Harry Houdini', 'Criss Angel ', 'Penn Jillette'];
function makeGreat(names) {
    return names.map((name) => `Great ${name}`);
}
function show_magicians(names) {
    console.log('Origional Magitions:');
    names.forEach((name) => console.log(name));
}
let modified_magition = makeGreat(originalMagicians);
console.log("Original Magicians:");
show_magicians(originalMagicians);
console.log("\nModified Magicians (with 'Great' added):");
show_magicians(modified_magition);
