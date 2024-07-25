let currentIndex = 0;

function showImage(index) {
    const carousel = document.querySelector('.carousel');
    const totalImages = document.querySelectorAll('.image-item').length;
    if (index >= totalImages) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalImages - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100; // Cambia 100 por el porcentaje de ancho del contenedor
    carousel.style.transform = `translateX(${offset}%)`;
}

function nextImage() {
    showImage(currentIndex + 1);
}

function prevImage() {
    showImage(currentIndex - 1);
}

// Inicializa la vista mostrando la primera imagen
showImage(currentIndex);
