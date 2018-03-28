
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./server/routes/index.route');
const cors = require('cors');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

const router = express.Router();


//Database connection
mongoose.connect("mongodb://snportal:asdfgh12345@ds127139.mlab.com:27139/portaldata");
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

// all of our routes will be prefixed with /api
app.use('/api', routes);

app.listen(process.env.PORT || 8080);
