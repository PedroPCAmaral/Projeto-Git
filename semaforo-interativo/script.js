const vermelho = document.getElementById("vermelho");
const amarelo = document.getElementById("amarelo");
const verde = document.getElementById("verde");

const btnVermelho = document.getElementById("btn-vermelho");
const btnAmarelo = document.getElementById("btn-amarelo");
const btnVerde = document.getElementById("btn-verde");

btnVermelho.addEventListener("click", function() {
  vermelho.style.backgroundColor = "red";
  amarelo.style.backgroundColor = "gray";
  verde.style.backgroundColor = "gray";
});

btnAmarelo.addEventListener("click", function() {
  vermelho.style.backgroundColor = "gray";
  amarelo.style.backgroundColor = "yellow";
  verde.style.backgroundColor = "gray";
});

btnVerde.addEventListener("click", function() {
  vermelho.style.backgroundColor = "gray";
  amarelo.style.backgroundColor = "gray";
  verde.style.backgroundColor = "green";
});

