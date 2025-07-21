// controllers/listings.js
const  Listing  = require('../model/data');


// serching functionality
module.exports.searchQuery = async (req, res) => {
  const { q } = req.query;
  let allListing;
  if (q && q.trim() !== "") {
    // Case-insensitive search for location or country
    allListing = await Listing.find({
      $or: [
        { location: { $regex: q, $options: "i" } },
        { country: { $regex: q, $options: "i" } }
      ]
    });
  } else {
    allListing = await Listing.find();
  }
  res.render("./listings/index.ejs", { allListing, searchQuery: q || "" });
}

//show Listing

module.exports.show = async (req, res) => {
  let {id} = req.params;
  const read = await Listing.findById(id).populate({
    path:"reviews", 
    populate:{
      path:"author",
    }
  });
  if(!read){
    req.flash("error","No Such Listing Exist");
    res.redirect("/listings");
  }
  res.render("./listings/show.ejs",{read});
}

module.exports.renderNewForm = (req, res) => {
  res.render("listings/form.ejs");
}

module.exports.newLisitng = async (req, res) => {
  let url = req.file.path;
  let filename = req.file.filename; 
  let newLisitng = new Listing(req.body.listing);
  newLisitng.owner = req.user._id;
  newLisitng["image"].url = url;
  newLisitng["image"].filename = filename;
  await newLisitng.save();
  req.flash("success","New Listing is Added!");
  res.redirect("/listings");
}

module.exports.renderEditForm = async (req, res) => {
  let {id} = req.params;
  let data = await Listing.findById(id);
  if(!data){
    req.flash("error","No Such Listing Exist");
    res.redirect("/listings");
  }
  let originalImage = data && data.image && data.image.url; 
  if(originalImage){
    originalImage = originalImage.replace("/upload", "/upload/w_250");
  }
  req.flash("success","Listing is Edited!");
  res.render("listings/edit.ejs",{data, originalImage});
}

module.exports.update = async (req, res) => {
  let {id} = req.params;
  let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing});
  if(typeof(req.file) !== "undefined"){
    let url = req.file.path;
    let filename = req.file.filename; 
    listing.image = {url, filename};
    await listing.save();
  }
  res.redirect(`/listings/${id}`);
}

module.exports.deleteListing = async (req, res) => {
  let {id} = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success","Listing is deleted!");
  res.redirect("/listings");
}