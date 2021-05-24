// CREATE A NEW EXPRESS ROUTE
const router = require("express").Router();

const { Router } = require("express");
//IMPORT OUR MODEL
const DailyTask = require("../models/DailyTask")
const Plant = require("../models/Plant")
// SEED DATA FOR dailytask ROUTE
const dailytaskSeed = [
    { 
        water: "Time to water",
        sprinkling: "Time for fertilizer",
        repotting: "Time to upgrade pot size",
        
           
    },
    {
        water: "Not water time",
        sprinkling: "fertilizer",
        repotting: "Time to upgrade pot size",
             
     },
     {  
        water: "Time to water",
        sprinkling: "No fertilizer",
        repotting: "Time to upgrade pot size",
           
     },
  ];

// ROUTES (async, since database actions are asynchronous)

// Seed Route for Seeding Database
router.get("/seed", async (req, res) => {
    // try block for catching errors
    try {
      // remove all dailytasks from database
      await DailyTask.remove({});
      // add the seed data to the database
      await DailyTask.create(dailytaskSeed);
      // get full list of dailytasks to confirm seeding worked
      const dailytasks = await DailyTask.find({});
      // return full list of dailytasks as JSON
      res.json(dailytasks);
    } catch (error) {
      // return error as JSON with an error status
      res.status(400).json(error);
    }
  });
  
  // Index Route
  router.get("/", async (req, res) => {
    try {
      console.count()
      // query database for all the dailytasks
      const dailytasks = await DailyTask.find({});
      // send dailytasks as JSON
      console.count()
      res.json(dailytasks);
    } catch (error) {
      // return error as JSON with an error status
      res.status(400).json(error);
    }
  });
  
  // CREATE Route
  router.post("/", async (req, res) => {
    try {
      // pass the request body to create a new dailytask in the database
      const newDailyTask = await DailyTask.create(req.body);
      // send newly created dailytask back as JSON
      res.json(newDailyTask);
    } catch (error) {
      // return error as JSON with an error status
      res.status(400).json(error);
    }
  });
  
  // update Route
  router.put("/:plantId/addDailyTask/:id", async (req, res) => {
    const dailytask = await DailyTask.findById(req.params.id)
    console.log("DailyTask")
    const plant = await Plant.findByIdAndUpdate(req.params.plantId, {$push: {tasks: dailytask.id},
    new: true
    })
    res.json({status: 200,data: plant})
  });
  
  // delete Route
  router.delete("/:id", async (req, res) => {
      try {
        // delete existing dailytask in the database
        const deletedDailyTask = await DailyTask.findByIdAndRemove(req.params.id);
        // send delete dailytask back as JSON
        res.json(deletedDailyTask);
      } catch (error) {
        // return error as JSON with an error status
        res.status(400).json(error);
      }
    });
  
// export the router which has all our routes registered to it
module.exports = router;