//4 - Escribir el código de una función a la que se pasa como parámetro un número entero y
//  devuelve como resultado una cadena de texto que indica si el número es par o impar.
// Mostrar por pantalla el resultado devuelto por la función.





function parOImpar() {
    let numero = parseInt(prompt("Ingrese un número entero: "));
    while (isNaN(numero)) {
        numero = parseInt(prompt("Por favor, ingrese un número entero válido: "));
    }if (numero % 2 === 0) {
        alert(`el numero ${numero} es PAR`)
    } else {
        alert(`el numero ${numero} es IMPAR`)
    }
    
}

parOImpar();


