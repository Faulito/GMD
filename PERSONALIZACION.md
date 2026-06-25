# 🎨 Guía de Personalización - GMD GROUP & SOLUTIONS

Esta guía te ayudará a personalizar la página web según tus necesidades específicas.

## 📝 Cambios Rápidos

### 1. **Cambiar el Nombre de la Empresa**

En `index.html`, busca y reemplaza:
```html
<!-- Antes -->
<span>GMD GROUP & SOLUTIONS</span>

<!-- Después -->
<span>TU NOMBRE DE EMPRESA</span>
```

**Ubicaciones donde aparece:**
- Logo en header
- Footer
- Todas las secciones

### 2. **Cambiar el Número de WhatsApp**

Reemplazar `51960233042` por tu número (sin espacios ni símbolos):

En `index.html`:
```html
<!-- Todos los enlaces que contengan: -->
https://wa.me/51960233042

<!-- Cambiar a: -->
https://wa.me/TU_CODIGO_PAIS_Y_NUMERO
```

**Ejemplo para Perú:**
```
Código país: +51
Número: 960233042
URL: https://wa.me/51960233042
```

### 3. **Cambiar Colores**

En `styles.css`, edita la sección `:root`:

```css
:root {
    --primary-dark: #0d0d0d;      /* Negro principal */
    --primary-black: #1a1a1a;     /* Negro alternativo */
    --secondary-dark: #2a2a2a;    /* Gris oscuro */
    --light-gray: #f5f5f5;        /* Fondo claro */
    --gold: #d4af37;              /* Color principal - CAMBIA ESTO */
    --orange: #f39c12;            /* Color secundario - CAMBIA ESTO */
    --orange-dark: #e67e22;       /* Color oscuro - CAMBIA ESTO */
    --text-dark: #333333;
    --text-light: #666666;
}
```

**Generador de colores:** https://www.colordot.it/

### 4. **Cambiar el Título de la Página**

En `index.html`:
```html
<title>GMD GROUP & SOLUTIONS - Soluciones de Iluminación Profesional</title>
```

Cambiar a:
```html
<title>Tu Título Aquí - Descripción Breve</title>
```

### 5. **Cambiar Meta Descripción (SEO)**

En `index.html`:
```html
<meta name="description" content="Descripción nueva para SEO">
```

## 🖼️ Agregar Imágenes

### Para la Sección Hero

1. Preparar una imagen de fondo (recomendado: 1920x600px)
2. En `index.html`, busca:
```html
<div class="hero-background" style="background-image: url('...')">
```

3. Cambiar por tu imagen:
```html
<div class="hero-background" style="background-image: url('images/hero-background.jpg')">
```

### Para Tarjetas de Productos

```html
<!-- Cambiar de: -->
<div class="producto-image" style="background: linear-gradient(135deg, #d4af37 0%, #f39c12 100%);">
    <i class="fas fa-bars"></i>
</div>

<!-- A: -->
<div class="producto-image" style="background-image: url('images/producto1.jpg'); background-size: cover;">
</div>
```

### Para Galería

```html
<!-- Cambiar de: -->
<div class="galeria-image" style="background: linear-gradient(...);">
    <i class="fas fa-home"></i>
</div>

<!-- A: -->
<div class="galeria-image" style="background-image: url('images/proyecto1.jpg'); background-size: cover;">
</div>
```

## 📄 Agregar Contenido

### 1. **Agregar Nuevo Servicio**

En la sección Servicios, duplica y modifica:

```html
<div class="servicio-card">
    <div class="servicio-icon">
        <i class="fas fa-icon-name"></i>  <!-- Cambiar icon -->
    </div>
    <h3>Nombre del Servicio</h3>
    <p>Descripción del servicio aquí.</p>
</div>
```

**Iconos disponibles:** https://fontawesome.com/icons

### 2. **Agregar Nuevo Producto**

```html
<div class="producto-card">
    <div class="producto-image" style="background: linear-gradient(135deg, #color1 0%, #color2 100%);">
        <i class="fas fa-icon"></i>
    </div>
    <h3>Nombre del Producto</h3>
    <p>Descripción del producto</p>
    <div class="precio">Desde $XXX</div>
</div>
```

### 3. **Agregar Proyecto a Galería**

```html
<div class="galeria-item">
    <div class="galeria-image" style="background: linear-gradient(...);">
        <i class="fas fa-icon"></i>
    </div>
    <h3>Nombre del Proyecto</h3>
    <p>Descripción del proyecto</p>
</div>
```

## 🔧 Cambios Avanzados

### Modificar Tipografía

En `styles.css`:
```css
body {
    font-family: 'Tu Fuente Aquí', sans-serif;
}
```

**Fuentes recomendadas:** 
- Google Fonts: https://fonts.google.com/
- Poppins, Inter, Montserrat, Raleway

