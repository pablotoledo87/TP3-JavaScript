let sumas = [];

for (let i = 0; i < 50; i++) {
    let dado1 = Math.floor(Math.random() *6) + 1;
    let dado2 = Math.floor(Math.random() *6) + 1;

    sumas.push(dado1+dado2)
    
}
console.log(sumas);
//mostrar en consola cada tirada con su correspondiente suma
sumas.forEach((suma, index)=>{
    console.log(`Tirada N° ${index + 1 } // Suma:`);
    
})

let SumasUnicas = [];
let ocurrencias = [];

for (let i = 0; i < sumas.length; i++) {
    let suma = sumas[i];

    let index = SumasUnicas.indexOf(suma)

    if (index === -1) {
        SumasUnicas.push(suma);
        ocurrencias.push(1);
    } else {
        ocurrencias[index]++
    }
    
}
document.write(`<br>Sumas Unicas: ${SumasUnicas}`)
document.write(`<br>Sumas por ocurrencias: ${ocurrencias}`)