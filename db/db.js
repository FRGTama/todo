const { Pool } = require('pg');
require('dotenv').config();
const pool = new Pool({
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    user: 'postgres',
    password: process.env.DBPASSWORD,
    database: 'postgres',
})

module.exports=pool;