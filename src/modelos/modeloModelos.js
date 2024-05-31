import { Schema, model } from "mongoose";

const esquemaModelo = new Schema(
    {
        nombre: {type: String, required: true},
        released: {type: Date, default: Date.now},
        bioseguridad: {type: Boolean, required: true},
        displayInfo: {type: Number, required: true},
        camaras: {type: String, required: true},
        bateriaInfo: {type: String, required: true},
        ios: {type: String, required: true},

    }
)
export default model("Modelo", esquemaModelo);