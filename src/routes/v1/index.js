import express from "express";
import { response } from "../../helpers";
import books from "./books.routes";

import { verifyToken } from "../../middlewares";

//export default router
const app = express();

//List routes
app.get("/", (req, res) => {
  return response(res, { message: "Esta es la v1" });
});

app.use("/books", /* verifyToken, */ books);

export default app;
