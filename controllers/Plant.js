// CREATE A NEW EXPRESS ROUTE
const router = require("express").Router();

const { Router } = require("express");
//IMPORT OUR MODEL
const Plant = require("../models/Plant")
const DailyTask = require("./DailyTask")
// SEED DATA FOR Plant ROUTE
const plantSeed = [
    { 
        
        binomial: "Juniperus chinensis 'Shimpaku' ",
        nickname:"",
        type:"Bonsai Tree",
       img: "https://images.unsplash.com/photo-1579450841234-49351e3a312b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9uc2FpJTIwdHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
       frequency: "2/week",
       tempature:"20-24˚F",
       water: "150ml",
       sunlight:"Indirect light",
       info: "They say that bonsai isn't just a plant, it's a way of life. Bonsai trees require regular care and maintenance. ... For beginners, Juniper bonsai trees are the easiest to care for so they're perfect for novice bonsai enthusiasts.", 
      },
    {
        
        binomial:"genus Gypsophila",
        nickname:"",
        type:"Gypsophilia",
        img: "https://images.unsplash.com/photo-1614876753060-0751185c9289?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80",
        frequency: "1/3-4 days",
        temperature:"34 - 36˚F",
        water: "120ml",
        sunlight:"Direct light",
        info: "Gypsophila is a genus of flowering plants in the carnation family, Caryophyllaceae. They are native to Eurasia, Africa, Australia, and the Pacific Islands."     
     },
     {  
        
        binomial:"Cactaceae",
        nickname:"",
        type:"Cactus",
        img: "https://images.unsplash.com/photo-1508022057371-4f937727f440?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdXNlJTIwY2FjdHVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        frequency: "none",
        temperature:"34 - 36˚F",
        water: "none",
        sunlight:"Direct light",
        info: "Small and prickly. Harmful to touch!"    
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
      // query database for all the plants
      const plants = await Plant.find({});
      // send plants as JSON
      console.count()
      res.json(plants);
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