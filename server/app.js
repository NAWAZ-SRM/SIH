require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB=require("./db/conn")
const PORT = 5000;
const session = require("express-session");
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const userdb = require("./models/userSchema")
const dotenv = require('dotenv');
const clientid = "5529960346-gkrfgn131kp1u1havlnsn0kc8tjb7a4a.apps.googleusercontent.com"
const clientsecret = "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"
const cargoRoutes = require('./routes/cargo');
const bidRoutes = require('./routes/bids');
const cronJobs = require('./jobs/cronJobs');
const path = require('path');


dotenv.config();
connectDB();


app.use(cors({
    origin:"http://localhost:5000",
    methods:"GET,POST,PUT,DELETE",
    credentials:true
}));
app.use(express.static(path.join(path.resolve(), '../client/dist')));
app.use(express.json());

// setup session
app.use(session({
    secret:"Nawaz@29042005",
    resave:false,
    saveUninitialized:true
}))

// setuppassport
app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new OAuth2Strategy({
        clientID:clientid,
        clientSecret:clientsecret,
        callbackURL:"http://localhost:5000/auth/google/callback",
        scope:["profile","email"]
    },
    async(accessToken,refreshToken,profile,done)=>{
        try {
            let user = await userdb.findOne({googleId:profile.id});

            if(!user){
                user = new userdb({
                    googleId:profile.id,
                    displayName:profile.displayName,
                    email:profile.emails[0].value,
                    image:profile.photos[0].value
                });

                await user.save();
            }

            return done(null,user)
        } catch (error) {
            return done(error,null)
        }
    }
    )
)

passport.serializeUser((user,done)=>{
    done(null,user);
})

passport.deserializeUser((user,done)=>{
    done(null,user);
});

// initial google ouath login
app.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}));

app.get("/auth/google/callback",passport.authenticate("google",{
    successRedirect:"http://localhost:5000/dashboard",
    failureRedirect:"http://localhost:5000/login"
}))

app.get("/login/sucess",async(req,res)=>{

    if(req.user){
        res.status(200).json({message:"user Login",user:req.user})
    }else{
        res.status(400).json({message:"Not Authorized"})
    }
})

app.get("/logout",(req,res,next)=>{
    req.logout(function(err){
        if(err){return next(err)}
        res.redirect("http://localhost:3000");
    })
})

app.use(express.json());

app.use('/api/cargo', cargoRoutes);
app.use('/api/bids', bidRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(path.resolve(), '../client/dist/index.html'));
  });
  
app.listen(PORT,()=>{
    console.log(`server start at port no ${PORT}`)
})


// app.use(cors({
//     origin: 'http://localhost:3000', // Replace with your frontend's origin
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     credentials: true
// }));


// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
