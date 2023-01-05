import Papier from "../models/Papier.js"


export const createPapier = async (req,res) => {
    const newPapier = new Papier(req.body);
    try {
            const savePapier = await newPapier.save();
            res.status(200).json({savePapier});
    } catch (err) {
        res.status(404).send("something went wrong");
    }
}




export const deletePapier = async (req,res) => {
    try {
        const deletePapier = await Papier.findByIdAndDelete(req.params.id);
        res.status(200).json("deleted successfully");
    } catch (err) {
        res.status(404).send("something went wrong");

    }
}

export const getPapiers = async (req,res) => {
    try {
        const getPapiers = await Papier.find();
        res.status(200).json({getPapiers})
    } catch (err) {
        res.status(404).send("something went wrong");
        
    }
}

export const getPapier = async (req,res) => {
    try {
        const getPapier = await Papier.findById(req.params.id);
        res.status(200).json({getPapier});
    } catch (err) {
        res.status(404).send("something went wrong");
        
    }
}

export const updatePapier = async (req,res) => {
    try {
        const updatPapier = await Papier.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        },{
            new:true
        });

        res.status(200).json({updatPapier});

    } catch (err) {
        res.status(404).send("something went wrong")
    }
}