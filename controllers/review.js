const Review=require("../model/reviews");
const listing=require("../model/data");
module.exports.addReview=async(req, res)=>{
    let {id}=req.params;
    let find=await listing.findById(id);
    let r=new Review(req.body.review);
    r.author=req.user._id;
    find.reviews.push(r);
    console.log(r);
    await r.save();
    await find.save();
    console.log(find);
    res.redirect(`/listings/${id}`);

}

module.exports.deleteReview=async(req,res)=>{
    let { id, reviewId}=req.params;
    await listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","Review Deleted");
    res.redirect(`/listings/${id}`);
}