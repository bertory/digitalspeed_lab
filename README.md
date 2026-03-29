# 🚀 PLANTILLA WEB PROFESIONAL PARA PEQUEÑOS NEGOCIOS

Una plantilla web **100% editable, responsive y funcional** diseñada para vender a pequeños negocios y empresas locales.

## 📁 Estructura de Carpetas

```
plantilla-web/
├── index.html              # Página principal
├── sobre-nosotros.html     # Información de la empresa
├── servicios.html          # Detalle de servicios
├── galeria.html            # Portafolio/galería de proyectos
├── contacto.html           # Formulario de contacto
├── style.css               # Estilos CSS
├── script.js               # JavaScript funcional
└── README.md               # Este archivo
```

## 🎯 Características Incluidas

✅ **Multi-página funcional** - 5 páginas HTML conectadas
✅ **Responsive design** - Funciona en móvil, tablet y desktop
✅ **Menú hamburguesa** - Navegación automática en dispositivos pequeños
✅ **Formulario funcional** - Con validación de datos
✅ **Animaciones suaves** - Al hacer scroll
✅ **Sistema de notificaciones** - Feedback visual al usuario
✅ **Totalmente editable** - Comentarios claros en el código
✅ **Colores personalizables** - Variables CSS para cambiar tema
✅ **SEO básico** - Meta tags listos
✅ **Velocidad optimizada** - Código limpio y eficiente

## 📝 GUÍA RÁPIDA DE EDICIÓN

### 1️⃣ Cambiar Nombre y Logo

En **todos los archivos HTML**, busca y reemplaza:

```html
<!-- ANTES -->
<h1><a href="index.html">Mi Negocio</a></h1>

<!-- DESPUÉS -->
<h1><a href="index.html">Tu Nombre de Negocio</a></h1>
```

También en el footer:

```html
<!-- Reemplazar en todos los archivos -->
<p>&copy; 2026 Mi Negocio. Todos los derechos reservados.</p>

<!-- Por -->
<p>&copy; 2026 Tu Nombre de Negocio. Todos los derechos reservados.</p>
```

### 2️⃣ Cambiar Colores Principales

Abre `style.css` y busca la sección `:root`:

```css
:root {
    --color-primary: #2c3e50;      /* Color principal (header, etc) */
    --color-secondary: #3498db;    /* Color secundario (botones) */
    --color-accent: #e74c3c;       /* Color de acento (hover) */
    --color-dark: #1a1a1a;         /* Fondo oscuro */
}
```

**Combos de colores recomendados:**

| Estilo | Primary | Secondary | Accent |
|--------|---------|-----------|--------|
| Profesional | #2c3e50 | #3498db | #e74c3c |
| Moderno | #1a1a1a | #00d4ff | #ff006e |
| Verde | #27ae60 | #16a085 | #f39c12 |
| Naranja | #8b4513 | #d68910 | #e74c3c |
| Púrpura | #6c3483 | #8e44ad | #f39c12 |

### 3️⃣ Editar Contenido de Inicio

En `index.html`:

```html
<!-- Título del hero -->
<h1>Bienvenido a Mi Negocio</h1>
<p>Servicios de calidad para tu comunidad local</p>

<!-- Descripción "¿Quiénes Somos?" -->
<h2>¿Quiénes Somos?</h2>
<p>Texto aquí...</p>

<!-- Estadísticas -->
<div class="stat-number">1000+</div>
<div class="stat-label">Clientes Satisfechos</div>
```

### 4️⃣ Editar Servicios

En `index.html` y `servicios.html`:

```html
<div class="servicio-card">
    <div class="servicio-icon">🔧</div>  <!-- Cambia el emoji -->
    <h3>Servicio 1</h3>                  <!-- Nombre del servicio -->
    <p>Descripción breve...</p>           <!-- Descripción -->
    <a href="servicios.html" class="card-link">Ver Detalle →</a>
</div>
```

**Emojis útiles:**
- 🔧 ⚙️ 🛠️ (Reparación)
- 🎨 ✏️ 📐 (Diseño)
- 🏗️ 👷 🏠 (Construcción)
- 🧹 🧼 ✨ (Limpieza)
- ✂️ 💇 💄 (Peluquería)
- 🍽️ 🍕 👨‍🍳 (Restaurante)
- 🌿 🌱 🪴 (Jardinería)
- 💻 📱 ⌨️ (Informática)

### 5️⃣ Editar Información de Contacto

En `contacto.html`:

```html
<!-- Teléfono -->
<p><a href="tel:+15559000000">+1 (555) 900-0000</a></p>

<!-- Email -->
<p><a href="mailto:info@minegoció.com">info@minegoció.com</a></p>

<!-- Ubicación -->
<p>Calle Principal 123<br>Tu Ciudad, Estado</p>

<!-- Horario -->
<p><strong>Lunes a Viernes:</strong> 9:00 AM - 6:00 PM<br>
   <strong>Sábado:</strong> 10:00 AM - 2:00 PM</p>
```

### 6️⃣ Editar Redes Sociales

En todos los archivos, busca:

```html
<!-- Reemplazar URLs -->
<a href="https://facebook.com/tupagina">👍 Facebook</a>
<a href="https://instagram.com/tuperfil">📷 Instagram</a>
<a href="https://wa.me/15559000000">💬 WhatsApp</a>
```

### 7️⃣ Agregar Imágenes

