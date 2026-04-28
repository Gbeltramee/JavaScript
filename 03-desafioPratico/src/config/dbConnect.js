import mongoose from 'mongoose';

const conectarBancoDeDados = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Banco Conectado!");
  } catch (erro) {
    console.log("Erro ao conectar no Banco!:", erro);
  }
};

export default conectarBancoDeDados;