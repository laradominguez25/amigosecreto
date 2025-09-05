// El principal objetivo de este desafío
//  es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la
//  lógica para resolver el problema.


function AsignarTextoElemento (elemento, texto) {
 let elementoHTML = document.querySelector(elemento);
 elementoHTML.innerHTML = texto;
return}

AsignarTextoElemento ('h1', 'Amigo Secreto');
AsignarTextoElemento ('h2', "Digite el nombre de sus amigos");

let amigos = [];

function agregarAmigo() {
    let NombresDeAmigos = document.getElementById('amigo').value;
    console.log(NombresDeAmigos);
    if (NombresDeAmigos === '') {
        alert('Por favor, inserte un nombre.');
    return};

    amigos.push(NombresDeAmigos);
    
    ActualizarListaAmigos();

    for(let i=0; i<amigos.length;i++){
        console.log(amigos[i]);
   }
    LimpiarCaja();
return}

function LimpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function ActualizarListaAmigos(){
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 

    amigos.forEach(function (amigo) {
        const li = document.createElement('li');
        li.textContent = amigo;
        li.classList.add('list-item');
        listaAmigos.appendChild(li);
    })
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indice];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> El amigo secreto sorteado es: ${amigoSorteado}</li>`;
}
