const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const logginData = {};
  const formData = new FormData(event.currentTarget);
  for (const [key, value] of formData) {
    if (value !== "") continue;
    alert("Всі поля повинні бути заповнені!");
    return;
  }
  console.log(logginData);
}
