const express = require('express');
const router = express.Router();
const db = require('../database/db');

router.get('/',(req,res)=>{
    var sql = 'SELECT * FROM library.books JOIN library.author ON library.books.author_id = library.author.author_id JOIN library.book_image ON library.books.image_id = library.book_image.image_id';
    db.query(sql ,(err, data, fields)=>{
    if(err) throw err;
    res.render('index',{userData:data});
    console.log(data)
    })
    
})


module.exports = router