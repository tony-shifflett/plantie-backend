// CREATE A NEW EXPRESS ROUTE
const router = require("express").Router();

const { Router } = require("express");
//IMPORT OUR MODEL
const Plant = require("../models/Plant")
const DailyTask = require("../models/DailyTask")
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
      isVisible: true,
      tasks:[],
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
        info: "Gypsophila is a genus of flowering plants in the carnation family, Caryophyllaceae. They are native to Eurasia, Africa, Australia, and the Pacific Islands.",
        isVisible:true,
        tasks:[]     
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
        info: "Small and prickly. Harmful to touch!",
        isVisible:true,
        tasks:[]    
     },

     { 
      binomial: "Trichosanthes cucumerina",
      nickname:"",
      type:"Snake Gourd Flower",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/0d/A_Beautiful_flower_of_snake_gourd_plant_%28Trichosanthes_cucumerina%29.jpg",
      frequency: "4/week",
      tempature:"20-24˚F",
      water: "180ml",
      sunlight:"Direct light",
      info: "The snake gourd is an annual plant with forked tendrils and kidney- or heart-shaped leaves that are sometimes palmately lobed.", 
      isVisible: true,
      tasks:[],
      },
    {
        
        binomial:"Magnolia fraseri",
        nickname:"",
        type:"Magnolia Flower",
        img: "https://images.unsplash.com/photo-1474112704314-8162b7749a90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        frequency: "3/week",
        temperature:"34 - 36˚F",
        water: "120ml",
        sunlight:"Indirect light",
        info: "Magnolias are spreading, evergreen or deciduous trees or shrubs, characterised by large fragrant flowers which may be bowl-shaped or star-shaped, in shades of white, pink, purple, green or yellow.",
        isVisible:true,
        tasks:[]     
     },
     {  
        
        binomial:"Schlumbergera",
        nickname:"",
        type:"Cactus",
        img: "https://www.gardenloversclub.com/wp-content/uploads/2016/10/Christmas-Cactus.jpg",
        frequency: "none",
        temperature:"34 - 36˚F",
        water: "none",
        sunlight:"Direct light",
        info: "Schlumbergera is a small genus of cacti with six to nine species found in the coastal mountains of south-eastern Brazil.",
        isVisible:true,
        tasks:[]    
     },

     { 
      binomial: "Lonicera tellmanniana",
      nickname:"",
      type:"Honeysuckle",
      img: "https://www.freegreatpicture.com/files/photo94/46714-honeysuckle.jpg",
      frequency: "3/week",
      tempature:"20-24˚F",
      water: "150ml",
      sunlight:"Direct light",
      info: "Honeysuckles are arching shrubs or twining vines in the family Caprifoliaceae, native to northern latitudes in North America and Eurasia. Approximately 180 species of honeysuckle have been identified in North America and Eurasia.", 
      isVisible: true,
      tasks:[],
     },
     { 
      binomial: "Phalaenopsis Amabilis",
      nickname:"",
      type:"Orchid",
       img: "https://images.unsplash.com/photo-1534885320675-b08aa131cc5e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
       frequency: "1/week",
       tempature:"20-24˚F",
       water: "150ml",
       sunlight:"Indirect light",
       info: "These plants thrive in strong light, but direct sunlight can burn orchids. Bright, indirect light from an eastern or southern window is ideal.", 
       isVisible: true,
       tasks:[]
      },
    {
        
        binomial:"Anagallis Arvensis",
        nickname:"",
        type:"Scarlet Pimpernel",
        img: "https://www.10wallpaper.com/wallpaper/2880x1800/2009/Scarlet_Pimpernel_Flower_2020_Plant_HD_Desktop_2880x1800.jpg",
        frequency: "2/week",
        temperature:"20 - 24˚F",
        water: "180ml",
        sunlight:"Direct light",
        info: "Try to avoid watering on sunny afternoons to minimize the amount of moisture lost to evaporation.",
        isVisible:true,    
        tasks:[]   

     },
     {  
        
        binomial:"Oxalis Pes-caprae",
        nickname:"",
        type:"Bermuda Buttercup",
        img: "https://1.bp.blogspot.com/-2H7-R5JnveI/VspM0DrkCvI/AAAAAAAAAmA/3LuRBxe2XQ4/s1600/Oxalis1.jpg",
        frequency: "3/week",
        temperature:"34 - 36˚F",
        water: "150ml",
        sunlight:"Indirect light",
        info: "The flowers will open in warmth and light and close at dark and with cooler temperatures. Though they will last longer by cutting the stems shorter and removing the leaves.",
        isVisible:true,
        tasks:[]    
     },

     { 
      binomial: "Anthericum Liliago",
      nickname:"",
      type:"Bernard's Lily",
      img: "https://images.unsplash.com/photo-1580595999172-787970a962d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
      frequency: "2/week",
      tempature:"20-24˚F",
      water: "150ml",
      sunlight:"Indirect light",
      info: "They say that bonsai isn't just a plant, it's a way of life. Bonsai trees require regular care and maintenance. ... For beginners, Juniper bonsai trees are the easiest to care for so they're perfect for novice bonsai enthusiasts.", 
      isVisible: true,
      tasks:[],
      },
    {
        
        binomial:"Lantana Camara",
        nickname:"",
        type:"Lantana",
        img: "https://images.unsplash.com/photo-1577119228831-43bb6e89a2d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        frequency: "1/3-4 days",
        temperature:"34 - 36˚F",
        water: "120ml",
        sunlight:"Direct light",
        info: "Gypsophila is a genus of flowering plants in the carnation family, Caryophyllaceae. They are native to Eurasia, Africa, Australia, and the Pacific Islands.",
        isVisible:true,
        tasks:[]     
     },
     {  
        
        binomial:"Verbascum Sinuatum",
        nickname:"",
        type:"Verbascum",
        img: "https://images.unsplash.com/photo-1528824676332-b08e5b8f47e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80",
        frequency: "1/week",
        temperature:"34 - 36˚F",
        water: "60ml",
        sunlight:"Direct light",
        info: "Verbascum is a varied group of biennials, long-lived perennials and short-lived perennials producing insect-friendly spikes of flowers.The roots are likely to rot in wet soil. A slightly acid pH is a plus, but not absolutely necessary. Rich soil leads to sprawling plants and weak stems that are likely to flop.",
        isVisible:true,
        tasks:[]    
     },

     { 
      binomial: "Nerium Oleander",
      nickname:"",
      type:"Oleander",
      img: "https://images.unsplash.com/photo-1549139828-b288276e925a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
      frequency: "2/week",
      tempature:"25-30˚F",
      water: "150ml",
      sunlight:"Direct light",
      info: "Oleander flowers from early summer until mid-autumn with large clusters of red, pink, yellow or white, single or double blossoms. The long, narrow leaves are smooth but leathery, and it's an evergreen that grows quickly but tolerates serious pruning to keep it in check.", 
      isVisible: true,
      tasks:[],
      },
    {
        
        binomial:"Malva Sylvestris",
        nickname:"",
        type:"Common Mallow",
        img: "https://solidarityapothecary.org/wp-content/uploads/2019/05/1200px-Mallow_January_2008-1-1080x810.jpg",
        frequency: "1/3-4 days",
        temperature:"34 - 36˚F",
        water: "120ml",
        sunlight:"Direct light",
        info: "Gypsophila is a genus of flowering plants in the carnation family, Caryophyllaceae. They are native to Eurasia, Africa, Australia, and the Pacific Islands.",
        isVisible:true,
        tasks:[]     
     },
     {  
        
        binomial:"Scolymus Hispanicum",
        nickname:"",
        type:"Spanish Oyster",
        img: "https://upload.wikimedia.org/wikipedia/commons/3/38/Yellow_flower_with_critters.jpg",
        frequency: "none",
        temperature:"34 - 36˚F",
        water: "none",
        sunlight:"Direct light",
        info: "Small and prickly. Harmful to touch!",
        isVisible:true,
        tasks:[]    
     },

     { 
      binomial: "Erodium Malacoides",
      nickname:"",
      type:"Stork's Bill",
      img: "https://www.luontoportti.com/suomi/images/22853.jpg",
      frequency: "2/week",
      tempature:"20-24˚F",
      water: "150ml",
      sunlight:"Indirect light",
      info: "They say that bonsai isn't just a plant, it's a way of life. Bonsai trees require regular care and maintenance. ... For beginners, Juniper bonsai trees are the easiest to care for so they're perfect for novice bonsai enthusiasts.", 
      isVisible: true,
      tasks:[],
      },
    {
        
        binomial:"Convolvulus Arvensis",
        nickname:"",
        type:"Bindweed",
        img: "https://images.saymedia-content.com/.image/t_share/MTc0MjEyNTA3MjE1MzQxNDM2/the-hedge-bindweed-or-morning-glory-an-invasive-plant.jpg",
        frequency: "1/3-4 days",
        temperature:"34 - 36˚F",
        water: "120ml",
        sunlight:"Direct light",
        info: "Gypsophila is a genus of flowering plants in the carnation family, Caryophyllaceae. They are native to Eurasia, Africa, Australia, and the Pacific Islands.",
        isVisible:true,
        tasks:[]     
     },
     {  
        
        binomial:"Hebes x Franciscana",
        nickname:"",
        type:"Blue Gem",
        img: "https://cdn.shopify.com/s/files/1/0072/0909/1117/products/bachelor_button_flower.jpg?v=1574801270",
        frequency: "none",
        temperature:"34 - 36˚F",
        water: "none",
        sunlight:"Direct light",
        info: "Small and prickly. Harmful to touch!",
        isVisible:true,
        tasks:[]    
     },

     { 
      binomial: "Zantedeschia Aethiopica",
      nickname:"",
      type:"Calla Lily",
      img: "https://www.highcountrygardens.com/media/catalog/product/c/a/calla_mango__1_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=",
      frequency: "2/week",
      tempature:"20-24˚F",
      water: "150ml",
      sunlight:"Indirect light",
      info: "They say that bonsai isn't just a plant, it's a way of life. Bonsai trees require regular care and maintenance. ... For beginners, Juniper bonsai trees are the easiest to care for so they're perfect for novice bonsai enthusiasts.", 
      isVisible: true,
      tasks:[],
      },
    {
        
        binomial:"Malus Sylvestris",
        nickname:"",
        type:"Crab Apple",
        img: "https://images.unsplash.com/photo-1620273310484-7356b0628bb5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=747&q=80",
        frequency: "1/week(for first year)",
        temperature:"20 - 36˚F",
        water: "120ml",
        sunlight:"Direct light",
        info: "Full sun exposure, 8 to 12 hours of direct sun, is required for optimal development of fruits and flowers. Most flowering crabapples are hardy and can endure the colder temperature extremes of zone 4 on the USDA Plant Hardiness Zone maps.",
        isVisible:true,
        tasks:[]     
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
    // await Plant.create(plantSeed);
    // get full list of plants to confirm seeding worked
    const tasks = await DailyTask.find({})
    for(let i=0; i < tasks.length; i++){ 
      plantSeed[i].tasks.push(tasks[i]._id)
    }
    await Plant.create(plantSeed)
    // const plants = await Plant.find({});
    // return full list of plants as JSON
    res.json(plantSeed);
  } catch (error) {
    console.log(error)
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