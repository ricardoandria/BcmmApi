import express from "express";
import { createEntretien, deleteEntretien, getEntretien, getEntretiens, updateEntretien } from "../controllers/EntretienController.js";



const route = express.Router();

route.post("/",createEntretien);
route.get("/:id",getEntretien);
route.get("/",getEntretiens);
route.delete("/:id",deleteEntretien);
route.put("/:id",updateEntretien);


export default route;