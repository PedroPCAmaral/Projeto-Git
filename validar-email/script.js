const email = document.getElementById("email");

const erroEmail = document.getElementById("erroEmail");

const btnValidar = document.getElementById("btnValidar");

btnValidar.addEventListener("click", function () {
  const valor = email.value.trim();

  if (!valor.includes("@") || !valor.includes(".")) {
    erroEmail.textContent = "E-mail inválido";
  } else {
    erroEmail.textContent = "";
    alert("E-mail válido!");
    
    email.value = ""; 
  }
});
