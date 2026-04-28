import Chamado from "../models/Chamado.js";

const listarChamados = async (req, res) => {
  try {
    const listaChamados = await Chamado.find();
    res.status(200).json(listaChamados);
  } catch(erro) {
    res.status(500).json(erro);
  }
}

const criarChamado = async (req, res) => {
  try {
    const chamadoCriado = await Chamado.create(req.body);
    res.status(201).json(chamadoCriado);
  } catch(erro) {
    res.status(500).json(erro);
  }
}

const buscarChamadoPorId = async (req, res) => {
  try {
    const chamadoEncontrado = await Chamado.findById(req.params.id);
    res.status(200).json(chamadoEncontrado);
  } catch(erro) {
    res.status(500).json(erro);
  }
}

const atualizarChamado = async (req, res) => {
  try {
    const chamadoEncontrado = await Chamado.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(chamadoEncontrado);
  } catch(erro) {
    res.status(500).json(erro);
  }
}

const deletarChamado = async (req, res) => {
  try {
    const chamadoDeletado = await Chamado.findByIdAndDelete(req.params.id);
    res.status(204).send();    
  } catch (erro) {
    res.status(500).json(erro);
  }
}


export {listarChamados, criarChamado, buscarChamadoPorId, atualizarChamado, deletarChamado}