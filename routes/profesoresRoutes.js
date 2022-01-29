const { Router } = require("express");
const router = Router();

const {
  obtenerProfesores,
  //   obtenerProfesorAlumno,
  creaUnNuevoProfesor,
  actualizaProfesor,
  eliminarProfesor,
  obtenerProfesorAlumnoDosCtrl,
} = require("../controllers/profesoresController");

router.get("/", obtenerProfesores);
// router.get("/profesorAlumno", obtenerProfesorAlumno);
router.get("/profesorAlumno", obtenerProfesorAlumnoDosCtrl);
router.post("/", creaUnNuevoProfesor);
router.put("/", actualizaProfesor);
router.delete("/", eliminarProfesor);

module.exports = router;
