// ===== MENÚ HAMBURGUESA =====
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Cerrar menú al hacer click en un enlace
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
        });
    });

    // Inicializar funcionalidades
    initFormulario();
    initAnimaciones();
});

// ===== FORMULARIO DE CONTACTO =====
function initFormulario() {
    const contactoForm = document.querySelector('.contacto-form');
    if (!contactoForm) return;

    contactoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nombre = contactoForm.querySelector('input[placeholder="Tu Nombre"]').value.trim();
        const email = contactoForm.querySelector('input[placeholder="Tu Email"]').value.trim();
        const mensaje = contactoForm.querySelector('textarea[placeholder="Tu Mensaje"]').value.trim();

        if (!nombre || !email || !mensaje) {
            mostrarNotificacion('Por favor completa todos los campos', 'error');
            return;
        }

        if (!validarEmail(email)) {
            mostrarNotificacion('Por favor ingresa un correo válido', 'error');
            return;
        }

        mostrarNotificacion('¡Mensaje Enviado! Rise, Tarnished! 🗡️', 'success');
        contactoForm.reset();
        
        console.log({
            nombre,
            email,
            mensaje
        });
    });
}

// ===== VALIDACIÓN EMAIL =====
function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

// ===== NOTIFICACIONES =====
function mostrarNotificacion(mensaje, tipo) {
    const notificacion = document.createElement('div');
    notificacion.className = `notificacion notificacion-${tipo}`;
    notificacion.textContent = mensaje;
    
    notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 2px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
        font-weight: 600;
        box-shadow: 0 0 30px rgba(212, 165, 116, 0.5);
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    `;

    if (tipo === 'success') {
        notificacion.style.backgroundColor = '#d4a574';
        notificacion.style.color = '#1a1a1a';
        notificacion.style.borderLeft = '4px solid #8b7968';
    } else if (tipo === 'error') {
        notificacion.style.backgroundColor = '#8b4513';
        notificacion.style.color = '#f5f1e8';
        notificacion.style.borderLeft = '4px solid #d4a574';
    }

    document.body.appendChild(notificacion);

    setTimeout(() => {
        notificacion.style.opacity = '0';
        notificacion.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
            notificacion.remove();
        }, 300);
    }, 4000);
}

// ===== ANIMACIONES AL SCROLL =====
function initAnimaciones() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Animar elementos
    document.querySelectorAll('.feature-card, .personaje-card, .galeria-item, .stat-item').forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });

    // Efecto parallax en hero
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        if (hero) {
            const scrollPosition = window.pageYOffset;
            hero.style.backgroundPosition = `center ${scrollPosition * 0.3}px`;
        }
    });

    // Botones con efectos
    const botones = document.querySelectorAll('.btn-primary');
    botones.forEach(boton => {
        boton.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
        });

        boton.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// ===== LOG DE INICIALIZACIÓN =====
console.log('⚔️ ELDEN RING - Página Oficial Cargada');
console.log('Rise, Tarnished!');
