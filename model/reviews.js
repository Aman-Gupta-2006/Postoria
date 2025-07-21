
const mongoose=require("mongoose");
const Schema=mongoose.Schema;

// main().then(()=>{console.log("working")}).catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/reviews');
// }

const reviewsSchema=new Schema({
    author:{
        type:Schema.Types.ObjectId,
        ref:"user",
    },
    Comment:{
        type:String,
        max:50,
    },
    rating:{
        type:Number,
        min:1,
        max:5,
    },
    createdDate:{
        type:Date,
        default:Date.now(),
    }
});
const Review=mongoose.model("review", reviewsSchema);
module.exports= Review;
