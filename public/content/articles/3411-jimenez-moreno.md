# INFORME DE LECTURA
## Mantenerse en la escuela: desafiliación en un bachillerato tecnológico

> ⚠️ **BORRADOR - REQUIERE VERIFICACIÓN HUMANA**

---

## 1. FICHA TÉCNICA

| Campo | Valor |
|-------|-------|
| **Título completo** | Mantenerse en la escuela: desafiliación en un bachillerato tecnológico / Staying in school: disenrollment in a technological high school |
| **Autores** | José-Alfonso Jiménez-Moreno (UNAM, México); Zorayda Feria-Juárez (CETis 74, Ensenada, México) |
| **Revista/Fuente** | Revista Panamericana de Pedagogía, Número 41 (2026), e3411 |
| **DOI** | https://doi.org/10.21555/rpp.3411 |
| **E-ISSN** | 2594-2190 |
| **Tipo de artículo** | Empírico |
| **Tema central** | Análisis de variables asociadas a la desafiliación/deserción escolar en una cohorte de estudiantes de bachillerato tecnológico en el noroeste de México |

**Fechas:**
- Recibido: 03-04-2025
- Aceptado: 28-07-2025
- Publicado: 06-08-2025

**Licencia:** Creative Commons Attribution 4.0 International (CC BY 4.0)

---

## 2. INTRODUCCIÓN / PROBLEMÁTICA

### 2.1 Contexto general

La Educación Media Superior (EMS) en México se inició a mediados del siglo XIX como nivel preparatorio para la educación superior, y desde 2012 alcanzó el nivel de obligatoriedad. Con más de 30 subsistemas, la EMS mexicana es altamente heterogénea, lo que complejiza su conocimiento y la implementación de políticas nacionales unificadas.

La deserción escolar —también denominada "desafiliación" por MEJOREDU (2024)— constituye uno de los problemas más graves en este nivel educativo. No es exclusivo de México ni de la EMS, pero es precisamente en el primer año de este nivel donde se concentra la mayor parte del abandono escolar a nivel Latinoamérica (Díaz-Barajas y Ruiz-Olvera, 2018; Román, 2013).

El impacto de la deserción trasciende lo estadístico: implica la imposibilidad de cumplir con el derecho a la educación y limita las oportunidades de desarrollo de las nuevas generaciones.

### 2.2 Problema de investigación

> "El presente artículo se enfoca en el problema del abandono escolar en EMS, particularmente en un primer análisis de las variables asociadas a dicho fenómeno, en una escuela de bachillerato tecnológico."

El estudio busca responder: **¿Qué variables personales, académicas y de capital digital predicen la permanencia de los estudiantes entre el primer y segundo semestre de bachillerato tecnológico?**

### 2.3 Objetivos

**Objetivo general:**
Identificar las variables que tienen mayor influencia en que los estudiantes se mantengan inscritos y vigentes entre el primer y el segundo semestre de su formación en EMS.

**Objetivos específicos implícitos:**
- Analizar el poder predictivo de variables personales (sexo)
- Evaluar la influencia de antecedentes escolares (promedio y tipo de secundaria)
- Determinar el impacto del capital digital (Internet, computadora, tablet, smartphone)
- Construir un modelo no paramétrico de regresión logística

### 2.4 Marco teórico (resumen)

El estudio se fundamenta en múltiples perspectivas:

**1. Causas de la deserción en EMS:**
- Contexto social y familiar
- Problemáticas psicológicas
- Falta de orientación vocacional
- Problemas económicos
- Aspectos de rendimiento escolar (Guzmán-Ventura y Moctezuma-Franco, 2022)

**2. Crítica al concepto de "abandono":**
Guzmán-Ventura y Moctezuma-Franco (2023) cuestionan el término "abandono" por cargar responsabilidad exclusivamente al estudiante. Proponen pensar en responsabilidades compartidas entre estudiante, escuela y sistema.

**3. Políticas educativas:**
- Programa Beca Universal Benito Juárez de Nivel Medio Superior
- Extra edad como factor de gestión escolar
- Prácticas docentes (Román, 2013)

**4. Capital digital post-pandemia:**
Peniche-Cetzal y Ramón-Mac (2023) destacan la relevancia de infraestructura tecnológica para el éxito académico post-COVID-19.

---

## 3. METODOLOGÍA

### 3.1 Tipo de estudio

**Enfoque:** Cuantitativo transversal no experimental

**Técnica:** Regresión logística no paramétrica (método forward condicional)

