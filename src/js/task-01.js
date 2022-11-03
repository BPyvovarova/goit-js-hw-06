const ulEl = document.querySelectorAll("#categories >.item");
console.log("Number of categories:", ulEl.length);
ulEl.forEach((element) => {
  console.log("Category:", element.querySelector("h2").textContent);
  console.log("Elements:", element.querySelectorAll("li").length);
});
