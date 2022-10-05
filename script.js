const headers = document.querySelectorAll('.page-header');
//const navbar = document.querySelector('.navbar');

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
$(function(){
  $(document).scroll(function(){
    let $navbar = $('.navbar');
    let $navBrand = $('.navbar-brand');
    let navLinks = document.querySelectorAll('.nav-link');
    $navbar.toggleClass("navbar-scrolled", $(this).scrollTop() > $navbar.height());
    $navBrand.toggleClass("brand-scrolled", $(this).scrollTop() > $navbar.height());
    navLinks.forEach(link => {
      link.classList.toggle('link-scrolled', $(this).scrollTop() > $navbar.height())
    })
  })
}

)