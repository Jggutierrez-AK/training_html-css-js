'use strict';

const Mustache = require('mustache');
const fetch = require('cross-fetch');
const fs = require('fs');

async function getCompaniesData (url) {
  const response = await fetch(url);
  return response.json();
}

getCompaniesData('https://my-json-server.typicode.com/Jggutierrez-AK/json_fake_server/db')
  .then(view => {
    const htmlTemplate = getHtmlTemplate();
    const output = renderHtmlDoc(htmlTemplate, view);
    generateFile(output);
  })
  .catch(err => console.log(err));

const getHtmlTemplate = () => fs.readFileSync('src/template.mustache', "utf-8");

const renderHtmlDoc = (htmlTemplate, view) => Mustache.render(htmlTemplate, view);

const generateFile = (output) => {
  fs.writeFile('src/index.html', output, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
})};

