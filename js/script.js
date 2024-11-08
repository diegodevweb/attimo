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
    }, 7000);
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

document.addEventListener('click', function(event) {
    const sidebar = document.querySelector('.sidebar');
    const nav = document.querySelector('nav');
    
    // Verifica se o clique foi fora da nav e da sidebar
    if (!nav.contains(event.target)) {
        hideSidebar();  // Fecha o menu se clicar fora
    }
});

// Botão "scroll to top"
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

// Validação de formulário e modal de confirmação
const form = document.getElementById('myForm');
const confirmationModal = document.getElementById('confirmationModal');
const closeModal = document.getElementById('closeModal');
const confirmSend = document.getElementById('confirmSend');
const cancelSend = document.getElementById('cancelSend');

function validateField(field, regex, errorMessage) {
    if (!regex.test(field.value)) {
        field.setCustomValidity(errorMessage);
        field.reportValidity(); // Exibe a mensagem de erro
        return false;
    }
    field.setCustomValidity('');
    return true;
}

function validateMessageField(field) {
    if (field.value.trim() === '') {
        field.setCustomValidity('A mensagem não pode estar em branco.');
        field.reportValidity();
        return false;
    }
    field.setCustomValidity('');
    return true;
}

document.addEventListener('DOMContentLoaded', function() {
    const confirmationModal = document.getElementById('confirmationModal');
    const closeModal = document.getElementById('closeModal');
    const cancelSend = document.getElementById('cancelSend');
    const confirmSend = document.getElementById('confirmSend');
    const openModal = document.getElementById('openModal'); // Certifique-se de que você tem um botão para abrir o modal

    openModal.addEventListener('click', function() {
        const nameField = document.getElementById('name');
        const surnameField = document.getElementById('surname');
        const emailField = document.getElementById('email');
        const messageField = document.getElementById('message');

        const isNameValid = validateField(nameField, /^[a-zA-ZÀ-ÿ\s]+$/, 'O nome completo não pode conter números ou caracteres especiais.');
        const isSurnameValid = validateField(surnameField, /^[a-zA-ZÀ-ÿ\s]+$/, 'O sobrenome não pode conter números ou caracteres especiais.');
        const isEmailValid = validateField(emailField, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Digite um email válido.');
        const isMessageValid = validateMessageField(messageField);

        if (isNameValid && isSurnameValid && isEmailValid && isMessageValid) {
            confirmationModal.style.display = 'block';
        }
    });

    closeModal.addEventListener('click', function() {
        confirmationModal.style.display = 'none';
    });

    cancelSend.addEventListener('click', function() {
        confirmationModal.style.display = 'none';
    });

    confirmSend.addEventListener('click', function() {
        form.submit(); // Certifique-se de que a variável 'form' está definida corretamente
    });
});


/* Modal de teste grátis (após 5 segundos) */
const freeTrialModal = document.getElementById('freeTrialModal');
const closeFreeTrialModal = document.getElementById('closeFreeTrialModal');

let modalClosed = false;

// Mostrar o modal após 5 segundos
setTimeout(() => {
    if (!modalClosed) {
        freeTrialModal.style.display = 'block';
    }
}, 5000);

// Fechar o modal ao clicar no "X"
closeFreeTrialModal.addEventListener('click', () => {
    freeTrialModal.style.display = 'none';
    modalClosed = true;
});

// Fechar o modal ao clicar fora da área de conteúdo
window.addEventListener('click', (event) => {
    if (event.target === freeTrialModal) {
        freeTrialModal.style.display = 'none';
        modalClosed = true;
    }
});
