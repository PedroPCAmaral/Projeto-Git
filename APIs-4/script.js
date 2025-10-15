async function gerarCachorro() {
    const dogImg = document.getElementById("dogImg");
    dogImg.src = ""; 

    try {
        const resposta = await fetch("https://dog.ceo/api/breeds/image/random");

        if (!resposta.ok) {
            throw new Error("Erro na requisição: " + resposta.status);
        }

        const data = await resposta.json();
        console.log(data); 

    
        dogImg.src = data.message;

    } catch (erro) {
        console.error("Erro ao carregar a imagem:", erro);
        alert("Ops! Não foi possível carregar a imagem. Tente novamente.");
    }
}
