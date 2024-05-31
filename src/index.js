import "dotenv/config";
import "./conexionBD.js";
import servidor from "./servidor.js";

servidor.listen(2001, ()=>{
    console.log("Servidor corriendo en el puerto 2001");
})