// Ejercicio 3: Promesas y Async / Await

// Simulación de servicios externos (no modificar)
function simularFetchCapas() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['edificios', 'carreteras', 'zonas-verdes']);
    }, 1000);
  });
}

function simularFetchDetallesCapa(capa) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (capa === 'edificios') {
        resolve({ nombre: 'edificios', tipo: 'Polígonos', count: 120 });
      } else if (capa === 'carreteras') {
        resolve({ nombre: 'carreteras', tipo: 'Líneas', count: 45 });
      } else if (capa === 'zonas-verdes') {
        resolve({ nombre: 'zonas-verdes', tipo: 'Polígonos', count: 12 });
      } else {
        reject(new Error(`La capa ${capa} no existe.`));
      }
    }, 800);
  });
}

/**
 * 1. Obtener las capas llamando a simularFetchCapas usando async/await.
 */
async function obtenerCapas() {
  // TODO: Implementar
  return [];
}

/**
 * 2. Cargar detalles de múltiples capas en paralelo usando Promise.all.
 */
async function cargarDetallesEnParalelo(listaCapas) {
  // TODO: Implementar
  return [];
}

/**
 * 3. Cargar detalles controlando errores. Si falla, capturar y retornar:
 * { error: true, mensaje: error.message }
 */
async function cargarDetallesConControlErrores(capa) {
  // TODO: Implementar
  return {};
}


// --- Test de verificación ---
async function ejecutarPruebas() {
  console.log('--- Pruebas Ejercicio 3 ---');

  console.log('Obteniendo listado de capas...');
  const capas = await obtenerCapas();
  console.log('Capas obtenidas:', capas);

  console.log('\nObteniendo detalles en paralelo...');
  const detalles = await cargarDetallesEnParalelo(['edificios', 'carreteras']);
  console.log('Detalles cargados:', detalles);

  console.log('\nVerificando control de errores...');
  const errorResultado = await cargarDetallesConControlErrores('capa-inexistente');
  console.log('Resultado esperado (error controlado):', errorResultado);
}

ejecutarPruebas();
