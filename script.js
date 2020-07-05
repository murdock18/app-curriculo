var botaoAdicionar = document.querySelector("#exp");

botaoAdicionar.addEventListener("click",()=>{
    event.prevenliefault();

    const nome = ["Item1", "Item2", "Item3"];

    const dados = document.querySelector("#dadosPesssoas");

    const ul = document.createElement("ul");

    const li1= document.createElement("li");
    const li2= document.createElement("li");

    li1.innerText = "Meu Primeiro Item";
    li2.innerText = "Meu Segundo Item";

    ul.append(li1);
    ul.append(li2);

    dados.append(ul);

});