const { Router } = require("express");
const router = Router();

const {
  obtenerProfesores,
  crearNuevoProfesor,
  actualizaProfesor,
  eliminaProfesor,
} = require("../controllers/profesoresController");

router.get("/", obtenerProfesores);
router.post("/", crearNuevoProfesor);
router.put("/", actualizaProfesor);
router.delete("/", eliminaProfesor);

module.exports = router;
