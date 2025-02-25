const botao = document.getElementById('form-button').addEventListener('click', async () => { 
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const text = document.getElementById('message').value
    const subject  = "Mensagem recebida através do site da SDPapeis"
    const to = "heclypso@gmail.com"

    const emailInfo = { // definição das informações usadas na linha 27 do arquivo backend
        to: to,
        subject: subject,
        text: `Email do remetente: ${name}\n\n${email}\n\n${text}`
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
        toastDescription.innerHTML = 'Email enviado';
        toastBody.classList.remove('toast__body--error');
        toastHeader.classList.remove('toast__header--error');
        toastTitle.innerHTML = 'Sucesso';
        setTimeout(() => {
            toastContainer.style.display = 'none';
        }, 3000);
    },
    invalidHandler: function(e , validador) {
        let camposIncorretos = validador.numberOfInvalids();

        if (camposIncorretos > 1) {
            toastContainer.style.display = 'block';
            toastDescription.innerHTML = `Existem ${camposIncorretos} campos incorretos`;
            toastTitle.innerHTML = 'Error';
            toastBody.classList.add('toast__body--error');
            toastHeader.classList.add('toast__header--error');
            setTimeout(() => {
                toastContainer.style.display = 'none';
            }, 3000);
        } else {
            toastContainer.style.display = 'block';
            toastDescription.innerHTML = `Existe ${camposIncorretos} campo incorreto`;
            toastTitle.innerHTML = 'Error';
            toastBody.classList.add('toast__body--error');
            toastHeader.classList.add('toast__header--error');
            setTimeout(() => {
                toastContainer.style.display = 'none';
            }, 3000);
        }
    }
});
