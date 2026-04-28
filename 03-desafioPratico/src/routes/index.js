import { Router } from "express";
import chamadoRoutes from "./chamadoRoutes.js";
import usuarioRoutes from "./usuarioRoutes.js";
import categoriaRoutes from "./categoriaRoutes.js";

const router = Router();
router.use(chamadoRoutes);
router.use(usuarioRoutes);
router.use(categoriaRoutes);

export default router;