require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const rtsIndex = require('./routes/index.router');

var app = express();

var session=require('express-session');
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.use(session({secret: 'ssshhhhh'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// middleware

app.use(cors());
app.use(passport.initialize());
app.use('/api', rtsIndex);

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    else{
        console.log(err);
    }
});
var sess;

/*app.get('api/',function(req,res){
sess = req.session;
//Session set when user Request our app via URL
if(sess.email) {
/*
* This line check Session existence.
* If it existed will do some action.

    res.redirect('api/userprofile');
}
else {
    res.render('/');
}
});
app.post('api/login',function(req,res){
    sess = req.session;
  //In this we are assigning email to sess.email variable.
  //email comes from HTML page.
    sess.email=req.body.email;
    res.end('done');
  });

  app.get('api/userprofile',function(req,res){
    sess = req.session;
  if(sess.email) {
  res.write('<h1>Hello '+sess.email+'</h1>');
  res.end('<a href="+">Logout</a>');
  } else {
      res.write('<h1>Please login first.</h1>');
      res.end('<a href="+">Login</a>');

  }
  });
  
app.get('api/logout',function(req,res){
req.session.destroy(function(err) {
  if(err) {
    console.log(err);
  } else {
    res.redirect('');
  }
});
});


  */

// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));