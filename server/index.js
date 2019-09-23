require('dotenv').config()
const express = require('express');
const massive = require('massive');
const ctrl = require('./controller');
const {SERVER_PORT, CONNECTION_STRING} = process.env


const app = express();

app.use(express.json());

//endpoints

app.get('/api/houses', ctrl.getHouses)
app.post('/api/houses', ctrl.addHouse)


massive(CONNECTION_STRING).then(databaseConnection => {
    app.set('db', databaseConnection)
    app.listen(SERVER_PORT, ()=>console.log(`I got ${SERVER_PORT} problems, but a backend aint one`))
})