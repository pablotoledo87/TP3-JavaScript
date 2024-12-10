function tablaMultiplicar (numero){
    if (isNaN(numero)) {
        alert('Por favor ingresa un numero valido')

        return;
    } 
    document.write(`<ta border = "1" cellspacing = "0"> 
        <thead>
        <tr>
        <th colspan="2">
        Tabla de multiplicar del numero ${numero}
        </th>
        </tr>
        </thead>
        <tbody>`)
        for (let i = 0; i <= 10; i++) {
            document.write(``)
            
        }
}

let numero = parseInt(prompt('Ingrese un numero para mostrar una tabla de multiplicar'))

tablaMultiplicar(numer)