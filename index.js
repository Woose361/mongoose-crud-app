require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const conn = require(`./config/db`)
conn()
const starterFruits = require(`./config/seeds`)

const Fruit = require(`./models/fruits`)

app.use(express.json())
const fruitRoutes = require('./routes/fruitRoutes')

app.use('/api/fruits', fruitRoutes)

app.get(`/`, (req, res) =>{
    res.send(`Home Page!`)
})

app.get("/fruits/seeds", async (req, res) => {
    try {
      await Fruit.deleteMany({});
      await Fruit.create(starterFruits);
      res.json(starterFruits);
    } catch (error) {
      console.log(`Something went wrong : ${error.message}`);
    }
  });
  

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})