**Justificación:** Las variables son mayoritariamente nominales y ordinales, lo que hace inadecuado el uso de regresión lineal. La regresión logística permite predecir probabilidades cuando la variable dependiente es binaria.

### 3.2 Participantes / Muestra

| Característica | Detalle |
|----------------|---------|
| **N** | 500 estudiantes (universo completo de la cohorte) |
| **Perfil** | Estudiantes de primer ingreso a bachillerato tecnológico |
| **Criterios de selección** | Totalidad de estudiantes inscritos en agosto 2023 |
| **Contexto geográfico** | CETis 74, Ensenada, Baja California, México |
| **Distribución sexo** | 232 hombres (46.4%), 268 mujeres (53%) |
| **Cohorte** | 2023-2025 |

**Nota metodológica:** Para la Categoría 2 (Antecedentes escolares), se omitieron 69 casos (13.8%) por falta de información sobre tipo de secundaria, trabajando finalmente con n=431.

### 3.3 Instrumentos / Técnicas de recolección

**Fuente de datos:** Bases de datos estadísticas de la Coordinación de Servicios Escolares del CETis 74.

**Variables recolectadas al momento de inscripción:**

| Categoría | Variables |
|-----------|-----------|
| **Personales** | Sexo (hombre/mujer) |
| **Antecedentes escolares** | Promedio de egreso de secundaria (0-10); Tipo de secundaria (Telesecundaria, Técnica, General) |
| **Capital digital** | Internet en casa; Computadora en casa; Tablet en casa; Smartphone |

### 3.4 Procedimiento

1. **Selección de cohorte:** Estudiantes que iniciaron en agosto 2023
2. **Seguimiento:** Hasta el segundo semestre (conclusión del primer ciclo)
3. **Variable dependiente:** Mantenerse inscrito entre primer y segundo semestre (1=vigente, 0=baja)
4. **Análisis por categorías:** Tres regresiones logísticas independientes

### 3.5 Análisis de datos

**Software:** SPSS versión 21

**Técnica:** Regresión logística con método forward condicional

**Métricas de ajuste:**
- R cuadrado de Nagelkerke (varianza explicada)
- Prueba de Hosmer y Lemeshow
- Odds Ratio [Exp(B)]
- Valores p (significancia)

---

## 4. RESULTADOS

### 4.1 Hallazgo principal

**28% de deserción** entre primer y segundo semestre (141 de 500 estudiantes causaron baja). Solo el 71.8% (359 estudiantes) se mantuvieron activos.

### 4.2 Resultados por categoría

#### Categoría 1: Variables personales (Sexo)

**Resultado:** El sexo es predictor significativo pero débil.

| Variable | Valor |
|----------|-------|
| Exp(B) | 0.516 |
| p | .001 |
| R² Nagelkerke | 3.1% |

**Hallazgo cualitativo:** Los hombres representan el 58.16% de las bajas (82 casos) pero solo el 46.4% de la matrícula.

**Interpretación:** Ser hombre reduce la probabilidad de permanecer, pero la variable explica muy poco del fenómeno.

#### Categoría 2: Antecedentes escolares

**Resultado 1: Promedio de secundaria**
| Variable | Valor |
|----------|-------|
| Exp(B) | 2.042 |
| p | <.001 |
| R² Nagelkerke | 8.9% |

**Interpretación:** Cada punto adicional en el promedio de secundaria duplica (2.04x) las probabilidades de permanecer inscrito.

**Resultado 2: Tipo de secundaria**
| Variable | p |
|----------|---|
| Telesecundaria | .231 |
| Secundaria técnica | .731 |
| Secundaria general | .125 |

**Interpretación:** El tipo de secundaria NO resultó significativo. El método forward condicional excluyó estas variables del modelo.

**Prueba de Hosmer y Lemeshow:** χ² = 7.732, p = .460 (no significativo = buen ajuste)

#### Categoría 3: Capital digital

**Resultado principal: Tener computadora**
| Variable | Valor |
|----------|-------|
| Exp(B) | 0.399 |
| p | <.001 |
| R² Nagelkerke | 5.7% |

**Interpretación:** Tener computadora en casa predice DESERCIÓN, no permanencia. Los estudiantes SIN computadora tienen 2.5 veces (1/0.399) más probabilidad de mantenerse inscritos.

**Otras variables de capital digital:**
- Internet: No incluida en el modelo final
- Tablet: No incluida en el modelo final
- Smartphone: No incluida en el modelo final

### 4.3 Tabla resumen de datos clave

