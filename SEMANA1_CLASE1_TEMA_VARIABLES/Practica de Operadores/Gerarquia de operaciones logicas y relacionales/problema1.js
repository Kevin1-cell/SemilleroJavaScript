/*
Determine el valor de verdad de las siguientes expresiones
Tenga en cuenta que los operadores lógicos poseen la siguiente jerarquía:

Relizaré todos los ejercicios en este mismo espacio.
*/


let Verdadero = true;
let Falso = false;

/*1) (Verdadero && Falso) || (Falso || Verdadero);
      (Falso) || (Verdadero);
      =Verdadero 
      Ya que una de las dos expresiones es verdadera
*/
let resultado1 = (Verdadero && Falso) || (Falso || Verdadero);
console.log("El resultado del ejercicio 1 es: ",resultado1);


/*2) (Verdadero && Falso) || (Verdadero && (Falso || Verdadero))
     (Falso) || (Verdadero && Verdadero)
     (Falso) || (Verdadero)
     =Verdadero 
      Ya que una de las dos expresiones es verdadera
*/
let resultado2 = (Verdadero && Falso) || (Verdadero && (Falso || Verdadero));
console.log("El resultado del ejercicio 2 es: ",resultado2);



/*3) (Falso == !Verdadero) && ((Falso && Verdadero) && Verdadero);
     (Verdadero) && ((Falso) && (Verdadero);
     (Verdadero) && (Falso)
     =Falso
     Ya que una de las dos expresiones es falsa y ambas deben ser verdaderas.
*/
let resultado3 = (Falso == !Verdadero) && ((Falso && Verdadero) && Verdadero);
console.log("El resultado del ejercicio 3 es: ",resultado3);


/*4) (Falso == !Verdadero) || (Falso && Falso) || (Falso || Verdadero)
     (Verdadero) || (Falso) || (Verdadero)
     (Verdadero) || (Verdadero)
     =Verdadero 
      Ya que una de las dos expresiones es verdadera
*/
let resultado4 = (Falso == !Verdadero) || (Falso && Falso) || (Falso || Verdadero);
console.log("El resultado del ejercicio 4 es: ",resultado4);


/*5) (Falso == Verdadero) && (Verdadero && Verdadero) && (Falso && Verdadero)
     (Verdadero) && (Verdadero) && (Falso)
     (Verdadero) && (Falso)
     =Falso
     Ya que una de las dos expresiones es falsa y ambas deben ser verdaderas.
*/
let resultado5 = (Falso == Verdadero) && (Verdadero && Verdadero) && (Falso && Verdadero);
console.log("El resultado del ejercicio 5 es: ",resultado5);


/*6) 4 > 6 && 10 == 10 && 3 % 3 <= 0
     4 > 6 && 10 == 10 && 0 <= 0;
     False && Verdadero && Verdadero
     =Falso
     Ya que una de las dos expresiones es falsa y ambas deben ser verdaderas.
*/
let resultado6 = 4>6 && 10==10 && 3%3<=0;
console.log("El resultado del ejercicio 6 es: ",resultado6);


/*7) 7 != 8 && 5 * (8 - 9) > -3 && 4 == 5 || 6 != 5;
     7 != 8 && -5 > -3 && 4 == 5 || 6 != 5;
     (Verdadero) && (Falso) && (Falso) || (true)
     (Falso) || (Verdadero)
     =Verdadero
     Ya que una de las dos expresiones es verdaderoa y ambas deben ser verdaderas.
*/
let resultado7 = 7 != 8 && 5 * (8 - 9) > -3 && 4 == 5 || 6 != 5;
console.log("El resultado del ejercicio 7 es: ",resultado7);


/*8) (5%5 > 1 || ! (5 == 4)) || 4 != 1 || 4 < -4
     0 > 1     ||     !(5 == 4)   ||   4 != 1   ||  4 < - 4
    (Falso)    ||    (Verdadero)   || (Verdadero)   ||  (Falso)
    =Verdadero
     Ya que una de las dos expresiones es verdaderoa y ambas deben ser verdaderas.
*/
let resultado8 = (5%5 > 1 || ! (5 == 4)) || 4 != 1 || 4 < -4;
console.log("El resultado del ejercicio 8 es: ",resultado8);


/*9) !(6*-1 == 6) && (2<3*-1) || (3==3) || (9<50/10) || !(18==2*9)
     !(-6 == 6)  && (2 < -3)  || (3 == 3)  || (9 < 5) || !(18 == 18)
     (Verdadero)  && (Falso)  || (Verdadero)  || (Verdadero)  || (Falso)
     (Falso) || (Verdadero)  || (Verdadero)  || (Falso)
     =Verdadero
     Ya que una de las dos expresiones es verdaderoa y ambas deben ser verdaderas.
*/
let resultado9 = !(6*-1 == 6) && (2<3*-1) || (3==3) || (9<50/10) || !(18==2*9);
console.log("El resultado del ejercicio 9 es: ",resultado9);


/*10) (Falso != 2>1) && (Verdadero == 4 < 2)
      (Falso) != (Verdadero) && (Verdadero == (Falso))
      (Verdadero) && (Falso)
      =Falso
     Ya que una de las dos expresiones es falsa y ambas deben ser verdaderas.
*/
let resultado10 = (Falso != 2>1) && (Verdadero == 4 < 2);
console.log("El resultado del ejercicio 10 es: ",resultado10);