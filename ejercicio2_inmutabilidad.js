// Ejercicio 2: Inmutabilidad y Objetos

// Estado inicial del visor de mapas
const visorInicial = {
  id: 'visor-principal',
  zoom: 10,
  centro: [43.36, -5.85], // Oviedo
  capas: [
    { id: 'l1', nombre: 'calles', visible: true },
    { id: 'l2', nombre: 'ortofoto', visible: false }
  ],
  metadata: {
    autor: 'mariorfdez97',
    version: '1.0.0'
  }
};

/**
 * 1. Actualizar el zoom sin mutar el objeto original.
 */
function actualizarZoom(visorOriginal, nuevoZoom) {
  // TODO: Implementar
  const visorActualizado = {
    ...visorOriginal,
    zoom: nuevoZoom
  };
  return visorActualizado;
}

/**
 * 2. Agregar una nueva capa al final del array de capas de forma inmutable.
 * La nueva capa debe ser un objeto: { id: 'l3', nombre: nuevaCapa, visible: true }
 */
function agregarCapa(visorOriginal, nuevaCapa) {
  // TODO: Implementar
  const visorActualizado = {
    ...visorOriginal,
    capas: [...visorOriginal.capas, { id: 'l3', nombre: nuevaCapa, visible: true }]
  };
  return visorActualizado;
}

/**
 * 3. Actualizar la versión dentro de 'metadata' sin mutar el original.
 */
function actualizarVersion(visorOriginal, nuevaVersion) {
  // TODO: Implementar
  const visorActualizado = {
    ...visorOriginal,
    metadata: { ...visorOriginal.metadata, version: nuevaVersion }
  };
  return visorActualizado;
}

/**
 * 4. Alternar visibilidad de una capa por su id de forma inmutable.
 * Debe buscar la capa con el id indicado en el array de capas y cambiar su propiedad 'visible'
 * al valor contrario (true -> false o viceversa) sin mutar ninguna referencia del estado original.
 */
function alternarVisibilidadCapa(visorOriginal, idCapa) {
  // TODO: Implementar
  const visorActualizado = {
    ...visorOriginal,
    capas: visorOriginal.capas.map(capa => 
      capa.id === idCapa 
        ? { ...capa, visible: !capa.visible } 
        : capa
    )
  };
  return visorActualizado;
}


// --- Test de verificación ---
console.log('--- Pruebas Ejercicio 2 ---');

// 1. Test Zoom
const visorConZoom = actualizarZoom(visorInicial, 14);
console.log('1. Zoom (esperado 14):', visorConZoom.zoom);
console.log('   Original intacto (esperado 10):', visorInicial.zoom);

// 2. Test Capas
const visorConCapa = agregarCapa(visorInicial, 'catastro');
console.log('\n2. Total capas (esperado 3):', visorConCapa.capas.length);
console.log('   Nueva capa añadida:', visorConCapa.capas[2]);
console.log('   Original capas intacto (esperado 2):', visorInicial.capas.length);

// 3. Test Metadata
const visorConVersion = actualizarVersion(visorInicial, '1.1.0');
console.log('\n3. Versión (esperado 1.1.0):', visorConVersion.metadata.version);
console.log('   Original versión (esperado 1.0.0):', visorInicial.metadata.version);
console.log('   ¿Metadata distintas referencias? (esperado true):', visorConVersion.metadata !== visorInicial.metadata);

// 4. Test Visibilidad
const visorConVisibilidad = alternarVisibilidadCapa(visorInicial, 'l1');
console.log('\n4. Visibilidad de l1 (esperado false):', visorConVisibilidad.capas[0].visible);
console.log('   Original l1 intacto (esperado true):', visorInicial.capas[0].visible);
console.log('   ¿Capas l1 son objetos con referencias distintas? (esperado true):', visorConVisibilidad.capas[0] !== visorInicial.capas[0]);
console.log('   ¿Capas l2 son el mismo objeto en memoria (shallow)? (esperado true):', visorConVisibilidad.capas[1] === visorInicial.capas[1]);
