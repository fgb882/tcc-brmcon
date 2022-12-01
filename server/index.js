const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')


const bcrypt = require("bcrypt");
const saltRounds = 10;




const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "brm"
});


app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))

app.use(session({
    key: "userId",
    secret: "c887213c-7106-11ed-a1eb-0242ac120002",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24,
    }
}))


// Clients

app.post("/setclient", (req, res) => {
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
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
});

app.put("/editclient", (req, res) => {
    const { id } = req.body;
    const nome = req.body.name;
    const { logo } = req.body;

    let SQL = "UPDATE clientes SET nome = ?, logo = ? WHERE id = ?"

    db.query(SQL, [nome, logo, id], (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    })
})


app.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    let SQL = "DELETE FROM clientes WHERE id = ?";
    db.query(SQL, [id], (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    })
})
// Photos

app.post("/setphoto", (req, res) => {
    const { autor } = req.body;
    const { titulo } = req.body;
    const { local } = req.body;
    const { foto } = req.body;
    const { portfolio_id } = '1';

    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    const data = (year + "-" + month + "-" + date);

    let SQL = "INSERT INTO brm.fotos ( autor, titulo, local, foto, data, portfolio_id ) VALUES ( ?,?,?,?,?,? )"

    db.query(SQL, [autor, titulo, local, foto, data, 1], (err, res) => {
        console.log(err)
    })

});

app.get("/getphoto", (req, res) => {

    let SQL = "SELECT * from brm.fotos"
    db.query(SQL, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
});

app.put("/editphoto", (req, res) => {
    const { id } = req.body;
    const { autor } = req.body;
    const { titulo } = req.body;
    const { local } = req.body;
    const { foto } = req.body;
    const { portfolio_id } = '1';

    let SQL = "UPDATE fotos SET autor = ?, titulo = ?, local = ?, foto = ?, portfolio_id = ? WHERE id = ?"

    db.query(SQL, [autor, titulo, local, foto, portfolio_id, id], (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    })
});

app.delete("/deletePhoto/:id", (req, res) => {
    const { id } = req.params;
    let SQL = "DELETE FROM fotos WHERE id = ?";
    db.query(SQL, [id], (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    })
});


//login

app.post("/register", (req, res) => {
    const { username } = req.body;
    const { password } = req.body;
    const { role } = req.body;

    bcrypt.hash(password, saltRounds, (err, hash) => {

        if(err) {
            console.log(err)
        }

        db.query(
            "INSERT INTO users (username, password, role) VALUES (?,?,?)",
            [username, hash, role],
            (err, result) => {
                console.log(err)
            }
        )
    })
})

app.post("/login", (req, res) => {

    const { username } = req.body;
    const { password } = req.body;

    bcrypt.hash(password, saltRounds, (err, hash) => {

        if(err){
            console.log(err)
        }

        db.query(
            "SELECT * FROM users WHERE username = ?", 
            username, (err, result) => {
                
                if(err){
                    res.send({err: err})
                }
    
                if(result.length > 0){
                    bcrypt.compare(password, result[0].password, (error, response) => {
                        if(response){
                            req.session.user = result;
                            console.log(req.session.user)
                            res.send(result);
                        }else{
                            res.send({message: "Senha e/ou Usuário incorretos"})
                        }
                    })
                }else{
                }
            }
        )
    })
});
    app.get("/login", (req, res) => {
        if(req.session.user) {
            res.send({loggedIn: true, user: req.session.user})
        }else{
            res.send({ loggedIn: false})
        }
    })


app.listen(3001, () => {
    console.log("Server started")
});