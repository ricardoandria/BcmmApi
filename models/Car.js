import mongoose, { Schema } from "mongoose";

const CarSchema = new mongoose.Schema({
    marque: {
        type: String,
    },
    anneeAcqui: {
        type: String,
    },
    numeroImma: {
        type: String,
        required:true,
        unique:true
    },
    numeroSerie: {
        type: String,
        unique:true
    },
    typeCarburant: {
        type: String,
        required:true,
    },
    consommation: {
        type: String,
    },
    emplacement: {
        type:String,
        required:true
    },
    NumeroAssurence: {
        type:String,
        required:true
    },
    NomAgence: {
        type:String
    },
    dateDebutAssurence: {
        type: Date,
        default: Date.now()
    },
    dateFinAssurence: {
        type: Date,
        default: Date.now()

    },
    NumeroVisite: {
        type: String,
    },
    lieuVisite: {
        type:String,
    },
    dateDebutVisite: {
        type: Date,
        default: Date.now()
    },
    dateFinVisite: {
        type: Date,
        default: Date.now()
    },
    status: {
        type:String,
        enum:['Accident','En panne','En bonne etat',"En cours de Reparation"],
        default:"Accident"
    }
    
},{timestamps: true});

CarSchema.virtual("voyages",{
    ref:"voyage",
    localField:"_id",
    foreignField:"voiture"
})

CarSchema.virtual("papiers",{
    ref:"papier",
    localField:"_id",
    foreignField:"voiture"
})

CarSchema.virtual("entretiens",{
    ref:"entretien",
    localField:"_id",
    foreignField:"voiture"
})

export default mongoose.model("voiture",CarSchema);