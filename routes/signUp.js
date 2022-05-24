const express = require('express');
const router = express.Router();
const db = require('../database/db');
const byrcypt = require('bcrypt')

router.get('/signUp',(req,res)=>{
    res.render('signUp',{message:''})
})

router.post('/signUp/auth' ,(req,res)=>{
    let {f_name ,l_name ,email , password ,confirmPassword} = req.body;
    db.query('SELECT email FROM signup WHERE email = ?',[email], async (error, results)=>{
        if(error){
            console.log('error')
        }

        if(results.lenght > 0){
            return res.render('signUp',{
                message:'That email is already in use'
            })
        }

        else if(password != confirmPassword){
            return res.render('signUp',{
                message:'Passwords do not match'
            })
        }
        let hashedPassword = await byrcypt.hash(password, 8)

        db.query('INSERT INTO signup SET ?',{f_name: f_name, l_name: l_name, email: email, password: hashedPassword},(error,result)=>{
            if(error){
                console.log('error')
            }

            else{
                console.log(result)
                 res.render('signUp',{
                    message:'User registered'
                }) 
            }
        })
    })
    
})

module.exports = router