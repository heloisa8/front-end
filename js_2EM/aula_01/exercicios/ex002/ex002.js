const botao = document.querySelector("#botao");

const contadorElemento = document.querySelector("#contador");

let contador = 0;

function aumentarContador(){
    contador++;
    contadorElemento.textContent = contador;
}

botao.addEventListener("click", aumentarContador);


function diminuirContador(){
    contador--;
    contadorElemento.textContent = contador;
}
botao.addEventListener("click", diminuirContador);
