let mongoose = require ("mongoose");

const peliculaSchema = new mongoose.Schema({
    titulo:{
        type: String,
        required:true
    },
    anoRealizacion: Number,
    actores:[String],
    nacionalidad: String,
    director:[String],
    guionista:[String],
    lenguaje: String,
    plataforma: String,
    isMCU: Boolean,
    protagonista: String,
    productor: String,
    distribuidor: String,
    genero:{
        type: String,
        enum:["Comedia","Terror","Suspense","Romantica"]
    }
});

module.exports = mongoose.model ("Peliculas",peliculaSchema,"peliculas");