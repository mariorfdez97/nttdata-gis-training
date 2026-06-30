// Ejercicio 2: Inmutabilidad y Sintaxis ES6+

const visorInicial = {
  id: 'visor-principal',
  zoom: 10,
  centro: [43.36, -5.85], // Oviedo
  capas: ['calles', 'ortofoto'],
  metadata: {
    autor: 'Becario NTT DATA',
    version: '1.0.0'
  }
};

/**
 * 1. Actualizar el zoom sin mutar el objeto original.
 */
function actualizarZoom(visorOriginal, nuevoZoom) {
  // TODO: Implementar
  return visorOriginal;
}

/**
 * 2. Agregar una nueva capa al final del array sin mutar el original.
 */
function agregarCapa(visorOriginal, nuevaCapa) {
  // TODO: Implementar
  return visorOriginal;
}

/**
 * 3. Actualizar la versión dentro de 'metadata' sin mutar el original
 * (Recuerda realizar una copia profunda del objeto anidado).
 */
function actualizarVersion(visorOriginal, nuevaVersion) {
  // TODO: Implementar
  return visorOriginal;
}


// --- Test de verificación ---
console.log('--- Pruebas Ejercicio 2 ---');

// 1. Test Zoom
const visorConZoom = actualizarZoom(visorInicial, 14);
console.log('Zoom actualizado (esperado 14):', visorConZoom.zoom);
console.log('Original intacto (esperado 10):', visorInicial.zoom);

// 2. Test Capas
const visorConCapa = agregarCapa(visorInicial, 'catastro');
console.log('Capas actualizadas (esperado calles, ortofoto, catastro):', visorConCapa.capas);
console.log('Original intacto (esperado calles, ortofoto):', visorInicial.capas);

// 3. Test Metadata
const visorConVersion = actualizarVersion(visorInicial, '1.1.0');
console.log('Versión actualizada (esperado 1.1.0):', visorConVersion.metadata.version);
console.log('Original intacto (esperado 1.0.0):', visorInicial.metadata.version);
console.log('¿Referencias distintas? (esperado true):', visorConVersion.metadata !== visorInicial.metadata);
