const listaCompra = ["banana", "huevo", "pollo", "carne", "queso"]
// Añadir "Aceite de Girasol" a listaCompra
listaCompra.push("Aceite de Girasol")
console.log(listaCompra);
// Eliminar "Aceite de Girasol" de listaCompra
listaCompra.pop()
console.log(listaCompra);

listaPelis = [
	{ titulo: "Cars", director: "John Lasseter", fecha: 2006 },
	{ titulo: "Top Gun", director: "Tony Scott", fecha: 1986 },
	{ titulo: "El Encargado", director: "Mariano Cohn", fecha: 2022 }
]

const post2010 = listaPelis.filter(i => i.fecha >= 2010)
console.log(post2010);
console.log(listaPelis[0].director);


listaDirectores = listaPelis.map((valor) => valor.director)
console.log(listaDirectores);

listaTitulos = listaPelis.map(valor=>valor.titulo)
console.log(listaTitulos);

listaMix = listaDirectores.concat(listaTitulos)
console.log(listaMix);

listaMixProp = [...listaDirectores, ...listaTitulos]
console.log(listaMixProp);
