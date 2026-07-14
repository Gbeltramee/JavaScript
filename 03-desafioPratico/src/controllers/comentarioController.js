import Comentario from "../models/Comentario.js";

const adicionarComentario = async (req, res) => {
  try {
    const comentario = await Comentario.create({
    texto: req.body.texto,
    autor: req.body.autor,
    chamado: req.params.id
    })
    res.status(201).json(comentario);
  } catch (erro) {
    res.status(500).json(erro);
  }
}

const listarComentariosDoChamado = async (req, res) => {
  try {
    const listaComentarios = await Comentario.find({ chamado: req.params.id });
    res.status(200).json(listaComentarios);
  } catch(erro) {
    res.status(500).json(erro);
  }
}

export { adicionarComentario, listarComentariosDoChamado }