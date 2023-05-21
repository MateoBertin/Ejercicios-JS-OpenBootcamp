// Funcion devolvedora de true
function devolverTrue() {
	return true
}

// Función asincrona
// Función asíncrona que utiliza un setTimeout y pasa por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
async function imprimirMensajeDespuesDe5Segundos() {
	await new Promise(resolve => {
		setTimeout(() => {
			console.log("Hola soy una promesa");
			resolve();
		}, 5000);
	});
}

imprimirMensajeDespuesDe5Segundos();

// Función generadora de índices pares automáticos
// Función generadora de índices pares automáticos que genera índices pares en un rango de índices
function* indicesPares() {
	let i = 0;
	while (i < 10) {
		yield i;
		i+=2;
	}
}

const par = indicesPares();
console.log(par.next().value);
console.log(par.next().value);
console.log(par.next().value);
console.log(par.next().value);
console.log(par.next().value);
console.log(par.next());
