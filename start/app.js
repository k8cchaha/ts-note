const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const button = document.querySelector('button');

function add(num1, num2) {
  return num1 + num2;
}

button.addEventListener('click', () => {
  console.log(add(+num1.value, +num2.value));
});