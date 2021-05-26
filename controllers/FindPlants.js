// CREATE A NEW EXPRESS ROUTE
const router = require("express").Router();

const { Router } = require("express");
//IMPORT OUR MODEL
const Plant = require("../models/Plant")
const DailyTask = require("../models/DailyTask")
// SEED DATA FOR findPlant ROUTE
const findplantSeed = [
    { 
      binomial: "",
      nickname:"",
      type:"",
      img: "",
      frequency: "",
      tempature:"",
      water: "",
      sunlight:"",
      info: "", 
      isVisible: true,
      tasks:[],
      },
   
  ];

// ROUTES (async, since database actions are asynchronous)


// Index Route
router.get("/", async (req, res) => {
  try {
    console.count()
    // query database for all the findplants
    const findplants = await FindPlant.find({});
    // send findplants as JSON
    console.count()
    res.json(findplants);
  } catch (error) {
    // return error as JSON with an error status
    res.status(400).json(error);
  }
});

// CREATE Route
router.post("/", async (req, res) => {
  try {
    // pass the request body to create a new findplant in the database
    const newFindPlant = await FindPlant.create(req.body);
    // send newly created findplant back as JSON
    res.json(newFindPlant);
  } catch (error) {
    // return error as JSON with an error status
    res.status(400).json(error);
  }
});

// update Route
router.put("/:id", async (req, res) => {
  try {
    // pass the request body to update and existing findplant in the database
    const updatedFindPlant = await FindPlant.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    // send newly updated findplant back as JSON
    res.json(updatedFindPlant);
  } catch (error) {
    // return error as JSON with an error status
    res.status(400).json(error);
  }
});

// delete Route
router.delete("/:id", async (req, res) => {
    try {
      // delete existing findplant in the database
      const deletedFindPlant = await FindPlant.findByIdAndRemove(req.params.id);
      // send delete findplant back as JSON
      res.json(deletedFindPlant);
    } catch (error) {
      // return error as JSON with an error status
      res.status(400).json(error);
    }
  });

// export the router which has all our routes registered to it
module.exports = router;