const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");
const ingredientsItem = document.createElement("li");
  ingredientsItem.textContent = ingredients;
  ingredientsItem.classList.add("item");
console.log(ingredientsItem);
  
ingredientsItem.li = ingredients;
ingredientsEl.appendChild(ingredientsItem);
console.log(ingredientsEl);









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
