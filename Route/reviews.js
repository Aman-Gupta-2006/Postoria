const express=require("express");
const router=express.Router({mergeParams:true});
const asyncWrap=require("../utils/wrapAsync.js");
const {validateReview, isLoggedIn, isReviewAuthor}=require("../middleware.js");
const { addReview, deleteReview } = require("../controllers/review.js");



router.post("/",isLoggedIn,validateReview,asyncWrap(addReview));


router.delete("/:reviewId",isLoggedIn,isReviewAuthor,asyncWrap(deleteReview));

module.exports=router;