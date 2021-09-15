/* global process:readonly, __dirname:readonly */
const express = require('express');
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const multiparty = require('multiparty');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
// const nodeMailer = require('nodemailer');
const morgan = require('morgan');
const fs = require('fs');
const cluster = require('cluster');

const flashMiddleware = require('./lib/middleware/flash');
const cartValidation = require('./lib/middleware/cartValidation');

const handlers = require('./lib/handlers');
const { credentials } = require('./config');

const app = express();

// const port = process.env.PORT || 3001;

// const mailTransport = nodeMailer.createTransport({
//   auth: {
//     pass: credentials.sendgrid.pass,
//     user: credentials.sendgrid.user
//   },
//   host: 'smtp.sendgrid.net',
//   port: 587,
// });

// Simple mail send example
// mailTransport.sendMail({
//   from: '"Sendgrid register" <registeredmailinsendgridforfrom@gmail.com>',
//   subject: 'Testing simple mail from nodeMail package',
//   // Node mailer allows to send HTML version and text version at the same time. Email client will pick up the version it needs.
//   html: '<h1>Simple mail example</h1>\n<p>This is a <b>paragraph</b></p>',
//   text: 'Simple mail send example application!',

//   // Single recipient
//   // to: 'anyaddressforsendinginsendgrid@gmail.com',

//   // Multiple recipients supported using comma
//   to: 'anyaddressforsendinginsendgrid@gmail.com, "Sendgrid test" <sendgridtestemail@yahoo.com>, someotherdomailemail@outlook.com'
// })
// .then((result) => {
//   console.log('Mail sent successfully: ', result);
// })
// .catch((err) => {
//   console.log('Could not send mail: ' + err.message);
// })

switch (app.get('env')) {
  case 'production':
    app.use(morgan('combined', {
      stream: fs.createWriteStream(__dirname + '/access.log', {
        flags: 'a'
      })
    }));
    break;
  case 'development':
  default:
    app.use(morgan('dev'));
    break;
}

app.use((req, res, next) => {
  if (cluster.isWorker) {
    console.log(`Worker ${ cluster.worker.id } received request`);
  }
  next();
})

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
app.use(cartValidation.resetValidation);
app.use(cartValidation.checkWaivers);
app.use(cartValidation.checkGuestCounts);

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

app.post('/cart/checkout', handlers.checkout);

app.get('/fail', (req, res) => {
  throw new Error('Nope!');
});

app.get('/epic-fail', (req, res) => {
  process.nextTick(() => {
    throw new Error('Kaboom!')
  })
})

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

function startServer(port) {
  app.listen(port, () => {
    console.log(
      `Express started in ${ app.get('env') } mode at http://localhost:${ port }; ` +
      'press Ctrl-C to terminate.');
  });
}

if (require.main === module) {
  startServer(process.env.PORT || 3001);
}
else {
  // Testing flow
  module.exports = startServer;
}
