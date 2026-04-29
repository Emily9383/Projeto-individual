document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slider');
    let indexAtual = 0;

    function atualizarSlider() {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[indexAtual].classList.add('active');
    }

    document.getElementById('next-button').addEventListener('click', () => {
        indexAtual = (indexAtual + 1) % slides.length;
        atualizarSlider();
    });

    document.getElementById('prev-button').addEventListener('click', () => {
        indexAtual = (indexAtual - 1 + slides.length) % slides.length;
        atualizarSlider();
    });

    atualizarSlider();
});