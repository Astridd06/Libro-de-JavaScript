const flipbook = document.getElementById('flipbook');
let currentPage = 0;

flipbook.addEventListener('click', () => {
  currentPage = (currentPage + 1) % 3;
  flipbook.style.transform = `translateX(-${currentPage * 50}%)`;
});