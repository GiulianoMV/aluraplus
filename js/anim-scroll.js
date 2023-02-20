const elementos = document.querySelectorAll('[data-anima]');
const animacaoClass = 'animacao';

function animaScroll() {
    const topPagRelativo = window.pageYOffset+((window.innerHeight*2)/3); /*Collect the 2/3 position of the window*/
    elementos.forEach(function(elemento) {
        if (topPagRelativo > elemento.offsetTop) {
            elemento.classList.add(animacaoClass)
        }
        else {
            elemento.classList.remove(animacaoClass)
        }
    });
}

if (elementos.length) {
    window.addEventListener('scroll', function() {
        animaScroll();
    });
}