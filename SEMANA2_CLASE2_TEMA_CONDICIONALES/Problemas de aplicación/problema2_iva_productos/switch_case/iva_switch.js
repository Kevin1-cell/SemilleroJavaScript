/*
2. En un supermercado se tiene los siguientes productos: lentejas, crema, arroz y vino. Las lentejas y el arroz no
pagan IVA, el vino y la crema si. Cree un programa que reciba el nombre de alguno de los productos
mencionados y muestre si el producto paga IVA o no.
*/

//Entrada de datos
let nombre = prompt("Ingrese el nombre de alguno de los productos \n1)lentejas \n2)crema \n3)arroz \n4)vino");

switch(nombre){
    case "lentejas":
        console.log("el producto 'Lentejas' no paga IVA, YEII");
        break;

    case "arroz":
        console.log("El producto 'Arroz' no paga IVA, YEII");
        break;

    case "crema":
        console.log("El producto 'Crema' paga IVA, AHH ;(");
        break;
    case "vino":
        console.log("El producto 'Vino' paga IVA, AHH ;(");
        break;
    default:
        console.log("Este producto no corresponde a los disponibles");

}