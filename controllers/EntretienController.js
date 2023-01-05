import Entretien from "../models/Entretien.js";

export const createEntretien = async (req,res) => {
    const newEntretien = new Entretien(req.body);

    try {
        const saveEntretien = await newEntretien.save();

        res.status(200).json({saveEntretien});
    } catch (err) {
        res.status(404).send("something went wrong");
    }
}

export const deleteEntretien = async (req,res) => {
    try {
        const deleteEntretien = await Entretien.findByIdAndDelete(req.params.id);
        res.status(200).send("deleted successfully");
    } catch (err) {
        res.status(404).send("something went wrong");
        
    }
}

export const getEntretiens = async (req,res) => {
    try {
        const getEntretiens = await Entretien.find().populate("voiture").populate("moto");
        res.status(200).json({getEntretiens});
    } catch (err) {
        res.status(404).send(err);
        
    }
}

export const getEntretien = async (req,res) => {
    try {
        const getEntretien = await Entretien.findById(req.params.id).populate("voiture").populate("moto");
        res.status(200).json({getEntretien});
    } catch (err) {
        res.status(404).send(err);
    }
}

export const updateEntretien = async (req,res) => {
    try {
        const updateEntretien = await Entretien.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },{
            new:true
        })
        res.status(200).json({updateEntretien});
    } catch (err) {
        res.status(404).send(err);
    }
}