async function autenticar() {
    const login = document.getElementById("user").value;
    const senha = document.getElementById("password").value;
    fetch("http://147.15.121.92:8080/usuario/login?usuario="+login+"&senha="+senha,{
    method:"POST"
    })
    .then(
        (response) => {
            if (response.ok) {
                window.location.replace("./pages/admin.html");
            }
            return Promise.reject(response)
        }
    ).catch((response) => {
        if (response.status == 400) {
            new bootstrap.Toast(document.getElementById('toast400Logar')).show();
        } else {
            new bootstrap.Toast(document.getElementById('toast500Logar')).show();                           
        }

    });
}
