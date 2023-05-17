const colorBody = document.body;
const buttonChange = document.querySelector('button');

let numRand = () => {
  return Math.floor(Math.random() * 256);
};

buttonChange.addEventListener('click', () => {
  colorBody.style.background = `rgb(${numRand()},${numRand()},${numRand()})`;
});
