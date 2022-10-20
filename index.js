const express = require("express")
const cors = require("cors");
require('dotenv').config();



const app = express();

app.use(cors())

const port = process.env.port;

app.listen(port, () =>{
    console.log(`Servidor iniciado en http://localhost:${port}`)
})