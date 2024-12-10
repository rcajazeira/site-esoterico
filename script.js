document.addEventListener('DOMContentLoaded', function() {
    const paymentButtons = document.querySelectorAll('.payment-btn');

    paymentButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const paymentMethod = this.textContent;

            function processPayment(method) {
                switch(method) {
                    case 'WhatsApp':
                        alert('Redirecionando para nosso WhatsApp de atendimento...');
                        break;
                    case 'Cartão de Crédito':
                        alert('Iniciando processo de pagamento via Cartão de Crédito');
                        break;
                    case 'PIX':
                        alert('Gerando QR Code de pagamento PIX');
                        break;
                }
            }

            processPayment(paymentMethod);
        });
    });
});