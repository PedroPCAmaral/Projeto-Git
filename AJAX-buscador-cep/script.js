document.getElementById("buscar").addEventListener("click", function() {
  const cep = document.getElementById("cep").value;

  if (!cep) return alert("Digite um CEP!");

  const xhr = new XMLHttpRequest();

  xhr.open("GET", `https://viacep.com.br/ws/${cep}/json/`);

  xhr.onload = function() {
    if (xhr.status === 200) {
      const dados = JSON.parse(xhr.responseText);

      if (dados.erro) {
        document.getElementById("resultado").innerHTML = "<p>CEP não encontrado.</p>";
        return;
      }

      document.getElementById("resultado").innerHTML = `
        <h3>Endereço Encontrado:</h3>
        <p><strong>Logradouro:</strong> ${dados.logradouro}</p>
        <p><strong>Bairro:</strong> ${dados.bairro}</p>
        <p><strong>Cidade:</strong> ${dados.localidade}</p>
        <p><strong>UF:</strong> ${dados.uf}</p>
      `;
    }
  };

  xhr.send();
});
