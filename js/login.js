function modal(option) {
    if (!(option == 'open' || option == 'close')) {
        return;
    }

    switch (option) {
        case 'open':
            document.querySelector('#modal-container').style.display = 'initial';            
            break;
        case 'close':
            document.querySelector('#modal-container').style.display = 'none';            
            break;
    }
}

function enviar(){
    
    localStorage.clear()

    let dados = {
        "nome" : document.querySelector("#nome").value,
        "matricula" : document.querySelector("#mat").value,
        "email" : document.querySelector("#email").value,
        "area" : document.querySelector("#area").value,
        "cargahoraria" : document.querySelector("#carg").value
    };

    for (a in dados) {
        if (dados[a] == "") {
            modal('open');
            return;
        }


        localStorage[a] = dados[a];
    }

    window.location.href = '/index.html';
}