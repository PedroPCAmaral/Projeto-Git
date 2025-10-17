document.getElementById("btn").addEventListener("click", async () => {
  const btc = document.getElementById("btc");
  const eth = document.getElementById("eth");
  const doge = document.getElementById("doge");
  const erro = document.getElementById("erro");

  btc.textContent = eth.textContent = doge.textContent = "Carregando...";
  erro.textContent = "";

  try {
    const resposta = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd");
    const data = await resposta.json();

    btc.textContent = "US$ " + data.bitcoin.usd.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    eth.textContent = "US$ " + data.ethereum.usd.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    doge.textContent = "US$ " + data.dogecoin.usd.toLocaleString("pt-BR", { minimumFractionDigits: 4 });
  } 
  catch {
    erro.textContent = "Erro ao buscar cotações. Tente novamente.";
    btc.textContent = eth.textContent = doge.textContent = "--";
  }
});
