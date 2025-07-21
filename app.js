if(process.env.NODE_ENV!="production"){
    require("dotenv").config();
}
const express=require("express");  
const mongoose=require("mongoose");
const path=require("path");
const ejsMate=require("ejs-mate");
const methodOverride=require("method-override");
const ExpressError=require("./utils/ExpressError.js");
const joi=require("joi");
const listingsRouter=require("./Route/listings.js");
const reviewsRouter=require("./Route/reviews.js");
const userRouter=require("./Route/user.js");
const app=express();
const session=require("express-session");
const MongoStore = require("connect-mongo");
const flash=require("connect-flash");
const passport=require("passport");
const localStratergy=require("passport-local");
const user=require("./model/user.js");
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
const cookieParser=require("cookie-parser");
app.use(cookieParser());

app.use((req, res, next)=>{
    res.locals.currUser=req.user;
    res.locals.success=req.flash("Success");
    res.locals.error=req.flash("error");
    next();
});

const sessionOptions = {
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.ATLASDB_URL,
        touchAfter: 24 * 3600, // time period in seconds
    }),
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000, // one week expiry
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax"
    },
};
app.use(session(sessionOptions));
app.use(flash());
passport.use(new localStratergy(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());
app.use(passport.initialize());
app.use(passport.session());



// app.get("/demoUser", async(req, res)=>{
//     let fakeUser=new user({
//         email:"blabla@gmail.com",
//         username:"blabla",
//     });
//     let regiteredUser=await user.register(fakeUser, "helloWorld");
//     res.send(regiteredUser);

// });

app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/", userRouter);

// Home route: show all listings on home page
const Listing = require("./model/data.js");

app.get("/", async (req, res, next) => {
  try {
    const allListing = await Listing.find();
    res.render("./listings/index.ejs", { allListing });
  } catch (err) {
    next(err);
  }

});
let mongo_url=process.env.ATLASDB_URL;
main().then(()=>{console.log("Working")}).catch((err)=>{console.log(err)});


async function main(){
    return await mongoose.connect(mongo_url);
}
const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log("Server listening");
});



app.all("*",(req,res,next)=>{
    next(new ExpressError(404, "page not found"));
})
app.use((err,req,res,next)=>{
    let {status=500, message="Something went wrong"}=err;
    res.render("./listings/error.ejs",{message});
    
})