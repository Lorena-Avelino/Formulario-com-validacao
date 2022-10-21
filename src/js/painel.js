const campos = document.querySelectorAll(".campo");
const enviar = document.querySelector(".enviar");

campos.forEach((campo) => {
  campo.addEventListener("change", () => {
    validarCampo(campo);
  });
  const idDoElementoLabel = `info-${campo.id}`;
  const infoASerMostrada = document.getElementById(idDoElementoLabel);

  adicionarMensagemDeCampoObrigatorio(campo, infoASerMostrada);
  mudarDeCampo(campo, infoASerMostrada);
});

function validarCampo(campo) {
  if (campo.value !== "") {
    campo.classList.add("valido");
  } else if (campo.value === "") {
    campo.classList.remove("valido");
  }
}

function adicionarMensagemDeCampoObrigatorio(campo, infoASerMostrada) {
  enviar.addEventListener("click", () => {
    const valido = campo.classList.contains("valido");
    if (!valido) {
      campo.classList.add("campo-obrigatorio");
      infoASerMostrada.classList.add("campo-obrigatorio");
    } else if (valido) {
      campo.classList.remove("campo-obrigatorio");
      infoASerMostrada.classList.remove("campo-obrigatorio");
    }
  });
}

function mudarDeCampo(campo, infoASerMostrada) {
  campo.addEventListener("blur", () => {
    const valido = campo.classList.contains("valido");
    const obrigatorio = campo.classList.contains("campo-obrigatorio");
    console.log(campo.value.length);
    if (campo.value.length > 0 && valido) {
      campo.classList.remove("campo-obrigatorio");
      infoASerMostrada.classList.remove("campo-obrigatorio");
    } else {
      return;
    }
  });
}
