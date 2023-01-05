import express from "express";
import { createMoto, deleteMoto, getMoto, getMotos, updateMoto } from "../controllers/MotoController.js";



const route = express.Router();

route.post("/",createMoto);
route.delete("/:id",deleteMoto);
route.get("/",getMotos);
route.get("/:id",getMoto);
route.put("/:id",updateMoto);

export default route;