# Torneo Deportivo Internacional - MongoDB

## Nombre del Estudiante
**Santiago Romero**

---

## Descripción del Proyecto
Este proyecto consiste en el diseño, modelado e implementación de una base de datos documental en **MongoDB** para gestionar la información de un **Torneo Deportivo Internacional** organizado por *GlobalSports Union*.

La base de datos permite registrar y gestionar:
- Países y delegaciones participantes.
- Equipos deportivos por disciplina.
- Datos de los atletas.
- Resultados de las competiciones.
- Estadísticas de medallas obtenidas.

El objetivo principal es construir un modelo de datos flexible, con mínimo dos colecciones relacionadas de forma coherente, que permita realizar consultas útiles para la organización del torneo.

---

## Instrucciones para Ejecutar los Scripts en MongoDB

Puedes ejecutar los scripts en **MongoDB Compass**, **MongoDB Shell (mongosh)** o **MongoDB Atlas**. Sigue estos pasos:

1. **Crear la Base de Datos:**
   - Abre Compass, mongosh o Atlas.
   - Selecciona o crea una base de datos con el nombre:
     ```js
     use torneo2025;
     ```

2. **Insertar los Datos Iniciales:**
   - Copia el contenido del archivo **`inserciones.js`**.
   - Pégalo y ejecútalo en la sección de consultas para crear las colecciones y poblarlas con documentos (mínimo 15 documentos por colección).

3. **Ejecutar Consultas Sencillas:**
   - Abre el archivo **`consultas_sencillas.js`**.
   - Copia las consultas y ejecútalas una por una para obtener los resultados básicos.

4. **Ejecutar Consultas con Operadores:**
   - Abre el archivo **`consultas_operadores.js`**.
   - Copia y ejecuta las consultas que combinan condiciones y operadores avanzados de MongoDB como `$gt`, `$lt`, `$in`, `$and`, `$or`, etc.

5. **Capturas de Evidencia (Opcional):**
   - Si deseas agregar evidencias visuales, toma capturas de pantalla de las consultas ejecutadas en Compass.
   - Guarda las imágenes en la carpeta **`/capturas/`**.

---

## Estructura del Repositorio
```
/torneo-deportivo-internacional
│
├── README.md # Información general, ejecución y estructura
├── modelo_de_datos.md # Descripción detallada del modelo de datos (colecciones y campos)
├── inserciones.js # Script con las inserciones de datos (15 documentos por colección)
├── consultas_sencillas.js # 5 consultas básicas sin operadores avanzados
├── consultas_operadores.js # 10 consultas avanzadas con operadores de MongoDB
└── capturas/ # (Opcional) Evidencias visuales de las consultas ejecutadas
```

### Descripción de los Archivos:
- **README.md**: Este documento. Incluye la descripción del proyecto, instrucciones de ejecución y detalle de cada archivo.
- **modelo_de_datos.md**: Documento explicando el diseño del modelo de datos, las colecciones creadas, sus campos, y la justificación de la estructura.
- **inserciones.js**: Script con la creación e inserción de datos en las colecciones `delegaciones` y `atletas` (mínimo 15 documentos por colección).
- **consultas_sencillas.js**: Archivo con 5 consultas básicas sobre las colecciones, sin operadores avanzados.
- **consultas_operadores.js**: Archivo con 10 consultas utilizando operadores lógicos, de comparación y sobre arrays/subdocumentos.
- **capturas/**: Carpeta opcional para guardar imágenes como evidencia de las consultas ejecutadas en MongoDB Compass.

---

# Autor
## **Santiago Romero**