const express = require('express');
const router = express.Router();
const db = require('../database/db');

router.post('/search',(req,res)=>{
    let search = req.body.searchBar
    console.log(search)
    // res.render('index')
})

module.exports = router