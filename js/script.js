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

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const confirmationModal = document.getElementById('confirmationModal');
    const successModal = document.getElementById('successModal');  // Modal de sucesso
    const closeModal = document.getElementById('closeModal');
    const confirmSend = document.getElementById('confirmSend');
    const cancelSend = document.getElementById('cancelSend');
    const successClose = successModal.querySelector('.close');  // Fechar modal de sucesso

    // Impede o envio do formulário para mostrar o modal
    form.addEventListener('submit', function (event) {
        event.preventDefault();  // Previne o envio padrão para evitar o redirecionamento

        const nameField = document.getElementById('name');
        const surnameField = document.getElementById('surname');
        const emailField = document.getElementById('email');
        const messageField = document.getElementById('message');

        const isNameValid = validateField(nameField, /^[a-zA-ZÀ-ÿ\s]+$/, 'O nome completo não pode conter números ou caracteres especiais.');
        const isSurnameValid = validateField(surnameField, /^[a-zA-ZÀ-ÿ\s]+$/, 'O sobrenome não pode conter números ou caracteres especiais.');
        const isEmailValid = validateField(emailField, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Digite um email válido.');
        const isMessageValid = validateMessageField(messageField);

        if (isNameValid && isSurnameValid && isEmailValid && isMessageValid) {
            // Exibe o modal de confirmação
            confirmationModal.style.display = 'block';
        }
    });

    // Fecha o modal de confirmação
    closeModal.addEventListener('click', function () {
        confirmationModal.style.display = 'none';
    });

    cancelSend.addEventListener('click', function () {
        confirmationModal.style.display = 'none';
    });

    // Envia o formulário via AJAX após a confirmação
    confirmSend.addEventListener('click', function () {
        // Envia via FormSubmit AJAX
        const formData = new FormData(form);
        fetch('https://formsubmit.co/ajax/diego.devwebb@gmail.com', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())  // Processa a resposta em JSON
        .then(data => {
            if (data.success === "true") {
                // Exibe o modal de sucesso
                successModal.style.display = 'block';
                confirmationModal.style.display = 'none';  // Fecha o modal de confirmação
            } else {
                alert('Erro ao enviar a mensagem.');
            }
        })
        .catch(error => {
            console.error('Erro ao enviar:', error);
            alert('Erro ao enviar a mensagem. Tente novamente.');
        });

        // Fecha o modal de confirmação
        confirmationModal.style.display = 'none';
    });

    // Fecha o modal de sucesso
    successClose.addEventListener('click', () => {
        successModal.style.display = 'none';
        // Opcional: redireciona para a página inicial (se necessário)
        window.location.href = '/'; // Descomente se quiser redirecionar para a página inicial
    });

});

// Funções de validação
function validateField(field, regex, errorMessage) {
    if (!regex.test(field.value)) {
        field.setCustomValidity(errorMessage);
        field.reportValidity();
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


// Funções de validação
function validateField(field, regex, errorMessage) {
    if (!regex.test(field.value)) {
        field.setCustomValidity(errorMessage);
        field.reportValidity();
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


function validateField(field, regex, errorMessage) {
    if (!regex.test(field.value)) {
        field.setCustomValidity(errorMessage);
        field.reportValidity();
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


/* Modal de teste grátis (após 5 segundos) */
const freeTrialModal = document.getElementById('freeTrialModal');
const closeFreeTrialModal = document.getElementById('closeFreeTrialModal');

let modalClosed = false;

// Mostrar o modal após 5 segundos
setTimeout(() => {
    freeTrialModal.style.display = 'block';
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

// Seleciona todas as imagens com a classe zoom-image-pdv e zoom-image-assinador
const zoomImages = document.querySelectorAll('.zoom-image-pdv, .zoom-image-assinador, .zoom-image-nfe, .zoom-image-erp, .zoom-image-egestor, .zoom-image-egestor1, .zoom-image-kapti');

// Seleciona todos os overlays
const overlays = document.querySelectorAll('.overlay');

// Seleciona todos os botões de fechar
const closeBtns = document.querySelectorAll('.close-btn');

// Adiciona um evento de clique para cada imagem
zoomImages.forEach((image, index) => {
    image.addEventListener('click', (e) => {
        // Exibe o overlay correspondente
        overlays[index].style.display = 'flex';

        // Define a imagem ampliada no overlay
        const overlayContent = overlays[index].querySelector('.overlay-content');
        overlayContent.src = image.src;

        // Adiciona um evento de clique no documento para fechar a imagem
        document.addEventListener('click', (e) => {
            if (e.target !== image && e.target !== overlayContent && e.target !== overlays[index]) {
                overlays[index].style.display = 'none';
            }
        });
    });
});

// Adiciona um evento de clique para cada botão de fechar
closeBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // Oculta o overlay correspondente
        overlays[index].style.display = 'none';
    });
});