document.addEventListener("DOMContentLoaded", function () {

    const detailButtons = document.querySelectorAll('.view-details-btn');
    
    detailButtons.forEach(button => {
        button.addEventListener('click', function () {
            const title = this.getAttribute('data-title');
            const info = this.getAttribute('data-info');
            alert(`Detalles de: ${title}\n\n${info}`);
        });
    });

    const contactForm = document.getElementById('contactForm');
    const formAlert = document.getElementById('formAlert');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            event.stopPropagation();

            const name = document.getElementById('nameInput').value.trim();
            const email = document.getElementById('emailInput').value.trim();
            const message = document.getElementById('messageInput').value.trim();

            if (!contactForm.checkValidity() || name === "" || email === "" || message === "") {
                contactForm.classList.add('was-validated');
                showAlert('Por favor, completa todos los campos requeridos correctamente.', 'danger');
            } else {
                contactForm.classList.remove('was-validated');
                contactForm.reset();
                showAlert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.', 'success');
            }
        });
    }

    function showAlert(message, type) {
        if (formAlert) {
            formAlert.className = `alert alert-${type} d-block`;
            formAlert.textContent = message;
        }
    }
});