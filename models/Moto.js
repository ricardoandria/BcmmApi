import mongoose from "mongoose";

const MotoSchema = new mongoose.Schema({
    marque: {
        type: String,
        required:true,
    },
    anneeAcqui: {
        type: String,
    },
    numeroImma: {
        type: String,
        required:true
    },
    numeroSerie: {
        type: String
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
        enum:['Accident','En panne','En bonne etat'],
        default:"Accident"
    }

},{timestamps: true});

MotoSchema.virtual("voyages",{
    ref:"voyage",
    localField:"_id",
    foreignField:"moto"
})

MotoSchema.virtual("papiers",{
    ref:"papier",
    localField:"_id",
    foreignField:"moto"
})

MotoSchema.virtual("entretiens",{
    ref:"entretien",
    localField:"_id",
    foreignField:"moto"
})

MotoSchema.virtual("accidents",{
    ref:"accident",
    localField:"_id",
    foreignField:"moto"
})

export default mongoose.model("moto",MotoSchema);