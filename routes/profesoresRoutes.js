const { Router } = require("express");
const router = Router();

const {
  obtenerProfesores,
  creaUnNuevoProfesor,
  actualizaProfesor,
  eliminarProfesor,
} = require("../controllers/profesoresController");

router.get("/", obtenerProfesores);
router.post("/", creaUnNuevoProfesor);
router.put("/", actualizaProfesor);
router.delete("/", eliminarProfesor);

module.exports = router;
