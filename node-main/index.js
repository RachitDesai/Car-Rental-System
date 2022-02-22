const express = require("express");
var cors = require("cors");
const fs = require("fs");
var mysql = require('mysql2');

// connecting to database
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rachit304',
  database: 'employee'
});
connection.connect((err) => {
  if (err) { console.log("DB Connection Failed."); return }

  // Initializing Exprress Server
  const app = express();
  app.use(cors());

  

  // display
  app.get("/student", (req, res) => {
    connection.query("SELECT * FROM student;", (err, results, fields) => {
      if (err) return res.json({ error: err.message })
      res.json(results)
    })
  })

// search
  app.get("/searchstudent/:id", (req, res) => {
   
    connection.query(`SELECT * FROM student WHERE stuid = ${req.params.id}`, (err, results, fields) => {
      if (err) return res.json({ error: err.message })
      res.json(results)
    })
  })

  // add
  app.get("/addstudent/:id/:name/:sec/:mark/:att", (req, res) => {
    
    var id = req.params.id
    var name = req.params.name
    var sec = req.params.sec
    var mark = req.params.mark
    var att = req.params.att
    connection.query(`INSERT INTO student VALUES(${id},'${name}','${sec}',${mark},${att})`, (err, results, fields) => {
      if (err) return res.json({ error: err.message })
      res.json(results)
    })
  })

  // update
  app.get("/updatestudent/:id/:name", (req, res) => {
    if(!req.params.id){
      res.json({error: "Id required"})
      return
    }
    if(!req.params.name){
      res.json({error: "Name required"})
      return
    }
    var id = req.params.id
    var name = req.params.name
    connection.query(`UPDATE student SET stuname = '${name}' WHERE stuid = ${id}`, (err, results, fields) => {
      if (err) return res.json({ error: err.message })
      res.json(results)
    })
  })

  // delete
  app.get("/deletestudent/:id", (req, res) => {
    if(!req.params.id){
      res.json({error: "Id required"})
      return
    }
    
    var id = req.params.id
    connection.query(`DELETE FROM student WHERE stuid = ${id}`, (err, results, fields) => {
      if (err) return res.json({ error: err.message })
      res.json(results)
    })
  })

  //Port
  const port = 8000;

  //Starting a server
  app.listen(port, () => {
    console.log(`*** SERVER STARTED AT PORT ${port} ***`);
  });

})
