/*
Ejercicio2: 
    1ª Func: Crear una func llamada validar numero 
    que le pase como parametro un valor 
    y que verifique si es un numero o no.
*/
console.log("Primera Funcion:");

const num1=5;

function validarNumero(num1){
    return typeof(num1) === "number" && !isNaN(num1);
}

console.log("Validar numero -->");
console.log("Validar valor:", validarNumero(num1));

/*
2ª Func: Crear una func llamada Mayusculas que le pase como parametro 
un valor que debo de verificar que sea un texto
y automaticamente me ponga las letra en mayus.
*/
console.log("Segunda Funcion -->");

const texto1="hola";

function mayusculas(texto1){
    if(typeof(texto1)!== "string"){
        return false;
    }
    console.log(texto1.toUpperCase());
}


/* 
3ª Func: Crear un func llamada Comparar que le pase como parametros 2 valores 
y me diga si son numero y cual es mayor. 
Usar alguna de las dos funciones anteriores.
*/
const num2=10;
const num3=7;

console.log("Tercera Funcion -->"); 
function compararNumeros(){
    if (!validarNumero(num2) || !validarNumero(num3)){
        console.log("Uno de esos no es un numero.-->")
        return false;
    }
    if(num2>num3){
        console.log("El numero mayor es:", num2);
    } else{
        console.log("El numero mayor es:", num3);
    }
}