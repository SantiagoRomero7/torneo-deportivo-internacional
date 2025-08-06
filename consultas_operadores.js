// ---------------- CONSULTAS CON OPERADORES ----------------

// 1. Atletas con edad mayor a 23 años
db.atletas.find({ edad: { $gt: 23 } });

// 2. Atletas con edad entre 20 y 25 años (inclusive)
db.atletas.find({ edad: { $gte: 20, $lte: 25 } });

// 3. Delegaciones con más de 5 medallas de oro
db.delegaciones.find({ "medallas.oro": { $gt: 5 } });

// 4. Atletas cuyo país sea "Japón" o "China"
db.atletas.find({ pais: { $in: ["Japón", "China"] } });

// 5. Delegaciones que NO pertenezcan al continente "Europa"
db.delegaciones.find({ continente: { $ne: "Europa" } });

// 6. Atletas que hayan conseguido la posición 1 en alguna competencia
db.atletas.find({ "resultados.posicion": 1 });

// 7. Delegaciones con medallas de bronce entre 3 y 5 (inclusive)
db.delegaciones.find({ "medallas.bronce": { $gte: 3, $lte: 5 } });

// 8. Atletas cuyo género sea Femenino (F) y disciplina sea "Natación"
db.atletas.find({ $and: [ { genero: "F" }, { disciplina: "Natación" } ] });

// 9. Atletas que pertenezcan a "España" o hayan competido en "Esgrima"
db.atletas.find({ $or: [ { pais: "España" }, { disciplina: "Esgrima" } ] });

// 10. Delegaciones que tengan al menos una medalla de oro y más de 3 de plata
db.delegaciones.find({ "medallas.oro": { $gte: 1 }, "medallas.plata": { $gt: 3 } });
