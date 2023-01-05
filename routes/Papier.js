import express from "express";
import { createPapier, deletePapier, getPapier, getPapiers, updatePapier } from "../controllers/PapierControllers.js";



const route = express.Router();

route.post("/",createPapier);
route.delete("/:id",deletePapier);
route.get("/",getPapiers);
route.get("/:id",getPapier);
route.put("/:id",updatePapier);

export default route;