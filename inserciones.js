// ------------------ INSERTAR DELEGACIONES ------------------

db.delegaciones.insertMany([
    {
      pais: "Colombia",
      continente: "América",
      delegacion: "Colombia Team",
      medallas: { oro: 5, plata: 3, bronce: 2 }
    },
    {
      pais: "Brasil",
      continente: "América",
      delegacion: "Brasil Olímpico",
      medallas: { oro: 7, plata: 5, bronce: 4 }
    },
    {
      pais: "Estados Unidos",
      continente: "América",
      delegacion: "Team USA",
      medallas: { oro: 10, plata: 8, bronce: 6 }
    },
    {
      pais: "Canadá",
      continente: "América",
      delegacion: "Canada Sports",
      medallas: { oro: 3, plata: 4, bronce: 5 }
    },
    {
      pais: "España",
      continente: "Europa",
      delegacion: "Equipo Nacional España",
      medallas: { oro: 4, plata: 2, bronce: 5 }
    },
    {
      pais: "Francia",
      continente: "Europa",
      delegacion: "France Athletes",
      medallas: { oro: 6, plata: 3, bronce: 4 }
    },
    {
      pais: "Alemania",
      continente: "Europa",
      delegacion: "Germany Team",
      medallas: { oro: 5, plata: 6, bronce: 3 }
    },
    {
      pais: "Italia",
      continente: "Europa",
      delegacion: "Italia Deportiva",
      medallas: { oro: 3, plata: 5, bronce: 6 }
    },
    {
      pais: "Japón",
      continente: "Asia",
      delegacion: "Japan Squad",
      medallas: { oro: 8, plata: 4, bronce: 2 }
    },
    {
      pais: "China",
      continente: "Asia",
      delegacion: "China Team",
      medallas: { oro: 9, plata: 7, bronce: 5 }
    },
    {
      pais: "Corea del Sur",
      continente: "Asia",
      delegacion: "Korea Sports",
      medallas: { oro: 4, plata: 3, bronce: 4 }
    },
    {
      pais: "Australia",
      continente: "Oceanía",
      delegacion: "Australia Gold",
      medallas: { oro: 6, plata: 5, bronce: 3 }
    },
    {
      pais: "Nueva Zelanda",
      continente: "Oceanía",
      delegacion: "NZ Team",
      medallas: { oro: 3, plata: 2, bronce: 4 }
    },
    {
      pais: "Sudáfrica",
      continente: "África",
      delegacion: "South Africa Squad",
      medallas: { oro: 2, plata: 3, bronce: 5 }
    },
    {
      pais: "Egipto",
      continente: "África",
      delegacion: "Egypt Athletes",
      medallas: { oro: 1, plata: 2, bronce: 3 }
    }
  ]);
  
  // ------------------ INSERTAR ATLETAS ------------------
  
  db.atletas.insertMany([
    {
      nombre: "Juan Pérez",
      edad: 22,
      genero: "M",
      pais: "Colombia",
      disciplina: "Atletismo",
      equipo: "",
      resultados: [
        {
          competencia: "100m planos",
          fecha: ISODate("2025-08-02"),
          resultado: "10.20s",
          posicion: 2
        }
      ]
    },
    {
      nombre: "María González",
      edad: 19,
      genero: "F",
      pais: "Colombia",
      disciplina: "Natación",
      equipo: "",
      resultados: [
        {
          competencia: "50m libres",
          fecha: ISODate("2025-08-03"),
          resultado: "25.60s",
          posicion: 1
        }
      ]
    },
    {
      nombre: "Carlos Silva",
      edad: 25,
      genero: "M",
      pais: "Brasil",
      disciplina: "Judo",
      equipo: "",
      resultados: [
        {
          competencia: "Categoría -81kg",
          fecha: ISODate("2025-08-04"),
          resultado: "Medalla de oro",
          posicion: 1
        }
      ]
    },
    {
      nombre: "Ana Oliveira",
      edad: 21,
      genero: "F",
      pais: "Brasil",
      disciplina: "Esgrima",
      equipo: "",
      resultados: [
        {
          competencia: "Florete Femenino",
          fecha: ISODate("2025-08-05"),
          resultado: "Plata",
          posicion: 2
        }
      ]
    },
    {
      nombre: "John Smith",
      edad: 23,
      genero: "M",
      pais: "Estados Unidos",
      disciplina: "Ciclismo",
      equipo: "USA Cycling",
      resultados: [
        {
          competencia: "Ruta 200km",
          fecha: ISODate("2025-08-06"),
          resultado: "4h 12m",
          posicion: 1
        }
      ]
    },
    {
      nombre: "Emily Johnson",
      edad: 20,
      genero: "F",
      pais: "Estados Unidos",
      disciplina: "Atletismo",
      equipo: "",
      resultados: [
        {
          competencia: "200m planos",
          fecha: ISODate("2025-08-02"),
          resultado: "22.10s",
          posicion: 1
        }
      ]
    },
    {
      nombre: "Laura Martínez",
      edad: 27,
      genero: "F",
      pais: "España",
      disciplina: "Natación",
      equipo: "España Acuática",
      resultados: [
        {
          competencia: "200m libres",
          fecha: ISODate("2025-08-03"),
          resultado: "2:01.45",
          posicion: 1
        }
      ]
    },
    {
      nombre: "Miguel Torres",
      edad: 24,
      genero: "M",
      pais: "España",
      disciplina: "Esgrima",
      equipo: "",
      resultados: [
        {
          competencia: "Sable Masculino",
          fecha: ISODate("2025-08-05"),
          resultado: "Bronce",
          posicion: 3
        }
      ]
    },
    {
      nombre: "Yuki Tanaka",
      edad: 26,
      genero: "M",
      pais: "Japón",
      disciplina: "Judo",
      equipo: "",
      resultados: [
        {
          competencia: "Categoría -90kg",
          fecha: ISODate("2025-08-04"),
          resultado: "Oro",
          posicion: 1
        }
      ]
    },
    {
      nombre: "Haruka Sato",
      edad: 22,
      genero: "F",
      pais: "Japón",
      disciplina: "Natación",
      equipo: "",
      resultados: [
        {
          competencia: "100m mariposa",
          fecha: ISODate("2025-08-03"),
          resultado: "58.70s",
          posicion: 2
        }
      ]
    },
    {
      nombre: "Chen Wei",
      edad: 28,
      genero: "M",
      pais: "China",
      disciplina: "Ciclismo",
      equipo: "China ProCycling",
      resultados: [
        {
          competencia: "Contrarreloj 40km",
          fecha: ISODate("2025-08-06"),
          resultado: "52m 10s",
          posicion: 1
        }
      ]
    },
    {
      nombre: "Li Na",
      edad: 24,
      genero: "F",
      pais: "China",
      disciplina: "Esgrima",
      equipo: "",
      resultados: [
        {
          competencia: "Espada Femenina",
          fecha: ISODate("2025-08-05"),
          resultado: "Oro",
          posicion: 1
        }
      ]
    },
    {
      nombre: "Lucas Müller",
      edad: 25,
      genero: "M",
      pais: "Alemania",
      disciplina: "Natación",
      equipo: "",
      resultados: [
        {
          competencia: "100m pecho",
          fecha: ISODate("2025-08-03"),
          resultado: "59.80s",
          posicion: 3
        }
      ]
    },
    {
      nombre: "Isabella Rossi",
      edad: 23,
      genero: "F",
      pais: "Italia",
      disciplina: "Atletismo",
      equipo: "",
      resultados: [
        {
          competencia: "400m vallas",
          fecha: ISODate("2025-08-02"),
          resultado: "55.10s",
          posicion: 2
        }
      ]
    },
    {
      nombre: "Emily Brown",
      edad: 22,
      genero: "F",
      pais: "Australia",
      disciplina: "Natación",
      equipo: "AUS Dolphins",
      resultados: [
        {
          competencia: "800m libres",
          fecha: ISODate("2025-08-03"),
          resultado: "8:20.50",
          posicion: 1
        }
      ]
    }
  ]);
  