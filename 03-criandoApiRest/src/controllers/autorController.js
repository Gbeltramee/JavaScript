import { autor } from "../models/Autor.js";

class AutorController {
    static async listarAutores(req, res) {
        try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async listarAutorPorId(req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: "Autor cadastrado com sucesso", autor: novoAutor });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async atualizarAutor(req, res) {
        try {
            const id = req.params.id;
            const autorAtualizado = await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Autor atualizado com sucesso", autor: autorAtualizado });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async excluirAutor(req, res) {
        try {
            const id = req.params.id;
            const autorExcluido = await autor.findByIdAndDelete(id);
            res.status(200).json({ message: "Autor deletado com sucesso", autor: autorExcluido });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default AutorController;