import { Router } from "express";
import { listarUsuarios, criarUsuario, buscarUsuarioPorId } from "../controllers/usuarioController.js";

const router = Router();

router.get("/usuarios",listarUsuarios);
router.get("/usuarios/:id",buscarUsuarioPorId);
router.post("/usuarios",criarUsuario)

export default router;