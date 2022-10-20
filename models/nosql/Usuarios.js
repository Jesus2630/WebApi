const mongoose = require("mongoose");

const UsuariosSchema = new mongoose.Schema(
    //Declaramos la estructura de nuestro objeto
    {
        name: {
            type: String
        },
        age: {
            type: Number
        },
        email: {
            type: String,
            unique: true,
        },
        password: {
            type: String
        },
        role:{
            type: ["user", "admin"],
            default: "user"
        }
    },
    //Configuraciones extras para el esquema
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model("Usuarios", UsuariosSchema)