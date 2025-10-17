document.getElementById("btn").addEventListener("click", async () => {
  const artista = document.getElementById("artist").value.trim();
  const container = document.getElementById("musicas");
  const erro = document.getElementById("erro");

  container.innerHTML = "";
  erro.textContent = "";

  if (artista === "") {
    erro.textContent = "Digite o nome de um artista!";
    return;
  }

  try {
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(artista)}&entity=song&limit=5`;
    const resposta = await fetch(url);
    const data = await resposta.json();

    // Se não encontrar músicas
    if (data.results.length === 0) {
      erro.textContent = "Nenhuma música encontrada.";
      return;
    }

    // Mostra as músicas
    data.results.forEach(musica => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${musica.artworkUrl100}" alt="Capa do álbum">
        <h3>${musica.trackName}</h3>
        <p>${musica.artistName}</p>
        <a href="${musica.trackViewUrl}" target="_blank">Ouvir no iTunes</a>
      `;
      container.appendChild(card);
    });

  } catch {
    erro.textContent = "Erro ao buscar músicas. Tente novamente.";
  }
});
