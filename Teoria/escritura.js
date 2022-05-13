var fs = require("fs").promises;
var parse = require("csv-parse/sync");

(async function() {
    const fileContent = await fs.readFile(__dirname + '/listado.csv');
    const records = parse.parse(fileContent, { columns: true });
    console.table(records);
})();