| Variable/Dato | Valor | Contexto/Nota |
|---------------|-------|---------------|
| Tasa de deserción | 28% (141/500) | Entre primer y segundo semestre |
| Tasa de permanencia | 71.8% (359/500) | Referencia para comparaciones |
| Hombres en bajas | 58.16% (82/141) | Disproporcionado vs. 46.4% matrícula |
| Mujeres en bajas | 41.84% (59/141) | Subrepresentadas vs. 53% matrícula |
| Promedio más común en bajas | 7.1-8 | Rango de calificaciones en escala 0-10 |
| Sin computadora en bajas | 68.79% (97/141) | Dato descriptivo; predictor inverso |
| Con Internet en bajas | 85.82% (121/141) | No significativo en modelo |
| Sin tablet en bajas | 91.49% (129/141) | No significativo en modelo |

---

## 5. DISCUSIÓN

### 5.1 Interpretación de los hallazgos

Los autores organizan la discusión en tres ejes:

**1. Limitaciones del modelo:**
El estudio reconoce explícitamente que las variables analizadas permiten solo un "análisis somero". Con un máximo del 8.9% de varianza explicada, el 91.1% de los factores que determinan la deserción no están en este modelo.

**2. La paradoja del capital digital:**
El hallazgo de que tener computadora predice deserción contradice la premisa de políticas como las Becas Benito Juárez y programas de dotación tecnológica, que asumen que más recursos = más retención.

**3. La acumulación histórica:**
El promedio de secundaria como mejor predictor apoya la tesis de Román (2013): la deserción se construye a lo largo de la trayectoria escolar, no es un evento aislado.

### 5.2 Relación con otros estudios

| Estudio | Coincidencia/Divergencia |
|---------|-------------------------|
| Díaz y Ruiz (2018) | Coincide: el sexo no es determinante para deserción |
| Román (2013) | Coincide: la deserción se acumula históricamente; crítica a la noción de "abandono" |
| Guzmán y Moctezuma (2023) | Coincide: necesidad de analizar políticas escolares y clima escolar |
| Peniche-Cetzal y Ramón-Mac (2023) | Diverge: el capital digital no resultó protector en este contexto |

### 5.3 Implicaciones teóricas

1. **Revisión del concepto de capital digital:** La posesión de dispositivos ≠ éxito académico. Falta medir el USO efectivo de la tecnología.

2. **El mérito vs. la trayectoria:** El desempeño individual (promedio) importa más que la etiqueta institucional (tipo de secundaria).

3. **Género como variable compleja:** Aunque los hombres se van más, el sexo explica poco. Hay factores intermedios no medidos (expectativas laborales, presión económica, cultura escolar).

### 5.4 Implicaciones prácticas

**Para el CETis 74:**
- Ampliar la recopilación de información (contexto socioeconómico, dinámicas escolares)
- Realizar estudios cualitativos para comprender razones del abandono
- Desarrollar mecanismos de prevención e intervención

**Para la política educativa:**
- Revisar supuestos de programas de dotación tecnológica
- Complementar capital digital con análisis de clima escolar
- Considerar que el primer semestre es crítico para la retención

### 5.5 Limitaciones del estudio

Los autores reconocen explícitamente:

1. **Variables no medidas:** Ingreso familiar, trabajo juvenil, clima escolar, calidad docente, salud mental, violencia en el entorno, expectativas familiares.

2. **Nivel de medición:** Falta de variables de razón o intervalo que permitieran modelos más robustos.

3. **Alcance temporal:** Solo mide entre primer y segundo semestre; no sigue hasta graduación.

4. **Contexto específico:** Resultados de una sola escuela; limitada generalización.

---

## 6. CONCLUSIONES

### 6.1 Conclusión principal

> "Se concluye la necesidad de incrementar la comprensión del problema con el análisis del clima escolar, así como políticas educativas, con el fin de disminuir la incidencia de esta problemática."

El estudio logra identificar variables predictivas (promedio de secundaria, tener computadora, sexo) pero reconoce honestamente que estas explican menos del 9% del fenómeno. El llamado es a ampliar el análisis más allá de variables individuales hacia factores institucionales y contextuales.

### 6.2 Conclusiones por autores

**Conclusiones textuales del paper:**

1. "Las variables seleccionadas [...] permiten únicamente un análisis somero de la situación."

2. "El promedio obtenido en el nivel educativo previo (Secundaria) parece tener un amplio poder explicativo."

3. "El hecho de tener computadora en casa resulta ser la variable de mayor impacto [...] respecto a aquellas relacionadas con elementos tecnológicos."

4. "Se reafirman las tesis relacionadas con la baja influencia del sexo de los jóvenes."

