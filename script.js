const textoUsuario = document.querySelector(".texto-usuario");
const textoCriptografado = document.querySelector(".texto-criptografado");
const botaoCopiar = document.querySelector(".botao-copiar");
const mensagemVazia = document.querySelector(".mensagem-vazia");

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function validarEntrada(textoUsuario) {
  const textoMinusculo = textoUsuario.toLowerCase();
  const regex = /[A-ZÁÀÃÂÉÊÍÓÔÕÚÇ]/;

  if (regex.test(textoMinusculo)) {
    alert("Por favor, digite apenas letras minúsculas sem acentos.");
    return false;
  } else {
    return true;
  }
}

function limparCampoDeSaida() {
  textoCriptografado.style.backgroundImage = "none";
}

function buttonCripto() {
  if (validarEntrada(textoUsuario.value)) {
    const mensagemCripto = criptografar(textoUsuario.value);
    textoCriptografado.value = mensagemCripto;
    textoUsuario.value = "";
    limparCampoDeSaida();
  } else {
      return;
  }
}



botaoCopiar.addEventListener("click", () => {
  // Copia o texto para a área de transferência
  navigator.clipboard.writeText(textoCriptografado.value)
    .then(() => {
      // Limpa a área de texto
      textoCriptografado.value = "";
      // Exibe a mensagem "Nenhuma mensagem"
      textoCriptografado.placeholder = "";
      textoCriptografado.style.backgroundImage = "url(./assets/boneco.png), url(./assets/nenhuma-mensagem.png)";
    })
    .catch(err => {
      console.error("Falha ao copiar: ", err);
    });
});

function criptografar (stringCriptografada) {
    let matrizCripto = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringCriptografada = stringCriptografada.toLowerCase();

    for(let i = 0; i < matrizCripto.length; i++ ) {
        if(stringCriptografada.includes(matrizCripto[i][0])) {
            stringCriptografada = stringCriptografada.replaceAll(matrizCripto[i][0] , matrizCripto[i][1]);
        }
    }

    return stringCriptografada;
}

function buttonDesCripto() {
    const mensagemDesCripto = descriptografar(textoUsuario.value);
    textoCriptografado.value = mensagemDesCripto;
    textoUsuario.value = "";
    limparCampoDeSaida();
}

function descriptografar (stringDescriptografada) {
    let matrizCripto = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDescriptografada = stringDescriptografada.toLowerCase();

    for(let i = 0; i < matrizCripto.length; i++ ) {
        if(stringDescriptografada.includes(matrizCripto[i][1])) {
            stringDescriptografada = stringDescriptografada.replaceAll(matrizCripto[i][1] , matrizCripto[i][0]);
        }
    }

    return stringDescriptografada;
}