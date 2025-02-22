const botao = document.getElementsByTagName('button')[0].addEventListener('click', async () => { 
        const email = document.getElementById('email').value
        const subject  = document.getElementById('subject').value
        const text = document.getElementById('message').value
    
        const emailInfo = { // definição das informações usadas na linha 27 do arquivo backend
            to: process.env.NODEMAILER_MAIL,
            subject: subject,
            text: `Email do remetente: ${email}\n\n${text}`
        }
    
        try {
    
            const response = await fetch("https://sdpapeis-api.vercel.app/api/send-email", { // faz uma requisição http para o backend usando o metodo post
                method: "POST", // metodo http para enviar as informações
                headers: { "Content-Type": "application/json" }, // definição do cabeçalho da requisição
                body: JSON.stringify(emailInfo), // converte as informações para json
                mode: "cors",
            });
    
            const result = await response.json();
            console.log (result.message);
        } catch (error) {
            console.log("Erro ao enviar email: ", error)
        }
        
});

    // validação do formulário de newtest com JQuery

    const toastContainer = document.getElementById('toast-container');
    const toastTitle = document.getElementById('toast-title');
    const toastHeader = document.getElementById('toast-header');
    const toastBody = document.getElementById('toast-body');
    const toastDescription = document.getElementById('toast-description');

    $('.form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            },
            checkbox: {
                required: true
            }
        },
        messages: {
            name: 'Digite seu nome',
            email: 'Digite um email valido',
            message: 'Digite uma mensagem',
            checkbox: 'Aceite os termos de uso',
        },
        submitHandler: function() {
            toastContainer.style.display = 'block';
            toastDescription.innerHTML = 'Email submited';
            toastBody.classList.remove('toast__body--error');
            toastHeader.classList.remove('toast__header--error');
            toastTitle.innerHTML = 'Sucess';
            setTimeout(() => {
                toastContainer.style.display = 'none';
            }, 3000);
        },
        invalidHandler: function(e , validador) {
            let camposIncorretos = validador.numberOfInvalids();

            if (camposIncorretos > 1) {
                toastContainer.style.display = 'block';
                toastDescription.innerHTML = `There are ${camposIncorretos} incorrect fields`;
                toastTitle.innerHTML = 'Error';
                toastBody.classList.add('toast__body--error');
                toastHeader.classList.add('toast__header--error');
                setTimeout(() => {
                    toastContainer.style.display = 'none';
                }, 3000);
            } else {
                toastContainer.style.display = 'block';
                toastDescription.innerHTML = `There is ${camposIncorretos} incorrect field`;
                toastTitle.innerHTML = 'Error';
                toastBody.classList.add('toast__body--error');
                toastHeader.classList.add('toast__header--error');
                setTimeout(() => {
                    toastContainer.style.display = 'none';
                }, 3000);
            }
        }
    });
   


    