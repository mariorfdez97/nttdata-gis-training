# JavaScript & TypeScript para Visores Web (NTT DATA)

Este repositorio contiene la ruta de aprendizaje, apuntes y ejercicios prácticos para el dominio de JavaScript, TypeScript y React, adaptados al desarrollo de visores y aplicaciones GIS.

La estructura y los contenidos han sido adaptados en base a la guía de conceptos básicos del proyecto real de NTT DATA.

---

## Ruta de Aprendizaje (Plan del Proyecto)

### Fase 1: JavaScript Esencial
- [x] **Sintaxis y Lenguaje**
  - [x] Variables (`let`, `const`, `var`) y Scope (bloque/función, hoisting).
  - [x] Tipos primitivos vs objetos.
  - [x] Igualdad (`==` vs `===`) y valores Truthy/Falsy.
  - [x] Operadores modernos (`?.`, `??`) y Template Strings.
- [ ] **Funciones**
  - [ ] Arrow functions vs funciones normales (`this`, `arguments`).
  - [ ] Parámetros por defecto, Rest (`...args`) y Spread.
- [ ] **Objetos**
  - [ ] Desestructuración y acceso dinámico a propiedades (`obj[key]`).
  - [ ] Métodos estáticos (`Object.keys()`, `Object.values()`, `Object.entries()`).
  - [ ] Copia superficial (`{...obj}`) y referencia vs copia.
- [x] **Arrays (Listas)**
  - [x] Métodos funcionales (`map`, `filter`, `reduce`, `flatMap`).
  - [x] Métodos de búsqueda (`find`, `findIndex`, `some`, `every`, `includes`).
  - [ ] Bucles (`for...of` vs `forEach` y cuándo no usarlos).
  - [ ] Métodos mutables vs inmutables (`push`, `splice`, `sort`, etc.).
- [ ] **Asincronía**
  - [ ] Promesas y `async/await`.
  - [ ] Consultas paralelas (`Promise.all`).
  - [ ] Control de errores con `try/catch`.
- [ ] **Conceptos Avanzados**
  - [ ] Paso por valor vs paso por referencia.
  - [ ] Mutabilidad e inmutabilidad de datos.
  - [ ] Closures y contexto (`this`).
- [ ] **Módulos**
  - [ ] `import` / `export` (Default y Named exports).

### Fase 2: TypeScript
- [ ] Tipado estático (tipos primitivos, tipos personalizados y `interfaces`).
- [ ] Tipado para estructuras GIS (coordenadas, Features, GeoJSON).
- [ ] Clases, genéricos y configuración (`tsconfig.json`).

### Fase 3: React & Visores
- [ ] Componentes y estado (`useState`, `useEffect`).
- [ ] Integración de APIs de mapas (OpenLayers / Leaflet).

---

## Estructura del Proyecto

```text
├── README.md                 # Ruta de aprendizaje y seguimiento.
├── repaso_sintaxis.js        # Guía práctica de sintaxis, funciones, objetos y conceptos del lenguaje.
├── guia_repaso_arrays.js     # Guía detallada sobre manipulación de arrays.
├── ejercicio1_arrays.js      # Práctica de métodos de arrays (Completado).
├── ejercicio2_inmutabilidad.js # Práctica de estructuración, copia e inmutabilidad.
├── ejercicio3_async.js       # Práctica de promesas y asincronía.
└── index.html                # Visor de pruebas local para el navegador.
```
