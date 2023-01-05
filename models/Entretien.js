import mongoose, { Schema } from "mongoose";

const EntretienSchema = new mongoose.Schema(
    {
        reparation: {
            type:String,
            required: true
        },
        voiture: {
            type: Schema.Types.ObjectId,
            ref: "voiture"
        },
        moto: {
            type: Schema.Types.ObjectId,
            ref: "moto"
        }
        
    },{
        timestamps: true
    }
)



export default mongoose.model("Entretien",EntretienSchema);