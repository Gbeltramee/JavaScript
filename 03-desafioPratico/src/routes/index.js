import { Router } from "express";
import chamadoRoutes from "./chamadoRoutes.js";
import usuarioRoutes from "./usuarioRoutes.js";
import categoriaRoutes from "./categoriaRoutes.js";
import comentarioRoutes from "./comentarioRoutes.js"

const router = Router();
router.use(chamadoRoutes);
router.use(usuarioRoutes);
router.use(categoriaRoutes);
router.use(comentarioRoutes);

export default router;