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

app.post("/setclient", (req, res) =>{
    const { name } = req.body;
    const { logo } = req.body;

    let SQL = "INSERT INTO brm.clientes ( nome, logo ) VALUES ( ?, ? )"

    db.query(SQL, [name, logo], (err, result) => {
        console.log(err);
    });
});

app.get("/getClients", (req, res) => {

    let SQL = "SELECT * from brm.clientes"
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