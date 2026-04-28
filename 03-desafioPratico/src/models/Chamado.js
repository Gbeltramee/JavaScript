import mongoose from "mongoose";

const schemaChamado = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  status: { 
    type: String,
    enum: ["ABERTO", "EM_ATENDIMENTO", "RESOLVIDO", "CANCELADO"],
    default: "ABERTO"
  },
  prioridade: {
     type: String,
     enum: ["BAIXA","MEDIA","ALTA","CRITICA"] 
  },
  responsavel: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario"},
  categoria: { type: mongoose.Schema.Types.ObjectId, ref: "Categoria"},
  criadoEm: { type: Date, default: Date.now }
});

const Chamado = mongoose.model("Chamado", schemaChamado)

export default Chamado;