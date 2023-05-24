function enviar(){
    let dados = {
        "Nome" : document.querySelector("#nome").value,
        "Matrícula" : document.querySelector("#mat").value,
        "E-mail" : document.querySelector("#email").value,                  //coloca os valores em um dicionário ordenado
        "Area" : document.querySelector("#area").value,
        "Carga Horária" : document.querySelector("#carg").value
    }
    for (a in dados) {
        localStorage[a] = dados[a];
    }
}