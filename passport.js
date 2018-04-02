const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {}
const User = require("./server/models/userModel");
const config = require("./config");
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secret;
// opts.issuer = 'accounts.examplesoft.com';
// opts.audience = 'yoursite.net';
module.exports = function(passport){
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
      User.getUserById(jwt_payload._doc_id, function(err, user) {
          if (err) {
              return done(err, false);
          }
          if (user) {
              return done(null, user);
          } else {
              return done(null, false);
              // or you could create a new account
          }
      });
  }));
}
