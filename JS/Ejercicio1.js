let meses = ["Enero ","Febrero","Marzo" , "Abril", "mayo","Junio","Julio","Agosto","Setiembre","Octubre","Noviembre","Diciembre"]

document.write(`<h1>Lista de meses</h1>`)
for (let i = 0; i < meses.length; i++) {
    document.write(`<li>${meses[i]}</li>`)
    
}