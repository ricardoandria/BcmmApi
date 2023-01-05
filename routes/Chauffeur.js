import express from "express";
import { createChauffeur, deleteChauffeur, getChauffeur, getChauffeurs, updateChauffeur } from "../controllers/ChauffeurController.js";


const route = express.Router();

route.post("/",createChauffeur);
route.get("/:id",getChauffeur);
route.get("/",getChauffeurs);
route.delete("/:id",deleteChauffeur);
route.put("/:id",updateChauffeur);


export default route;