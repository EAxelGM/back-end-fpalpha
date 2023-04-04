import { Router } from "express";
import * as controller from "../../controllers/estadisticas";

const router = Router();

router.get("/", controller.estadisticas);

export default router;
