import mongoose from "mongoose";

const schemaCategoria = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String }
});

const Categoria = mongoose.model("Categoria", schemaCategoria)

export default Categoria;