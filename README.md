# Barber MiniApp Premium — Starter

Microapp web en HTML, CSS y JavaScript para una barbería prémium.

## Características incluidas
- **Catálogo de Servicios y Cortes:** Filtros interactivos por categoría (Degradados, Clásicos, Barba).
- **Transformaciones Antes & Después:** Slider interactivo con control deslizante para comparar cambios de imagen.
- **Venta de Productos (Grooming):**
  - Catálogo de productos con filtros (Fijación, Barba, Cuidado).
  - Responsive a 12 columnas en dispositivos móviles para máxima visibilidad.
  - Carrito de compras multi-artículo con panel lateral (Drawer).
  - Pedido completo por WhatsApp o compra directa por producto.
- **Formulario de Citas Inteligente:**
  - Selección de barbero especialista.
  - Opción para apartar productos e incluirlos en la cita.
  - Cálculo dinámico de presupuesto en tiempo real.
  - Validación de días no laborales (lunes cerrado) y restricción de horarios transcurridos.
- **Ubicación y GPS:** Enlace directo a Google Maps y Waze.
- **Notificaciones Toast:** Alertas visuales con estilo prémium negro y dorado.
- **PWA Lista:** Service Worker (`sw.js`) con soporte offline e instalación en dispositivos móviles.

## 1. Ejecutar localmente
- Abre una terminal en la carpeta del proyecto.
- Ejecuta `npx serve . -l 8080` (o cualquier servidor HTTP estático).
- Abre `http://localhost:8080`.

## 2. Personalizar antes de publicar
Edita `app.js`:
- `businessName`: Nombre comercial de tu barbería.
- `whatsappNumber`: Número en formato internacional, solo dígitos (México: 52 + 10 dígitos).
- `address` y `hours`: Dirección y horarios de apertura.
- `services`, `cuts` y `products`: Catálogo de servicios, estilos y productos con precios reales y fotos.

## 3. Publicar
1. Sube los archivos a tu repositorio Git (GitHub / GitLab).
2. Conéctalo a Netlify, Vercel, Cloudflare Pages o GitHub Pages.
3. El proyecto es 100% estático y no requiere dependencias de servidor.
