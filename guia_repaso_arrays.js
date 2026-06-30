/**
 * GUÍA DE REPASO: Métodos de Arrays en JavaScript Moderno (ES6+)
 * 
 * Este archivo sirve como material de referencia rápido para resolver los ejercicios.
 * Aquí repasaremos la sintaxis de funciones flecha y los métodos clave de arrays:
 * .filter(), .map(), .find(), .some() y .reduce().
 */

// =========================================================================
// 1. FUNCIONES FLECHA (ARROW FUNCTIONS)
// =========================================================================
// Son la forma moderna y concisa de escribir funciones en JS, muy usadas
// en métodos de arrays como funciones de callback.

// Sintaxis clásica (función tradicional):
function duplicarTradicional(x) {
  return x * 2;
}

// Sintaxis flecha estándar:
const duplicarFlecha = (x) => {
  return x * 2;
};

// Sintaxis flecha con retorno implícito (¡muy común!):
// Si la función solo tiene una línea que devuelve un valor, puedes omitir las llaves {} y la palabra 'return'.
const duplicarCorto = x => x * 2; 

// Nota: Si no hay argumentos, se usan paréntesis vacíos: () => console.log('Hola')
// Nota 2: Si hay un solo argumento, los paréntesis son opcionales: x => x * 2


// =========================================================================
// 2. MÉTODO: .filter()
// =========================================================================
// ¿Qué hace?: Filtra los elementos de un array basándose en una condición lógica.
// Retorna: Un NUEVO array con los elementos que cumplan la condición (para los que el callback devuelva true).
//          Si ningún elemento cumple, devuelve un array vacío [].
// Complejidad: O(n) - Recorre todo el array.

const numeros = [1, 2, 3, 4, 5];

// Ejemplo: Filtrar números mayores que 3
const mayoresQueTres = numeros.filter(num => num > 3);
// mayoresQueTres es: [4, 5]


// =========================================================================
// 3. MÉTODO: .map()
// =========================================================================
// ¿Qué hace?: Transforma cada elemento de un array uno por uno.
// Retorna: Un NUEVO array de la MISMA longitud que el original, conteniendo los resultados transformados.
// Complejidad: O(n) - Transforma todos los elementos.

// Ejemplo: Duplicar todos los números del array
const duplicados = numeros.map(num => num * 2);
// duplicados es: [2, 4, 6, 8, 10]

// --- Encadenamiento (Chaining) ---
// Como filter y map devuelven arrays, se pueden encadenar:
const duplicadosMayoresQueTres = numeros
  .filter(num => num > 3)   // Filtra primero: [4, 5]
  .map(num => num * 2);     // Duplica después: [8, 10]


// =========================================================================
// 4. MÉTODO: .find()
// =========================================================================
// ¿Qué hace?: Busca el primer elemento que cumpla una condición.
// Retorna: El ELEMENTO en sí (objeto, número, etc.) o `undefined` si no encuentra ninguno.
// Nota: Se detiene en cuanto encuentra la primera coincidencia (eficiente).

const usuarios = [
  { id: 'usr-1', nombre: 'Ana' },
  { id: 'usr-2', nombre: 'Juan' }
];

// Ejemplo: Buscar usuario con id 'usr-2'
const usuarioEncontrado = usuarios.find(usr => usr.id === 'usr-2');
// usuarioEncontrado es: { id: 'usr-2', nombre: 'Juan' }

// Diferencia con .filter():
// - filter() devuelve SIEMPRE un array (ej: [{ id: 'usr-2', ... }]).
// - find() devuelve el ELEMENTO directamente (ej: { id: 'usr-2', ... }) o undefined.


// =========================================================================
// 5. MÉTODOS DE COMPROBACIÓN: .some() y .every()
// =========================================================================
// Retornan un valor booleano (true o false). Son muy eficientes porque usan
// evaluación de cortocircuito (se detienen en cuanto conocen el resultado).

// A. .some(): Comprueba si AL MENOS UN elemento cumple la condición.
const hayPares = numeros.some(num => num % 2 === 0);
// hayPares es: true (porque 2 y 4 son pares)

// B. .every(): Comprueba si TODOS los elementos cumplen la condición.
const todosPositivos = numeros.every(num => num > 0);
// todosPositivos es: true (todos son mayores que 0)


// =========================================================================
// 6. MÉTODO: .reduce() (El más potente y versátil)
// =========================================================================
// ¿Qué hace?: Reduce un array a un ÚNICO valor (que puede ser un número, un string,
//              un objeto, o incluso otro array).
// Sintaxis: array.reduce((acumulador, elementoActual) => { ... }, valorInicial)
// ¡Importante!: No olvides el `valorInicial` como segundo parámetro. Si no lo pones,
//               tomará el primer elemento del array como acumulador inicial, lo cual
//               suele causar errores con arrays de objetos.

// Ejemplo A: Sumar todos los números del array
const sumaTotal = numeros.reduce((acumulador, num) => {
  return acumulador + num;
}, 0); // 0 es el valor inicial del acumulador
// Iteración 1: acumulador = 0, num = 1 => retorna 1
// Iteración 2: acumulador = 1, num = 2 => retorna 3
// ...
// sumaTotal es: 15

// Ejemplo B: Contar elementos por tipo (Agrupación simple)
// Imagina que queremos contar cuántas frutas tenemos por su nombre:
const frutas = ['manzana', 'platano', 'manzana', 'naranja', 'platano'];

const conteoFrutas = frutas.reduce((acumulador, fruta) => {
  // Si la fruta ya está en el objeto acumulador, le sumamos 1, si no, la inicializamos en 1
  acumulador[fruta] = (acumulador[fruta] || 0) + 1;
  return acumulador; // ¡SIEMPRE debes retornar el acumulador en cada iteración!
}, {}); // {} (un objeto vacío) es nuestro acumulador inicial

// conteoFrutas es: { manzana: 2, platano: 2, naranja: 1 }
