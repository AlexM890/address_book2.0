const mysql = require('mysql')
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sscssc',
    database: 'addressbookdb'
})

con.connect((err)=>{
    if(err) throw err
    console.log('Connected')

    const sql = `CREATE TABLE contacts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255)
    )`

    con.query(sql, (err,res)=>{
        if(err) throw err
        console.log(res)
    })

    con.end()
})