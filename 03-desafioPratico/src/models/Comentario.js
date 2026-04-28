import mongoose from "mongoose";

const schemaComentario = new mongoose.Schema({
  texto: { type: String, required: true },
  chamado: { type: mongoose.Schema.Types.ObjectId, ref: "Chamado", required: true },
  autor: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true },
  criadoEm: { type: Date, default: Date.now }
});

const Comentario = mongoose.model("Comentario", schemaComentario)

export default Comentario;