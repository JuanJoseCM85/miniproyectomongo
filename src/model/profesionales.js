let mongoose = require ("mongoose");

const profesionalSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required:true
    },
    edad: Number,
    genero: String,
    peso: Number,
    altura: Number,
    colorPelo:{
        type: String,
        enum:["Castaño","Moreno","Rubio","Pelirojo","Pelirrojo","Blanco"]
    },
    colorOjos:{
        type: String,
        enum:["Marrones","Verdes","Azules","Negros"]
    },
    estaRetirado: Boolean,
    nacionalidad: String,
    numeroOscar: Number,
    profesion:{
        type: String,
        enum:["Actor","Director","Guionista"]
    }
});

module.exports = mongoose.model ("Profesionales",profesionalSchema,"profesionales");