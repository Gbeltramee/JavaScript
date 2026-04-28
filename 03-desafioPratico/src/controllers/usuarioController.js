import Usuario from "../models/Usuario.js"

const listarUsuarios = async (req, res) => {
  try {
    const listaUsuarios = await Usuario.find();
    res.status(200).json(listaUsuarios);
  } catch(erro) {
    res.status(500).json(erro);
  }
}

const criarUsuario = async (req, res) => {
  try {
    const usuarioCriado = await Usuario.create(req.body);
    res.status(201).json(usuarioCriado);
  } catch(erro) {
    res.status(500).json(erro);
  }
}

const buscarUsuarioPorId = async (req, res) => {
  try {
    const usuarioEncontrado = await Usuario.findById(req.params.id);
    res.status(200).json(usuarioEncontrado);
  } catch(erro) {
    res.status(500).json(erro);
  }
}

export {listarUsuarios, criarUsuario, buscarUsuarioPorId}