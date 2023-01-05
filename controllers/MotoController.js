import Moto from "../models/Moto.js"

export const createMoto = async (req,res) => {
    const newMoto = new Moto(req.body);
    try {
            const saveMoto = await newMoto.save();
            res.status(200).json({saveMoto});
    } catch (err) {
        res.status(404).send("something went wrong");
    }
}

export const deleteMoto = async (req,res) => {
    try {
        const deleteMoto = await Moto.findByIdAndDelete(req.params.id);
        res.status(200).json("deleted successfully");
    } catch (err) {
        res.status(404).send("something went wrong");

    }
}

export const getMotos = async (req,res) => {
    try {
        const getMotos = await Moto.find();
        res.status(200).json({getMotos})
    } catch (err) {
        res.status(404).send("something went wrong");
        
    }
}

export const getMoto = async (req,res) => {
    try {
        const getMoto = await Moto.findById(req.params.id);
        res.status(200).json({getMoto});
    } catch (err) {
        res.status(404).send("something went wrong");
        
    }
}

export const updateMoto = async (req,res) => {
    try {
        const updatMoto = await Moto.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        },{
            new:true
        });

        res.status(200).json({updatMoto});

    } catch (err) {
        res.status(404).send("something went wrong")
    }
}