const express = require('express');
const taskRouter = express.Router();

taskRouter.route('/tasks')
.get(async (req,res) => {
    try{
        const result = pool.query('SELECT * FROM tasks');
        res.render('index',{test: result.rows()});
    }catch(err){
        console.log(err);
        res.status(500).send('DB Error');
    }
})
.put((req,res) => {
    try{

    }catch(err){

    }
})