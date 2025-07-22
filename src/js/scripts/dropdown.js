export default function dropdown() {
  const fieldElement = document.querySelector('.field');

  fieldElement.addEventListener('click', function() {
      this.classList.toggle('_active-dropdown');
  });
}