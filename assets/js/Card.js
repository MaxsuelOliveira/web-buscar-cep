const card = (props) => {
  const { icon, text } = props;

  const container = document.getElementById("result");

  const divCard = document.createElement("div");
  divCard.className = "card";

  const iconElement = document.createElement("i");
  iconElement.className = icon;

  const spanTitle = document.createElement("span");
  spanTitle.className = "title";
  spanTitle.textContent = text;

  divCard.appendChild(iconElement);
  divCard.appendChild(spanTitle);

  container.appendChild(divCard);
};

const resetContainer = () => {
  const container = document.getElementById("result");
  container.innerHTML = "";
};

const setData = [
  {
    icon: "bi bi-geo-alt-fill",
    text: "Rua das Flores, 123",
  },

  {
    icon: "bi bi-pin-map-fill",
    text: "Vila das Árvores",
  },

  {
    icon: "bi bi-signpost-2-fill",
    text: "Cidade das Pedras",
  },

  {
    icon: "bi bi-signpost-2-fill",
    text: "Estado das Montanhas",
  },
];

setData.forEach((item) => {
  card(item);
});
