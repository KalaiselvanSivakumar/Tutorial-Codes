/* global process:readonly, __dirname:readonly */
const express = require('express');
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const multiparty = require('multiparty');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

const flashMiddleware = require('./lib/middleware/flash');

const handlers = require('./lib/handlers');
const { credentials } = require('./config');

const app = express();

const port = process.env.PORT || 3001;

// Middleware to parse body of the request
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cookieParser(credentials.cookieSecret));
// Make sure, cookieParser is linked before expressSession middleware
app.use(expressSession({
  resave: false,
  saveUninitialized: false,
  secret: credentials.cookieSecret
}));

app.use(flashMiddleware);

// Configure Handlebars view engine
app.engine('handlebars', expressHandlebars({
  // This file will be the default layout file for all requests.
  // Unless you specify, this will be used for all views.
  defaultLayout: 'main',

  /**
   * By default, express handlebars will look for files with .handlebars extension only.
   * To use more common .hbs extension, we have to pass the below option.
   */
  // extname: '.hbs',
  helpers: {
    section(name, options) {
      // eslint-disable-next-line no-underscore-dangle
      if (!this._sections) {
        // eslint-disable-next-line no-underscore-dangle
        this._sections = {};
      }
      // eslint-disable-next-line no-underscore-dangle
      this._sections[name] = options.fn(this);

      return null;
    }
  }
}));
app.set('view engine', 'handlebars');

/**
 * To enable template view caching.
 * By default, in development mode, view caching is disabled and
 * in production mode, view caching is enabled
 */
app.set('view cache', true);


// app.get('/', (req, res) => {
//   res.type('text/plain');
//   res.send('Meadowlark Travel');
// });

// Case insentive and query string is not considered while checking route match
// app.get('/about', (req, res) => {
//   res.type('text/plain');
//   res.send('About Meadowlark Travel');
// });

app.get('/', handlers.home);
// app.get('/about', (req, res) => res.render('about'));

// app.get('/about', (req, res) => {
//   res.render('about', {
//     fortune: fortune.getFortune()
//   });
// });

app.get('/about', handlers.about);

app.get('/showheaders', handlers.showHeaders);

app.get('/newsletter-signup', handlers.newsletterSignup);
app.post('/newsletter-signup/process', handlers.newsletterSignupProcess);
app.get('/newsletter-signup/thankyou', handlers.newsletterSignupThankYou);

app.get('/newsletter', handlers.newsletter);
app.post('/api/newsletter-signup', handlers.api.newsletterSignup);

app.post('/newsletter', handlers.newsletterPost);

app.get('/contest/vacation-photo', handlers.vacationPhotoContest);
app.post('/contest/vacation-photo/:year/:month', (req, res) => {
  const form = new multiparty.Form();
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(500).send({
        error: err.message
      });
    }
    handlers.vacationPhotoContestProcess(req, res, fields, files);

    return res;
  });
});

app.get('/set-sample-cookie', handlers.setSampleCookie);
app.get('/get-sample-cookie', handlers.getSampleCookie);

// Telling express to use the public folder as static resource directory
// This is static middleware
// Putting this middleware first will have the same effect of defining route order.
// For ex, putting this first and having index.html file in public folder will serve that content for '/' path
app.use(express.static(__dirname + '/public'));

// Custom 404 page
// app.use((req, res) => {
//   res.status(404);

//   // Below two lines is basic example

//   // res.type('text/plain');
//   // res.send('404 - Not Found');

//   res.render('404');
// });

app.use(handlers.notFound);

// Custom 500 page
// app.use((err, req, res, next) => {
//   console.error(err.message);
//   res.status(500);

//   // res.type('text/plain');
//   // res.send('500 - Server Error');

//   res.render('500');
// });

app.use(handlers.serverError);

// Express differentiates 404 and 500 based on the number of arguments in the callback function
// Above two use methods are examples of middlewares supported by express

// The below is the response header set to Express by express application.
// We should hide these kind of information to avoid giving hint to the hacker about the server.
app.disable('x-powered-by');

if (require.main === module) {
  app.listen(port, () => {
    console.log(
      `Express started on http://localhost:${ port }; ` +
      'press Ctrl-C to terminate.');
  });
}
else {
  // Testing flow
  module.exports = app;
}
