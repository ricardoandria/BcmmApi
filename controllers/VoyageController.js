import Voyage from "../models/Voyage.js";

export const createVoyage = async (req,res) => {
    const newVoyage = new Voyage(req.body);

    try {
        const saveVoyage = await newVoyage.save();

        res.status(200).json({saveVoyage});
    } catch (err) {
        res.status(404).send("something went wrong");
    }
}

export const deleteVoyage = async (req,res) => {
    try {
        const deleteVoyage = await Voyage.findByIdAndDelete(req.params.id);
        res.status(200).send("deleted successfully");
    } catch (err) {
        res.status(404).send("something went wrong");
        
    }
}

export const getVoyages = async (req,res) => {
    try {
        const getVoyages = await Voyage.find().populate("voiture").populate("Moto").populate("chauffeur");
        res.status(200).json({getVoyages});
    } catch (err) {
        res.status(404).send("something went wrong");
        
    }
}

export const getVoyage = async (req,res) => {
    try {
        const getVoyage = await Voyage.findById(req.params.id).populate("voiture").populate("Moto").populate("chauffeur");
        res.status(200).json({getVoyage});
    } catch (err) {
        res.status(404).send(err);
    }
}

export const updateVoyage = async (req,res) => {
    try {
        const updateVoyage = await Voyage.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },{
            new:true
        })
        res.status(200).json({updateVoyage});
    } catch (err) {
        res.status(404).send(err);
    }
}