import mongoose, { Schema } from "mongoose";

const VoyageSchema = new mongoose.Schema(
    {
        voiture: {
            type:Schema.Types.ObjectId,
            ref: "voiture",
        },
        Moto: {
            type:Schema.Types.ObjectId,
            ref:"moto",
        },
        chauffeur: {
            type:Schema.Types.ObjectId,
            ref:"chauffeur",
            required:true
        },
        kilometrage: {
            type:String,
            required: true
        },
        consommationJour: {
            type:String,
            required:true
        }
    },{
        timestamps: true
    }
)

export default mongoose.model("Voyage",VoyageSchema);