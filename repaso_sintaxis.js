// Guía de Repaso: Sintaxis Esencial de JavaScript

// =========================================================================
// 1. ÁMBITO (SCOPE) Y HOISTING
// =========================================================================

// var: Scope de función. Sufre hoisting (la declaración se eleva al inicio).
// let/const: Scope de bloque. No se pueden usar antes de declarar (Temporal Dead Zone).

function ejemploScope() {
  if (true) {
    var funcionScope = 'accesible fuera del if';
    let bloqueScope = 'solo accesible dentro del if';
  }
  console.log(funcionScope); // Funciona
  // console.log(bloqueScope); // Error: bloqueScope is not defined
}

// Hoisting (Comportamiento interno de JS)
// console.log(variableLet); // Error de referencia
console.log(variableVar); // Imprime: undefined (la declaración se elevó, pero no el valor)
var variableVar = 'hola';


// =========================================================================
// 2. TIPOS DE DATOS: PRIMITIVOS VS OBJETOS
// =========================================================================

// Primitivos (inmutables, se comparan por valor):
// string, number, boolean, null, undefined, symbol, bigint.
let a = 10;
let b = a; // Se copia el valor real
b = 20;    // 'a' sigue siendo 10

// Objetos (mutables, se comparan y copian por referencia):
// arrays, objetos literales, funciones.
let obj1 = { valor: 10 };
let obj2 = obj1; // Se copia la referencia en memoria
obj2.valor = 20;
console.log(obj1.valor); // Imprime: 20 (se modificó el mismo objeto)


// =========================================================================
// 3. FUNCIONES: ARROW VS NORMALES
// =========================================================================

// A. Funciones tradicionales
// - Tienen su propio contexto 'this' (depende de cómo se invoquen).
// - Tienen acceso al objeto especial 'arguments'.
function tradicional(x, y) {
  console.log(arguments); // [x, y]
  return x + y;
}

// B. Arrow Functions (() => {})
// - NO tienen propio 'this' (heredan el 'this' léxico de donde fueron creadas).
// - NO tienen objeto 'arguments'.
// - Retorno implícito si son de una sola línea.
const sumar = (x, y) => x + y;


// =========================================================================
// 4. PARÁMETROS POR DEFECTO Y OPERADORES REST/SPREAD
// =========================================================================

// Parámetros por defecto
const saludar = (nombre = 'Invitado') => `Hola ${nombre}`;

// Operador Rest (...): Agrupa el resto de argumentos pasados en un array.
// Debe ser siempre el último parámetro de la función.
function procesarCoordenadas(centro, ...otrosPuntos) {
  console.log('Centro:', centro);
  console.log('Resto de puntos:', otrosPuntos); // Array con el resto de argumentos
}

// Operador Spread (...): Esparce o expande elementos de un array u objeto.
const coordsIniciales = [43.5, -5.6];
const nuevasCoords = [...coordsIniciales, 12]; // [43.5, -5.6, 12]


// =========================================================================
// 5. MÉTODOS ESTÁTICOS DE OBJETOS
// =========================================================================
const visor = { id: 'v1', zoom: 12, activo: true };

console.log(Object.keys(visor));   // ['id', 'zoom', 'activo']
console.log(Object.values(visor)); // ['v1', 12, true]
console.log(Object.entries(visor)); // [['id', 'v1'], ['zoom', 12], ['activo', true]]


// =========================================================================
// 6. CONCEPTOS CLAVE: CLOSURES Y "this"
// =========================================================================

// Closures (Clausuras):
// Una función que recuerda y accede a variables de su scope exterior incluso después
// de que la función exterior haya terminado de ejecutarse.
function crearContador() {
  let contador = 0; // Variable privada protegida por el closure
  return {
    incrementar: () => ++contador,
    obtenerValor: () => contador
  };
}
const miContador = crearContador();
miContador.incrementar(); // 1
console.log(miContador.obtenerValor()); // 1

// Contexto "this" en JS:
// 'this' hace referencia al objeto que está ejecutando la función actual.
const persona = {
  nombre: 'Marta',
  saludarTradicional() {
    console.log(this.nombre); // Funciona. 'this' es el objeto 'persona'
  },
  saludarArrow: () => {
    console.log(this.nombre); // Imprime: undefined. Las arrow functions heredan 'this' del scope global
  }
};


// =========================================================================
// 7. MÓDULOS EN JAVASCRIPT (ES MODULES)
// =========================================================================
// Sintaxis estándar para modularizar código (se usa en React).

// export const config = { zoom: 10 };       // Named export (se importa con llaves)
// export default function visor() {}        // Default export (se importa sin llaves)

// Importación:
// import visorDefault, { config } from './visor.js';
