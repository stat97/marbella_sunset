const express = require("express");
const dotenv = require("dotenv");
const { connect } = require("./src/utils/db");
const files = require("./src/middleware/files.middleware");

// Creamos el servidor web
const app = express();
// Vamos a configurar dotenv para poder utilizar las variables de entorno del .env
dotenv.config();
// Creamos la conexión con la BD (base de datos)
connect();
// Configura Cloudinary para la gestión de Img.
files.configCloudinary();

const PORT = process.env.PORT;

const cors = require("cors");
app.use(cors());

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: false }));

app.use((error, req, res) => {
  return res
    .status(error.status || 500)
    .json(error.message || "unexpected error");
});


app.disable("x-powered-by");
app.listen(PORT, () =>
  console.log(`Server listening on port http://localhost:${PORT}`)
);