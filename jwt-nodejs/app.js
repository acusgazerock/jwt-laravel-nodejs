/* =======================
 LOAD THE DEPENDENCIES
 ==========================*/
const express = require('express')
const connection  = require('express-myconnection')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mysql = require('mysql')

/* =======================
 LOAD THE CONFIG
 ==========================*/
const config = require('./config')
const port = process.env.PORT || 3000

/* =======================
 EXPRESS CONFIGURATION
 ==========================*/
const app = express()
const users = require('./routes/Users')

// parse JSON and url-encoded query
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


/*------------------------------------------
 connection peer, register as middleware
 type koneksi : single,pool and request
 -------------------------------------------*/

app.use(

    connection(mysql,{
        host: config.host,
        user: config.user,
        password: config.password,
        database: config.database

    },'pool') //or single

);

// print the request log on console
app.use(morgan('dev'))


// set the secret key variable for jwt
app.set('jwt-secret', config.jwt_secret)

// index page
app.get('/', (req, res) => {
    res.send('Hello World')
})
app.get('/api/me', users.getAuthUser)

// open the server
app.listen(port, () => {
    console.log(`Express is running on port ${port}`)
})