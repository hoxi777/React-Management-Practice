const express = require('express');
const bodyParser =require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
  host : conf.host,
  user : conf.user,
  password : conf.password,
  port : conf.port,
  database : conf.database
});

connection.connect();

//배열 데이터를 제이슨으로 
app.get('/api/customers', (req,res) => {
      connection.query(
        "SELECT * FROM CUSTOMER",
        (err, rows, fields) => {
          res.send(rows);
        } 
      );
        
});

app.listen(port, () => console.log(`Listen on port  ${port}`));

