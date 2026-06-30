// Ejercicio Práctico: Consumo de una API de Países Real (REST Countries)
// Este ejercicio combina asincronía (fetch) con manipulación de listas.

/**
 * 1. Obtener datos de la API pública de países europeos.
 * URL: https://restcountries.com/v3.1/region/europe
 * Debe retornar el JSON obtenido del servidor.
 */
async function obtenerPaisesEuropa() {
  try {
    // TODO: Hacer el fetch a la URL y retornar el JSON deserializado (.json())
    return [];
  } catch (error) {
    console.error("Error al obtener países:", error);
    return [];
  }
}

/**
 * 2. Filtrar países que tengan más de 20 millones de habitantes.
 * Utiliza el campo 'population' del objeto de cada país.
 */
function filtrarPaisesGrandes(paises) {
  // TODO: Implementar
  return [];
}

/**
 * 3. Mapear los países para retornar solo la información geográfica básica.
 * Debe devolver un array de objetos con el formato:
 * {
 *   nombre: pais.name.common,
 *   capital: pais.capital ? pais.capital[0] : 'No tiene',
 *   coords: pais.latlng // Coordenadas [latitud, longitud]
 * }
 */
function mapearDatosGeograficos(paises) {
  // TODO: Implementar
  return [];
}

/**
 * 4. Calcular la población total de Europa sumando la población de todos los países.
 * Utiliza el método .reduce().
 */
function calcularPoblacionTotal(paises) {
  // TODO: Implementar
  return 0;
}


// --- Test de verificación ---
async function ejecutarPruebasReal() {
  console.log('--- Iniciando Pruebas con API Real ---');
  
  const paises = await obtenerPaisesEuropa();
  console.log(`Cargados ${paises.length} países de Europa.`);
  
  if (paises.length === 0) {
    console.log("⚠️ No se pudieron obtener los datos. Asegúrate de implementar correctamente 'obtenerPaisesEuropa'.");
    return;
  }

  // 1. Filtrado
  const grandes = filtrarPaisesGrandes(paises);
  console.log('\nPaíses con más de 20M de habitantes:', grandes.map(p => `${p.name.common} (${(p.population/1000000).toFixed(1)}M)`));

  // 2. Mapeo Geográfico
  const geoInfo = mapearDatosGeograficos(paises);
  console.log('\nEjemplo de información geográfica mapeada (primeros 3 países):', geoInfo.slice(0, 3));

  // 3. Reducción
  const totalPoblacion = calcularPoblacionTotal(paises);
  console.log(`\nPoblación total acumulada de Europa: ${(totalPoblacion / 1000000).toFixed(2)} Millones.`);
}

ejecutarPruebasReal();
