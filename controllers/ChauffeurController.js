import Chauffeur from "../models/Chauffeur.js";

export const createChauffeur = async (req,res) => {
    const newChauffeur = new Chauffeur(req.body);
    try {
            const saveChauffeur = await newChauffeur.save();
            res.status(200).json({saveChauffeur});
    } catch (err) {
        res.status(404).send("something went wrong");
    }
}

export const deleteChauffeur = async (req,res) => {
    try {
        const deleteChauffeur = await Chauffeur.findByIdAndDelete(req.params.id);
        res.status(200).json("deleted successfully");
    } catch (err) {
        res.status(404).send("something went wrong");

    }
}

export const getChauffeurs = async (req,res) => {
    try {
        const getChauffeurs = await Chauffeur.find();
        res.status(200).json({getChauffeurs})
    } catch (err) {
        res.status(404).send("something went wrong");
        
    }
}

export const getChauffeur = async (req,res) => {
    try {
        const getChauffeur = await Chauffeur.findById(req.params.id);
        res.status(200).json({getChauffeur});
    } catch (err) {
        res.status(404).send("something went wrong");
        
    }
}

export const updateChauffeur = async (req,res) => {
    try {
        const updatChauffeur = await Chauffeur.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        },{
            new:true
        });

        res.status(200).json({updatChauffeur});

    } catch (err) {
        res.status(404).send("something went wrong")
    }
}