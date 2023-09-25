var barraProgresso = document.querySelector(".progress");
barraProgresso.style.display = "none";

function Acessar(){
    var nome = document.querySelector("#inputNome").value;
    var idade = parseInt(document.querySelector("#inputIdade").value);
    var cidade = document.querySelector("#inputCidade").value;

    var validarCampos = validar(nome, idade, cidade);
    if(validarCampos == true){
        return;
    }
}

function validar(nome, idade, cidade){
if(nome == "" || idade == "" || cidade == ""){
    document.querySelector("#resultado").innerHTML = `<div class="alert alert-success fade show" role="alert">
    <span> olá, bem vindo ao sesi</span>
    <button type="button" class="btn-close" data-bs-dismiss="alert" ></button>`;
    return true;
    
}


else if(idade < 0 || idade >= 100){
    document.querySelector("#resultado").innerHTML = `<div class="alert alert-success fade show" role="alert">
    <span> idade invalida!! </span>
    <button type="button" class="btn-close" data-bs-dismiss="alert" ></button>`;
    return true;}
    else{
        return false;
    }

}

function barra(nome, idade, cidade){
 var progresso = 0;
 var barra = document.querySelector(".progress-bar");
 var intervalo = setInterval(function(){
    if(progresso > 100){
        clearInterval(intervalo);
        barraProgresso.style.display = "none";

        document.querySelector("#resultado").innerHTML = `<div class="alert alert-success fade show" role="alert">
        <span> informações: ${nome}, ${idade}, ${cidade}</span>
        <button type="button" class="btn-close" data-bs-dismiss="alert" ></button>`;
    }
    else{
        progresso++;
        barra.style.width = progresso + "$";
    }
 })
}