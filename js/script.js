
document.querySelector("#servidor").innerHTML = "Servidor: " + localStorage.nome;
document.querySelector("#siape").innerHTML = "SIAPE: " + localStorage.matricula;
document.querySelector("#carga").innerHTML = "Restam: " + localStorage.cargahoraria +":00 horas";
localStorage.horas = localStorage.cargahoraria;

function verifica(){
    for(a in form){
        if (form[a] == "" || form.horafim < form.horainicio)
        {document.querySelector(".modal").style.display = "block"; return}      
}
}

function submit(){
    form = {
        "tarefa" : document.querySelector("#tarefa").value,
        "dia": document.querySelector("select").value,
        "horainicio" : document.querySelector("#inicio").value,
        "horafim" : document.querySelector("#fim").value
    }
    verifica()
    Time()
    dados()
}


function fecha_modal(){
    let modal = document.querySelector(".modal");
    modal.style.display = "none";

}

function Time(){
    let x = parseInt(form["horainicio"][0]) * 600 + parseInt(form["horainicio"][1]) * 60 + parseInt(form["horainicio"][3]) * 10 + parseInt(form["horainicio"][4]);
    let y = parseInt(form["horafim"][0]) * 600 + parseInt(form["horafim"][1]) * 60 + parseInt(form["horafim"][3]) * 10 + parseInt(form["horafim"][4]);
    let result1 = Math.floor((y-x) / 60) ; let result2 =  (y - x) % 60;

    console.log(result1 + ":" + result2)

    horas = localStorage.horas;
    horas = horas - result1;
    if(result2 == "0"){
        horas = horas - result2;
    }else{horas = horas - 0.40 - (( result2 / 100))}


    console.log(horas)

    if(horas >= 0 ){
        localStorage.horas = horas 
        document.querySelector("#carga").innerHTML = "Restam:" + localStorage.horas + " Horas";
        document.querySelector("#aparecer").innerHTML += "Tarefa " + form.tarefa + " : " + form.dia + " das " + form.horainicio + " até as " + form.horafim + "<hr>";
    }

    else{document.querySelector(".modal").style.display = "block";}

}


