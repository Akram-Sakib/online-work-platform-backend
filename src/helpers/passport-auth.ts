import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import config from '../config';

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: config.google.client_id!,
      clientSecret: config.google.client_secret!,
      callbackURL: config.google.callback_url,
      // passReqToCallback: true,
      scope: ['profile'],
      // state: true,
    },
    function verify(accessToken, refreshToken, params, profile, cb) {
      console.log('verify -> accessToken', params.id_token);

      return cb(null, profile);
    }
  )
);
