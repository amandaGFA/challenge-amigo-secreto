//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];
const lista = document.getElementById("listaAmigos");
const inputNome = document.getElementById("amigo");
const resultado = document.getElementById("resultado");

function adicionarAmigo() {
    const nomeAmigo = inputNome.value.trim();

    if (!nomeAmigo) {
        alert("Por favor, insira um nome!");
        return;
    }

    if (listaDeAmigos.includes(nomeAmigo)) {
        alert("Este amigo já foi selecionado!");
        return;
    }

    listaDeAmigos.push(nomeAmigo);
    atualizarLista();
    inputNome.value = ""; 
}

function atualizarLista() {
    lista.innerHTML = ""; 

    listaDeAmigos.forEach((amigo, index) => {
        const item = document.createElement("li");
        item.textContent = amigo;

        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.classList.add("button-remove"); 
        botaoRemover.onclick = () => removerAmigo(index);

        item.appendChild(botaoRemover);
        lista.appendChild(item);
    });
}

function removerAmigo(index) {
    listaDeAmigos.splice(index, 1);
    atualizarLista();
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("Adicione pelo menos um amigo para sortear!");
        return;
    }

    const amigoSorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
}

function limparLista() {
    listaDeAmigos = [];
    atualizarLista();
    resultado.innerHTML = "";
}