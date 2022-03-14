require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const {conn} = require ('./Database/config');

conn();
app.use(cors());
app.use(express.json());
app.use('/api/user', require('./routes/user.routes'));
/*
//lectura y parse body
//dbSQLConect();


app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/propinas', require('./routes/propinas'));
app.use('/api/uploads', require('./routes/uploads'));*/

app.listen(process.env.PORT, () => {

    console.log('Servidor corriendo en puerto', process.env.PORT);
});