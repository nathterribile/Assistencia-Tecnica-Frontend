async function acessoAgendar() {

    window.location.replace("./pages/agendamento.html");

}

async function direcionamentoOnboarding() {

    window.location.replace("../index.html");

}

async function agendar() {

    const dono = document.getElementById("proprietario").value;
    const equipto = document.getElementById("equipamento").value;
    const dataEntrada = document.getElementById("dataAgendamento").value;
    const problema = document.getElementById("defeito").value;
    const form = {
        proprietario: dono,
        tipoEquipamento: equipto,
        entradaLab: dataEntrada,
        defeito: problema,
        statusConcerto: "agendamento"
        
    };

    const response = await fetch("https://147.15.121.92:8443/os", {
        method: "POST",
        headers:{
                "Accept": "application/json",
                "Content-Type":"application/json"
        },
        body: JSON.stringify(form)
    })

    if (response.ok) {

        let body = await response.json();

        console.log(body.id);

        document.getElementById("dataAgendada").innerHTML= "Numero de agendamento: " + body.id.toString();
        document.getElementById('agendamentoConfirmadoModal').setAttribute("class","modal show d-block")
                      
    }else{
        new bootstrap.Toast(document.getElementById('toast500Agendar')).show(); 
    }
}
