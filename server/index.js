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
const addPersonal = "INSERT INTO Employees (Name, NumberPhone, Age, Post, id_Office) SELECT ?,?,?,?, id FROM Office WHERE nameBar = ?"
const getPersonal = "SELECT Name, NumberPhone, Age, Post, Office.nameBar FROM `Employees` INNER JOIN Office ON id_Office = Office.id"
const login = "SELECT * FROM `Admin` WHERE PhoneNumber=? AND Password=?"
const getTovar = "SELECT Product.Name, Price, Descript, Weight, ProductType.name FROM `Product` INNER JOIN ProductType ON id_Type = ProductType.id"
const delitedTovar = "DELETE FROM Product WHERE `Product`.`Name` = ?";

app.post('/infoBar', (req, res)=>{

  const nameBar = req.body.nameBar;
  const name = req.body.name;
  const address = req.body.address;
  const phoneBar = req.body.phoneBar;
  
  connection.query(addBar, [nameBar,name,address,phoneBar], (err,results)=>{
    // console.log(err,results);
  })
  // console.log(nameBar);
})

app.post('/delitedTovar', (req,res)=>{
  
  const nameTovar = req.body.nameTovar;
  const priceTovar = req.body.priceTovar;
  const weightTovar = req.body.weightTovar;
  const kategori = req.body.kategori;
  const descript = req.body.descript;

  connection.query(delitedTovar, [nameTovar], (err,results)=>{
    console.log(err,results);
  })
})

app.post('/personal', (req,res)=>{

  const NamePers = req.body.NamePers;
  const PhonePers = req.body.PhonePers;
  const AgePers = req.body.AgePers;
  const PostPers = req.body.PostPers;
  const BarPers = req.body.BarPers;

  connection.query(addPersonal, [NamePers,PhonePers,AgePers,PostPers,BarPers], (err, results)=>{
    console.log(err,results);
  })

})

app.post('/getPersonal', (req,res)=>{
  connection.query(getPersonal,function(err, results) {
    if(err) console.log(err);
    // console.log(results)
    res.send(results);
  })
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

app.post('/getTovar', (req,res)=>{
  connection.query(getTovar,function(err,results){
    if(err) console.log(err);
    console.log(results);
    res.send(results);
  })
})

app.get('/infoBar', (req, res)=> {
  connection.query(sql,function(err, results) {
    if(err) console.log(err);
    // console.log(results)
    res.send(results);
  })
})