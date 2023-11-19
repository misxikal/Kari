const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const bodyParser = require('body-parser');

const mysql = require("mysql2");
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
// app.use(bodyParser);
  
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "ForSushi",
  password: ""
});
 connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });

const sql = "SELECT nameBar, Admin.Name, Address, Admin.PhoneNumber, numberBar FROM `Office` INNER JOIN Admin ON Office.id_Admin = Admin.id;"
const addBar = "INSERT INTO Office(nameBar, id_Admin, Address, numberBar) VALUES (?,?,?,?)"

app.post('/infoBar', (req, res)=>{

  const nameBar = req.body.nameBar;
  const name = req.body.name;
  const address = req.body.address;
  const phoneBar = req.body.phoneBar;
  
  connection.query(addBar, [nameBar,name,address,phoneBar], (err,results)=>{
    console.log(err,results);
  })
  // console.log(nameBar);
})

app.listen(port, ()=> console.log(`Listening on port ${port}`));

app.get('/infoBar', (req, res)=> {
  connection.query(sql, function(err, results) {
    if(err) console.log(err);
    // console.log(results)
    res.send(results);
  })
})