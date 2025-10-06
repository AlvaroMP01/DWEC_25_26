/*
CuentaBancaria:
Se pretende ejemplificar la gestion bancaria de una cuenta corriente, para ello:
    1º Crear una cuenta bancaria, que genere de manera random un isbn de 20 digitos.
    2º Ingresar una cantidad
    3º Realizar deposito y retirar efectivo donde se pasara como param una cant positiva 
    y un numero de cuenta y automaticamente me permitira sacar 
    o retirar del saldo disponible dicha cantidad,
    no pudiendo generar numeros rojos.
    4º Crear func que devuelva el saldo disponible.
*/ 
//! Declaracion de variables
let saldo=0.0;
let CuentaBancaria="";


//! Declaracion de funciones
/*
Funcion para crear una cuenta bancaria con 20 digitos random
*/
function crearCuenta(cantidadInicial=0){
    saldo=cantidadInicial;
    for(let i=0; i<20;i++){
    CuentaBancaria += Math.floor(Math.random()*10);
    }
    return CuentaBancaria;
}

/* 
arrow function para ingresar dinero() => { }
*/
const ingresarDinero =(cantidadIngresar=0) =>{

    if(cantidadIngresar<0 || isNaN(cantidadIngresar)) /* typeof cantidadIngresar!=="number" */{
        console.error("No se pueden hacer ingrresos negativos");
        return 0;
    }

    saldo+=Number(cantidadIngresar);

}

const sacarDinero = (cantidadRetirar=0) =>{

    if(isNaN(cantidadRetirar) || cantidadRetirar<0){
        console.error("Error, para retirar dinero debes indicar una cantidad positiva")
        return;
    }
    if(cantidadRetirar>saldo){
        console.error("No tienes saldo suficiente para retirar")
        return;
    }

    saldo-=Number(cantidadRetirar);

}

const consultarSaldo =() =>{
    console.log(`Tu saldo actual es de: ${saldo}€`);
}

//! Inicio de la aplicacion
//Crerar cuenta bancaria
console.log(crearCuenta(1000));

//Ver saldo actual

consultarSaldo();

//Sacar dinero de la cuenta
sacarDinero(500);
sacarDinero(2000);
sacarDinero(-200);
sacarDinero("hola");

consultarSaldo();

//Ingresar dinero a la cuenta

ingresarDinero(500);
ingresarDinero(-200);
ingresarDinero("hola");

//Ver saldo actual
consultarSaldo();