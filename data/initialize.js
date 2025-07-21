const mongoose=require("mongoose");
const model=require("../model/data.js");
const initData=require("./data.js")

require('dotenv').config();

async function main() {
  try {
    await mongoose.connect(process.env.ATLASDB_URL);
    console.log('Connected to MongoDB Atlas');
    await model.deleteMany({});
    await model.insertMany(initData.data);
    console.log('Sample listings inserted!');
  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

main();