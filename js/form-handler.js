// document.addEventListener('DOMContentLoaded', function() {
//     // Seleciona os dois formulários
//     const contactForm = document.getElementById('contactForm');
//     const contactFormInline = document.getElementById('contactFormInline');
    
//     // Adiciona máscara para os campos de telefone
//     document.querySelectorAll('.phone-mask').forEach(function(element) {
//         element.addEventListener('input', function(e) {
//             let value = e.target.value.replace(/\D/g, '');
//             if (value.length > 11) value = value.substring(0, 11);
            
//             let formattedValue = '';
//             if (value.length > 0) formattedValue = '(' + value.substring(0, 2);
//             if (value.length > 2) formattedValue += ') ' + value.substring(2, 7);
//             if (value.length > 7) formattedValue += '-' + value.substring(7, 11);
            
//             e.target.value = formattedValue;
//         });
//     });
    
//     // Manipulador para o formulário modal
//     if (contactForm) {
//         contactForm.addEventListener('submit', function(e) {
//             e.preventDefault();
//             submitForm(contactForm, 'formModal');
//         });
//     }
    
//     // Manipulador para o formulário inline
//     if (contactFormInline) {
//         contactFormInline.addEventListener('submit', function(e) {
//             e.preventDefault();
//             submitForm(contactFormInline);
//         });
//     }
    
//     // Função para enviar o formulário via AJAX
//     function submitForm(form, modalId = null) {
//         // Mostra indicador de carregamento ou desabilita o botão
//         const submitButton = form.querySelector('button[type="submit"]');
//         const originalText = submitButton.innerHTML;
//         submitButton.disabled = true;
//         submitButton.innerHTML = 'Enviando...';
        
//         // Coleta os dados do formulário
//         const formData = new FormData(form);
        
//         // Envia a solicitação AJAX
//         fetch('processar-formulario.php', {
//             method: 'POST',
//             body: formData
//         })
//         .then(response => response.json())
//         .then(data => {
//             // Restaura o botão
//             submitButton.disabled = false;
//             submitButton.innerHTML = originalText;
            
//             if (data.status === 'success') {
//                 // Exibe mensagem de sucesso
//                 alert(data.message);
                
//                 // Limpa o formulário
//                 form.reset();
                
//                 // Fecha o modal, se aplicável
//                 if (modalId) {
//                     const modal = bootstrap.Modal.getInstance(document.getElementById(modalId));
//                     if (modal) modal.hide();
//                 }
//             } else {
//                 // Exibe mensagem de erro
//                 alert(data.message || 'Ocorreu um erro. Por favor, tente novamente.');
//             }
//         })
//         .catch(error => {
//             // Restaura o botão e exibe erro
//             submitButton.disabled = false;
//             submitButton.innerHTML = originalText;
//             alert('Erro ao enviar formulário. Por favor, tente novamente.');
//             console.error('Erro:', error);
//         });
//     }
// });

Teste: 

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os dois formulários
    const contactForm = document.getElementById('contactForm');
    const contactFormInline = document.getElementById('contactFormInline');
    
    // Função para exibir os dados do formulário sem enviá-los
    function handleFormSubmit(event) {
        event.preventDefault();
        
        // Coleta os dados do formulário
        const formData = new FormData(event.target);
        const formValues = {};
        
        // Converte FormData para objeto
        for (let [key, value] of formData.entries()) {
            formValues[key] = value;
        }
        
        // Exibe os dados em um alerta ou console
        console.log('Dados do formulário:', formValues);
        alert('Dados do formulário recebidos (teste local):\n' + 
              'Nome: ' + formValues.nome + '\n' +
              'Telefone: ' + formValues.telefone + '\n' +
              'Empresa: ' + formValues.empresa + '\n' +
              'Email: ' + formValues.email + '\n' +
              'Colaboradores: ' + formValues.colaboradores + '\n' +
              'Sistema: ' + formValues.sistema);
              
        // Limpa o formulário
        event.target.reset();
        
        // Fecha o modal, se aplicável
        if (event.target.id === 'contactForm') {
            const modal = bootstrap.Modal.getInstance(document.getElementById('formModal'));
            if (modal) modal.hide();
        }
    }
    
    // Adiciona os listeners
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    if (contactFormInline) {
        contactFormInline.addEventListener('submit', handleFormSubmit);
    }
});