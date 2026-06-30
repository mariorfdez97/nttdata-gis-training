/**
 * EJERCICIO 1: Métodos de Arrays (Listas) en GIS
 * 
 * Instrucciones: Rellena el cuerpo de las funciones marcadas con "TU CÓDIGO AQUÍ".
 * Puedes ejecutar este archivo usando node.js si lo tienes instalado: `node ejercicio1_arrays.js`
 */

// Datos de prueba (puntos de interés de un mapa)
const puntosDeInteres = [
  { id: 'poi-1', nombre: 'EPI Gijón', categoria: 'educacion', coords: [43.52, -5.62], visitas: 150 },
  { id: 'poi-2', nombre: 'Playa de San Lorenzo', categoria: 'turismo', coords: [43.54, -5.65], visitas: 1200 },
  { id: 'poi-3', nombre: 'NTT DATA Gijón', categoria: 'trabajo', coords: [43.53, -5.63], visitas: 80 },
  { id: 'poi-4', nombre: 'Universidad Laboral', categoria: 'educacion', coords: [43.525, -5.615], visitas: 450 },
  { id: 'poi-5', nombre: 'Puerto Deportivo', categoria: 'turismo', coords: [43.545, -5.66], visitas: 900 }
];

/**
 * 1. OBTENER NOMBRES POR CATEGORÍA
 * Debe devolver un array solo con los NOMBRES (strings) de los puntos
 * que pertenezcan a la categoría indicada.
 */
function obtenerNombresPorCategoria(lista, categoriaBuscada) {
  return lista.filter(p => p.categoria === categoriaBuscada)
              .map(p => p.nombre);
}

/**
 * 2. BUSCAR PUNTO POR ID
 * Debe devolver el objeto del punto de interés que coincida con el id dado,
 * o undefined si no existe. (Usa un método de array específico, no un bucle for).
 */
function buscarPuntoPorId(lista, idBuscado) {
  return lista.find(p => p.id === idBuscado)
}

/**
 * 3. COMPROBAR POPULARIDAD
 * Debe devolver true si AL MENOS uno de los puntos tiene más visitas que el límite indicado,
 * o false en caso contrario.
 */
function comprobarSiHayMuyPopular(lista, limiteVisitas) {
  return lista.some(p => p.visitas > limiteVisitas)
}

/**
 * 4. AGRUPAR POR CATEGORÍA (REDUCE)
 * Debe devolver un objeto donde las claves sean las categorías y los valores
 * sean arrays con los puntos pertenecientes a esa categoría.
 * Ejemplo de salida esperada:
 * {
 *   educacion: [ { id: 'poi-1', ... }, { id: 'poi-4', ... } ],
 *   turismo: [ ... ]
 * }
 */
function agruparPorCategoria(lista) {
  return lista.reduce((acumulador, punto) => {
    const categoria = punto.categoria;
    if(!acumulador[categoria]) {
      acumulador[categoria] = [];
    }
    acumulador[categoria].push(punto);
    return acumulador;
  }, {})
}


// --- ZONA DE PRUEBAS (No modificar esta parte) ---
console.log('--- Pruebas Ejercicio 1 ---');

const nombresTurismo = obtenerNombresPorCategoria(puntosDeInteres, 'turismo');
console.log('1. Nombres de turismo (esperado: Playa de San Lorenzo, Puerto Deportivo):');
console.log(nombresTurismo);

const poiTrabajo = buscarPuntoPorId(puntosDeInteres, 'poi-3');
console.log('\n2. Buscar poi-3 (esperado: NTT DATA Gijón):');
console.log(poiTrabajo ? poiTrabajo.nombre : 'No encontrado');

const hayPopular = comprobarSiHayMuyPopular(puntosDeInteres, 1000);
console.log(`\n3. ¿Hay algún punto con > 1000 visitas? (esperado: true): ${hayPopular}`);

const agrupados = agruparPorCategoria(puntosDeInteres);
console.log('\n4. Agrupados por categoría:');
console.log(JSON.stringify(agrupados, null, 2));