### Agregar Fuentes de Google Fonts

1. Ir a https://fonts.google.com/
2. Seleccionar fuentes
3. Copiar el link en `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

4. Usar en CSS:
```css
body {
    font-family: 'Poppins', sans-serif;
}
```

### Cambiar Tamaños de Secciones

En `styles.css`:
```css
section {
    padding: 80px 0;  /* Cambiar aquí */
}

.hero {
    min-height: 600px;  /* Cambiar aquí */
}
```

### Modificar Animaciones

```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);  /* Cambiar distancia */
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.servicio-card {
    transition: all 0.3s ease;  /* Cambiar velocidad */
}

.servicio-card:hover {
    transform: translateY(-10px);  /* Cambiar distancia */
}
```

## 🗺️ Agregar Mapa

Reemplazar en la sección Contacto:

```html
<!-- Antes: -->
<div class="mapa-placeholder">
    <i class="fas fa-map-marker-alt"></i>
    <p>Mapa de ubicación (próximamente)</p>
</div>

<!-- Después: -->
<iframe src="https://www.google.com/maps/embed?pb=..." 
        width="100%" 
        height="300" 
        style="border:0; border-radius:8px;" 
        allowfullscreen="" 
        loading="lazy"></iframe>
```

**Cómo obtener el código:**
1. Ir a https://www.google.com/maps/
2. Buscar tu ubicación
3. Hacer clic en Compartir
4. Seleccionar "Insertar un mapa"
5. Copiar el código

## ✉️ Agregar Formulario de Contacto

Si deseas agregar un formulario (aunque el proyecto prioriza WhatsApp):

```html
<form id="contactForm" class="contacto-form">
    <input type="text" placeholder="Tu nombre" required>
    <textarea placeholder="Tu mensaje" required></textarea>
    <button type="submit" class="btn btn-primary">Enviar</button>
</form>
```

Agregar en `styles.css`:
```css
.contacto-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.contacto-form input,
.contacto-form textarea {
    padding: 12px;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    font-family: inherit;
}

.contacto-form textarea {
    resize: vertical;
    min-height: 120px;
}
```

## 🚀 Publicar en Línea

### Opción 1: Hosting Gratuito (Netlify)
1. Ir a https://www.netlify.com/
2. Crear cuenta gratis
3. Arrastrar carpeta con archivos
4. ¡Listo! Tu sitio está en línea

### Opción 2: Hosting Gratuito (GitHub Pages)
1. Crear repositorio en GitHub
2. Cargar archivos
3. Ir a Settings → Pages
4. Publicar desde la rama main

### Opción 3: Hosting de Pago
- Hostinger
- Bluehost
- SiteGround
- GoDaddy

## 📱 Probar Responsividad

1. **En Navegador:**
   - F12 o Ctrl+Shift+I
   - Hacer clic en "Toggle device toolbar"
   - Probar en diferentes tamaños

2. **Dispositivos Reales:**
   - Probar en smartphone
   - Probar en tablet
   - Verificar orientación horizontal y vertical

3. **Herramientas Online:**
   - https://responsively.app/
   - https://www.browserstack.com/

## 🔍 SEO Checklist

- [ ] Meta descripción única
- [ ] Títulos descriptivos en H1, H2, H3
- [ ] Imágenes con atributo alt
- [ ] Estructura URL amigable
- [ ] Links internos relevantes
- [ ] Schema.org marcado (opcional)
- [ ] Sitemap.xml (para futuro)
- [ ] robots.txt (para futuro)

## 🐛 Troubleshooting

### El menú hamburguesa no funciona
- Verificar que `script.js` está cargado
- Revisar la consola del navegador (F12)
- Verificar IDs en HTML

### Las imágenes no se ven
- Verificar ruta de la imagen
- Usar rutas relativas
- Comprobar que la imagen existe

### Animaciones lentas
- Revisar performance en DevTools
- Reducir número de elementos animados
- Optimizar imágenes

### No se ve bien en móvil
- Revisar viewport meta tag
- Verificar media queries
- Probar en dispositivo real

## 💡 Tips Útiles

1. **Backup:** Siempre hacer copia de archivos antes de cambios
2. **Testing:** Probar en navegadores y dispositivos
3. **Performance:** Optimizar imágenes antes de cargar
4. **Seguridad:** Usar HTTPS cuando se publique
5. **Analytics:** Agregar Google Analytics para tracking

## 📚 Recursos Útiles

- **Colores:** https://coolors.co/
- **Iconos:** https://fontawesome.com/
- **Fuentes:** https://fonts.google.com/
- **Imágenes:** https://unsplash.com/, https://pexels.com/
- **Herramientas:** https://tinypng.com/ (optimizar imágenes)

---

¿Necesitas ayuda adicional? Contacta a través de WhatsApp 📱

