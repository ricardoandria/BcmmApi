import mongoose from "mongoose";

const ChauffeurSchema = new mongoose.Schema(
    {
        nom: {
            type:String,
            required: true
        },
        prenom: {
            type:String,
            required:true
        },
        numeroMatricule: {
            type:String,
            required:true,
            unique:true
        },
        numeroTelephone: {
            type:String,
            required:true,
            unique:true
        },
        cin: {
            type:String,
            unique:true
        },
        numeroPermis: {
            type:String,
            unique:true
        },
        dateDelivrance: {
            type:Date,
        }

    },{
        timestamps: true
    }
)

ChauffeurSchema.virtual("voyages",{
    ref:"voyage",
    localField: "_id",
    foreignField: "chauffeur"
})

export default mongoose.model("chauffeur",ChauffeurSchema);