const express = require('express');
const expressHandlebars = require('express-handlebars');

const app = express();

const port = process.env.PORT || 3001;
const fortunes = [
  "Conquer your fears or they will conquer you.",
  "Rivers need springs.",
  "Do not fear what you don't know.",
  "You will have a pleasant surprise.",
  "Whenever possible, keep it simple.",
];

// Configure Handlebars view engine
app.engine('handlebars', expressHandlebars({
  // This file will be the default layout file for all requests.
  // Unless you specify, this will be used for all views.
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


// app.get('/', (req, res) => {
//   res.type('text/plain');
//   res.send('Meadowlark Travel');
// });

// Case insentive and query string is not considered while checking route match
// app.get('/about', (req, res) => {
//   res.type('text/plain');
//   res.send('About Meadowlark Travel');
// });

app.get('/', (req, res) => res.render('home'));
// app.get('/about', (req, res) => res.render('about'));

app.get('/about', (req, res) => {
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.render('about', {
    fortune: randomFortune
  });
});

// Telling express to use the public folder as static resource directory
// This is static middleware
// Putting this middleware first will have the same effect of defining route order.
// For ex, putting this first and having index.html file in public folder will serve that content for '/' path
app.use(express.static(__dirname + '/public'));

// Custom 404 page
app.use((req, res) => {
  res.status(404);

  // Below two lines is basic example

  // res.type('text/plain');
  // res.send('404 - Not Found');

  res.render('404');
});

// Custom 500 page
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500);

  // res.type('text/plain');
  // res.send('500 - Server Error');

  res.render('500');
});

// Express differentiates 404 and 500 based on the number of arguments in the callback function
// Above two use methods are examples of middlewares supported by express

app.listen(port, () => {
  console.log(
    `Express started on http://localhost:${ port }; ` +
    'press Ctrl-C to terminate.');
});
