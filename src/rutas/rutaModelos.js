import { Router } from "express";
import ControladorModelos from "../controladores/controladorModelos.js";

const enrutadorModelos = Router();

enrutadorModelos.post('/', ControladorModelos.crearModelo);
enrutadorModelos.get('/:id', ControladorModelos.leerModelo);
enrutadorModelos.get('/', ControladorModelos.leerModelos);
enrutadorModelos.put('/:id', ControladorModelos.actualizarModelo);
enrutadorModelos.delete('/:id', ControladorModelos.eliminarModelo);

export default enrutadorModelos;