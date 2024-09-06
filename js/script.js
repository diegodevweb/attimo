/* Carrossel */
document.addEventListener('DOMContentLoaded', function() {
    const slide = document.querySelector('.carousel-slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const slides = document.querySelectorAll('.testimonial');
    let index = 0;

    function showSlide(n) {
        if (n >= slides.length) index = 0;
        else if (n < 0) index = slides.length - 1;
        else index = n;

        slide.style.transform = `translateX(${-index * 100}%)`;
    }

    prevBtn.addEventListener('click', () => {
        showSlide(index - 1);
    });

    nextBtn.addEventListener('click', () => {
        showSlide(index + 1);
    });

    // Auto slide every 5 seconds
    setInterval(() => {
        showSlide(index + 1);
    }, 5000);
});

/* Menu hamburguer */
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

// btn scroll to top
const scrollToTop = document.getElementById('scrollToTop');

scrollToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Faz a rolagem ser suave
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTop.style.display = 'flex';
    } else {
        scrollToTop.style.display = 'none';
    }
});

/* Formulario */ 

// Validar nome
document.getElementById('name').addEventListener('blur', function(e) {
    const nameField = e.target;
    
    if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(nameField.value)) {
        this.setCustomValidity('O nome completo não pode conter números ou caracteres especiais.');
        this.reportValidity();
        this.onfocus();
    }
    nameField.setCustomValidity('');
});

// Validar sobrenome
document.getElementById('surname').addEventListener('blur', function(e) {
    const surnameField = e.target;
    
    if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(surnameField.value)) {
        this.setCustomValidity('O sobrenome não pode conter números ou caracteres especiais.');
        this.reportValidity();
        this.onfocus();
    }
    surnameField.setCustomValidity('');
});

// Validar email
document.getElementById('email').addEventListener('blur', function(e) {
    const emailField = e.target;
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
        this.setCustomValidity('Digite um email válido.');
        this.reportValidity();
        this.onfocus();
    }
    emailField.setCustomValidity('');
});

const form = document.getElementById('myForm');

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const formData = new FormData(this);

    const data = await fetch('form.php', {
        method: 'POST',
        body: formData
    });
        
});

function enviarFormulario() {
    //
}

/* Modal */

// Abre o modal ao clicar em "Enviar"
document.getElementById('openModal').addEventListener('click', function (event) {
    event.preventDefault(); // Impede o envio do formulário
    document.getElementById('confirmationModal').style.display = 'block'; // Mostra o modal
});

// Fecha o modal ao clicar no "X"
document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('confirmationModal').style.display = 'none'; // Fecha o modal
});

// Fecha o modal ao clicar em "Cancelar"
document.getElementById('cancelSend').addEventListener('click', function () {
    document.getElementById('confirmationModal').style.display = 'none'; // Fecha o modal ao cancelar
});

// Envia o formulário ao clicar em "Sim, enviar"
document.getElementById('confirmSend').addEventListener('click', function () {
    document.getElementById('confirmationModal').style.display = 'none'; // Fecha o modal
    document.getElementById('myForm').submit(); // Envia o formulário
});