const express = require("express");
const estudiantes = require("./estudiantes");

const app = express();
const PORT = process.env.PORT || 3000;

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