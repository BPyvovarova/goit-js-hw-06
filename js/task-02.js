const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");
const createLi = (el) => {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.textContent = el;
  ingredientsItem.classList.add("item");
  console.log(ingredientsItem);
  return ingredientsItem;
};

const ingredientItem = ingredients.map(createLi);
ingredientsEl.append(...ingredientItem);

console.log(ingredientItem);

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

// for (let index = 0; index < ingredients.length; index++) {
//   const ingredientsItem = document.createElement("li");
//   ingredientsItem.textContent = ingredients[index];
//   ingredientsItem.class = "item";
//   ul.append(ingredientsItem);

//   console.log(ul);
//   console.log(ingredientsItem.class);
// }
