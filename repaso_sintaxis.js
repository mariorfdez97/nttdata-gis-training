/**
 * GUÍA DE REPASO: Sintaxis Esencial de JavaScript para Programadores
 * 
 * Como ya vienes de Ingeniería Informática, este archivo va al grano con las 
 * particularidades y características propias de JavaScript (especialmente ES6+), 
 * comparándolo con lenguajes fuertemente tipados como Java/C++.
 */

// =========================================================================
// 1. VARIABLES: const vs let vs var
// =========================================================================
// - const: Para valores que no van a ser reasignados. (Usa esta por defecto).
// - let: Para variables cuyo valor cambiará (reemplaza al antiguo 'var').
// - var: ¡OBSOLETO! No lo uses. Tiene problemas de scope global/función (hoisting).

const pi = 3.1416; // No se puede reasignar. pi = 3.14 daría error.
let contador = 0;
contador += 1; // Correcto.

// OJO con const en Objetos y Arrays:
const miArray = [1, 2, 3];
miArray.push(4); // ¡Permitido! La referencia al array no cambia, solo su contenido.
// miArray = [4, 5]; // Error, no puedes asignarle un nuevo array completo.


// =========================================================================
// 2. COMPARACIONES: == vs ===
// =========================================================================
// En JS existen dos tipos de igualdad. Usa SIEMPRE === (igualdad estricta).

console.log(5 == '5');  // true  -> Convierte tipos automáticamente (coerción). Evitar.
console.log(5 === '5'); // false -> Compara tipo y valor. Seguro y recomendado.

console.log(null == undefined);  // true
console.log(null === undefined); // false


// =========================================================================
// 3. VALORES TRUTHY Y FALSY (Verdaderos y Falsos)
// =========================================================================
// En JS, cualquier valor en una estructura condicional (if) evalúa a true o false.

// Valores que evalúan a FALSE (Falsy):
// - false, 0, -0, 0n (BigInt), "" (string vacío), null, undefined, NaN.

// Valores que evalúan a TRUE (Truthy):
// - Todo lo demás, incluyendo arrays vacíos `[]` y objetos vacíos `{}`.

const nombreUsuario = "";
if (!nombreUsuario) {
  console.log("El nombre está vacío (evalúa a falso)");
}


// =========================================================================
// 4. TEMPLATE LITERALS (Plantillas de texto)
// =========================================================================
// Olvídate de concatenar con '+'. Usa comillas invertidas ` ` y ${variable} para inyectar código.

const nombre = "Gijón";
const temp = 21;
const mensaje = `La temperatura en ${nombre} es de ${temp} grados.`; 
// "La temperatura en Gijón es de 21 grados."


// =========================================================================
// 5. OBJETOS Y ACCESO DINÁMICO A PROPIEDADES
// =========================================================================
const poi = {
  id: 'poi-100',
  nombre: 'San Lorenzo',
  categoria: 'playa'
};

// Acceso clásico por punto:
console.log(poi.nombre); // 'San Lorenzo'

// Acceso dinámico por corchetes (¡Muy útil en reduce/bucles!):
const clave = 'categoria';
console.log(poi[clave]); // 'playa' (equivale a poi['categoria'])

// Atajo de propiedad (Property Shorthand):
// Si el nombre de la variable coincide con el nombre de la propiedad del objeto, puedes simplificar:
const lat = 43.5;
const lng = -5.6;
const coords = { lat, lng }; // Equivale a { lat: lat, lng: lng }


// =========================================================================
// 6. OPERADORES MODERNOS CLAVE PARA GIS (ES2020+)
// =========================================================================

// A. Optional Chaining (?.)
// Evita errores de tipo "Cannot read property of undefined" si una propiedad anidada no existe.
const respuestaAPI = {
  status: 200,
  data: {
    // metadata: { version: '1.2' } // Supongamos que no viene esta propiedad
  }
};

// Sin optional chaining: respuestaAPI.data.metadata.version -> ¡Rompe el programa!
// Con optional chaining:
const version = respuestaAPI.data?.metadata?.version; // Devuelve undefined de forma segura sin romper nada.

// B. Nullish Coalescing (??)
// Devuelve el valor de la derecha SOLAMENTE si el de la izquierda es null o undefined.
// Es mejor que usar '||' porque el operador '||' descarta valores válidos como el número 0 o un string vacío.
const visitas = respuestaAPI.data?.visitas ?? 0; // Si visitas es undefined o null, usa 0.


// =========================================================================
// 7. DESESTRUCTURACIÓN (DESTRUCTURING)
// =========================================================================
// Permite extraer propiedades de objetos o elementos de arrays de forma limpia.

const persona = { primerNombre: 'Fernando', puesto: 'Becario' };
const { primerNombre, puesto } = persona; // Crea dos variables independientes
console.log(primerNombre); // 'Fernando'

// Desestructuración en parámetros de funciones (muy usado en React):
function saludarUsuario({ primerNombre }) {
  console.log(`Hola, ${primerNombre}`);
}
saludarUsuario(persona);
