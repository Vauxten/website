const dropdown = document.querySelectorAll('.dropdown');

dropdown.forEach((el) => {
  const dropdownBtn = el.querySelector('.dropdown-btn');
  const dropdownMenu = el.querySelector('.dropdown-menu');

  dropdownBtn.addEventListener('click', (event) => {
    event.preventDefault();
    dropdownMenu.classList.toggle('show');
  });

  el.addEventListener('mouseleave', () => {
    dropdownMenu.classList.remove('show');
  });
});
