// const express = require('express')

// const app = express();
// const port = 3000;

// const rootHTML = ['about', 'contact', 'index', 'scavengr', 'wordly'];
// const directories = ['css', 'files', 'img', 'js'];

// app.use('/', express.static(`${__dirname}/index.html`));

// rootHTML.forEach((file) => {
//   console.log(`${__dirname}/${file}.html`);
//   app.use(`/${file}.html`, express.static(`${__dirname}/${file}.html`));
//   app.use(`/${file}`, express.static(`${__dirname}/${file}.html`));
// });

// directories.forEach((dir) => app.use(`/${dir}`, express.static(`${__dirname}/${dir}`)));

// app.listen(port, (err) => {
//   if (err) {
//     return console.log('something bad happened', err)
//   }

//   console.log(`server is listening on ${port}`)
// })

const nodeStatic = require('node-static');

const file = new nodeStatic.Server();

require('http').createServer((request, response) => {
  request.addListener('end', () => {
    file.serve(request, response);
  }).resume();
}).listen(process.env.PORT || 3000);
