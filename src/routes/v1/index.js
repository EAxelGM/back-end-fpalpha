import express from "express";
import { response } from "../../helpers";
import BooksRead from "./books-read.routes";
import BooksNoRead from "./books-no-read.routes";
import Estadisticas from "./estadisticas.routes";

import { verifyToken } from "../../middlewares"; //? Este VerifyToken es para revisar el logeo de un usuario pero como actualmente no estamos iniciando sesion, se omite

//export default router
const app = express();

//List routes
app.get("/", (req, res) => {
  return response(res, { message: "Esta es la v1" });
});

app.use("/estadisticas", /* verifyToken, */ Estadisticas);

app.use("/books-read", /* verifyToken, */ BooksRead);
app.use("/books-no-read", /* verifyToken, */ BooksNoRead);

export default app;
