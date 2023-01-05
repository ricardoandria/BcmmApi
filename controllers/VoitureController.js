import Car from "../models/Car.js"


export const createVoiture = async (req,res) => {
    const newVoiture = new Car(req.body);
    try {
            const saveVoiture = await newVoiture.save();
            res.status(200).json({saveVoiture});
    } catch (err) {
        res.status(404).send("something went wrong");
    }
}


export const deleteVoiture = async (req,res) => {
    try {
        const deleteVoiture = await Car.findByIdAndDelete(req.params.id);
        res.status(200).json("deleted successfully");
    } catch (err) {
        res.status(404).send("something went wrong");

    }
}

export const getVoitures = async (req,res) => {
    try {
        const getVoitures = await Car.find();
        res.status(200).json({getVoitures})
    } catch (err) {
        res.status(404).send("something went wrong");
        
    }
}

export const getVoiture = async (req,res) => {
    try {
        const getVoiture = await Car.findById(req.params.id);
        res.status(200).json({getVoiture});
    } catch (err) {
        res.status(404).send("something went wrong");
        
    }
}

export const updateVoiture = async (req,res) => {
    try {
        console.log(req.body.body);
        const updatVoiture = await Car.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        },{
            new:true
        });

        res.status(200).json({updatVoiture});

    } catch (err) {
        res.status(404).send("something went wrong")
    }
}