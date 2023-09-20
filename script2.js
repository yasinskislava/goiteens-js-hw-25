const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const ingredientsList = document.querySelector("#ingredients");

const list = [];
const listLength = ingredients.length;

for (let i = 0; i < listLength; i++) {
    list[i] = document.createElement("li");
    list[i].innerHTML = ingredients[i];
}   
ingredientsList.append(...list);
