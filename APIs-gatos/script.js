async function mostrarGato() {
  try {
    
    const resposta = await fetch("https://api.thecatapi.com/v1/images/search");
    
    
    const data = await resposta.json();
    console.log(data); 

    
    const imagemGato = data[0].url;

    
    const img = document.getElementById("catImg");
    img.src = imagemGato;
  } catch (erro) {
    console.error("Erro ao buscar imagem:", erro);
  }
}
