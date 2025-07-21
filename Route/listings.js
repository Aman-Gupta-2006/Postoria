const express=require("express");
const router=express.Router();

const asyncWrap=require("../utils/wrapAsync.js");

const { isLoggedIn, isOwner , validateListing} = require("../middleware.js");
const {searchQuery, show, renderNewForm, newLisitng, renderEditForm, update, deleteListing}=require("../controllers/listings.js")
const multer  = require('multer');
const {storage}=require("../cloudConfig.js");
const upload = multer({ storage  });
router
    .route("/")
    .get(asyncWrap(searchQuery))
    .post(isLoggedIn,upload.single("listing[image]"), validateListing,asyncWrap(newLisitng));
    


router.get("/new",isLoggedIn,renderNewForm);

router
    .route("/:id")
    .get(asyncWrap(show))
    .put(isLoggedIn, isOwner,upload.single("listing[image]"), validateListing,asyncWrap(update))
    .delete(isLoggedIn ,isOwner, asyncWrap(deleteListing));


router.route("/:id/edit").get(isLoggedIn ,isOwner,asyncWrap(renderEditForm));

module.exports=router;