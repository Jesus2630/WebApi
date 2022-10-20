const mongoose = require('mongoose');


const dbConnect = () =>{
    const db_uri = process.env.URI;
    mongoose.connect(db_uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },(err,res)=>{
        if(!err){
            console.log('Conexión correcta a la base de datos')
        }else{
            console.log('Error al conectar a la base de datos')
        }
    });
}

module.exports = dbConnect;