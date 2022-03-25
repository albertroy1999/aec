const mysql = require("mysql");
  const db=mysql.createConnection({
  connectionLimit: 100,
  host:'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'aec',
  connectionLimit: 100
});
module.exports = db;