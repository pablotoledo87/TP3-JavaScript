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
