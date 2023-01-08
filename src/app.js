import express from "express";
// import { pool } from "./db.js"; //mysql
import {PORT} from "./config.js";

import * as db from "./db.js";
import usersRoutes from "./routes/users.routes.js";


const app = express()

app.use(express.json());

app.get('/', async (req,res)=>{
    // const [result] = await pool.query(`SELECT * FROM users`)
    // console.log(result)
    // res.json(result)
    res.send('Hello world')
})

app.use('/api/users',usersRoutes);

app.get('/users',async (req,res) => {
    // const result = await pool.query(`SELECT "Hello world" as RESULT`)
    // console.log(result[0])
    // res.json(result[0])
    res.send('Hello world ping')
})

app.get('/create',async (req,res) => {
    // const result = await pool.query(`INSERT INTO users(name) VALUES("John")`)
    // console.log(result[0])
    // res.json(result[0])
    res.send('Hello world create')
})

app.listen(PORT)
console.log('server on port..', PORT)