const express = require('express');
require('dotenv').config();
const router = express.Router();
// const users = require('./data.json');
// console.log(users);

const users = [{username:"Alice", age:25, email:"alice@gmail.com"},{username:"Mayur", age:19, email:"mayur@gmail.com"},{username:"Arnab", age:20, email:"arnab@gmail.com"},username:"nandita", age:25, email:"nandita@gmail.com"];

const port = process.env.PORT;

const app = express();

app.use(express.json());


router.get('/find', (req,res)=>{
    const {username} = req.query;
    if(username == ''){
        return res.status(400).json({message:"query cannot be empty!"})
    }
    try{
        const userexist = users.find((ele) => ele.username == username);
        console.log(userexist);
        if(!userexist){
            return res.status(400).json({message:"User Not Found"});
        }
        res.status(200).json({message:"The user was found", data: userexist});
    }
    catch(err){

    }
});

app.use('/',router)

app.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`);
});