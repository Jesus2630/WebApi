const mongoose = require("mongoose");

const CancionesSchema = new mongoose.Schema(
    //Declaramos la estructura de nuestro objeto
    {
        name: {
            type: String,
          },
          album: {
            type: String,
          },
          cover: {
            type: String,
            validate: {
              validator: (req) => {
                return true;
              },
              message: "ERROR_URL",
            },
          },
          artist: {
            name: {
              type: String,
            },
            nickname: {
              type: String,
            },
            nationality: {
              type: String,
            },
          },
          duration: {
            start: {
              type: Number,
            },
            end: {
              type: Number,
            },
          },
          mediaId: {
            type: mongoose.Types.ObjectId,
          },
    },
    //Configuraciones extras para el esquema
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model("Canciones", CancionesSchema)