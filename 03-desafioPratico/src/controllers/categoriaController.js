import Categoria from "../models/Categoria.js";

const listarCategorias = async (req, res) => {
  try {
    const listaCategorias = await Categoria.find();
    res.status(200).json(listaCategorias);
  } catch(erro) {
    res.status(500).json(erro);
  }
}

const criarCategoria = async (req, res) => {
  try {
    const categoriaCriada = await Categoria.create(req.body);
    res.status(201).json(categoriaCriada);
  } catch(erro) {
    res.status(500).json(erro);
  }
}

export { listarCategorias, criarCategoria }