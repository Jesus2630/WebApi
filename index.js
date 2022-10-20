const express = require("express")
const cors = require("cors");
const dbConnect = require("./config/mongo");

//Variables de entorno
require('dotenv').config();


//Lanzo la aplicación
const app = express();

//llamo a la base de datos
dbConnect();


app.use(cors())

const port = process.env.port;

app.listen(port, () =>{
    console.log(`Servidor iniciado en http://localhost:${port}`)
})