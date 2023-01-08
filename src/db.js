// ----------- MYSQL ---------------

// import { createPool } from "mysql2/promise";
// import { DB_HOST, DB_NAME,DB_PORT, DB_USER, DB_PASSWORD, } from "./config.js";

// export const pool = createPool({
//     user: DB_USER,
//     password: DB_PASSWORD,
//     host: DB_HOST,
//     port: DB_PORT,
//     database: DB_NAME
// });


//  ---------- MONGO  ---------------------------

import mongoose from "mongoose";
import { DB_HEAD_URL, DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } from "./config.js";


mongoose.set('strictQuery',false)
mongoose.connect(`${DB_HEAD_URL}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`).then(() => console.log('DB Connected!'));


// mongoose.set('useCreateIndex', true);
// mongoose.connect(process.env.DB_URL || DB_URL,
//     {
//      useNewUrlParser:true, 
//      useUnifiedTopology:true,
//      useFindAndModify:false,
//      useCreateIndex:true
//     }
//     ).then(db => console.log('DB successfull connectd.! '))
//     .catch(error => console.log('DB error connection.. ' , error));
