const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'road2hire',
    database: 'sugoi_products'
});

db.connect(err => {
    if(err) {
        return err;
    } else {
        console.log("db connection successful!")
    }
});

app.use(cors());
app.use(express.json());

app.get('/api/RAM', (req, res) => {
    db.query('SELECT * FROM RAM', (err, result) => {
        if (err) {
            console.log(err)
        }else {
            res.send(result);
        }
    })
});

app.get('/api/Motherboards', (req, res) => {
    db.query('SELECT * FROM Motherboards', (err, result) => {
        if (err) {
            console.log(err)
        }else {
            res.send(result);
        }
    })
});

app.get('/api/GPU', (req, res) => {
    db.query('SELECT * FROM GPU', (err, result) => {
        if (err) {
            console.log(err)
        }else {
            res.send(result);
        }
    })
});

app.get('/api/Products', (req, res) => {
    db.query('SELECT * FROM ProductList', (err, result) => {
        if (err) {
            console.log(err)
        }else {
            res.send(result);
        }
    })
});

app.listen(4000, () => {
    console.log(`Console server listening on port 4000.`)
});