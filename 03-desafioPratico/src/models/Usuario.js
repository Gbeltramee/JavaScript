import mongoose from "mongoose";

const schemaUsuario = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
  cargo: { type: String },
  criadoEm: { type: Date, default: Date.now }
});

const Usuario = mongoose.model("Usuario", schemaUsuario)

export default Usuario;