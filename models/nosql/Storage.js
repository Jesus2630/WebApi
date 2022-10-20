const mongoose = require("mongoose");

const StorageSchema = new mongoose.Schema(
    //Declaramos la estructura de nuestro objeto
    {
        url: {
            type: String
        },
        filename: {
            type: String
        }
    },
    //Configuraciones extras para el esquema
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model("Storage", StorageSchema)