/*
a. La cadena está formada por una única base: Adenina (A), Timina (T), Citosina (C) o Guanina (G),
según se indique al momento de ejecutar el programa.
*/

let base = prompt(
  "Ingrese la letra de la base que desea elegir \nAdenina (A) \nTimina (T) \nCitosina (C)  \nGuanina (G)"
);

while (base !== "A" && base !== "T" && base !== "C" && base !== "G") {
  base = prompt(
    "Por favor, ingrese una  base valida \nAdenina (A) \nTimina (T) \nCitosina (C)  \nGuanina (G)"
  );
}

let pregunta = prompt(
  "Marque S si desea indicar la longitud de la cadena, de lo contrario marque N"
);
question = pregunta.toLowerCase();
while (question !== "s" && question !== "n") {
  pregunta = prompt("Ingrese una opción valida").toLowerCase();
  question = pregunta.toLowerCase();
}

if (question === "s") {
  let longitud = parseInt(prompt("Ingrese la cantidad de la cadena"));
  let cadenaADN = "";
  switch (base) {
    case "A":
      let baseA = "A";
      cadenaADN = "";
      for (let i = 0; i < longitud; i++) {
        cadenaADN += baseA;
      }
      console.log(cadenaADN);
      break;

    case "T":
      let baseT = "T";
      cadenaADN = "";
      for (let i = 0; i < longitud; i++) {
        cadenaADN += baseT;
      }
      console.log(cadenaADN);
      break;

    case "G":
      let baseG = "G";
      cadenaADN = "";
      for (let i = 0; i < longitud; i++) {
        cadenaADN += baseG;
      }
      console.log(cadenaADN);
      break;

    case "C":
      let baseC = "C";
      cadenaADN = "";
      for (let i = 0; i < longitud; i++) {
        cadenaADN += baseC;
      }
      console.log(cadenaADN);
      break;
  }
} else if (question === "n") {
  switch (base) {
    case "A":
      let baseA = "A";
      for (let i = 0; i < 10; i++) {
        cadenaADN += baseA;
      }
      console.log(cadenaADN);
      break;

    case "T":
      let baseT = "T";
      cadenaADN = "";
      for (let i = 0; i < 10; i++) {
        cadenaADN += baseT;
      }
      console.log(cadenaADN);
      break;

    case "G":
      let baseG = "G";
      cadenaADN = "";
      for (let i = 0; i < 10; i++) {
        cadenaADN += baseG;
      }
      console.log(cadenaADN);
      break;

    case "C":
      let baseC = "C";
      cadenaADN = "";
      for (let i = 0; i < 10; i++) {
        cadenaADN += baseC;
      }
      console.log(cadenaADN);
      break;
  }
}
