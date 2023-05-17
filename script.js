const colorBody = document.body;
const buttonChance = document.getElementById('change');

const colorArray = [
  '162D3D',
  '107890',
  'FEEFC3',
  'E27A3F',
  'B0262D',
  'C79730',
  '4F2919',
  '932336',
];

let i = 0;
buttonChance.addEventListener('click', () => {
  if (i < colorArray.length) {
    colorBody.style.backgroundColor = `#${colorArray[i]}`;
    console.log(colorArray[i]);
    i++;
  } else {
    colorBody.style.backgroundColor = '';
    i = 0;
  }
});
