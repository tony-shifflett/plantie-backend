// Import Mongoose
const mongoose = require("mongoose");

// Pull Schema and model from mongoose
const Schema = mongoose.Schema;
const model = mongoose.model;

// Create Song Schema
const plantSchema = new Schema(
    {
        img: String,
        frequency: String,
        water: String,
        sunlight:String,
        info: String
     
      },
    
    { timestamps: true }
  );
  
  // Create our Model Object
  const Plant = model("Plant", plantSchema);

module.exports = Plant