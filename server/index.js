const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const bodyParser = require('body-parser');

const mysql = require("mysql2");
const fileUpload = require('express-fileupload')
app.use(fileUpload())
app.use(cors())
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
const login = "SELECT * FROM `Admin` WHERE PhoneNumber=? AND Password=?"

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

// app.get('/login',(req,res)=>{
//     const phone = req.body.phone;
//     const password = req.body.password;
//     console.log(phone+password)
//   connection.query(login,[phone,password], function(err, results) {
//     if(err){
//       res.send({err:err});
//     }else if(results){
//       res.send(results);
//     }else{
//       res.send({message:"Wrong login/password combination!"});
//     }
//   })
// })

app.post('/login', (req, res)=> {
    
    const phone = req.body.phone;
    const password = req.body.password;

  connection.query(login,[phone,password], function(err, results) {
    if(err){
      res.send({err:err});
    }else if(results){
      res.send(results);
    }else{
      res.send({massege: "Wrong login/password combination!"});
    }
  })
})

app.get('/infoBar', (req, res)=> {
  connection.query(sql,function(err, results) {
    if(err) console.log(err);
    // console.log(results)
    res.send(results);
  })
})