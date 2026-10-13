const newItem = document.getElementById("new-item");
const addItem = document.getElementById("add-item");
const form = document.querySelector("form");
const item = document.querySelector("li");
const list = document.querySelector("ul");
const warning = document.querySelector(".warning");

// captura o valor do input
newItem.addEventListener("input", () => {
  let value = newItem.value;
});

// adiciona um novo item à lista
form.onsubmit = (event) => {
  event.preventDefault();

  if (newItem.value.trim() === "") {
    alert("Por favor, insira um item válido.");
    return;
  }

  addNewItem();
};

// função para adicionar um novo item à lista
function addNewItem() {
  let value = newItem.value;

  // cria o item da lista
  const newElement = document.createElement("li");

  // captura o valor do input e cria um nó de texto
  const newText = document.createTextNode(value);

  // cria a div que envolve o checkbox e o texto
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("item");

  // cria a div do checkbox
  const checkbox = document.createElement("div");
  checkbox.classList.add("checkbox");

  // cria o input do tipo checkbox e adiciona a div
  const checkboxInput = document.createElement("input");
  checkboxInput.type = "checkbox";
  checkbox.appendChild(checkboxInput);

  // cria o span do checkmark e adiciona a div
  const checkmark = document.createElement("span");
  checkmark.classList.add("checkmark");
  checkbox.appendChild(checkmark);

  // cria o botão de deletar
  const deleteButton = document.createElement("img");
  deleteButton.src = "assets/icons/trash.svg";
  deleteButton.alt = "remover item";

  itemDiv.appendChild(checkbox);
  itemDiv.appendChild(newText);
  newElement.appendChild(itemDiv);
  newElement.appendChild(deleteButton);

  document.querySelector("ul").appendChild(newElement);

  formClear();
}

function formClear() {
  newItem.value = "";

  newItem.focus();
}

// função para remover um item da lista
function removeItem() {
  list.addEventListener("click", (event) => {
    const deleteButton = event.target.closest("img");

    if (deleteButton) {
      const itemToRemove = deleteButton.closest("li");

      if (itemToRemove) {
        itemToRemove.remove();

        warning.style.display = "flex";
      }
    }
  });
}

removeItem();

// função para esconder o aviso
function hideWarning() {
  warning.addEventListener("click", (event) => {
    const warningDiv = event.target.closest(".warning");

    if (warningDiv) {
      warning.style.display = "none";
    }
  });
}

hideWarning();
