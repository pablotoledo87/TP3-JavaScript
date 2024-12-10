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

document.write(`<p>El arreglo de ciudades tiene ${ciudades.length} elementos.</p>`)

document.write(`<ul></ul>`)

if (ciudades.length>=1) {
    document.write(`<li>Elementos en la 1° posicion: ${ciudades[0]}</li>`)
}else{
    document.write('No existe elemento en la posicion 1')
}

if (ciudades.length>=3) {
    document.write(`<li>Elementos en la 3° posicion: ${ciudades[2]}</li>`)
}

if (ciudades.length>=1) {
    document.write(`<li>Elementos en la ultima posicion: ${ciudades[ciudades.length -1]}</li>`)
}

ciudades.push('Paris')
if (ciudades.length>=2) {
    document.write(`<li>Elementos en la segunda posicion: ${ciudades[1]}</li>`)
}
if (ciudades.length >=1) {
    ciudades[1] = 'Barcelona'
} else {
    
}

document.write(`</ul>`)

document.write(`<h1>Arreglo de Ciudades</h1>`)
document.write(`<ol>`)
ciudades.forEach((city) => {
    document.write(`<li>${city}</li>`)
})
document.write(`</ol>`)

