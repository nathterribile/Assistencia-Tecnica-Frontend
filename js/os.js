async function getAll() {
    let response = await fetch("https://myassist-backend-cahyf9d8chcwcxd0.brazilsouth-01.azurewebsites.net/os")

    if (response.ok) {
        let body = await response.json()
        const table = document.getElementById('osCadastradas');
        const tBody = table.getElementsByTagName('tbody')[0];

        tBody.innerHTML = ""

        body.forEach(item => {
            const newRow = tBody.insertRow();

            const newColumnId = newRow.insertCell();
            const newTextId = document.createTextNode(item.id);
            newColumnId.appendChild(newTextId);

            const newColumnProprietario = newRow.insertCell();
            const newTextProprietario = document.createTextNode(item.proprietario);
            newColumnProprietario.appendChild(newTextProprietario);

            const newColumnEquipamento = newRow.insertCell();
            const newTextEquipamento = document.createTextNode(item.tipoEquipamento);
            newColumnEquipamento.appendChild(newTextEquipamento);

            const newColumnEntrada = newRow.insertCell();
            const newTextEntrada = document.createTextNode(item.entradaLab);
            newColumnEntrada.appendChild(newTextEntrada);

            const newColumnDefeito = newRow.insertCell();
            const newTextDefeito = document.createTextNode(item.defeito);
            newColumnDefeito.appendChild(newTextDefeito);

            const newColumnEntrega = newRow.insertCell();
            const newTextEntrega = document.createTextNode(item.previsaoEntrega);
            newColumnEntrega.appendChild(newTextEntrega);

            const newColumnStatus = newRow.insertCell();
            const newTextStatus = document.createTextNode(item.statusConcerto);
            newColumnStatus.appendChild(newTextStatus);

            const newColumnObservacoes = newRow.insertCell();
            const newTextObservacoes = document.createTextNode(item.observacoes);
            newColumnObservacoes.appendChild(newTextObservacoes);

            const newColumnSistema = newRow.insertCell();
            var newTextSistema = document.createElement("a");
            newTextSistema.appendChild(document.createTextNode("Alterar"));
            newTextSistema.href='#';
            newTextSistema.onclick = function alterar() {

                const botaoAlterar = document.getElementById('botaoAlterar');
                botaoAlterar.removeAttribute("hidden");
                botaoAlterar.setAttribute("type","submit");
                botaoAlterar.setAttribute("onclick","update("+body.id+"); this.style.display='none'; return false;");
                document.getElementById("proprietario").value = item.proprietario;
                document.getElementById("equipamento").value = item.tipoEquipamento;
                document.getElementById("dataEntrada").value = item.entradaLab;
                document.getElementById("defeito").value = item.defeito;
                document.getElementById("dataEntrega").value = item.previsaoEntrega;
                document.getElementById("status").value = item.statusConcerto;
                document.getElementById("observacao").value = item.observacoes;
                
                const table = document.getElementById('osCadastradas');
                const tBody = table.getElementsByTagName('tbody')[0];
    
                tBody.innerHTML = ""
            }
            newColumnSistema.appendChild(newTextSistema);
        })
    }else{
        document.getElementById('get_error').style.visibility = "visible" 
    }
}

