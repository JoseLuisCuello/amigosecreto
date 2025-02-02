// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
  //  document.getElementById("boton").addEventListener("click", cargarAmigo);
    let amigo = document.getElementById('amigo').value;
    if (amigo.trim() !="") {
    console.log(amigo);
    amigos.push(amigo);
    console.log(amigos);
    document.querySelector('#amigo').value = '';
    let nombresHTML = document.querySelector('#listaAmigos');
    nombresHTML.innerHTML = amigos;
} else {alert("Ingresa un nombre valido!")} ;
} 

function sortearAmigo() {
    let numeroGenerado =  Math.floor(Math.random()*amigos.length);
    console.log(amigos[numeroGenerado]);
    let elementoHTML = document.querySelector('#resultado');
    elementoHTML.innerHTML = amigos[numeroGenerado];
}