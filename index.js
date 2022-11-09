function createProducts(name, price) {
  return {
    name,
    price,
  };
}
const products = [
  createProducts("Uva crismon", 44.98),
  createProducts("Vinho Cação", 17.92),
  createProducts("Água de coco", 18.99),
  createProducts("Mamão", 19.12),
  createProducts("Água tônica", 17.99),
];

function somaProduct() {
  let soma = 0;
  for (let i = 0; i < products.length; i++) {
    soma += products[i].price;
  }
  return soma;
}
somaProduct();

const body = document.querySelector("body");
const main = document.createElement("main");
const list = document.createElement("ul");
const header = document.createElement("header");
const nameStore = document.createElement("span");
const section = document.createElement("section");
const valorTotal = document.createElement("span");
const button = document.createElement("button");
const item = document.createElement("span");
const valor = document.createElement("span");
const head = document.createElement("div");
const div = document.createElement("div");
const total = document.createElement("span");

total.innerText = "Total";
item.innerText = "Item";
valor.innerText = "Valor";
nameStore.innerText = "Virtual Market";
valorTotal.innerText = `R$ ${somaProduct()}`;
button.innerText = "Finalizar compra";

header.classList.add("style-header");
nameStore.classList.add("name-store");
head.classList.add("style-head");
section.classList.add("section");
button.classList.add("button");
div.classList.add("div");
total.classList.add("total");
valorTotal.classList.add("valorTotal");
main.classList.add("main");

body.appendChild(header);
body.appendChild(main);

main.appendChild(section);
main.appendChild(head);
main.appendChild(list);

section.appendChild(div);

head.appendChild(item);
head.appendChild(valor);

header.appendChild(nameStore);

div.appendChild(total);
div.appendChild(valorTotal);

function createListProduct(productos, body) {
  const listItem = document.createElement("li");
  const itemName = document.createElement("span");
  const itemPrice = document.createElement("span");

  itemName.innerText = productos.name;
  itemPrice.innerText = `R$ ${productos.price}`;

  listItem.classList.add("list-item");
  itemName.classList.add("item-name");
  itemPrice.classList.add("item-price");

  listItem.appendChild(itemName);
  listItem.appendChild(itemPrice);
  list.appendChild(listItem);
}

for (let i = 0; i < products.length; i++) {
  createListProduct(products[i], body);
}

section.appendChild(button);
main.appendChild(section);
