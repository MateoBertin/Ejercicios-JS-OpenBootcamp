const fechaHoy = new Date()
console.log(fechaHoy);

const nacimiento = new Date("27 Junio 2006")
console.log(nacimiento);

const mayorQueNacimiento = fechaHoy.getTime()>nacimiento.getTime()
console.log(mayorQueNacimiento);

const diaNaci = nacimiento.getDate()
console.log(diaNaci);

const mesNaci = nacimiento.getMonth()
console.log(mesNaci+1);

const añoNaci = nacimiento.getFullYear()
console.log(añoNaci);
