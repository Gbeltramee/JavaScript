import { Router } from "express";
import { listarChamados, criarChamado, buscarChamadoPorId, atualizarChamado, deletarChamado } from "../controllers/chamadoController.js";

const router = Router();

router.get("/chamados", listarChamados);
router.get("/chamados/:id",buscarChamadoPorId);
router.post("/chamados", criarChamado);
router.put("/chamados/:id", atualizarChamado);
router.delete("/chamados/:id", deletarChamado);

export default router;