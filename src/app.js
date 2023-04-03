import express from "express";
import morgan from "morgan";
import cors from "cors";
import routesV1 from "./routes/v1";
import { response } from "./helpers";
import swaggerUi from "swagger-ui-express";
import { swaggerDocument } from "./helpers";

const app = express();

//Middelwares
app.use(cors());
//use morgan for dev
app.use(morgan("dev"));
//body json parser
app.use(express.json());

//Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//Routes
app.get("/", (req, res) => {
  return response(res, {
    message: "Back-End Test",
  });
});

//Routes api V1
app.use("/api/v1", routesV1);

app.use(function (req, res) {
  return response(res, {
    message: "Ruta no encontradá",
    code: 404,
  });
});

/* app.get("*", (req, res) => {
  return response(res, {
    message: "Ruta GET no definida",
    code: 404,
  });
});

app.post("*", (req, res) => {
  return response(res, {
    message: "Ruta POST no definida",
    code: 404,
  });
});

app.put("*", (req, res) => {
  return response(res, {
    message: "Ruta PUT no definida",
    code: 404,
  });
});

app.delete("*", (req, res) => {
  return response(res, {
    message: "Ruta DELETE no definida",
    code: 404,
  });
}); */

export default app;
