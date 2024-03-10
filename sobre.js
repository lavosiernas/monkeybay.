let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.carousel img');
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = 'block';
}
  
function prevSlide() {
    slideIndex--;
    showSlides();
}

function nextSlide() {
    slideIndex++;
    showSlides();
}

// Exibição automática dos slides
setInterval(() => {
    showSlides();
}, 3000);
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector('.search-form input[type="text"]');
    
    searchInput.addEventListener("mouseenter", function() {
        searchInput.style.width = "300px"; // Ajuste conforme necessário
    });

    searchInput.addEventListener("mouseleave", function() {
        searchInput.style.width = "200px"; // Ajuste conforme necessário
    });
});
