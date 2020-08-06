'use strict';

const Mustache = require('mustache');
const fs = require('fs') 

const view = JSON.parse(fs.readFileSync('src/data/companies.json', "utf8"));
console.log(view);

const htmlTemplate = fs.readFileSync('src/template.mustache', "utf-8");
console.log(htmlTemplate);

const output = Mustache.render(htmlTemplate, view);
console.log(output);

fs.writeFile('src/index.html', output, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

