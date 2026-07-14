import { Router } from "express";
import { listarComentariosDoChamado, adicionarComentario } from "../controllers/comentarioController.js";

const router = Router();

router.get("/chamados/:id/comentarios",listarComentariosDoChamado);
router.post("/chamados/:id/comentarios",adicionarComentario)

export default router;