const input = document.querySelector("#name");

let name;
let api;

const inputHandler = (e) => {
  console.log(e.target.value);
};

function debounce(callback, delay) {
  return function (...arguments) {
    clearTimeout(api);
    api = setTimeout(() => {
      console.log(...arguments);
      callback(...arguments);
    }, delay);
  };
}

const debouncedInputHandler = debounce(inputHandler, 1000);

input.addEventListener("keyup", (e) => {
  debouncedInputHandler(e,99,109, "hehe more args");
});
