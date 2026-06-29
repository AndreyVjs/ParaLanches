
// funcao que verifica se o login e senha estao corretos
function verificarlogin() {

    // pegando o que o usuario digitou nos campos
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    // se o login e senha baterem, libera o acesso
    if (login == "login" && senha == "senha") {
        alert("Login correto! Bem-vindo ao Parah Lanches");
    } else {
        // se nao bater, avisa que ta errado
        alert("Login ou senha incorretos");
    }

}

// funcao que mostra ou esconde a senha no campo
function mostrarSenha() {
    var campo = document.getElementById("senha");

    // se tiver como password, muda pra text pra mostrar
    if (campo.type === "password") {
        campo.type = "text";
    } else {
        // se ja tiver mostrando, esconde de novo
        campo.type = "password";
    }
}
