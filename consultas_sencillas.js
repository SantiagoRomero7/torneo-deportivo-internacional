// ---------------- CONSULTAS SENCILLAS ----------------

// 1. Listar todos los equipos de la disciplina "Natación"
db.atletas.find({ disciplina: "Natación" });

// 2. Mostrar atletas del país "Colombia"
db.atletas.find({ pais: "Colombia" });

// 3. Listar delegaciones del continente "Europa"
db.delegaciones.find({ continente: "Europa" });

// 4. Buscar competencias del atleta "Laura Martínez"
db.atletas.find(
  { nombre: "Laura Martínez" },
  { nombre: 1, resultados: 1 }
);

// 5. Mostrar delegaciones que pertenezcan al continente "América"
db.delegaciones.find({ continente: "América" });
