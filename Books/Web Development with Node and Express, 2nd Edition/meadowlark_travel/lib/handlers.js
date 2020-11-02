const fortune = require('./fortune');

exports.home = (req, res) => res.render('home');

exports.about = (req, res) => {
  res.render('about', {
    fortune: fortune.getFortune()
  });
};

exports.notFound = (req, res) => res.render('404');

// Express recognizes the error handler by way of its four
// arguments, so we have to disable ESLint's no-unused-vars rule
/* eslint-disable no-unused-vars */
exports.serverError = (err, req, res, next) => res.render('500');
/* eslint-enable no-unused-vars */

exports.showHeaders = (req, res) => {
  res.type('text/plain');
  const headers = Object.entries(req.headers)
    .map(([
      key,
      value
    ]) => `${ key } : ${ value }`);
  res.send(headers.join('\n'));
};

exports.newsletterSignup = (req, res) => {
  res.render('newsletter-signup', {
    csrf: 'CSRF token goes here'
  });
};

exports.newsletterSignupProcess = (req, res) => {
  console.log(`Form (from querystring): ${ req.query.form }`);
  // eslint-disable-next-line no-underscore-dangle
  console.log(`CSRF token (from hidden form field): ${ req.body._csrf }`);
  console.log(`Name (from visible form field): ${ req.body.name }`);
  console.log(`EMail (from visible form field): ${ req.body.email }`);
  res.redirect(303, '/newsletter-signup/thankyou');
};

exports.newsletterSignupThankYou = (req, res) => {
  res.render('newsletter-signup-thank-you');
}

exports.newsletter = (req, res) => {
  res.render('newsletter', {
    csrf: 'CSRF token goes here'
  });
}

exports.newsletterPost = (req, res) => {
  // const { name } = req.body;
  const { email } = req.body;
  // slightly modified version of the official W3C HTML5 email regex:
  // https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
  const VALID_EMAIL_REGEX = new RegExp('^[a-zA-Z0-9.!#$%&\'*+\/=?^_`{|}~-]+@' +
    '[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?' +
    '(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$');
  if (!VALID_EMAIL_REGEX.test(email)) {
    // Since we are setting flash in req.session and middleware captures at the initial stage of the request,
    // we have to redirect to make use of flash middleware
    req.session.flash = {
      intro: 'Validation error!',
      message: 'The email address you entered was not valid',
      type: 'danger',
    }
    // Instead of setting to req.session.flash, if you set it to res.locals.flash,
    // it will be available without redirection.

    return res.redirect(303, '/newsletter');
  }
}

exports.api = {
  newsletterSignup: (req, res) => {
    // eslint-disable-next-line no-underscore-dangle
    console.log(`CSRF token (from hidden form field): ${ req.body._csrf }`);
    console.log(`Name (from visible form field): ${ req.body.name }`);
    console.log(`EMail (from visible form field): ${ req.body.email }`);
    res.json({
      result: 'success'
    });
  }
}

exports.vacationPhotoContest = (req, res) => {
  res.render('contest/vacation-photo', {
    csrf: 'CSRF token goes here',
    month: 10,
    year: 2020
  });
}

exports.vacationPhotoContestProcess = (req, res, fields, files) => {
  console.log(`Field data: ${ fields }`);
  console.log(`Files: ${ files }`);
  res.redirect(303, '/contest/vacation-photo-thank-you');
}

exports.setSampleCookie = (req, res) => {
  res.cookie('monster', 'Monster: nom nom');
  res.cookie('secret_monster', 'Secret monster: nom nom secret', {
    signed: true
  });
  // Order matters
  res.cookie('same_name', 'Secret same name: dummy', {
    // Setting the below option will allow us to restrict modification of the cookie by using JavaScript
    httpOnly: true,
    // If not set, browser will delete cookie after browser window close
    // It is the time in milliseconds which instructs the browser to hold the value for the specified milliseconds
    maxAge: 12124214,
    // By default, path is '/'. This allows to set path like /admin, /support to use only at the path.
    // Also, the path will follow wildcard character, i.e. path: "/admin" will be used for /admin, /admin/index, and so on
    path: '',
    signed: true
  });
  res.cookie('same_name', 'Same name: dummy');
  res.json({
    cookie: 'Set successfully'
  });
}

exports.getSampleCookie = (req, res) => {
  console.log(req.cookies.monster);
  console.log(req.signedCookies.secret_monster);
  console.log(req.cookies.same_name);
  console.log(req.signedCookies.same_name);

  // For sessions, both retrive as well as store happens on the req object itself and not on the res object

  // req.session.userName = 'Anonymous'
  // const colorScheme = req.session.colorScheme || 'dark'

  // To delete, use delete operator. Setting null wont delete instead overwrite the value.
  // delete req.session.colorScheme


  // Clears the cookie from the browser
  res.clearCookie('monster');
  res.json({
    cookie: 'Cookie printed successfully'
  });
}
