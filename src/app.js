const express = require("express");
const path = require("path");
const app = express();

// Donde están los recursos estáticos
app.use(express.static(path.resolve(__dirname, '../public')));

// Creando nuestras rutas
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/home.html"));
});

// Levantar el servidor
app.listen(5000, function () {
    console.log("Servidor corriendo en el puerto 5000");
});