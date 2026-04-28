import { editora } from "../models/Editora.js";

class EditoraController {
    static async listarEditoras(req, res) {
        try {
            const listaEditoras = await editora.find({});
            res.status(200).json(listaEditoras);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async listarEditoraPorId(req, res) {
        try {
            const id = req.params.id;
            const editoraEncontrada = await editora.findById(id);
            res.status(200).json(editoraEncontrada);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async cadastrarEditora(req, res) {
        try {
            const novaEditora = await editora.create(req.body);
            res.status(201).json({ message: "Editora cadastrada com sucesso", editora: novaEditora });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async atualizarEditora(req, res) {
        try {
            const id = req.params.id;
            const editoraAtualizada = await editora.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Editora atualizada com sucesso", editora: editoraAtualizada });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async excluirEditora(req, res) {
        try {
            const id = req.params.id;
            const editoraExcluida = await editora.findByIdAndDelete(id);
            res.status(200).json({ message: "Editora deletada com sucesso", editora: editoraExcluida });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default EditoraController;