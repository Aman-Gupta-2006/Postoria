const mongoose=require("mongoose");
const Review = require("./reviews.js");
// const user = require("./user.js");

const Schema=mongoose.Schema;
let listingSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    image:{
        url:String,
        filename:String,
    },
    
    location:{
        type:String,
    },
    country:{
        type:String,
    },
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"review",
    }],
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    },
    // category:{
    //     type:String,
    //     enum:["Mountains", "Castle", "Amazing Pools", "Rooms", "Iconic Cities", "Trending", "Farm", "Arctic", "Camping"],
    // }
});

listingSchema.post("findOneAndDelete",async (element)=>{
    if(element){
        await Review.deleteMany({_id:{$in: element.reviews}});
    }
    
});


let listing=mongoose.model("listing",listingSchema);
module.exports=listing;