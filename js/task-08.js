const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені!");
  }
  console.log({ Email: email.value, Password: password.value });
  event.currentTarget.reset();
}

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
// Завдання 8 - не збираються данні з форми, не очищаються інпути і немає обʼєкта з введеними данними в консолі.
//

// const logginData = {};
// const formData = new FormData(event.currentTarget);
// for (const [key, value] of formData) {
//   if (value !== "") continue;
//   alert("Всі поля повинні бути заповнені!");
//   return;
// }
// console.log(logginData);
