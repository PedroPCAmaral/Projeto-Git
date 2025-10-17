document.getElementById("buscar").addEventListener("click", () => {
  const nome = document.getElementById("usuario").value.trim();
  const perfilDiv = document.getElementById("perfil");

  // Verifica se o campo está vazio
  if (nome === "") {
    perfilDiv.innerHTML = "<p>Por favor, digite um nome de usuário.</p>";
    return;
  }

  // Faz a requisição à API do GitHub
  fetch(`https://api.github.com/users/${nome}`)
    .then(resp => {
      if (!resp.ok) {
        throw new Error("Usuário não encontrado!");
      }
      return resp.json();
    })
    .then(user => {
      perfilDiv.innerHTML = `
        <img src="${user.avatar_url}" width="120">
        <h3>${user.name || "Sem nome"}</h3>
        <p>${user.bio || "Sem bio disponível"}</p>
      `;
    })
    .catch(error => {
      perfilDiv.innerHTML = `<p style="color:#ff6961;">${error.message}</p>`;
    });
});
