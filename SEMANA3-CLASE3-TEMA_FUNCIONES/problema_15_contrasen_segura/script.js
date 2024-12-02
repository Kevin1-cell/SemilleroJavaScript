/*
15) Escriba una función generarContraseña la cual reciba n como parámetro y esta cree
una contraseña de n caracteres aleatorios. (Los caracteres pueden ser números,
letras o signos).
*/

function generarContraseña (n){
    let caracteres = "ABCDETYLDKLJaskdnkweifn!$%#/&/()=";
    let contrasena = "";

    for(let i = 0; i < n; i++){
        const valoresAleatorios = Math.floor(Math.random()*caracteres.length);
        contrasena += caracteres[valoresAleatorios];
    }

    console.log(contrasena);
    return contrasena;
}

let n = parseInt(prompt("Ingrese el numero de caracteres que quiere que tenga la contraseña"));
generarContraseña(n);