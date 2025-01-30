import pg from 'pg'
import 'dotenv/config';

const pool = new pg.Pool({
  // connectionString: process.env.DATABASE_URL,
  // ssl: {
  //   rejectUnauthorized: false
  // }

  // desarrollo 
  host:process.env.DB_HOST,
  database:process.env.DB_DATABASE,
  user:process.env.DB_USER,
  password:process.env.DB_PASSWORD,
  port:process.env.DB_PORT,
  
})

export default pool