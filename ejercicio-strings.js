// Ejercicio strings
let nombre = "Mateo"
let apellido = "Bertin"
let estudiante = nombre + " " + apellido
let estudianteMayus = estudiante.toUpperCase()
let estudianteMinus = estudiante.toLowerCase()
let estudianteLength = estudiante.length
let estudianteFirst = nombre[0]
console.log(estudianteFirst);
let estudianteLast = apellido[apellido.length-1]
console.log(estudianteLast);
let estudianteSinEspacios = estudiante.replace(/ /g,"")
console.log(estudianteSinEspacios);
let nombreContenido = estudiante.includes(nombre)
console.log(nombreContenido);