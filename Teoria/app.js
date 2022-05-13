const modules = require("./modules");

//modules();

//Llamado a los modulos
/*modules.getMessage();
console.log(modules.property)*/

//Otos modulos
var tabledata = [
    { a: 25, b: 32 },
    { a: 30, b: 60 }
];

console.log(tabledata);
console.table(tabledata); //Para tabla

console.group("Bloque");
console.log("Primer elemento");
console.log("Segundo elemento");
console.groupEnd("Bloque");