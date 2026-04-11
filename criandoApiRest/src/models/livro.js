import mongoose from "mongoose";

// Definindo o esquema do livro
const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId},
    titulo: { type: String, required: true },
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number }
});

// Criando o modelo do livro, que será usado para interagir com a coleção de livros no MongoDB  
const Livro = mongoose.model('Livros', livroSchema);

export default Livro;