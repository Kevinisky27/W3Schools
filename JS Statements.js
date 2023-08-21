/* 
  Para este ejemplo se utilizó Node.js ya que para fines prácticos es mejor
  por lo cual se tiene que utilizar el siguiente comando en la Terminal y Línea de comandos

  node "JS Statements.js"
*/

// En este tutorial explican como son las direfentes variables y constantes 
let x, y, z // Declaración de 3 variables
x = 12  // Asignación de X
y = 23 // Asignación de Y 
z = x + y / 2 

console.log("La suma de x, y =", z)

/* En JavaScript podemos escribir codigo de diferente manera que su resultado es el mismo */
let name = "Kevin Alexander" // Aquí esta más facil de entender con espacios
let name2="Kevin Alexander" // Esta manera no es muy habitual, pero si es posible que nos lleguemos a adaptar cuando escribimos codigo de esta manera

/* También podemos hacer uso de los operadores como por ejemplo */
let sum = x + y 
let rest = x - y 
let mult = x * y 
let div = x / y 

console.log("Los valores son x ", x, ", y ", y)
console.log("La suma es: ", sum)
console.log("La resta es: ", rest)
console.log("La multiplicación es: ", mult)
console.log("La división es: ", div)

/* JavaScript Keywords */
var uno = 1 // de esta manera de declara una variable (Manera antigua)
let dos = 2 // Esta es la manera correcta y moderna de declarar una variable
const CONSTANTE = 3.14 // Esta es una constante y por convención es una buena practica hacerlo solo con mayusculas

/* Así mismo tenemos las siguientes condiciones como lo son */
/* 
  if
  switch
  for 
  funtion 
  return
  try
*/