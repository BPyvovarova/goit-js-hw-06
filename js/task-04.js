const refs = {
  valueEl: document.querySelector("#value"),
  decrementEl: document.querySelector('button[data-action="decrement"]'),
  incrementEl: document.querySelector('button[data-action="increment"]'),
};

const counterValue = {
  value: 0,
  dec() {
    this.value -= 1;
    return (refs.valueEl.textContent = this.value);
  },
  inc() {
    this.value += 1;
    return (refs.valueEl.textContent = this.value);
  },
};

refs.decrementEl.addEventListener("click", counterValue.dec.bind(counterValue));
refs.incrementEl.addEventListener("click", counterValue.inc.bind(counterValue));

// let counterValue = 0;
// const render = () => {
//   refs.valueEl.textContent = counterValue;
// };

// const handleDecrement = () => {
//   counterValue -= 1;
//   render();
// };
// const handleIncrement = () => {
//   counterValue += 1;
//   render();
// };

// render();
// refs.decrementEl.addEventListener("click", handleDecrement);
// refs.incrementEl.addEventListener("click", handleIncrement);
