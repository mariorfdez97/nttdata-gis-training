// Guía de Repaso: Métodos de Arrays (Listas)

const numeros = [1, 2, 3, 4, 5];

// =========================================================================
// 1. MÉTODOS BÁSICOS Y TRANSFORMACIÓN
// =========================================================================

// filter: Retorna un nuevo array con elementos que cumplan la condición
const mayoresDeTres = numeros.filter(n => n > 3); // [4, 5]

// map: Retorna un nuevo array de igual tamaño con los elementos transformados
const duplicados = numeros.map(n => n * 2); // [2, 4, 6, 8, 10]

// flatMap: Mapea cada elemento y aplana el resultado un nivel. Muy útil en GIS 
// para manejar arrays anidados de coordenadas o características.
const coordenadas = [[43.5], [43.6, -5.6]];
const aplanadas = coordenadas.flatMap(c => c); // [43.5, 43.6, -5.6]


// =========================================================================
// 2. BÚSQUEDA Y COMPROBACIÓN
// =========================================================================

// find: Retorna el primer elemento coincidente, o undefined.
const valorEncontrado = numeros.find(n => n === 3); // 3

// findIndex: Retorna el índice del primer elemento coincidente, o -1.
const indiceEncontrado = numeros.findIndex(n => n === 3); // 2

// some: Retorna true si al menos un elemento cumple la condición.
const hayPares = numeros.some(n => n % 2 === 0); // true

// every: Retorna true si todos los elementos cumplen la condición.
const todosPares = numeros.every(n => n % 2 === 0); // false

// includes: Retorna true si el elemento existe en el array (búsqueda por valor para primitivos).
const contieneDos = numeros.includes(2); // true


// =========================================================================
// 3. REDUCCIÓN (reduce)
// =========================================================================
// Reduce un array a un único valor (acumulador) usando un callback.
// Requiere un valor inicial.
const sumaTotal = numeros.reduce((acumulador, actual) => acumulador + actual, 0); // 15


// =========================================================================
// 4. MÉTODOS MUTABLES VS INMUTABLES
// =========================================================================
// Los métodos mutables modifican el array original. Deben evitarse en React.
// Los métodos inmutables crean y devuelven un nuevo array.

// Mutables (Modifican el original):
// - push() / pop() (añadir/quitar al final)
// - unshift() / shift() (añadir/quitar al principio)
// - splice() (eliminar o insertar elementos en una posición específica)
// - sort() (ordenar el array en el sitio)
// - reverse() (invertir el array en el sitio)

// Inmutables (No modifican, crean una copia):
// - map(), filter(), flatMap()
// - slice() (extrae una porción del array)
// - concat() (une dos o más arrays)
// - [...array] (uso del operador spread para crear copias)

// Cuidado con .sort() en JS:
const desordenados = [10, 5, 8];
// desordenados.sort(); // Mutará 'desordenados' directamente.
// Forma inmutable correcta usando spread:
const ordenados = [...desordenados].sort((a, b) => a - b);


// =========================================================================
// 5. BUCLES: for...of VS forEach
// =========================================================================

// A. for...of:
// Se utiliza para recorrer elementos iterables de forma asíncrona o cuando se 
// necesita poder pausar o romper el bucle usando break o continue.
for (const num of numeros) {
  if (num === 3) break; // Totalmente permitido
}

// B. forEach:
// Ejecuta una función callback por cada elemento. 
// - NO se puede parar con break o continue.
// - NO retorna nada (undefined).
// - Cuándo no usarlo: No lo uses si quieres transformar datos (para eso está map) 
//   o si necesitas interrumpir el bucle bajo una condición.
numeros.forEach(num => console.log(num));
