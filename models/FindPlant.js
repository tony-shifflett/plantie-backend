// Import Mongoose
const mongoose = require("mongoose");

// Pull Schema and model from mongoose
const Schema = mongoose.Schema;
const model = mongoose.model;

// Create Song Schema
const findplantSchema = new Schema(
    {
        
        binomial: {type:String, require:true},
        nickname:String,
        type:String,
        img: String,
        frequency: String,
        temperature: String,
        water: String,
        sunlight:String,
        info: String,
        isVisible: {type:Boolean, default:true},
        tasks: [{ref:"DailyTask", type:mongoose.Schema.Types.ObjectId}]
     
      },
    
    { timestamps: true }
  );
  
  // Create our Model Object
  const FindPlant = model("FindPlant", findplantSchema);

module.exports = FindPlant