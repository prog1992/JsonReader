const _ = require("lodash");
const jsonfile = require('jsonfile');
const file = "./data.json";

for(var record in jsonfile.readFileSync(file)) {
  _.each(jsonfile.readFileSync(file)[record], function(singlerecord) {
    _.each(singlerecord, function(value) {console.log(value)});
    console.log("");
  });
}
