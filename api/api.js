import express from "express";
import bookRoutes from "./routes/bookRoutes.js";

const api = express();

//TODO: Configurar Midddleware funciones entra la ruta y controlador
//express no acepta json por eso tiene que registrar json
api.use(express.json());

api.get("/status", (req, res) => {
  return res.json({
    msg: "API en linea y funcionando",
  });
});

//TODO
//Aca se registran las rutas
api.use(bookRoutes);

export default api;
