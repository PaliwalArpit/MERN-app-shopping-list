const express = require('express');
const router = express.Router();

//Item model
const Item = require('../../models/Item');

//@router: GEt api/item
//@desc get items
//@access public 

router.get('/', (req,res)=>{
    //mongoose method
    Item.find()
    .sort({date: -1})
    .then(items => res.json(items))
});


//@router: POSt api/item
//@desc post items
//@access public 

router.post('/', (req,res)=>{
   const newItem = new Item({
    name: req.body.name
   });
   newItem.save().then(item => res.json(item));
});

//@router: delete api/item/:id
//@desc delete items
//@access public 

router.delete('/:id', (req,res)=>{
   Item.findById(req.params.id)
   .then(item => item.remove())
   .then(()=> res.json({success:true}))
 })
 

module.exports =  router;