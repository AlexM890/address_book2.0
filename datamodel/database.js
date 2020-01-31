const mysql = require('mysql')
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sscssc',
    database: ''
})

con.connect((err)=>{
    if(err) throw err
    console.log('Connected')

    const sql = `CREATE DATABASE addressbookdb`

    con.query(sql, (err,res)=>{
        if(err) throw err
        console.log(res)
    })

    con.end()
})