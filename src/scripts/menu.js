document.querySelectorAll('.hamburger').forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('hidden');
    document.querySelectorAll('#hamburger-icon path').forEach((item) => {
      item.classList.toggle('hidden');
    });
  });
});
