const DBProfesor = [
  {
    id: 1,
    nombre: "Roberto",
    apellido: "Pérez",
    edad: 30,
    sexo: "M",
    idAlumno: 1,
  },
  {
    id: 2,
    nombre: "Erika",
    apellido: "Méndez",
    edad: 26,
    sexo: "F",
    idAlumno: 2,
  },
  {
    id: 3,
    nombre: "Pablo",
    apellido: "Garcia",
    edad: 35,
    sexo: "F",
    idAlumno: 1,
  },
  {
    id: 4,
    nombre: "Alberto",
    apellido: "Valdez",
    edad: 30,
    sexo: "M",
    idAlumno: 3,
  },
];

const obtenerTodosLosProfesores = () => {
  return DBProfesor;
};
