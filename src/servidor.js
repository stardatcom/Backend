import express from "express";
import morgan from "morgan";
import enrutadorModelos from "./rutas/rutaModelos.js";

const servidor = express();

servidor.use(morgan("dev"));
servidor.use(express.json());

servidor.use("/modelos", enrutadorModelos);

servidor.get('/', function (req, res) {
    res.json({mensaje: "Raíz funciona!"});
})

export default servidor;