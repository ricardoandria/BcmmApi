import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import voitureRoute from "./routes/voiture.js";
import motoRoute from "./routes/Moto.js";
import chauffeurRoute from "./routes/Chauffeur.js";
import voyageRoute from "./routes/Voyage.js";
import entretienRoute from "./routes/Entretien.js";
import papierRoute from "./routes/Papier.js";


const app = express();
dotenv.config();
mongoose.set("strictQuery", true);



const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO);
      console.log("connected to mongoDb");
    } catch (err) {
      throw err;
    }
  };
//Middlewar
app.use(cookieParser());
app.use(cors());
app.use(express.json());

//Route
app.use("/voiture/",voitureRoute);
app.use("/moto/",motoRoute);
app.use("/chauffeur/",chauffeurRoute);
app.use("/voyage/",voyageRoute);
app.use("/entretien/",entretienRoute);
app.use("/papier/",papierRoute);


app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.Message || "something went wrong";
  
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });


app.listen(process.env.PORT, () => {
    connect();
    console.log("connected to backend");
  });