import hex from './hex.js';

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const colorCode = document.querySelector('.color');

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for(let i=0; i<6; ++i){
    const index = Math.floor(Math.random()*hex.length);
    color+=hex[index];
  }

  return color;
}

btn.addEventListener('click', () => {
  const color = getRandomColor();
  console.log(color);

  document.body.style.backgroundColor = color;
  colorCode.textContent = color;
});
