$(document).ready(function() {
    $('#sendBtn').click(function() {
        let userMessage = $('#userInput').val();
        if (userMessage.trim() !== '') {
            $('#chatBody').append(`<div class="message user">${userMessage}</div>`);
            $('#userInput').val('');
            botResponse(userMessage);
        }
    });

    $('#userInput').keypress(function(e) {
        if (e.which === 13) {
            $('#sendBtn').click();
        }
    });

    function botResponse(message) {
        let botMessage = getBotResponse(message);
        setTimeout(function() {
            $('#chatBody').append(`<div class="message bot">${botMessage}</div>`);
            $('#chatBody').scrollTop($('#chatBody')[0].scrollHeight);
        }, 1000);
    }

    function getBotResponse(message) {
        // Aquí puedes añadir lógica más compleja para generar respuestas del bot
        if (message.toLowerCase().includes('hola')) {
            return '¡Hola! ¿Cómo puedo ayudarte hoy?';
        } else {
            return 'Lo siento, no entiendo tu mensaje.';
        }
    }
});
