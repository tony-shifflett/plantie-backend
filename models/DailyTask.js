// Import Mongoose
const mongoose = require("mongoose");

// Pull Schema and model from mongoose
const Schema = mongoose.Schema;
const model = mongoose.model;

// Create Song Schema
const dailytaskSchema = new Schema(
    {
        water:String,
        repotting: String,
        
     
      },
    
    { timestamps: true }
  );
  
  // Create our Model Object
  const DailyTask = model("DailyTask", dailytaskSchema);

module.exports = DailyTask