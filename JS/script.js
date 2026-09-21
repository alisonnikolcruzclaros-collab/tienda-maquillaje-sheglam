// --- Funcionalidad 1: Menú Desplegable Interactivo Móvil ---
const menuToggle = document.getElementById('menuToggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


// --- Funcionalidad 2: Botón Volver Arriba ---
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Mostrar el botón cuando se hace scroll hacia abajo a más de 300px
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

// Al hacer clic, vuelve arriba de forma fluida
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// --- Funcionalidad 3: Ventana de visualización Modal para la Galerá ---
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.querySelector('.close-modal');
const galleryImages = document.querySelectorAll('.gallery-img');

// Añadir evento clic a cada imagen de la galería
galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

// Cerrar ventana modal
closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

// Cerrar modal al hacer clic fuera de la foto
modal.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.style.display = "none";
    }
});