// ============ MENÚ HAMBURGUESA ============
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar-container')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// ============ SISTEMA DE NOTIFICACIONES ============
function mostrarNotificacion(mensaje, tipo = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${tipo}`;
    notification.textContent = mensaje;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============ VALIDACIÓN DE FORMULARIOS ============
function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

function validarTelefono(telefono) {
    const regexTelefono = /^[\d\s\-\+\(\)]{7,}$/;
    return regexTelefono.test(telefono);
}

// ============ FORMULARIO DE CONTACTO ============
const formularioContacto = document.getElementById('formularioContacto');

if (formularioContacto) {
    formularioContacto.addEventListener('submit', (e) => {
        e.preventDefault();

        // Obtener valores
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const asunto = document.getElementById('asunto').value;
        const mensaje = document.getElementById('mensaje').value.trim();

        // Validar campos
        if (!nombre) {
            mostrarNotificacion('Por favor, ingresa tu nombre', 'error');
            return;
        }

        if (!validarEmail(email)) {
            mostrarNotificacion('Por favor, ingresa un email válido', 'error');
            return;
        }

        if (!validarTelefono(telefono)) {
            mostrarNotificacion('Por favor, ingresa un teléfono válido', 'error');
            return;
        }

        if (!asunto) {
            mostrarNotificacion('Por favor, selecciona un asunto', 'error');
            return;
        }

        if (!mensaje || mensaje.length < 10) {
            mostrarNotificacion('El mensaje debe tener al menos 10 caracteres', 'error');
            return;
        }

        // Enviar a Formspree
        const formData = new FormData(formularioContacto);

        fetch('https://formspree.io/f/mykbeaza', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                mostrarNotificacion('¡Mensaje enviado correctamente! Te contactaremos pronto.', 'success');
                formularioContacto.reset();
            } else {
                mostrarNotificacion('Error al enviar el mensaje. Por favor intenta de nuevo.', 'error');
            }
        })
        .catch(error => {
            mostrarNotificacion('Error al enviar el mensaje', 'error');
            console.error('Error:', error);
        })
    });
}

// ============ ANIMACIONES AL SCROLL ============
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animación a elementos
document.querySelectorAll('.servicio-card, .stat-card, .team-member, .faq-item, .galeria-item-completa').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ============ SMOOTH SCROLL LINKS ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ============ ANIMACIÓN DE CARGA DE PÁGINA ============
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ============ EFECTOS DE HOVER EN BOTONES ============
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-2px)';
    });

    button.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

// ============ CONTADOR DE CARRERA PARA ESTADÍSTICAS ============
let hasAnimated = false;

window.addEventListener('scroll', () => {
    if (!hasAnimated) {
        const stats = document.querySelectorAll('.stat-card');
        stats.forEach(stat => {
            const rect = stat.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                animateNumbers();
                hasAnimated = true;
            }
        });
    }
});

function animateNumbers() {
    const elements = document.querySelectorAll('.stat-number');
    
    elements.forEach(element => {
        const finalValue = element.textContent;
        const numericValue = parseInt(finalValue);
        
        if (isNaN(numericValue)) return;
        
        let currentValue = 0;
        const increment = Math.ceil(numericValue / 50);
        
        const counter = setInterval(() => {
            currentValue += increment;
            if (currentValue >= numericValue) {
                element.textContent = finalValue;
                clearInterval(counter);
            } else {
                element.textContent = currentValue + '+';
            }
        }, 30);
    });
}

// ============ INICIALIZACIÓN ============
console.log('✅ Plantilla web cargada correctamente');
