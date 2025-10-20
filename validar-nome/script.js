const nome = document.getElementById("nome");

const mensagemErro = document.getElementById("mensagemErro");

const btnEnviar = document.getElementById("btnEnviar");


btnEnviar.addEventListener("click", function () {
  const valorNome = nome.value.trim();

  if (valorNome === "") {
    mensagemErro.textContent = "O campo nome é obrigatório.";
  } else {
    mensagemErro.textContent = "";
    alert("Nome enviado com sucesso!");
    nome.value = "";
  }
});
