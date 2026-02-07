const { Pool } = require('pg');

const db = new Pool({
  user: 'enjoy_04_b',     
  host: 'localhost',
  database: 'postgres',  
  password: '',          
  port: 5433,            
});

db.connect()
  .then(() => console.log('PostgreSQL connected successfully'))
  .catch(err => console.error('DB connection error', err));

module.exports = db;
