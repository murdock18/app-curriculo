var botaoAdicionar = document.querySelector("#adicionar");
var listElement = document.querySelector("#experiencias");

var listaExperiencia = JSON.parse(localStorage.getItem("lista_experiencia")) || [];

botaoAdicionar.addEventListener("click", () => {
    event.preventDefault();

    const inputCargo = document.querySelector("#cargo")
    const inputEmpresa = document.querySelector("#empresa")
    const inputDescricao = document.querySelector("#descricao")

    listaExperiencia.push({
        cargo: inputCargo.value,
        empresa: inputEmpresa.value,
        descricao: inputDescricao.value
    });

    console.log(listaExperiencia);
    inputCargo.value = ""
    inputEmpresa.value = ""
    inputDescricao.value = ""

    saveToStorage();
    renderExp();
});

function renderExp() {
    listElement.innerHTML = "";

    for (exp of listaExperiencia) {
        var expElement = document.createElement("li");
        expElement.className= "experiencia"
        var expCargoP = document.createElement("p")
        expCargoP.className = "titulo5"
        var expEmpresaP = document.createElement("p")
        expEmpresaP.className = "titulo2"
        var expDescricaoP = document.createElement("p")
        expDescricaoP.className = "titulo4"
        var expCargo = document.createTextNode(exp.cargo);
        var expEmpresa = document.createTextNode(exp.empresa);
        var expDescricao = document.createTextNode(exp.descricao);

        expCargoP.appendChild(expCargo);
        expEmpresaP.appendChild(expEmpresa);
        expDescricaoP.appendChild(expDescricao);

        expElement.appendChild(document.createElement("span"))
        expElement.appendChild(expCargoP);
        expElement.appendChild(expEmpresaP);
        expElement.appendChild(expDescricaoP);
        expElement.appendChild(elementDeleteButton(exp));

        listElement.appendChild(expElement);
    }
}

function elementDeleteButton(exp) {
    var pos = listaExperiencia.indexOf(exp);

    var linkElement = document.createElement("img");
    linkElement.setAttribute("src", "https://image.flaticon.com/icons/svg/833/833520.svg#");
    linkElement.setAttribute("onclick", "deleteExp(" + pos + ")");
    linkElement.className="deleteButton";
    
    return linkElement;
}

function deleteExp(pos) {
    listaExperiencia.splice(pos, 1);
    renderExp();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem("lista_experiencia",JSON.stringify(listaExperiencia));
}

renderExp();