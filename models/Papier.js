import mongoose, { Schema } from "mongoose";

const PapierSchema = new mongoose.Schema(
    {
        NumeroAssurence: {
            type:String,
            required:true
        },
        NomAgence: {
            type:String
        },
        dateDebutAssurence: {
            type: Date
        },
        dateFinAssurence: {
            type: Date
        },
        NumeroVisite: {
            type: String,
            required:true
        },
        dateDebutVisite: {
            type: Date
        },
        dateFinVisite: {
            type: Date
        },
        voiture: {
            type: Schema.Types.ObjectId,
            required:true
        },
        
    },{
        timestamps: true
    }
)

PapierSchema.virtual("fichiers",{
    ref:"fichier",
    localField:"_id",
    foreignField:"papier"
})

export default mongoose.model("Distance",PapierSchema);