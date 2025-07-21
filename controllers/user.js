const user=require("../model/user");

module.exports.signupForm=(req,res)=>{
    res.render("users/signup.ejs");
}

module.exports.signup=async(req, res)=>{
    try{
        let {username, email, password}=req.body;
    const newUser=new user({email, username});
    const reguser=await user.register(newUser, password);
    await newUser.save();
    console.log(reguser);
    req.login(reguser,(err)=>{
        if(err){
           return next(err);
        }
        req.flash("success","user registered");
        res.redirect("/listings");
    });
    }catch(err){
        req.flash("error", err.message);
        res.redirect("/signup");
    }
}

module.exports.loginForm=(req, res)=>{
    res.render("users/login.ejs");
}

module.exports.loginSuccess=async(req, res)=>{
    req.flash("success","user logged in");
    const redirect=res.locals.redirect || "/listings";
    res.redirect(redirect);
    
}

module.exports.logout=(req, res, next)=>{
    req.logOut((err)=>{
        if(err){
            next(err);
        }
        req.flash("success", "Logged Out");
        res.redirect("/listings");
    });
}