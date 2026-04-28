import mongoose from "mongoose";

const editoraSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: String, required: true },
  cidade: { type: String }
}, { versionKey: false });

const editora = mongoose.models.editoras || mongoose.model("editoras", editoraSchema);

export  {editora, editoraSchema};