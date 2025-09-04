let amigos = [];

function adicionarAmigo() {
  let input = document.getElementById("amigo"); // corrigi aqui
  let nome = input.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  amigos.push(nome);

  atualizarLista();
  input.value = "";
}

function atualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo) => {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("A lista de amigos está vazia!\nPor favor, insira um nome.");
    return;
  }

  let indice = Math.floor(Math.random() * amigos.length);

  document.getElementById("resultado").innerHTML =
    "Amigo sorteado: <b>" + amigos[indice] + "</b>";

  document.getElementById("listaAmigos").innerHTML = "";
}
