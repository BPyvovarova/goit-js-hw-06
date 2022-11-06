const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector("#ingredients");
const li = ingredients.length;
for (let index = 0; index < ingredients.length; index++) {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.textContent = ingredients[index];
  ingredientsItem.class = "item";
  ul.append(ingredientsItem);

  console.log(ul);
  console.log(ingredientsItem.class);
}
