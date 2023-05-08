const nombre='tomas';
const apellido='alonso';
const estudiante = nombre+" "+apellido;
const estudianteMayus = estudiante.toUpperCase();
const estudianteMinus = estudiante.toLowerCase();
const cantidadLetras = estudiante.length;
const primerLetraNombre = nombre[0];
const primerLetraApellido = apellido[0];
const estudianteSinEspacio = estudiante.replace(/\s/g, "");
const existeNombre = estudiante.toLowerCase().includes(nombre.toLowerCase());

console.log(existeNombre)