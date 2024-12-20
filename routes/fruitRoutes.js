const express = require(`express`);
const Router = express.Router();
const Fruit = require('../models/fruits')

Router.get(`/`, async (req, res)=> {
    try{
        const allFruit = await Fruit.find ({})
    res.json(allFruit)
    }catch (error) {
        res.status(500).json({errors:error.message})
    }
    
});

Router.post('/', async(req, res)=> {
    try {
        const createdFruit = await Fruit.create(req.body)
        console.log(req.body)
        res.json(createdFruit)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
});

Router.get(`/:id`, async (req, res) => {
    try {
        const singleFruit = await Fruit.findById(req.params.id)
        res.json(singleFruit)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
});

Router.post(`/`, async(req, res) => {
    try {
        const createdFruit = await Fruit.create(req.body)
        console.log(req.body)
        res.json(createdFruit)

    } catch (error) {
        res.status(500).json({error: error.message})
    }

});

Router.put(`/:id`, async(req, res) => {
    try {
        const updatedFruit = await Fruit.findByIdAndUpdate(req.body)
        res.json(updatedFruit)

    } catch (error) {
        res.status(500).json({error: error.messagen})
    }
});

Router.delete(`/:id`, async (req, res) => {
    try {
        const deletedFruit = await Fruit.findByIdAndDelete(req.params.id);
        res.json(deleteFruit);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})

module.exports = Router