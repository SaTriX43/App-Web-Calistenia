import pg from 'pg'
import 'dotenv/config';

// // PARA PRODUCCIÓN (Railway) -> Comenta esto cuando uses local
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// PARA DESARROLLO (Local) -> Descomenta esto cuando uses local
// const pool = new pg.Pool({
//   user:process.env.LOCAL_DATABASE_USER,
//   host:process.env.LOCAL_DATABASE_HOST,
//   database:process.env.LOCAL_DATABASE_NAME,
//   password:process.env.LOCAL_DATABASE_PASSWORD,
//   port:process.env.LOCAL_DATABASE_PORT, // Puerto por defecto
// });

export default pool