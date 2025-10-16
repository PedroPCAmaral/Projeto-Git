document.getElementById("atualizar").addEventListener("click", function () {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL");

    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);

            
            const usd = parseFloat(data.USDBRL.bid).toFixed(2);
            const eur = parseFloat(data.EURBRL.bid).toFixed(2);

            
            const btc = parseFloat(data.BTCBRL.bid).toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });

            
            document.getElementById("usd").innerHTML = `R$ ${usd}`;
            document.getElementById("eur").innerHTML = ` R$ ${eur}`;
            document.getElementById("btc").innerHTML = ` R$ ${btc}`;
        } else {
            alert("Erro ao buscar as cotações. Tente novamente mais tarde.");
        }
    };

    xhr.onerror = function () {
        alert("Erro de conexão com a API.");
    };

    xhr.send();
});

