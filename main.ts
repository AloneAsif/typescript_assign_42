// Question no 43       Unchanged Magicians
const originalMagicians: string[] = ['Harry Houdini','Criss Angel ','Penn Jillette'];
  
function makeGreat(names:string[]):string[]{
    return names.map((name) => `Great ${name}`)
}

function show_magicians(names:string[]){
    console.log('Origional Magitions:')
    names.forEach((name) => console.log(name))
}

let modified_magition = makeGreat(originalMagicians)

console.log("Original Magicians:");
show_magicians(originalMagicians);

console.log("\nModified Magicians (with 'Great' added):");
show_magicians(modified_magition);
