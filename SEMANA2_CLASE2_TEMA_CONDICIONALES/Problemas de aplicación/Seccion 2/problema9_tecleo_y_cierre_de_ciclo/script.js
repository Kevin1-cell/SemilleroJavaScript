/*
9. Cree un programa que pregunte al usuario si desea salir, si o no “S/N”, si el usuario teclea la letra
S el programa se detendrá, de lo contrario continuará ejecutándose.
*/

let pregunta;

while(true){
  pregunta = prompt("Si desea terminar el programa ingrese 'S', de lo contrario ingrese 'N'");
  
    if(pregunta === "S"){
      console.log("Programa Terminado con éxito");
      break;
    }else if(pregunta === "N"){
      console.log("Programa Ejecutandose")
    }else{
     alert("Ingrese un caracter valido (S/N)");
    }
}