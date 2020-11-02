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
