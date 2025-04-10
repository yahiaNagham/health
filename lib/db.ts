import mysql from 'mysql2/promise';



const db = mysql.createPool({
  database:'healthai',
  host:'localhost',
  user:'root',
  password:''

 });
 

 export default db;