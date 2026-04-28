import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController {
    static async listarLivros(req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async listarLivroPorId(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async cadastrarLivro(req, res) {
        const novoLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const editoraEncontrada = await editora.findById(novoLivro.editora);

            if (!autorEncontrado) {
                return res.status(404).json({ message: "Autor não encontrado" });
            } else if (!editoraEncontrada) {
                return res.status(404).json({ message: "Editora não encontrada" });
            }

            const livroCompleto = { ...novoLivro, autor: { ... autorEncontrado._doc}, editora: { ... editoraEncontrada._doc } };
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({message: "Livro cadastrado com sucesso", livro: novoLivro});
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
            const livroAtualizado = await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Livro atualizado com sucesso", livro: livroAtualizado});
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async excluirLivro(Req, res){
        try {
            const id = req.params.id;
            const livroExcluido = await livro.findByIdAndDelete(id);
            res.status(200).json({message: "Livro deletado com sucesso", livro: livroExcluido});
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async listarLivroPorPaginas(req, res) {
        try {
            const paginas = req.query.paginas;
            const livroEncontrado = await livro.find({ paginas: paginas });
            res.status(200).json(livroEncontrado);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default LivroController;