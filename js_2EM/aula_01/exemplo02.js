var visor = document.querySelector("#visor");

document.addEventListener("keydown", (event) =>{
    if(event.key === "a"|| event.key ==="A"){
        visor.textContent = "tecla a pressionada";
    }
    else if(event.key == "d" || event.key == "D"){
    visor.textContent = "tecla d pressionada";
    }
    
})