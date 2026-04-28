
function verificarlogin(){

    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if(login == "123" && senha == "admin"){
        alert("Login correto! Bem-vindo ao Parah Lanches");
    }else{
        alert("Login ou senha incorretos");
    }

}

function mostrarSenha(){
    var campo = document.getElementById("senha");

    if(campo.type === "password"){
        campo.type = "text";
    }else{
        campo.type = "password";
    }
}