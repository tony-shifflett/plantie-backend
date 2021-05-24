// Import Mongoose
const mongoose = require("mongoose");

// Pull Schema and model from mongoose
const Schema = mongoose.Schema;
const model = mongoose.model;

// Create Song Schema
const plantSchema = new Schema(
    {
        name:{type:String, require:true},
        type:String,
        img: String,
        frequency: String,
        temperature: String,
        water: String,
        sunlight:String,
        info: String,
        tasks: [{ref:"DailyTask", type:mongoose.Schema.Types.ObjectId}]
     
      },
    
    { timestamps: true }
  );
  
  // Create our Model Object
  const Plant = model("Plant", plantSchema);

module.exports = Plant