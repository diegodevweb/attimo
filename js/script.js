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

// Funções de validação
function validateField(field, regex, errorMessage) {
    const value = field.value.trim();
    const isValid = regex.test(value);
    
    if (!isValid) {
        alert(errorMessage);
        field.focus();
    }
    
    return isValid;
}

// Formspree Integration with Confirmation and Success Modals

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const openModalButton = document.getElementById('openModal');
    const confirmationModal = document.getElementById('confirmationModal');
    const successModal = document.getElementById('successModal');
    const closeModal = document.getElementById('closeModal');
    const confirmSend = document.getElementById('confirmSend');
    const cancelSend = document.getElementById('cancelSend');
    const successClose = successModal.querySelector('.close');
    const okButton = document.getElementById('okButton');

    // Validation functions
    function validateField(field, regex, errorMessage) {
        const value = field.value.trim();
        const isValid = regex.test(value);
        
        if (!isValid) {
            alert(errorMessage);
            field.focus();
        }
        
        return isValid;
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

    // Open confirmation modal on form submission attempt
    openModalButton.addEventListener('click', function () {
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

    // Close confirmation modal
    function closeConfirmationModal() {
        confirmationModal.style.display = 'none';
    }

    closeModal.addEventListener('click', closeConfirmationModal);
    cancelSend.addEventListener('click', closeConfirmationModal);

    // Send form via Formspree
    confirmSend.addEventListener('click', function () {
        const formData = new FormData(form);
        
        // Formspree endpoint
        fetch('https://formspree.io/f/mqakldjz', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na resposta da rede');
            }
            return response.json();
        })
        .then(data => {
            console.log('Resposta do servidor:', data);
            
            // Check success based on Formspree response structure
            successModal.style.display = 'block';
            confirmationModal.style.display = 'none';
            form.reset();
        })
        .catch(error => {
            console.error('Erro detalhado:', error);
            alert('Erro ao enviar a mensagem. Verifique o console.');
        });
    
        closeConfirmationModal();
    });

    // Close success modal
    function closeSuccessModal() {
        successModal.style.display = 'none';
    }

    successClose.addEventListener('click', closeSuccessModal);
    okButton.addEventListener('click', closeSuccessModal);
});
const zoomImages = document.querySelectorAll('.zoom-image-pdv, .zoom-image-assinador, .zoom-image-nfe, .zoom-image-erp, .zoom-image-egestor, .zoom-image-egestor1, .zoom-image-kapti');

zoomImages.forEach((image) => {
  image.addEventListener('click', (e) => {
    const overlay = image.closest('section').querySelector('.overlay');
    const overlayContent = overlay.querySelector('.overlay-content');
    
    overlay.style.display = 'flex';
    overlayContent.src = image.src;
    
    const closeClickHandler = (e) => {
      if (e.target !== image && e.target !== overlayContent && e.target !== overlay) {
        overlay.style.display = 'none';
        document.removeEventListener('click', closeClickHandler);
      }
    };
    
    document.addEventListener('click', closeClickHandler);
    
    const closeBtn = overlay.querySelector('.close-btn');
    closeBtn.onclick = () => {
      overlay.style.display = 'none';
      document.removeEventListener('click', closeClickHandler);
    };
  });
});

// UTM

// Função para capturar parâmetros UTM da URL
function getUTMParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams = {
        utm_source: urlParams.get('utm_source') || '',
        utm_medium: urlParams.get('utm_medium') || '',
        utm_campaign: urlParams.get('utm_campaign') || '',
        utm_term: urlParams.get('utm_term') || '',
        utm_content: urlParams.get('utm_content') || ''
    };
    return utmParams;
}

// Função para salvar os parâmetros UTM no localStorage
function saveUTMParameters() {
    const utmParams = getUTMParameters();
    
    // Só salva no localStorage se houver pelo menos um parâmetro UTM na URL
    if (utmParams.utm_source || utmParams.utm_medium || utmParams.utm_campaign || utmParams.utm_term || utmParams.utm_content) {
        localStorage.setItem('utm_params', JSON.stringify(utmParams));
    }
}

// Função para preencher os campos UTM no formulário
function fillUTMFields() {
    let utmParams;
    
    // Primeiro verifica se há parâmetros na URL atual
    const currentParams = getUTMParameters();
    
    // Se não houver na URL atual, tenta pegar do localStorage
    if (!currentParams.utm_source && !currentParams.utm_medium && !currentParams.utm_campaign && !currentParams.utm_term && !currentParams.utm_content) {
        const savedParams = localStorage.getItem('utm_params');
        if (savedParams) {
            utmParams = JSON.parse(savedParams);
        } else {
            utmParams = currentParams; // Usa os valores vazios
        }
    } else {
        utmParams = currentParams;
    }
    
    // Preenche os campos ocultos no formulário
    document.getElementById('utm_source').value = utmParams.utm_source;
    document.getElementById('utm_medium').value = utmParams.utm_medium;
    document.getElementById('utm_campaign').value = utmParams.utm_campaign;
    document.getElementById('utm_term').value = utmParams.utm_term;
    document.getElementById('utm_content').value = utmParams.utm_content;
}

// Executar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Salva os parâmetros UTM (se existirem na URL)
    saveUTMParameters();
    
    // Preenche os campos do formulário
    fillUTMFields();
    
    // Certifica-se de que os valores UTM sejam enviados com o formulário
    const form = document.getElementById('myForm');
    if (form) {
        // Quando o botão de envio é clicado, garante que os campos UTM estejam preenchidos
        document.getElementById('openModal').addEventListener('click', function() {
            fillUTMFields();
        });
        
        // Também garante que os campos UTM estejam preenchidos quando o formulário for enviado
        document.getElementById('confirmSend').addEventListener('click', function() {
            fillUTMFields();
        });
    }
});

// Alterações 28-04
// Script para exibir o modal de formulário quando a página carregar
document.addEventListener("DOMContentLoaded", function () {
  // Exibe o modal do formulário automaticamente após 2 segundos
  setTimeout(function () {
    var formModal = new bootstrap.Modal(
      document.getElementById("formModal")
    );
    formModal.show();
  }, 2000);

  // Manipulação do modal de imagem
  let imageModal = document.getElementById("imageModal");
  if (imageModal) {
    imageModal.addEventListener("show.bs.modal", function (event) {
      let button = event.relatedTarget;
      let imgSrc = button.getAttribute("data-img");
      let modalImg = imageModal.querySelector(".modal-img");
      modalImg.src = imgSrc;
    });
  }

  // Botão de voltar ao topo
  let scrollTopButton = document.getElementById("scrollToTop");
  if (scrollTopButton) {
    window.onscroll = function () {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        scrollTopButton.style.display = "block";
      } else {
        scrollTopButton.style.display = "none";
      }
    };

    scrollTopButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Aplicar máscara ao campo de telefone
  $(".phone-mask").mask("(00) 00000-0000");

  // Validação do formulário
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    });
  });

  // Suaviza o scroll para as âncoras de navegação
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      // Se é o link para abrir o modal, não previne o comportamento padrão
      if (this.getAttribute("data-bs-toggle") === "modal") {
        return;
      }

      e.preventDefault();

      // Fecha o menu mobile se estiver aberto
      var navbarCollapse = document.querySelector(".navbar-collapse");
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        bootstrap.Collapse.getInstance(navbarCollapse).hide();
      }

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});