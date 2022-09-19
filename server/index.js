const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");


const db = mysql.createPool({
    host: "localhost",
    user: "admin",
    password: "1234",
    database: "brm",
});

app.use(cors());
app.use(express.json());

// Clients

app.post("/setclient", (req, res) =>{
    const { name } = req.body;
    const { logo } = req.body;

    let SQL = "INSERT INTO brm.clientes ( nome, logo ) VALUES ( ?, ? )"

    db.query(SQL, [name, logo], (err, result) => {
        console.log(err);
    });
});

app.get("/getclient", (req, res) => {

    let SQL = "SELECT * from brm.clientes"
    db.query(SQL, (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
});

// Photos

app.post("/setphoto", (req, res) => {
   const { autor } = req.body;
   const { descricao } = req.body;
   const { titulo } = req.body;
   const { local } = req.body;
   const { foto } = req.body;
   const { portfolio } = req.body;

   let date_ob = new Date();
   let date = ("0" + date_ob.getDate()).slice(-2);
   let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
   let year = date_ob.getFullYear();
   const data = (year + "-" + month + "-" + date);

   let SQL = "INSERT INTO brm.fotos ( autor, descricao, titulo, local, foto, data, portfolio_id ) VALUES ( ?,?,?,?,?,?,?)"

   db.query(SQL, [autor, descricao, titulo, local, foto, data, portfolio], (err, res) => {
    console.log(err)
   })

});

app.get("/getphoto", (req, res) => {

    let SQL = "SELECT * from brm.fotos"
    db.query(SQL, (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
});


app.listen(3001, () =>{
    console.log("Server started")
});