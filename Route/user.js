const express=require("express");
const router=express.Router({mergeParams:true});
const asyncWrap=require("../utils/wrapAsync.js");
const passport=require("passport");
const {saveRedirect}=require("../middleware.js");
const { signup, signupForm, loginForm, loginSuccess, logout } = require("../controllers/user.js");


// router.route
router
    .route("/signup")
    .get(signupForm)
    .post(asyncWrap(signup));

router
    .route("/login")
    .get(loginForm)
    .post(saveRedirect, passport.authenticate("local",{failureRedirect:"/login", failureFlash:true}),asyncWrap(loginSuccess));

router.get("/logout", logout)
module.exports=router;