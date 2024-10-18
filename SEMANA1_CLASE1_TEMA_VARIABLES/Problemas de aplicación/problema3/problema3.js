/*
3. En un almacén de electrodomésticos se venden éstos a crédito y de contado.
Si el cliente
compra a crédito, el valor del electrodoméstico aumenta en un 5% por cada mes que dure el
crédito. 
Cree un programa para un almacén donde el administrador ingrese el precio de un
electrodoméstico y el plazo en meses para pagarlo a crédito y muestre el valor fijo de las cuotas
mensuales que deberá pagar por el electrodoméstico.
*/

let precio = parseFloat(prompt("Ingrese el precio del electrodomestico"));
while(isNaN(precio)){
    precio = parseFloat(prompt("Por favor, ingrese un precio del electrodomestico valido"));
}

let meses = parseInt(prompt("Ingrese el plazo en meses para pagarlo"));
while(isNaN(meses)){
    meses = parseInt(prompt("Ingrese un plazo de meses para pagarlo valido"));
}

let impuestoMensual = precio * 0.05;
let cuotasMensuales = precio / meses + (meses + impuestoMensual);
let valorTotal = precio + (impuestoMensual * meses) 
alert("El valor fijo de las cuotas mensuales es de: "+cuotasMensuales.toFixed(3 )+"\nEl total del credito sería de: "+valorTotal+"\nImpuesto por mes cobrado: "+impuestoMensual)




