async function cadastrar() {
    const login = document.getElementById("userToBe").value;
    const senha = document.getElementById("passwordToBe").value;

    fetch("http://localhost:8080/usuario/cadastrar/login?usuario=" + login + "&senha=" + senha, {
        method: "POST"
    })
        .then(
            (response) => {
                if (response.ok) {
                    window.location.replace("./pages/admin.html");
                }
                return Promise.reject(response)
            }
        ).catch((response) => {
            if (response.status == 401) {
                document.getElementById("login_error").style.visibility = "visible";
            } else {
                document.getElementById("login_error").style.visibility = "visible";
                document.getElementById("login_error").value = response;
            }
    
        });
    }
