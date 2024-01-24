
let numeroSecreto = 0;
let intentos = 0;
let numeroSorteados = [];
let numeroMaximo = 3;


function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function VerificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("Valor").value);
  
    if (numeroDeUsuario === numeroSecreto){

        asignarTextoElemento("p",`Acertaste el numero en ${intentos} ${(intentos === 1) ? "vez" : "veces"} `);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } 
       
  else {
    if (numeroSecreto > numeroDeUsuario){
        asignarTextoElemento("p","El numero secreto es mayor");
    }
   else {
    asignarTextoElemento("p","El numero serceto es menor");
  }
 intentos++;
 limpiar();
    return;
    
  }
}

function limpiar(){
    document.querySelector("#Valor").value = "";
}

function GenerarNumero (){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log (numeroSecreto);
    console.log (numeroSorteados);
    if (numeroSorteados.length == numeroMaximo){
        asignarTextoElemento("p","Ya se sortearon todos los numeros");
    }else{

        if(numeroSorteados.includes(numeroGenerado)){
            return GenerarNumero();
        }else {
            numeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
}
}

function condicionesiniciales(){
    asignarTextoElemento("h1","Juego del Numero secreto");
    asignarTextoElemento("p",`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = GenerarNumero();
    intentos=1;
}

function reiniciarjuego(){
    limpiar();
    condicionesiniciales();
    document.querySelector("#reiniciar").setAttribute("disabled","true");

    

}

condicionesiniciales();
