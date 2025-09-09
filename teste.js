// 1 . STRING -Nome de usuarios , mensagens, textos
let usuario = "Maria";
let mensagem = "Bem vinda, " + usuario + "!";
console.log("1. String:", mensagem, "Tipo:", typeof mensagem);

// 2. NUMBER - Idade, notas, calculos 
let preco = 19.99;
let quantidade = 3;
let total = preco * quantidade;
console.log("2. NUMBER: Total da Compra = R$", total, "Tipo", typeof total);

//3. BIGINT - Trabalha com valores financeiros enormes ou IDS
let idBlockchain = 0123456789;
console.log("3. BIGINT (ID Blockchain);", idBlockchain, "Tipo:", typeof idBlockchain);

// 4. BOOLEAN - Controle de fluxo, condicoes, status
let estaLogado = true;
if (estaLogado) {
    console.log("4. BOLLEAN: Usuario esta logado");
} else {
    console.log("4. BOOLEAN: Usuario nao esta logado");
}

// 5. UNDEFINED - Variavel ainda nao definida(ex: cadastro incompleto)
let telefone;
console.log("5. UNDEFINED: Telefone =" , telefone, "Tipo:", typeof telefone);

// 6. SYMBOL - Usado para criar identificadores (ex: chave de objeto)
let chave1 = Symbol("chaveAPI");
let chave2 = Symbol("chaveAPI");
console.log("6. SYMBOL: Sao Iguais?", chave1 == chave2); //false

//7. NULL - Valor intecionalmente vazio(ex: campo sem resposta)
let resposta = null;
console.log("7.NULL: Resposta ainda nao recebida", resposta, "Tipo:", typeof resposta);

let aluno = {
nome: "Lucas",            //STRING
idade: 18,                //NUMBER
matricula: 123456789,     //BIGINT
ativo: true,              //BOOLEAN
telefone: undefined,      //UNDEFINED
token: Symbol("token"),   //SYMBOL
responsavel: null         //NULL

};

console.log("Objeto aluno com diferentes tipos primitivos:");
console.log(aluno);