### 6.3 Recomendaciones de los autores

**Para futura investigación:**
- Incorporar variables socioeconómicas
- Analizar clima escolar
- Estudiar prácticas docentes
- Realizar estudios cualitativos
- Explorar dinámicas sociales del plantel

**Para la práctica:**
- Robustecer recopilación de información en control escolar
- Implementar acciones preventivas precisas
- Atender el primer semestre como período crítico

---

## 7. CRÍTICA Y REFLEXIÓN

### 7.1 Fortalezas del artículo

1. **Honestidad metodológica:** Los autores son explícitos sobre las limitaciones. No sobrevenden sus hallazgos.

2. **Contexto específico:** Aborda un vacío (bachillerato tecnológico) dentro de un problema conocido (deserción en EMS).

3. **Hallazgo contraintuitivo:** La paradoja del capital digital es valiosa para cuestionar políticas públicas.

4. **Relevancia práctica:** Los resultados son inmediatamente útiles para el CETis 74.

5. **Bilingüe:** Artículo completo en español e inglés, amplificando su alcance.

### 7.2 Debilidades / Vacíos

1. **Falta de profundidad cualitativa:** No se entrevistó a estudiantes que desertaron. El "por qué" permanece abierto.

2. **Ausencia de variables socioeconómicas:** La paradoja de la computadora solo puede explicarse con datos de ingreso, trabajo, dinámica familiar.

3. **No mide institucionalidad:** Variables escolares (calidad docente, clima, prácticas) no están en el modelo.

4. **Muestra de conveniencia:** Una sola escuela limita la generalización.

5. **El "efecto COVID":** La cohorte 2023-2025 es post-pandemia, pero el estudio no discute cómo esto pudo afectar los resultados.

### 7.3 Preguntas que quedan abiertas

1. ¿Por qué quienes tienen computadora se van más? ¿Trabajan más? ¿Usan la tecnología para distracción?

2. ¿Qué pasa con el otro 91.1% de varianza no explicada?

3. ¿Por qué los hombres se van más si el sexo explica tan poco?

4. ¿Cómo fue el segundo año para quienes se mantuvieron?

5. ¿Son transferibles estos hallazgos a otros CETis de México?

### 7.4 Conexión con el contexto actual

**Relevancia 2026:**

El estudio cobra urgencia en un contexto donde:
- México mantiene tasas de deserción del 11-12% en EMS
- Las políticas de "capital digital" siguen siendo prioritarias
- La brecha de género en educación técnica sigue sin explicación clara

El hallazgo de que tener computadora predice deserción debería hacer reflexionar a quienes diseñan programas de dotación tecnológica. Correlación no es causalidad, pero la correlación negativa cuestiona el supuesto positivo de las políticas.

---

## 8. CITAS PARA USAR

### 8.1 Citas textuales destacadas

> "El fenómeno del abandono escolar en EMS es un problema que entrelaza diversas variables, las cuales van desde perspectivas macro o generales, como las políticas del SEN o de la escuela misma." (p. 14)

> "El hecho de tener computadora en casa resulta ser la variable de mayor impacto [...] respecto a aquellas relacionadas con elementos tecnológicos disponibles en casa." (p. 15)

> "Se concluye la necesidad de incrementar la comprensión del problema con el análisis del clima escolar, así como políticas educativas, con el fin de disminuir la incidencia de esta problemática." (p. 1)

> "Las variables seleccionadas [...] permiten únicamente un análisis somero de la situación [...] no permite comprender la problemática a profundidad." (p. 14)

### 8.2 Dato numérico clave

**El 28% de deserción entre primer y segundo semestre** — en una sola cohorte de 500 estudiantes, 141 jóvenes abandonaron antes de terminar el primer año.

### 8.3 Idea central para recordar

**La paradoja del capital digital:** Tener computadora en casa —recurso que debería facilitar el estudio— resulta ser predictor de deserción. Los estudiantes SIN computadora tienen 2.5 veces más probabilidad de mantenerse inscritos.

---

## 9. METADATOS DE PROCESAMIENTO

| Campo | Valor |
|-------|-------|
| Procesado por | Leer-Artículos Skill v1.0 |
| Fecha de procesamiento | 2026-04-08 |
| Estado | BORRADOR |
| Artículo N° | 41 |
| Tipo | Bilingüe (español/inglés) |

---

**Fin del Informe de Lectura**

*Generado por Leer-Artículos_v1.0 | BORRADOR - REQUIERE VERIFICACIÓN HUMANA*
