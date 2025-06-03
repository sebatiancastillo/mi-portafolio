// Inicializamos el modal y carrusel
const allClickableImages = document.querySelectorAll('.main-photo, .thumbnail');
const carousel = document.getElementById('Carouselportafolio');
const carouselModalElement = document.getElementById('carouselModal');
const carouselModal = new bootstrap.Modal(carouselModalElement);
const carouselInstance = new bootstrap.Carousel(carousel);

// Función para abrir el carrusel en la imagen seleccionada
function openCarouselAt(index) {
  const items = carousel.querySelectorAll('.carousel-item');
  items.forEach(item => item.classList.remove('active'));
  if (items[index]) items[index].classList.add('active');
  carouselModal.show();
}

// Escuchar clics en imágenes principales y miniaturas
allClickableImages.forEach(img => {
  img.addEventListener('click', () => {
    const index = parseInt(img.getAttribute('data-index'));
    openCarouselAt(index);
  });
});

// Agregar soporte de teclado (→ ←)
document.addEventListener('keydown', function (e) {
  if (carouselModalElement.classList.contains('show')) {
    if (e.key === 'ArrowRight') {
      carouselInstance.next();
    } else if (e.key === 'ArrowLeft') {
      carouselInstance.prev();
    }
  }
});

// Efecto de zoom al hacer clic en la imagen del carrusel
carousel.querySelectorAll('.carousel-item img').forEach(img => {
  img.style.transition = 'transform 0.3s ease';
  img.style.cursor = 'zoom-in';

  let zoomed = false;

  img.addEventListener('click', () => {
    zoomed = !zoomed;
    if (zoomed) {
      img.style.transform = 'scale(2)';
      img.style.cursor = 'zoom-out';
    } else {
      img.style.transform = 'scale(1)';
      img.style.cursor = 'zoom-in';
    }
  });
});
