/*
Escriba una función la cual reciba 5 notas de un estudiante y genere un mensaje
informando si el estudiante aprobó o no la materia, para que la materia se de como
aprobada el promedio del estudiante debe ser mayor o igual a 3,0. 
*/

function calcularPromedio(mensaje){
    let suma = 0;

    for(let i = 0; i < 5; i++){
         nota = parseFloat(prompt(mensaje+(i+1)));
         suma += nota;
         
    }
    
    let promedio = suma / 5;
    console.log(promedio);
}

calcularPromedio("Ingrese la nota");



