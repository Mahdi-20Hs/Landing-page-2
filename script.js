const headers = document.querySelectorAll('.page-header');

function randomColor(){
  const r = Math.floor(Math.random() * 255) + 1;
  const g = Math.floor(Math.random() * 255) + 1;
  const b = Math.floor(Math.random() * 255) + 1;
  return `rgb(${r}, ${g}, ${b})`;
}

headers.forEach((header) => {
  header.addEventListener('mouseover', () => {
    const color = randomColor();
    header.style.color = color
  })
  header.addEventListener('mouseout', () => {
    header.style.color = 'black'
  })
})