const form = document.getElementById("formCadastro");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const idade = document.getElementById("idade");
const senha = document.getElementById("senha");

const erroNome = document.getElementById("erroNome");
const erroEmail = document.getElementById("erroEmail");
const erroIdade = document.getElementById("erroIdade");
const erroSenha = document.getElementById("erroSenha");

// VALIDAR NOME 
function validarNome() {
    if (!nome.value.trim()) {
        erroNome.textContent = "O nome é obrigatório";
        nome.classList.add("erro");
        nome.classList.remove("valido");
        return false;
    } else {
        erroNome.textContent = "";
        nome.classList.remove("erro");
        nome.classList.add("valido");
        return true;
    }
}

// VALIDAR EMAIL
function validarEmail() {
    const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!padraoEmail.test(email.value.trim())) {
        erroEmail.textContent = "Digite um email válido";
        email.classList.add("erro");
        email.classList.remove("valido");
        return false;
    } else {
        erroEmail.textContent = "";
        email.classList.remove("erro");
        email.classList.add("valido");
        return true;
    }
}

// VALIDAR IDADE
function validarIdade() {
    const valor = idade.value.trim();
    if (valor === "" || valor < 18 || valor > 100) {
        erroIdade.textContent = "A idade deve estar entre 18 e 100";
        idade.classList.add("erro");
        idade.classList.remove("valido");
        return false;
    } else {
        erroIdade.textContent = "";
        idade.classList.remove("erro");
        idade.classList.add("valido");
        return true;
    }
}

// VALIDAR SENHA
function validarSenha() {
    if (senha.value.trim().length < 8) {
        erroSenha.textContent = "A senha deve ter no mínimo 8 caracteres";
        senha.classList.add("erro");
        senha.classList.remove("valido");
        return false;
    } else {
        erroSenha.textContent = "";
        senha.classList.remove("erro");
        senha.classList.add("valido");
        return true;
    }
}

// SUBMIT DO FORM 
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nomeValido = validarNome();
    const emailValido = validarEmail();
    const idadeValida = validarIdade();
    const senhaValida = validarSenha();

    if (nomeValido && emailValido && idadeValida && senhaValida) {
        alert("Cadastro realizado com sucesso!");
        form.reset();
        document.querySelectorAll("input").forEach(campo => campo.classList.remove("valido"));
    } else {
        alert("Por favor, corrija os erros antes de enviar.");
    }
});
