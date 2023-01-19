import pg from 'pg';
import * as dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;
const pool = new Pool({
    user:                    process.env.DBUSER,
    password:                process.env.DBPASSWORD,
    host:                    process.env.DBHOST,
    port:                    process.env.DBPORT,
    database:                process.env.DB,
    max:                     20,
    connectionTimeoutMillis: 2000,
    idleTimeoutMillis:       20000
});

export default pool;