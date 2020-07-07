const botaoAdicionar = document.querySelector("#adicionar");
const listElement = document.querySelector("#experiencias");

const listaExperiencia = JSON.parse(localStorage.getItem("lista_experiencia")) || [];

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
        const expElement = document.createElement("li");
        expElement.className= "experiencia"
        const expCargoP = document.createElement("p")
        expCargoP.className = "titulo5"
        const expEmpresaP = document.createElement("p")
        expEmpresaP.className = "titulo2"
        const expDescricaoP = document.createElement("p")
        expDescricaoP.className = "titulo4"
        const expCargo = document.createTextNode(exp.cargo);
        const expEmpresa = document.createTextNode(exp.empresa);
        const expDescricao = document.createTextNode(exp.descricao);

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
    const pos = listaExperiencia.indexOf(exp);

    const linkElement = document.createElement("img");
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