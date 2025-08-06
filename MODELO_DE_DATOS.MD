# Torneo Deportivo Internacional - Modelo de Datos

## Parte 1: Análisis y Modelado

### 1. Análisis del Contexto

#### ¿Qué entidades son necesarias?
- **Delegaciones**: Representan a cada país participante, incluyendo estadísticas de medallas.
- **Atletas**: Representan a los deportistas que compiten en diversas disciplinas.
- (Opcional en futuras versiones: Competencias, Equipos, Disciplinas, Resultados globales)

#### ¿Cuántas colecciones se requieren y qué representan?
Se utilizarán **2 colecciones principales**:
1. `delegaciones`: Contiene información de los países participantes, su continente, nombre de la delegación y medallas obtenidas.
2. `atletas`: Contiene información personal y deportiva de los atletas, incluyendo sus resultados por competencia.

#### ¿Qué campos debería tener cada colección?

##### Colección: delegaciones
- `pais`: Nombre del país (String)
- `continente`: Continente al que pertenece (String)
- `delegacion`: Nombre oficial de la delegación (String)
- `medallas`: Subdocumento con campos:
  - `oro` (Number)
  - `plata` (Number)
  - `bronce` (Number)

##### Colección: atletas
- `nombre`: Nombre del atleta (String)
- `edad`: Edad del atleta (Number)
- `genero`: Género (String, "M" o "F")
- `pais`: País del atleta (String)
- `disciplina`: Deporte o disciplina (String)
- `equipo`: Nombre del equipo (String, puede estar vacío)
- `resultados`: Array de subdocumentos con:
  - `competencia`: Nombre del evento (String)
  - `fecha`: Fecha de la competencia (Date)
  - `resultado`: Resultado específico (String, ej. "10.2s")
  - `posicion`: Puesto obtenido (Number)

#### ¿Qué tipos de datos se deben manejar?
- **Numéricos**: edad, medallas, posiciones.
- **Cadenas de texto**: nombres, disciplinas, países.
- **Fechas**: fechas de competencia.
- **Booleanos**: No se utilizan por ahora.
- **Arrays**: Para almacenar múltiples resultados por atleta.
- **Subdocumentos**: Para estructurar medallas (delegaciones) y resultados (atletas).

---

### 2. Modelo de Datos Propuesto

### Colección 1: delegaciones

| Campo             | Tipo de Dato  | Descripción                                          |
|-------------------|---------------|-----------------------------------------------------|
| `_id`             | ObjectId      | Identificador único generado por MongoDB            |
| `pais`            | String        | Nombre del país participante                        |
| `continente`      | String        | Continente de origen del país                       |
| `delegacion`      | String        | Nombre oficial de la delegación                     |
| `medallas`        | Subdocumento  | Estadísticas de medallas obtenidas                  |
| `medallas.oro`    | Number        | Cantidad de medallas de oro                         |
| `medallas.plata`  | Number        | Cantidad de medallas de plata                       |
| `medallas.bronce` | Number        | Cantidad de medallas de bronce                      |

#### Ejemplo:
```json
{
  "pais": "España",
  "continente": "Europa",
  "delegacion": "Equipo Nacional España",
  "medallas": {
    "oro": 4,
    "plata": 2,
    "bronce": 5
  }
}
```
### Colección 2: atletas

| Campo                   | Tipo de Dato  | Descripción                                           |
|-------------------------|---------------|------------------------------------------------------|
| `_id`                    | ObjectId      | Identificador único                                  |
| `nombre`                 | String        | Nombre completo del atleta                           |
| `edad`                   | Number        | Edad del atleta                                      |
| `genero`                 | String        | Género (M o F)                                       |
| `pais`                   | String        | País al que representa el atleta                     |
| `disciplina`             | String        | Deporte o disciplina del atleta                      |
| `equipo`                 | String        | Nombre del equipo (si aplica)                        |
| `resultados`             | Array         | Resultados de competencias                          |
| `resultados.competencia` | String        | Nombre del evento competitivo                       |
| `resultados.fecha`       | Date          | Fecha del evento                                     |
| `resultados.resultado`   | String        | Resultado obtenido (tiempo, medalla, etc.)           |
| `resultados.posicion`    | Number        | Puesto logrado                                       |



Ejemplo:
```json
{
  "nombre": "Laura Martínez",
  "edad": 27,
  "genero": "F",
  "pais": "España",
  "disciplina": "Natación",
  "equipo": "España Acuática",
  "resultados": [
    {
      "competencia": "200m libres",
      "fecha": ISODate("2025-08-03"),
      "resultado": "2:01.45",
      "posicion": 1
    }
  ]
}
```
## Justificación de la Estructura

- **Delegaciones**: Reúnen estadísticas globales por país, ideales para rankings y reportes de medallas por continente o país.
  
- **Atletas**: Permiten guardar múltiples resultados por atleta, con todos los detalles necesarios para analizar su rendimiento en el torneo.

- **Subdocumentos**: Se usan para agrupar medallas (en delegaciones) y resultados (en atletas) dentro de cada documento, lo que optimiza las consultas y mejora la legibilidad de los datos.

- **Relación flexible**: No se usan referencias entre colecciones, ya que el campo `pais` permite relacionar atletas con delegaciones fácilmente, conservando simplicidad y evitando joins innecesarios.

- **Escalabilidad**: El modelo puede crecer fácilmente agregando colecciones nuevas como `competencias`, `disciplinas`, `sedes`, etc., sin necesidad de reestructurar las colecciones principales.

---

## Conclusión
El modelo propuesto satisface las necesidades de la organización, facilita consultas comunes (ranking de medallas, resultados de atletas, etc.), y se adapta bien al uso de **MongoDB** como base de datos documental. Es una solución flexible, escalable y optimizada para consultas en escenarios deportivos internacionales.
