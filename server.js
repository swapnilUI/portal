
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config.js');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./server/routes/index.route');
const cors = require('cors');
const app = express();
const passport = require('passport');

app.use(express.static(path.join(__dirname, 'build')));

const router = express.Router();
require("./passport")(passport);

//Database connection
mongoose.connect(config.db);
const db = mongoose.connection;

db.once('open',function(){
  console.log("mongodb connected");
});
db.on('error',function(err){
  console.log(err);
});

app.use(function(req, res, next) {
  req.headers['if-none-match'] = 'no-match-for-this';
  next();
});
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/api',routes);
// all of our routes will be prefixed with /api


app.listen(process.env.PORT || 8080);
