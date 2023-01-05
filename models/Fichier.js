import mongoose, { Schema } from "mongoose";

const FichierSchema = new mongoose.Schema(
    {
        Filename: {
            type:String,
        },
        mimeType: {
            type:String,
        },
        url : {
            type:String,
        },
        papier: {
            type:Schema.Types.ObjectId,
            ref:"papier"
        }

    },{
        timestamps: true
    }
)



export default mongoose.model("Fichier",FichierSchema);