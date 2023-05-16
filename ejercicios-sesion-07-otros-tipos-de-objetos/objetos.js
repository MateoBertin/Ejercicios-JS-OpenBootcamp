const mateo = {
	nombre: "Mateo",
	apellido: "Bertin",
	edad: 16,
	altura: 183,
	eresDesarrollador: true
}

const edad = mateo.edad
console.log(edad);

const tomasito = { nombre: "Tomasito", apellido: "Lopez", edad: 17, altura: 185, eresDesarrollador: false }
const juan = { nombre: "Juan", apellido: "Gonzales", edad: 28, altura: 175, eresDesarrollador: false }
const personas = [mateo, tomasito, juan]
console.log(personas);

const personasOrdenadas = personas.sort((a, b) => b.edad - a.edad)
console.log(personasOrdenadas);