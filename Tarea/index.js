var fs = require("fs");
var parse = require("csv-parse");
var stringify = require("csv-stringify");

/* ------------------------- */
console.log("Configurando archivo Libros.csv");

function guardarInformacion() {
    var data = [
        { "ID": "A01", "Nombre del libro": "Relatos fantásticos", "Idioma del libro": "Español" },
        { "ID": "A02", "Nombre del libro": "Murder on the orient express", "Idioma del libro": "Ingles" },
        { "ID": "A03", "Nombre del libro": "Mil años de soledad", "Idioma del libro": "Español" },
        { "ID": "A04", "Nombre del libro": "El hombre que pudo reinar", "Idioma del libro": "Español" },
        { "ID": "A05", "Nombre del libro": "Odisea", "Idioma del libro": "Español" },
        { "ID": "A06", "Nombre del libro": "El corsario negro", "Idioma del libro": "Español" },
        { "ID": "A07", "Nombre del libro": "De la tierra a la Luna", "Idioma del libro": "Español" },
        { "ID": "A08", "Nombre del libro": "Ulysses", "Idioma del libro": "Ingles" },
        { "ID": "A09", "Nombre del libro": "Don Quijote de la Mancha", "Idioma del libro": "Español" },
        { "ID": "A10", "Nombre del libro": "The Outsiders", "Idioma del libro": "Ingles" },
    ];

    stringify.stringify(data, {
        header: true
    }, function(err, output) {
        fs.writeFileSync(__dirname + '/Libros.csv', output)
    });

    setTimeout(() => {
        console.log("Leyendo datos del archivo creado\n");
    }, 2000);
};

function leerArchivo() {
    var parser = parse.parse({ columns: true }, function(err, records) {
        console.table(records); //Mostrando en tabla
    });

    fs.createReadStream(__dirname + '/Libros.csv').pipe(parser);

};

/* ------------------------- */

guardarInformacion();
setTimeout(() => { leerArchivo() }, 4000);