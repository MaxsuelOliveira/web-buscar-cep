const form = document.querySelector("form");

async function request(cep) {
  let response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  let data = await response.json();
  return data;
}

(function formart() {
  let cep = document.querySelector("input");
  cep.addEventListener("input", (event) => {
    let value = event.target.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{5})(\d)/, "$1-$2");
    event.target.value = value;
  });
})();

async function get(cep) {
  const response = await request(cep);
  if (response.erro) {
    card({
      icon: "bi bi-exclamation-circle",
      title: "",
      text: "CEP não encontrado",
    });
  } else {
    card({
      icon: "bi bi-geo-alt-fill",
      title: "Endereço",
      text: response.logradouro,
    });

    card({
      icon: "bi bi-pin-map-fill",
      title: "Bairro",
      text: response.bairro,
    });

    card({
      icon: "bi bi-signpost-2-fill",
      title: "Cidade",
      text: response.localidade,
    });

    card({
      icon: "bi bi-signpost-2-fill",
      title: "Estado",
      text: response.uf,
    });
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  resetContainer();

  const cep = document.querySelector("input");

  cep.value.length !== 9
    ? card({
        icon: "bi bi-exclamation-circle",
        text: "Sem os 9 do cep 🤨",
      })
    : get(cep.value);
});
