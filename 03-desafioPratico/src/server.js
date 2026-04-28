import "dotenv/config";
import app from "./app.js";
import conectarBancoDeDados from "./config/dbConnect.js";

const port = process.env.PORT;
conectarBancoDeDados().then(() => {
  app.listen(port, () => {
    console.log("Servidor rodando na porta ",port)
  })
});