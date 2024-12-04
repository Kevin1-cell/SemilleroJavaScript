/*
3. Dado el objeto {password: "admin30905", rol: "admin", edad: 20} cambie el valor de la
clave password por "user_7833", el valor de la clave rol por "user", el valor de la clave edad
por 34. Imprima todo el objeto para verificar los cambios.
*/

const admin = { password: "admin30905", rol: "admin", edad: 20 };

admin.password = "user_7833";
admin.rol = "user";
admin.edad = 34;

console.log(admin);
