document.addEventListener('DOMContentLoaded', function () {
    // Adicionando funcionalidade ao botão de menu
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.querySelector('.menu');

    menuBtn.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

    // Adicionando efeito de ponteiro ao botão de menu
    menuBtn.style.cursor = 'pointer';

    // Adicionando efeito de zoom sutil aos botões dentro do menu ao passar o mouse sobre eles
    const menuItems = document.querySelectorAll('.menu a');

    menuItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            item.style.transform = 'scale(1.1)';
        });

        item.addEventListener('mouseout', function() {
            item.style.transform = 'scale(1)';
        });
    });
});
