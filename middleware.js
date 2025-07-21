const listing=require("./model/data");
const review=require("./model/reviews");
const {listingSchema}=require("./schema.js");
const {reviewSchema}=require("./schema.js");

module.exports.isLoggedIn=(req,res, next)=>{
    if(!req.isAuthenticated()){
        req.session.redirect=req.originalUrl;
        req.flash("error","User not logged in");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirect=(req, res, next)=>{
    if(req.session.redirect){
        res.locals.redirect=req.session.redirect;
    }
    next();
}


module.exports.isOwner= async (req, res, next)=>{
    let {id}= req.params;
    let data=await listing.findById(id);
    if(!data.owner.equals(res.locals.currUser._id)){
        req.flash("error","You are not the owner of the listing");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.validateListing=(req,res,next)=>{
    let {error}=listingSchema.validate(req.body);
    if(error){
        let errMessage=error.details.map((el)=>(el.message)).join(",");
        throw new ExpressError(400, errMessage);
    }else{
        next();
    }
}

module.exports.validateReview=(req,res,next)=>{
    let {error}=reviewSchema.validate(req.body);
    if(error){
        let errMessage=error.details.map((el)=>(el.message)).join(",");
        console.log(error.details);

        throw new ExpressError(400, errMessage);
    }else{
        next();
    }
}

module.exports.isReviewAuthor=async (req, res, next)=>{
    let { id, reviewId }= req.params;
    let data=await review.findById(reviewId);
    if(!data.author.equals(res.locals.currUser._id)){
        req.flash("error","You are not the author of the comment");
        return res.redirect(`/listings/${id}`);
    }
    next();
}