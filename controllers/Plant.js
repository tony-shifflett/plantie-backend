// CREATE A NEW EXPRESS ROUTE
const router = require("express").Router();

const { Router } = require("express");
//IMPORT OUR MODEL
const Song = require("../models/Plant")

// SEED DATA FOR Plant ROUTE
const plantSeed = [
    { 
       img: "String",
       frequency: "String",
       water: "String",
       sunlight:"String",
       info: "String"    
    },
    {
        img: "String",
        frequency: "String",
        water: "String",
        sunlight:"String",
        info: "String"     
     },
     {  
        img: "String",
        frequency: "String",
        water: "String",
        sunlight:"String",
        info: "String"    
     },
  ];

// ROUTES (async, since database actions are asynchronous)

// Seed Route for Seeding Database
router.get("/seed", async (req, res) => {
    // try block for catching errors
    try {
      // remove all plants from database
      await Plant.remove({});
      // add the seed data to the database
      await Plant.create(plantSeed);
      // get full list of plants to confirm seeding worked
      const plants = await Plant.find({});
      // return full list of plants as JSON
      res.json(plants);
    } catch (error) {
      // return error as JSON with an error status
      res.status(400).json(error);
    }
  });
  
  // Index Route
  router.get("/", async (req, res) => {
    try {
      console.count()
      // query database for all the songs
      const songs = await Song.find({});
      // send songs as JSON
      console.count()
      res.json(songs);
    } catch (error) {
      // return error as JSON with an error status
      res.status(400).json(error);
    }
  });
  
  // CREATE Route
  router.post("/", async (req, res) => {
    try {
      // pass the request body to create a new plant in the database
      const newPlant = await Plant.create(req.body);
      // send newly created plant back as JSON
      res.json(newPlant);
    } catch (error) {
      // return error as JSON with an error status
      res.status(400).json(error);
    }
  });
  
  // update Route
  router.put("/:id", async (req, res) => {
    try {
      // pass the request body to update and existing plant in the database
      const updatedPlant = await Plant.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      // send newly updated plant back as JSON
      res.json(updatedPlant);
    } catch (error) {
      // return error as JSON with an error status
      res.status(400).json(error);
    }
  });
  
  // delete Route
  router.delete("/:id", async (req, res) => {
      try {
        // delete existing plant in the database
        const deletedPlant = await Plant.findByIdAndRemove(req.params.id);
        // send delete plant back as JSON
        res.json(deletedPlant);
      } catch (error) {
        // return error as JSON with an error status
        res.status(400).json(error);
      }
    });
  
// export the router which has all our routes registered to it
module.exports = router;