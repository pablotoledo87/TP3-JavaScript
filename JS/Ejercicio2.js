let ciudades = [];
let exit = true;

do {
    let city = prompt('Ingrese una ciudad o presione "0" para salir del programa.').trim();
    if (city === null || city === "0") {
        exit = false;
    }else if (city != "") {
        ciudades.push(city)
        console.log(city);
        
    }
} while (exit);
console.log(ciudades);

document.write(`<p>El arreglo de ciudades tiene ${ciudades.length +1} elementos.</p>`)

document.write(`<ul>`)

if (ciudades.length>=1) {
    document.write(`<li>Elementos en la 1° posicion: ${ciudades[0]}</li>`)
}else{
    document.write('No existe elemento en la posicion 1')
}

if (ciudades.length>=3) {
    document.write(`<li>Elementos en la 3° posicion: ${ciudades[2]}</li>`)
}else{
    document.write('No existe elemento en la posicion 3')
}

if (ciudades.length>=1) {
    document.write(`<li>Elementos en la ultima posicion: ${ciudades[ciudades.length -1]}</li>`)
}else{
    document.write('No existe elemento en la ultima posición')
}

ciudades.push('Paris')
document.write(`<ul>`)
if (ciudades.length>=2) {
    document.write(`<li>Elementos en la segunda posicion: ${ciudades[1]}</li>`)
}else{
    document.write('No existe elemento en la posicion 2')
}
document.write(`</ul>`)

if (ciudades.length >=1) {
    ciudades[1] = 'Barcelona'
}

document.write(`<h1>Arreglo de Ciudades</h1>`)
document.write(`<ol>`)
ciudades.forEach((city) => {
    document.write(`<li>${city}</li>`)
})
document.write(`</ol>`)