En `galeria.html`, reemplaza los gradientes por imágenes:

```html
<!-- ANTES (Gradiente) -->
<div class="galeria-image-large" 
     style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"></div>

<!-- DESPUÉS (Imagen) -->
<div class="galeria-image-large" 
     style="background-image: url('ruta/a/tu/imagen.jpg'); background-size: cover;"></div>
```

**Free Stock Photos:**
- Pexels.com
- Unsplash.com
- Pixabay.com

### 8️⃣ Formulario Funcional

El formulario ya tiene validación cliente. Para hacer que envíe correos, necesitas un backend (PHP, Node.js, etc.).

Ejemplo simple con formspree.io (gratis):

```javascript
// En script.js, línea ~85, reemplaza esto:
formularioContacto.addEventListener('submit', (e) => {
    e.preventDefault();
    // ... validación ...
    mostrarNotificacion('¡Mensaje enviado correctamente!', 'success');
    formularioContacto.reset();
});

// Por esto:
formularioContacto.addEventListener('submit', (e) => {
    e.preventDefault();
    // ... validación ...
    
    // Enviar a formspree
    fetch('https://formspree.io/f/tu-id', {
        method: 'POST',
        body: new FormData(formularioContacto),
        headers: { 'Accept': 'application/json' }
    })
    .then(response => {
        if (response.ok) {
            mostrarNotificacion('¡Mensaje enviado!', 'success');
            formularioContacto.reset();
        }
    })
    .catch(() => mostrarNotificacion('Error al enviar', 'error'));
});
```

## 🎨 Cambiar Fuentes

En `style.css`:

```css
:root {
    --font-title: 'Georgia', 'Garamond', serif;    /* Títulos */
    --font-body: 'Segoe UI', Tahoma, Geneva, sans-serif;  /* Cuerpo */
}
```

**Fuentes Google recomendadas:**

Títulos: `Playfair Display`, `Montserrat`, `Raleway`
Cuerpo: `Open Sans`, `Poppins`, `Roboto`

## 📱 Responsive Design

La plantilla se adapta automáticamente a:

- **Desktop:** 1200px+
- **Tablet:** 768px - 1199px
- **Móvil:** 480px - 767px

## 🚀 Cómo Publicar

### Opción 1: Hosting Gratis
- **Netlify.com** - Sube tus archivos y listo
- **GitHub Pages** - Si usas GitHub
- **Vercel.com** - Super fácil para principiantes

### Opción 2: Hosting Pagado
- **Hostinger.com** - Económico y bueno
- **Namecheap.com** - Dominio + hosting
- **GoDaddy.com** - Popular pero caro

### Pasos para publicar en Netlify:
1. Crea una carpeta con todos los archivos
2. Ve a Netlify.com
3. Arrastra la carpeta al area de "Drop"
4. ¡Listo! Tu web está en línea

## 🔍 SEO Básico

Para mejorar visibilidad en Google, edita los títulos de cada página:

```html
<title>Mi Negocio - Servicios Profesionales en Tu Ciudad</title>
```

Agrega palabras clave relevantes.

## 📋 Checklist Antes de Publicar

- [ ] Cambiar nombre del negocio en todos los archivos
- [ ] Editar colores en style.css
- [ ] Actualizar teléfono y email
- [ ] Cambiar dirección y horario
- [ ] Agregar descripción en "Sobre Nosotros"
- [ ] Editar servicios
- [ ] Agregar testimonios reales
- [ ] Agregar imágenes de proyectos
- [ ] Probar en móvil
- [ ] Probar todos los enlaces
- [ ] Probar formulario

## 🆘 Solución de Problemas

**El menú no funciona en móvil:**
- Asegúrate de que `script.js` está incluido en el HTML

**Los estilos no se ven:**
- Verifica que `style.css` está en la misma carpeta
- Recarga la página (Ctrl+Shift+R en Chrome)

**El formulario no envía:**
- El formulario actual solo muestra notificación
- Configura Formspree.io para recibir correos

**Las imágenes no se ven:**
- Usa rutas relativas: `./imagenes/foto.jpg`
- Asegúrate de que la carpeta de imágenes existe

## 💡 Tips Profesionales

1. **Usa de 2-3 colores máximo** - No saturar la vista
2. **Emojis con moderación** - Máximo 1 por sección
3. **Texto conciso** - Los clientes leen rápido
4. **Teléfono prominente** - Es la forma #1 de contacto local
5. **Testimonios genuinos** - Aumentan confianza
6. **Fotos de calidad** - Vale la pena invertir
7. **Actualiza regularmente** - Mantén la web fresca

## 📚 Recursos Útiles

- **Colores:** Coolors.co
- **Fuentes:** Google Fonts
- **Iconos:** Emojipedia.org
- **Imágenes:** Pexels.com, Unsplash.com
- **Inspiración:** Dribbble.com, Behance.net

## 📞 Soporte

Esta es una plantilla de código abierto. Para problemas:

1. Verifica que todos los archivos están en la misma carpeta
2. Recarga la página completa (Ctrl+Shift+R)
3. Abre la consola (F12) para ver errores

---

**¡Tu web está lista para vender! 🎉**

Edita con confianza, customiza los colores, y comienza a captar clientes locales.

---

**Créditos:** Plantilla profesional diseñada para pequeños negocios y emprendedores.

Última actualización: 2026
