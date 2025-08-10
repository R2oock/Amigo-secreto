let nomeAmigos= [];

function limparInput(){
   let input = document.getElementById("nomes");;
  input.value = "";
}

function adicionarAmigo(){
    let nome = document.getElementById("nomes").value;
    if(nome !== ""){
        nomeAmigos.push(nome);;
        console.log(nomeAmigos);
        limparInput();
    }
    else{
        alert("Por favor, insira um nome.");
    }
}

adicionarAmigo();
