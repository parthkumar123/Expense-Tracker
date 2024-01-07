"use strict";
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.serializeUser((user, done) => {
    done(null, user);
})
passport.deserializeUser(function (user, done) {
    done(null, user);
});

passport.use(
    new GoogleStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: process.env.CALLBACK_URL,
        passReqToCallback: true
    }, function (request, accessToken, refreshToken, profile, done) {
        return done(null, profile);
        // // Check if the user already exists in the database
        // const existingUser = await User.findOne({ googleId: profile.id });

        // if (existingUser) {
        //     // User already exists, proceed with login
        //     return done(null, existingUser);
        // }

        // // User does not exist, create a new user
        // const newUser = new User({
        //     googleId: profile.id,
        //     displayName: profile.displayName,
        //     email: profile.emails[0].value,
        //     // Add more fields as needed
        // });

        // await newUser.save();
        // done(null, newUser);
    })
);
