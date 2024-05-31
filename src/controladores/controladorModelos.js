import ModeloModelo from "../modelos/modeloModelos.js";

const ControladorModelos = {
    crearModelo: async (req, res) => {
        try {
            const nuevoModelo = new ModeloModelo(req.body);
            const modeloCreado = await nuevoModelo.save();
            if (modeloCreado._id) {
               res.json({
                   resultado: "bien",
                   mensaje: "modelo creado",
                   datos: modeloCreado._id
               });
            }
           } catch (error) {
               res.json({
                   resultado: "mal",
                   mensaje: "ocurrió un error al crear modelo",
                   datos: error
               });
           }
       },
       leerModelo: async (req, res) => {
           try {
               const modeloEncontrado = await ModeloModelo.findById(req.params.id)
               if  (modeloEncontrado._id) {
                   res.json({
                       resuldado: "bien",
                       mensaje: "modelo leído",
                       datos: modeloEncontrado
               });
               }
              } catch (error) {
               res.json({
                   resultado: "mal",
                   mensaje: "ocurrió un error al leer modelo",
                   datos: error
               });
              }
       },
       leerModelos: async (req, res) => { 
           try {
                 const todosLosModelos = await ModeloModelo.find(); 
                   res.json({
                       resuldado: "bien",
                       mensaje: "modelos leídos",
                       datos: todosLosModelos
               });
              } catch (error) {
               res.json({
                   resultado: "mal",
                   mensaje: "ocurrió un error al leer todos los modelos",
                   datos: error
               });
              }
       },
       actualizarModelo: async (req, res) => {
           try {
               const modeloActualizado = await ModeloModelo.findByIdAndUpdate(
                   req.params.id,
                   req.body
               );
                   
               res.json({
                       resuldado: "bien",
                       mensaje: "modelo actualizado",
                       datos: modeloActualizado._id,
               });
              } catch (error) {
               res.json({
                   resultado: "mal",
                   mensaje: "ocurrió un error al actualizar modelo",
                   datos: error
               });
              }
       },
       eliminarModelo: async (req, res) => {
           try {
               const modeloEliminado = await ModeloModelo.findByIdAndDelete(req.params.id)
               if (modeloEliminado._id) {
                   res.json({
                       resuldado: "bien",
                       mensaje: "modelo eliminado",
                       datos: null
               });
               }
              } catch (error) {
               res.json({
                   resultado: "mal",
                   mensaje: "ocurrió un error al eliminar modelo",
                   datos: error
               });
       }
   }
   }
   
   export default ControladorModelos;