/* 
* Para correr este fichero -> tendréis que estar dentro de la carpeta Ejercicio1
* Abrir la terminal de VsCode
* Escribir en consola 'node app.js' 
*/

/*
* Ejercicio Guiado
* -> Arrays y condicionales
*/ 

// Vamos a declarar 3 arrays y queremos saber la longitud de cada uno de ellos.
var avengers = ['Spiderman', 'AntMan', 'Hulk'];
var mutants = ['Wolverine', 'Ciclops', 'Storm'];
var defenders = ['Daredevil', 'IronFist', 'Luke Cage'];
// Para ello declaremos una function -> por parametro le entra una lista
var calcListLength = (list) => {
    // Declaramos el contador que irá sumando el valor de cada uno de los elementos de la lista
    var myLength = 0;
    // Recorremos los elementos de la lista
    list.forEach(element => {
        // Acumumlamos el valor de la lista
        myLength = myLength + element.length;
    });
    // Devolvemos 
    return myLength;
}
// Llamamos a nuestras funciones y asignamos el valor de retorno
var avengersLength = calcListLength(avengers);
var mutantsLength = calcListLength(mutants);
var defendersLength = calcListLength(defenders);

// Declaramos una funcion comparador para saber cual de los tres arrays es el mayor
var comparator = (a,b,c) => {
    if (a > b) {
        if (a == c)
          return 'Empate entre a y c';
        if (a > c)
          return 'a gana';
        else
          return 'c gana';
      } else {
        if (a == b)
          return 'Empate entre a y b';
        if (b > c)
          return 'b gana';
        else
          return 'c gana';
      }
}

// le pasamos las longitudes de nuestros arrays y nos devolverá el elemento mayor-> el c
console.log(comparator(avengersLength,mutantsLength, defendersLength));

//Ahora vamos a añadir la media de la longitud de los elementos de nuestra lista
var media = (a,b,c) => {
    return a+b+c / 3
}
// Le pasamos a nuestra media los valores
console.log(media(avengersLength,mutantsLength, defendersLength));

/* 
* Ejercicio 1
* → Devuelve el string de mayor longitud
*/

let longestString = (array) => {
    let myLong = "";
    array.forEach(element => {
        if(element.length > myLong) {
            myLong = element;
        }
    })
    return myLong;
}

console.log(longestString(avengers));
console.log(longestString(mutants));
console.log(longestString(defenders));

/* 
* Ejercicio 2
* → Devuelve si puedes conducir
*/

// PRIMERA ITERACIÓN: Declara variable age
let age = 24;

// SEGUNDA ITERACIÓN: Comprobar con un condicional si puedes conducir
// TERCERA ITERACIÓN: Mostrar si puede conducir o no
if(age >= 18) {
    console.log("Puedes conducir");
} else {
    console.log("No puedes conducir");
}


/* 
* Ejercicio 3
* → Quiero comer Pizza
*/

// PRIMERA ITERACIÓN: Declara variable con un listado de comidas
let foods = ["Salad","Pasta","Pizza","Kebab","Rice","Sandwich","Cheese"];
let choosenFood = "";
// SEGUNDA ITERACIÓN: Recorrer el listado de comidas
// TERCERA ITERACIÓN: Si hay pizza me sirves pizza 
for(let i=0;i<foods.length;i++) {
    if(foods[i].toLowerCase() === "pizza") {
        choosenFood = foods[i];
        break;
    }
}
// CUARTA ITERACIÓN: Declara variable estoy a dieta
let dieta = false;
// QUINTA ITERACIÓN: Cuando quiera pizza me sirves brocoli
if(choosenFood != "") {
    if(dieta) {
        console.log("Te sirvo Brocoli");
    } else {
        console.log("Te sirvo " + choosenFood);
    }
} else {
    console.log("¡No hay pizza!");
}

/* 
* Ejercicio 3
* → E-L-R-A-Y-O-E-S-E-L-M-E-J-O-R
*/

// PRIMERA ITERACIÓN: Declara variable con 'El rayo es el mejor'
let text = "El rayo es el mejor";
// SEGUNDA ITERACIÓN: Pasa ese texto a mayúsculas -> MDN es vuestro amigo
text = text.toUpperCase();
// TERCERA ITERACIÓN: Modifica el string -> to array MDN 
let textArray = text.split("");
// CUARTA ITERACIÓN: Añade un '-' después de cada elemento
let newText = [];

textArray.forEach(element => {
    if(element != ' ') {
        newText.push(element);
        newText.push('-');
    }
})
newText.pop();

// Devuelve en un string E-L-R-A-Y-O-E-S-E-L-M-E-J-O-R
console.log(newText.join(''));

/* 
* Ejercicio 4
* → La piramide - imprime por consola:
1
22
333
4444
55555
666666
7777777
88888888
999999999
*/

let piramide = "";

for(let i=1;i<10;i++) {
    for(let j=0;j<i;j++) {
        piramide += i + " ";
    }
    piramide += "\n";
}

console.log(piramide);

/* 
* Ejercicio 5
* → La piramide Invertida- imprime por consola:
999999999
88888888
7777777
666666
55555
4444
333
22
1
*/

let piramideInv = "";

for(let i=9;i>0;i--) {
    for(let j=0;j<i;j++) {
        piramideInv += i + " ";
    }
    piramideInv += "\n";
}

console.log(piramideInv);

/* 
* Ejercicio 6 - BONUS
* → Palíndromo: Esta función debe recibir un string y decir si es un palíndromo. 
* Un palíndromo es una frase que se lee igual al derecho que al revés.
*/

var palindrome = (word) => {
    // PRIMERA ITERACIÓN: declarar variable y pasarle el valor + toUpperCae + Eliminar espacios replace MDN
    var initialWord = word; // + toUpperCae + replace;
    initialWord = initialWord.toUpperCase().replace(/\s/g, '');
    // SEGUNDA ITERACIÓN: Hacer split + reverse + join MDN
    var reverseWord = initialWord.split(""); //  Split into an array, Reverse array, Join array elements into string
    reverseWord = reverseWord.reverse();
    reverseWord = reverseWord.join("");
    // TERCERA ITERACIÓN: Devolver true o false
    return initialWord === reverseWord ? true : false;  // check if word is palindrome
}
// CUARTA ITERACIÓN: Llamar a la función palindrome pasando una palabra o frase- 'Yo soy'
console.log(palindrome('Yo soy') ? 'es palíndromo' : 'NO es palíndromo');
console.log(palindrome('No es palindromo') ? 'es palíndromo' : 'NO es palíndromo');
console.log(palindrome('Alli por la tropa portado traido a ese paraje de maniobras una tipa como capitan usar boina me dejara pese a odiar toda tropa por tal ropilla') ? 'es palíndromo' : 'NO es palíndromo');



