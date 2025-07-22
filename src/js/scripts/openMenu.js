export default function openMenu() {
  const burgerButton = document.getElementById('burgerButton');
  const burgerLine = document.getElementById('burgerLine');
  const navMenu = document.getElementById('navMenu');
  
  burgerButton.addEventListener('click', function() {
      navMenu.classList.toggle('_active');

      burgerButton.classList.toggle('_active');
      burgerLine.classList.toggle('_active');
  });
}