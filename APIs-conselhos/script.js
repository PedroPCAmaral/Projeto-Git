async function gerarConselho() {
    const conselhoTexto = document.getElementById("conselhoTexto");
    conselhoTexto.textContent = "...Carregando conselho...";

    try {
        const resposta = await fetch("https://api.adviceslip.com/advice");

        if (!resposta.ok) {
            throw new Error("Erro na requisição: " + resposta.status);
        }

        const data = await resposta.json();
        console.log(data); 

        
        conselhoTexto.textContent = `"${data.slip.advice}"`;

    } catch (erro) {
        console.error("Erro ao carregar o conselho:", erro);
        conselhoTexto.textContent = "Ops! Não foi possível carregar o conselho. Tente novamente.";
    }
}
