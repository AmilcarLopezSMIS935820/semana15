var fs = require("fs");
var parse = require("csv-parse");

var parser = parse.parse({ columns: true }, function(err, records) {
    console.table(records); //Mostrando en tabla
});

fs.createReadStream(__dirname + '/listado.csv').pipe(parser);