import express from 'express';
import mysql from 'mysql';
import cors from 'cors';



const app = express();

//settings
const PORT = 8000;



//middleware
app.use(express.json());
app.use(cors());



// create db connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'omg'
})

app.post('/create_student', (req, res) => {

    //intitialize sql
    const sql = "INSERT INTO student_detail (`name`, `email`, `age`, `gender`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.age,
        req.body.gender
    ]

    //query
    db.query(sql, [values], (err, data) => {
        if (err) return res.json('Error');
        return res.json(data);
    })
})

app.get("/students", (req, res) => {
    //initialize sql
    const sql = "SELECT * FROM student_detail";

    //query
    db.query(sql, (err, data) => {
        if (err) return res.json('Error');
        return res.json(data);
    })
})


// up server
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})



//test routes

app.get('/', (req, res) => {
    res.json('Hello World');
})