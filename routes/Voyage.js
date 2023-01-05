import express from "express";
import { createVoyage, deleteVoyage, getVoyage, getVoyages, updateVoyage } from "../controllers/VoyageController.js";

const route = express.Router();

route.post("/",createVoyage);
route.get("/",getVoyages);
route.get("/:id",getVoyage);
route.delete("/:id",deleteVoyage);
route.put("/:id",updateVoyage);

export default route;