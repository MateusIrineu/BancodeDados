import dotenv from 'dotenv';
dotenv.config();
import pg from 'pg';
const { Pool } = pg;

const client = new Pool({
    user: process.env.USUARIO,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.PORTA,
    database: process.env.DATABASE
});

export default client;