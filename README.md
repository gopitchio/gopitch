##Front End
React, Redux, Create React App
##Back End
NodeJS/Express, MongoDB, Passport Auth, Mongoose, Cookie-Session

## Start Up

1. CREATE <code>dev.js</code> file inside server/config folder. 
2. ADD config settings inside <code>dev.js</code> like so:

        module.exports = {
                googleClientID: "Your Google Client Secret ID",
                googleClientSecret: "Your Google Client Secret",
                mongoURI: "Mongo DB URI",
                cookieKey: "secretcookiekey"
        };

3. cd server
4. npm run dev

