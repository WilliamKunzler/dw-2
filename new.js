function reserva(){
    var nome = document.querySelector("#nom").value
    var mat = document.querySelector("#mat").value
    var email = document.querySelector("#email").value
    var area = document.querySelector("#area").value
    var carg = document.querySelector("#carg").value

    lista = {
        "Nome" : nome ,
        "Matrícula" : mat,
        "E-mail" : email ,
        "Area" : area,
        "Carga Horária" : carg
    }

    var some = document.querySelector("#one")
    var aparece = document.querySelector("#dois")
    some.style.display = "none";
    aparece.style.display = "grid";

    console.log(lista)
}

