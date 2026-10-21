const express = require("express");
const cors = require("cors");
const estudiantes = require("./estudiantes");
console.log(
    "VERIFICACIÓN:",
    estudiantes.find(e => e.identificacion === "1057784984")
);

const app = express();
const PORT = process.env.PORT || 3000;

// Permitir solicitudes desde tu aplicación local
app.use(cors({
    origin: "http://127.0.0.1:5500"
}));
app.get("/api/estudiantes/:identificacion", (req, res) => {

    const identificacion = req.params.identificacion;

    const estudiante = estudiantes.find(
        estudiante => estudiante.identificacion === identificacion
    );

    if (!estudiante) {
        return res.status(404).json({
            mensaje: "Estudiante no encontrado."
        });
    }

    res.json({
        nombre: estudiante.nombre,
        notaFinal: estudiante.notaFinal
    });
});

app.listen(PORT, () => {
    console.log(`Microservicio ejecutándose en http://localhost:${PORT}`);
});