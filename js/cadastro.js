async function cadastrar() {
    const login = document.getElementById("userToBe").value;
    const senha = document.getElementById("passwordToBe").value;



    fetch("http://localhost:8080/usuario/cadastrar,{
        method:"POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify({
                login: login,
                senha: senha
        }),
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

