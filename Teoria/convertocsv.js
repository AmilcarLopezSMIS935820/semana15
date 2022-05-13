var fs = require("fs");
var stringify = require("csv-stringify");

//json de datos

var data = [
    { "Country": "El Salvador", "Official Languages": "Espanish" },
    { "Country": "India", "Official Languages": "Hindi, English" },
];

stringify.stringify(data, {
    header: true
}, function(err, output) {
    fs.writeFileSync(__dirname + '/data.csv', output)
});