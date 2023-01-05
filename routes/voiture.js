import express from "express";
import { createVoiture, deleteVoiture, getVoiture, getVoitures, updateVoiture } from "../controllers/VoitureController.js";


const route = express.Router();

route.post("/",createVoiture);
route.delete("/:id",deleteVoiture);
route.get("/",getVoitures);
route.get("/:id",getVoiture);
route.put("/:id",updateVoiture);

export default route;