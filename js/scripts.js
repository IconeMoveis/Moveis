function sendForm() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const ambientes = document.getElementById('ambientes').value;
    const valor = document.getElementById('valor').value;
    const observacao = document.getElementById('observacao').value;

    // Formatação da mensagem para WhatsApp
    const whatsappMessage = `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nAmbientes: ${ambientes}\nPretensão de Investimento: ${valor}\nObservação: ${observacao}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5541987202877&text=${encodeURIComponent(whatsappMessage)}`;

    // Envio do formulário para o backend (PHP) para o envio do e-mail
    const form = document.getElementById('contactForm');
    form.submit();

    // Redirecionamento para o WhatsApp
    window.open(whatsappUrl, '_blank');

    // Mostrar mensagem de sucesso
    document.getElementById('sendmessage').style.display = 'block';
    setTimeout(() => {
        document.getElementById('sendmessage').style.display = 'none';
    }, 5000);
}


/* ------BANNER--------------*/

let currentSlide = 0;
const slides = document.querySelectorAll('.banner-slide');
const totalSlides = slides.length;

function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === slideIndex) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Muda o slide a cada 5 segundos

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide); // Mostra o primeiro slide ao carregar a página
});



/*------ dinâmica do background header ---------*/

window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var banner = document.querySelector('.banner');
    var scrollPosition = window.scrollY;

    if (scrollPosition > banner.offsetHeight) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Cor original do header quando não estiver sobre o banner
    } else {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // Cor com transparência quando sobre o banner
    }
});


//-------CARROCEL-------------//
 
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const images = Array.from(container.children);
    const totalWidth = container.scrollWidth;

    // Duplicar o conteúdo do contêiner para criar um loop contínuo
    images.forEach(image => {
        container.appendChild(image.cloneNode(true));
    });

    // Adiciona a classe que inicia a animação
    container.classList.add('scrolling');
});

