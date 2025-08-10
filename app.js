//lista de amigos
let nomeAmigos = [];

// Função para limpar o input
function limparInput() {
    let input = document.getElementById("nomes");
    input.value = "";
}

// Função para adicionar amigo a lista
function adicionarAmigo() {
    let nome = document.getElementById("nomes").value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    if (nomeAmigos.includes(nome)) {
        alert("Você não pode adicionar o mesmo nome duas vezes.");
        limparInput();
        return;
    }

    nomeAmigos.push(nome);
    console.log(nomeAmigos);
    limparInput();
    exibirListaAmigos(); 
}


// Função para atualizar a lista de amigos na interface
function exibirListaAmigos() {
    // 1. Obter o elemento da lista usando document.getElementById()
    let listaAmigos = document.getElementById('listaAmigos');
    
    // 2. Limpar a lista existente
    listaAmigos.innerHTML = '';
    
    // 3. Percorrer o array usando loop for
    for (let i = 0; i < nomeAmigos.length; i++) {
        // 4. Criar elementos de lista (<li>) para cada nome
        let li = document.createElement('li');
        li.textContent = nomeAmigos[i];
        li.className = 'amigo-item';
        
        // 5. Adicionar elementos à lista
        listaAmigos.appendChild(li);
    }
}

// Função para sortear amigo (placeholder)
function sortearAmigo() {
    if (nomeAmigos.length < 2) {
        alert('É necessário pelo menos 2 participantes para o sorteio!');
        return;
    }
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
    // Lógica de sorteio simples
    let indiceSorteado = Math.floor(Math.random() * nomeAmigos.length);
    let amigoSorteado = nomeAmigos[indiceSorteado];
    
    let li = document.createElement('li');
    li.textContent = `Amigo sorteado: ${amigoSorteado}`;
    li.className = 'resultado-item';
    resultado.appendChild(li);
}

//