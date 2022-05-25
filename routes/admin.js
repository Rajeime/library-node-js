const express = require('express');
const router = express.Router();
const db = require('../database/db');

router.post('/login',(req,res)=>{
    var username = req.body.email;
    var userpassword = req.body.password;
    db.query("SELECT * FROM admin WHERE email = ? and BINARY password = ?",[username, userpassword],(error, results,fields)=>{
        if(results.length > 0){
            res.render('adminPage')
            // console.log(results.length)
            console.log(username)
        }

        else{
            res.redirect('/',{message:'Incorrect credentials'})
        }
        res.end()
    })
})


module.exports = router