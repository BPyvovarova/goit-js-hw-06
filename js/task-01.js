const ul = document.querySelectorAll("#categories >.item");
console.log("Number of categories:", ul.length);
ul.forEach((element) => {
  console.log("Category:", element.querySelector("h2").textContent);
  console.log("Elements:", element.querySelectorAll("li").length);
});
