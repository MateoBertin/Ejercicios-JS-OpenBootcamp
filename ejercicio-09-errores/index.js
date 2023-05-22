const logger = require('./logger');

const miFunc = val => {
	if (typeof val === "number") {
		return val * 3;
	}
	throw new Error("El valor tiene que ser del tipo 'number'")
}

const num = "a"

try {
	const triple = miFunc(num);
	console.info(triple);
	console.info("Se ejecutó de forma correcta");
} catch(e) {
	console.error(e);
} finally {
	console.info("Yo me ejecuto siempre");
}