async function get(id) {    

    
    if (id == "All") {

        return getAll();
    
    }else{

        let response = await fetch("https://myassist-backend-cahyf9d8chcwcxd0.brazilsouth-01.azurewebsites.net/os/"+id)

        if (response.ok) {
            let body = await response.json()
            const table = document.getElementById('osCadastradas');
            const tBody = table.getElementsByTagName('tbody')[0];

            tBody.innerHTML = ""

            const newRow = tBody.insertRow();
            const newColumnId = newRow.insertCell();
            const newTextId = document.createTextNode(body.id);
            newColumnId.appendChild(newTextId);
            const newColumnProprietario = newRow.insertCell();
            const newTextProprietario = document.createTextNode(body.proprietario);
            newColumnProprietario.appendChild(newTextProprietario);
            const newColumnEquipamento = newRow.insertCell();
            const newTextEquipamento = document.createTextNode(body.tipoEquipamento);
            newColumnEquipamento.appendChild(newTextEquipamento);
            const newColumnEntrada = newRow.insertCell();
            const newTextEntrada = document.createTextNode(body.entradaLab);
            newColumnEntrada.appendChild(newTextEntrada);
            const newColumnDefeito = newRow.insertCell();
            const newTextDefeito = document.createTextNode(body.defeito);
            newColumnDefeito.appendChild(newTextDefeito);
            const newColumnEntrega = newRow.insertCell();
            const newTextEntrega = document.createTextNode(body.previsaoEntrega);
            newColumnEntrega.appendChild(newTextEntrega);
            const newColumnStatus = newRow.insertCell();
            const newTextStatus = document.createTextNode(body.statusConcerto);
            newColumnStatus.appendChild(newTextStatus);
            const newColumnObservacoes = newRow.insertCell();
            const newTextObservacoes = document.createTextNode(body.observacoes);
            newColumnObservacoes.appendChild(newTextObservacoes);
            const newColumnSistema = newRow.insertCell();
            var newTextSistema = document.createElement("a");
            newTextSistema.appendChild(document.createTextNode("Alterar"));
            newTextSistema.href='#';
            
            newTextSistema.onclick = function alterar() {

                const botaoAlterar = document.getElementById('botaoAlterar');
                botaoAlterar.removeAttribute("hidden");
                botaoAlterar.setAttribute("type","submit");
                botaoAlterar.setAttribute("onclick","update("+body.id+"); this.style.display='none'; return false");
                document.getElementById("proprietario").value = body.proprietario;
                document.getElementById("equipamento").value = body.tipoEquipamento;
                document.getElementById("dataEntrada").value = body.entradaLab;
                document.getElementById("defeito").value = body.defeito;
                document.getElementById("dataEntrega").value = body.previsaoEntrega;
                document.getElementById("status").value = body.statusConcerto;
                document.getElementById("observacao").value = body.observacoes;
                
                const table = document.getElementById('osCadastradas');
                const tBody = table.getElementsByTagName('tbody')[0];
    
                tBody.innerHTML = ""
            }
                
            newColumnSistema.appendChild(newTextSistema);       
        }else{
            document.getElementById('get_error').style.visibility = "visible" 
        }
    }
}


async function save() {

    const dono = document.getElementById("proprietario").value;
    const equipto = document.getElementById("equipamento").value;
    const dataEntrada = document.getElementById("dataEntrada").value;
    const problema = document.getElementById("defeito").value;
    const dataSaida = document.getElementById("dataEntrega").value;
    const status = document.getElementById("status").value;
    const obs = document.getElementById("observacao").value;
    const form = {
        proprietario: dono,
        tipoEquipamento: equipto,
        entradaLab: dataEntrada,
        defeito: problema,
        previsaoEntrega: dataSaida,
        statusConcerto: status,
        observacoes: obs
    };


    const response = await fetch("https://myassist-backend-cahyf9d8chcwcxd0.brazilsouth-01.azurewebsites.net/os", {
        method: "POST",
        headers:{
                "Accept": "application/json",
                "Content-Type":"application/json"
        },
        body: JSON.stringify(form)
    })

    if (response.ok) {

        document.getElementById("proprietario").value = "";
        document.getElementById("equipamento").value = document.getElementById("equipamento").firstElementChild.value;
        document.getElementById("dataEntrada").value = "";
        document.getElementById("defeito").value = "";
        document.getElementById("dataEntrega").value = "";
        document.getElementById("status").value = document.getElementById("status").firstElementChild.value;
        document.getElementById("observacao").value = "";
    

        let body = await response.json();        
              
        return get(body.id*1);
    
    } else {        
        document.getElementById('save_error').style.visibility = "visible"
    }
}

async function update(id) {
    const dono = document.getElementById("proprietario").value;
    const equipto = document.getElementById("equipamento").value;
    const dataEntrada = document.getElementById("dataEntrada").value;
    const problema = document.getElementById("defeito").value;
    const dataSaida = document.getElementById("dataEntrega").value;
    const status = document.getElementById("status").value;
    const obs = document.getElementById("observacao").value;
    const form = {
        proprietario: dono,
        tipoEquipamento: equipto,
        entradaLab: dataEntrada,
        defeito: problema,
        previsaoEntrega: dataSaida,
        statusConcerto: status,
        observacoes: obs
    };

    const response = await fetch("https://myassist-backend-cahyf9d8chcwcxd0.brazilsouth-01.azurewebsites.net/os/"+id, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    })    

    if (response.ok) {
        document.getElementById("proprietario").value = "";
        document.getElementById("equipamento").value = document.getElementById("equipamento").firstElementChild.value;
        document.getElementById("dataEntrada").value = "";
        document.getElementById("defeito").value = "";
        document.getElementById("dataEntrega").value = "";
        document.getElementById("status").value = document.getElementById("status").firstElementChild.value;
        document.getElementById("observacao").value = "";
    

        let body = await response.json();       
              
        return get(body.id*1);

    } else {
        document.getElementById('update_error').style.visibility = "visible"
    }

    
}
