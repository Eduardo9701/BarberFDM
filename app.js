// Configuración del negocio
const CONFIG = {
  businessName: "Fábrica de Muñecos",
  whatsappNumber: "525564506913", // WhatsApp oficial FDM: 55 6450 6913
  address: "Calle Gomez Farías #27, Altotonga, Veracruz",
  hours: "Lun–Vie: 10:00 am a 7:00 pm · Sáb: 9:00 am a 8:00 pm · Dom: 9:00 am a 5:00 pm"
};

const photoUrl = (id, h = 600) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&h=${h}&q=80`;

const services = [
  {
    id: "corte",
    name: "Corte clásico o moderno",
    description: "Estilo clásico o contemporáneo con técnica máster a máquina y navaja.",
    price: 180,
    duration: "40 min",
    icon: "✂",
    image: "assets/images/fdm-barbero-accion.jpg",
    imageAlt: "Barbero de Fábrica de Muñecos realizando corte en sillón"
  },
  {
    id: "barba",
    name: "Arreglo y perfilado de barba",
    description: "Perfilado milimétrico, diseño y cuidado con navaja libre para un look impecable.",
    price: 100,
    duration: "25 min",
    icon: "◈",
    image: "assets/images/fdm-barba-mullet.jpg",
    imageAlt: "Perfilado y diseño de barba en Fábrica de Muñecos"
  },
  {
    id: "facial",
    name: "Facial Express / Mascarilla Negra",
    description: "Limpieza facial rápida, exfoliante purificante y mascarilla negra detox.",
    price: 120,
    duration: "25 min",
    icon: "🍃",
    image: "assets/images/fdm-facial-mascarilla.jpg",
    imageAlt: "Cliente con mascarilla negra facial en Fábrica de Muñecos"
  },
  {
    id: "combo",
    name: "Combo Muñeco Signature",
    description: "Experiencia completa: corte de autor, arreglo de barba y exfoliación facial.",
    price: 280,
    duration: "60 min",
    icon: "✦",
    image: "assets/images/fdm-taper-texturizado.jpg",
    imageAlt: "Servicio completo de corte y estilo en Fábrica de Muñecos"
  }
];

const cuts = [
  {
    name: "Fade Urbano Signature FDM",
    category: "Degradado",
    description: "Degradado medio con líneas de autor frente al mural oficial de Fábrica de Muñecos.",
    symbol: "F A D E",
    service: "corte",
    image: "assets/images/fdm-fade-mural.jpg",
    imageAlt: "Corte fade con diseño frente al mural de Fábrica de Muñecos"
  },
  {
    name: "Freestyle Hair Tattoo",
    category: "Diseño",
    description: "Trazos artísticos y grecas freestyle talladas a navaja libre sobre fade bajo.",
    symbol: "T A T T O O",
    service: "corte",
    image: "assets/images/fdm-freestyle-tattoo.jpg",
    imageAlt: "Diseño freestyle hair tattoo en nuca"
  },
  {
    name: "Diseño Geométrico 360°",
    category: "Diseño",
    description: "Grabado capilar geométrico de alta precisión en todo el contorno craneal.",
    symbol: "3 6 0 °",
    service: "corte",
    image: "assets/images/fdm-geometrico-360.jpg",
    imageAlt: "Diseño geométrico 360 en corte buzz"
  },
  {
    name: "Taper Fade Texturizado",
    category: "Degradado",
    description: "Desvanecido limpio en sienes y nuca con caída ondulada texturizada arriba.",
    symbol: "T A P E R",
    service: "corte",
    image: "assets/images/fdm-taper-texturizado.jpg",
    imageAlt: "Corte taper fade texturizado con diseño en patilla"
  },
  {
    name: "Mullet Urbano + Barba Perfilada",
    category: "Barba",
    description: "Fusión de mullet moderno con delineado y perfilado de barba a navaja.",
    symbol: "B A R B A",
    service: "barba",
    image: "assets/images/fdm-barba-mullet.jpg",
    imageAlt: "Mullet moderno con perfilado de barba"
  },
  {
    name: "Colorimetría & Platinado FDM",
    category: "Degradado",
    description: "Platinado glacial, gris plata o tonos fantasía (azul eléctrico, flama) con corte.",
    symbol: "C O L O R",
    service: "corte",
    image: "assets/images/fdm-promo-poster.jpg",
    imageAlt: "Servicios de colorimetría y diseño en Fábrica de Muñecos"
  },
  {
    name: "Corte Signature en Sillón",
    category: "Degradado",
    description: "Técnica combinada de máquina sobre peine y tijera por barbero máster.",
    symbol: "M A S T E R",
    service: "corte",
    image: "assets/images/fdm-barbero-accion.jpg",
    imageAlt: "Barbero realizando corte en sillón hidráulico"
  }
];

const products = [
  {
    id: "pomada-de-barbas-co",
    name: "Pomada Base Agua 'De Barbas Co'",
    category: "Fijación",
    tag: "Producto Oficial FDM",
    description: "Pomada profesional base agua de alta fijación y brillo balanceado. No deja residuos y se retira fácilmente con agua. Disponible en diferentes formulaciones y aromas en sucursal.",
    price: 220,
    volume: "120 g / 150 g",
    image: "assets/images/fdm-pomadas-debarbas.jpg",
    imageAlt: "Pomadas De Barbas Co base agua en Fábrica de Muñecos"
  },
  {
    id: "cera-moldeadora",
    name: "Cera Moldeadora Texturizante",
    category: "Fijación",
    tag: "Más vendido",
    description: "Acabado mate natural y memoria flexible para peinados con textura, volumen y fades.",
    price: 200,
    volume: "100 g",
    image: photoUrl("1535585209827-a15fcdbc4c2d"),
    imageAlt: "Tarro de pomada mate para peinado"
  },
  {
    id: "aceite-barba",
    name: "Aceite Nutritivo para Barba",
    category: "Barba",
    tag: "Favorito",
    description: "Fórmula botánica con extracto de argán y notas a madera. Hidrata la piel y suaviza el vello facial.",
    price: 240,
    volume: "30 ml",
    image: photoUrl("1599305090598-fe179d501227"),
    imageAlt: "Frasco gotero de aceite esencial para barba"
  },
  {
    id: "balsamo-barba",
    name: "Bálsamo Acondicionador de Barba",
    category: "Barba",
    tag: "Premium",
    description: "Disciplina y da forma a barbas abundantes, eliminando el frizz y protegiendo de la resequedad.",
    price: 210,
    volume: "60 g",
    image: photoUrl("1621607512214-68297480165e"),
    imageAlt: "Bálsamo para barba y bigote"
  },
  {
    id: "mascarilla-negra-home",
    name: "Mascarilla Negra Purificante (Home Care)",
    category: "Cuidado",
    tag: "Efecto detox",
    description: "Carbón activado purificante para remover puntos negros y exceso de grasa en casa.",
    price: 180,
    volume: "100 ml",
    image: "assets/images/fdm-facial-mascarilla.jpg",
    imageAlt: "Mascarilla negra purificante"
  },
  {
    id: "tonico-aftershave",
    name: "Loción Post-Afeitado Refrescante",
    category: "Cuidado",
    tag: "Indispensable",
    description: "Calma de inmediato la piel tras el afeitado o perfilado, cierra poros y deja una fragancia sobria.",
    price: 190,
    volume: "120 ml",
    image: photoUrl("1571781926291-c477ebfd024b"),
    imageAlt: "Loción tónica post afeitado"
  }
];

const money = n => new Intl.NumberFormat("es-MX",{style:"currency",currency:"MXN",maximumFractionDigits:0}).format(n);

// Toasts
function showToast(message, icon = "✓") {
  const container = document.querySelector("#toastContainer");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "opacity .3s, transform .3s";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// Carrito
let cart = [];
try {
  const stored = localStorage.getItem("fdm_cart");
  if (stored) cart = JSON.parse(stored);
} catch (e) {}

function saveCart() {
  try {
    localStorage.setItem("fdm_cart", JSON.stringify(cart));
  } catch (e) {}
}

function updateCartUI() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => {
    const prod = products.find(p => p.id === item.id);
    return sum + (prod ? prod.price * item.qty : 0);
  }, 0);

  // Badges
  const badge = document.querySelector("#cartBadge");
  if (badge) badge.textContent = count;

  // Floating button
  const floatingBtn = document.querySelector("#floatingCartBtn");
  const floatingCount = document.querySelector("#floatingCartCount");
  const floatingTotal = document.querySelector("#floatingCartTotal");
  if (floatingBtn) {
    floatingBtn.hidden = count === 0;
    if (floatingCount) floatingCount.textContent = count;
    if (floatingTotal) floatingTotal.textContent = money(subtotal);
  }

  // Drawer
  const cartItems = document.querySelector("#cartItems");
  const cartEmpty = document.querySelector("#cartEmpty");
  const cartFooter = document.querySelector("#cartFooter");
  const cartSubtotal = document.querySelector("#cartSubtotal");

  if (cartEmpty && cartFooter && cartItems) {
    if (count === 0) {
      cartEmpty.hidden = false;
      cartFooter.hidden = true;
      cartItems.innerHTML = "";
    } else {
      cartEmpty.hidden = true;
      cartFooter.hidden = false;
      if (cartSubtotal) cartSubtotal.textContent = money(subtotal);
      cartItems.innerHTML = cart.map(item => {
        const p = products.find(x => x.id === item.id);
        if (!p) return "";
        return `
          <div class="cart-item">
            <img src="${p.image}" alt="${p.name}" class="cart-item-img">
            <div class="cart-item-info">
              <div class="cart-item-title">${p.name}</div>
              <div class="cart-item-price">${money(p.price)}</div>
              <div class="cart-qty-ctrl">
                <button type="button" class="cart-qty-btn" data-cart-action="dec" data-id="${p.id}">-</button>
                <span class="cart-qty-num">${item.qty}</span>
                <button type="button" class="cart-qty-btn" data-cart-action="inc" data-id="${p.id}">+</button>
              </div>
            </div>
            <button type="button" class="cart-item-del" data-cart-action="del" data-id="${p.id}" title="Eliminar">✕</button>
          </div>
        `;
      }).join("");
    }
  }

  saveCart();
  syncBookingAddons();
  updateEstimateTotal();
}

function addToCart(productId, qty = 1, notify = true) {
  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, qty });
  }
  const prod = products.find(p => p.id === productId);
  updateCartUI();
  if (notify && prod) {
    showToast(`Agregado al pedido: <b>${prod.name}</b>`, "🛒");
  }
}

// Drawer open/close
const cartOverlay = document.querySelector("#cartOverlay");
const openCart = () => { if (cartOverlay) cartOverlay.hidden = false; };
const closeCart = () => { if (cartOverlay) cartOverlay.hidden = true; };

document.querySelector("#cartOpenBtn")?.addEventListener("click", openCart);
document.querySelector("#floatingCartBtn")?.addEventListener("click", openCart);
document.querySelector("#cartCloseBtn")?.addEventListener("click", closeCart);
document.querySelector("#cartExploreBtn")?.addEventListener("click", () => {
  closeCart();
  document.querySelector("#productos")?.scrollIntoView({ behavior: "smooth" });
});
cartOverlay?.addEventListener("click", e => {
  if (e.target === cartOverlay) closeCart();
});

// Cart Drawer Actions (Inc, Dec, Delete)
document.querySelector("#cartItems")?.addEventListener("click", e => {
  const btn = e.target.closest("[data-cart-action]");
  if (!btn) return;
  const action = btn.dataset.cartAction;
  const id = btn.dataset.id;
  const item = cart.find(i => i.id === id);
  if (!item) return;

  if (action === "inc") {
    item.qty += 1;
  } else if (action === "dec") {
    item.qty -= 1;
    if (item.qty <= 0) {
      cart = cart.filter(i => i.id !== id);
    }
  } else if (action === "del") {
    cart = cart.filter(i => i.id !== id);
  }
  updateCartUI();
});

// Pedido por WhatsApp desde Carrito
document.querySelector("#cartCheckoutWhatsapp")?.addEventListener("click", () => {
  if (!cart.length) return;
  const lines = [
    `Hola, quiero solicitar un pedido de productos en ${CONFIG.businessName}:`,
    ""
  ];
  let total = 0;
  cart.forEach(item => {
    const p = products.find(x => x.id === item.id);
    if (p) {
      const sub = p.price * item.qty;
      total += sub;
      lines.push(`• ${item.qty}x ${p.name} (${money(sub)}) [${p.volume}]`);
    }
  });
  lines.push("");
  lines.push(`Total estimado: ${money(total)}`);
  lines.push("¿Tienen disponibilidad para pasar a recoger o envío a domicilio?");

  if (!/^\d{10,15}$/.test(CONFIG.whatsappNumber)) {
    showToast("Configura CONFIG.whatsappNumber en app.js con el número real.", "⚠");
    return;
  }
  window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
});

// Llevar productos a la cita
document.querySelector("#cartAttachToBooking")?.addEventListener("click", () => {
  closeCart();
  document.querySelector("#cita")?.scrollIntoView({ behavior: "smooth" });
  showToast("Tus productos fueron añadidos a tu solicitud de cita.", "✂");
});

// Render Services
const serviceGrid = document.querySelector("#serviceGrid");
const serviceSelect = document.querySelector("#serviceSelect");
function renderServices() {
  if (!serviceGrid) return;
  serviceGrid.innerHTML = services.map(s => {
    const art = s.image
      ? `<div class="service-art"><img src="${s.image}" alt="${s.imageAlt || s.name}" loading="lazy" decoding="async" width="800" height="320"></div>`
      : "";
    return `<article class="service-card">${art}<div class="service-body"><span class="service-icon">${s.icon}</span><h3>${s.name}</h3><p>${s.description}</p><div class="service-meta"><span>${money(s.price)}</span><span>${s.duration}</span></div></div></article>`;
  }).join("");
  if (serviceSelect) {
    serviceSelect.innerHTML = services.map(s => `<option value="${s.id}">${s.name} — ${money(s.price)}</option>`).join("");
  }
}

// Render Cuts
const cutGrid = document.querySelector("#cutGrid");
function renderCuts(filter = "Todos") {
  if (!cutGrid) return;
  const visible = cuts.filter(c => filter === "Todos" || c.category === filter);
  cutGrid.innerHTML = visible.map(c => {
    const art = c.image
      ? `<div class="cut-art"><img src="${c.image}" alt="${c.imageAlt || c.name}" loading="lazy" decoding="async" width="800" height="600"></div>`
      : `<div class="cut-art cut-art--fallback" aria-hidden="true">${c.symbol}</div>`;
    return `<article class="cut-card">${art}<div class="cut-info"><h3>${c.name}</h3><p>${c.description}</p><button type="button" data-service="${c.service}">Elegir este servicio →</button></div></article>`;
  }).join("");
}

// Render Products
const productGrid = document.querySelector("#productGrid");
function renderProducts(filter = "Todos") {
  if (!productGrid) return;
  const visible = products.filter(p => filter === "Todos" || p.category === filter);
  productGrid.innerHTML = visible.map(p => `
    <article class="product-card">
      <div class="product-art">
        <img src="${p.image}" alt="${p.imageAlt || p.name}" loading="lazy" decoding="async" width="800" height="600">
        <span class="product-tag">${p.tag}</span>
        <span class="product-volume">${p.volume}</span>
      </div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <div class="product-footer">
          <span class="product-price">${money(p.price)}</span>
          <div class="product-actions">
            <button type="button" class="product-add-btn" data-add-cart="${p.id}">
              + Pedido
            </button>
            <button type="button" class="product-direct-btn" data-product-id="${p.id}" title="Pedir únicamente este producto por WhatsApp">
              Pedir directo →
            </button>
          </div>
        </div>
      </div>
    </article>
  `).join("");
}

// Booking Addons (Productos opcionales para la cita)
function renderBookingAddons() {
  const list = document.querySelector("#bookingProductsList");
  if (!list) return;
  list.innerHTML = products.map(p => {
    const isChecked = cart.some(i => i.id === p.id);
    return `
      <label class="booking-addon-item ${isChecked ? 'selected' : ''}">
        <input type="checkbox" name="addonProducts" value="${p.id}" ${isChecked ? 'checked' : ''}>
        <div class="booking-addon-info">
          <span class="booking-addon-name">${p.name}</span>
          <span class="booking-addon-price">+${money(p.price)}</span>
        </div>
      </label>
    `;
  }).join("");
}

function syncBookingAddons() {
  document.querySelectorAll("input[name='addonProducts']").forEach(chk => {
    const inCart = cart.some(i => i.id === chk.value);
    chk.checked = inCart;
    chk.closest(".booking-addon-item")?.classList.toggle("selected", inCart);
  });
}

function updateEstimateTotal() {
  const serviceId = document.querySelector("#serviceSelect")?.value;
  const service = services.find(s => s.id === serviceId);
  let total = service ? service.price : 0;

  document.querySelectorAll("input[name='addonProducts']:checked").forEach(chk => {
    const p = products.find(x => x.id === chk.value);
    if (p) total += p.price;
  });

  const bannerTotal = document.querySelector("#estimateTotal");
  if (bannerTotal) bannerTotal.textContent = money(total);
}

// Filtros de cortes
document.querySelector("#filters")?.addEventListener("click", e => {
  const btn = e.target.closest("[data-filter]");
  if (!btn) return;
  document.querySelectorAll("#filters .filter").forEach(b => b.classList.toggle("active", b === btn));
  renderCuts(btn.dataset.filter);
});

// Filtros de productos
document.querySelector("#productFilters")?.addEventListener("click", e => {
  const btn = e.target.closest("[data-product-filter]");
  if (!btn) return;
  document.querySelectorAll("#productFilters .filter").forEach(b => b.classList.toggle("active", b === btn));
  renderProducts(btn.dataset.productFilter);
});

// Interacción en productos
productGrid?.addEventListener("click", e => {
  // Agregar al carrito
  const addBtn = e.target.closest("[data-add-cart]");
  if (addBtn) {
    addToCart(addBtn.dataset.addCart, 1, true);
    return;
  }

  // Pedir directo por WhatsApp
  const directBtn = e.target.closest("[data-product-id]");
  if (directBtn) {
    const prod = products.find(p => p.id === directBtn.dataset.productId);
    if (!prod) return;
    const msg = [
      `Hola, me interesa adquirir un producto en ${CONFIG.businessName}:`,
      `• Producto: ${prod.name}`,
      `• Precio: ${money(prod.price)} (${prod.volume})`,
      `¿Tienen disponibilidad en sucursal o manejan envíos?`
    ].join("\n");
    if (!/^\d{10,15}$/.test(CONFIG.whatsappNumber)) {
      showToast("Configura CONFIG.whatsappNumber en app.js.", "⚠");
      return;
    }
    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  }
});

// Selección de corte hacia formulario
cutGrid?.addEventListener("click", e => {
  const btn = e.target.closest("[data-service]");
  if (!btn) return;
  if (serviceSelect) {
    serviceSelect.value = btn.dataset.service;
    updateEstimateTotal();
  }
  document.querySelector("#cita")?.scrollIntoView({ behavior: "smooth" });
  showToast("Servicio seleccionado. Completa tu fecha y barbero.", "✂");
});

// Menú móvil
document.querySelector("#menuToggle")?.addEventListener("click", () => {
  const nav = document.querySelector("#mainNav");
  const open = nav.classList.toggle("open");
  document.querySelector("#menuToggle").setAttribute("aria-expanded", String(open));
});
document.querySelectorAll("#mainNav a").forEach(a => {
  a.addEventListener("click", () => document.querySelector("#mainNav")?.classList.remove("open"));
});

// Slider Antes & Después
const baRange = document.querySelector("#baRange");
const baFrame = document.querySelector("#baFrame");
if (baRange && baFrame) {
  const updateBA = val => {
    baFrame.style.setProperty("--ba-pos", `${val}%`);
  };
  baRange.addEventListener("input", e => updateBA(e.target.value));
  updateBA(50);
}

// Configuración de fechas y horas
const dateInput = document.querySelector("#bookingDate");
const timeSelect = document.querySelector("#bookingTime");
const dateNotice = document.querySelector("#dateNotice");
const submitBookingBtn = document.querySelector("#submitBookingBtn");

const now = new Date();
const localToday = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
if (dateInput) {
  dateInput.min = localToday;
  dateInput.value = localToday;
}

function getDaySchedule(dateStr) {
  if (!dateStr) return { openHour: 10, closeHour: 19 };
  const parts = dateStr.split("-").map(Number);
  const d = new Date(parts[0], parts[1] - 1, parts[2]);
  const day = d.getDay(); // 0 = Domingo, 6 = Sábado, 1-5 = Lun-Vie

  if (day === 0) {
    return { openHour: 9, closeHour: 17 }; // Domingo: 9:00 am a 5:00 pm
  } else if (day === 6) {
    return { openHour: 9, closeHour: 20 }; // Sábado: 9:00 am a 8:00 pm
  } else {
    return { openHour: 10, closeHour: 19 }; // Lunes a Viernes: 10:00 am a 7:00 pm
  }
}

function populateTimeSlots(selectedDateStr) {
  if (!timeSelect) return;
  timeSelect.innerHTML = "";
  const isToday = selectedDateStr === localToday;
  const currentHour = now.getHours();
  const currentMin = now.getMinutes();

  const sched = getDaySchedule(selectedDateStr);

  for (let h = sched.openHour; h < sched.closeHour; h++) {
    for (const m of [0, 30]) {
      // Si es hoy, no mostrar horas pasadas (+15 min de margen)
      if (isToday) {
        if (h < currentHour || (h === currentHour && m <= currentMin + 15)) {
          continue;
        }
      }
      const val = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
      timeSelect.add(new Option(val, val));
    }
  }

  if (timeSelect.options.length === 0) {
    timeSelect.add(new Option("Sin horarios disponibles hoy", ""));
  }
}

function validateSelectedDate() {
  if (!dateInput) return;
  const val = dateInput.value;
  if (!val) return;

  // Fábrica de Muñecos atiende de Lunes a Domingo
  if (dateNotice) dateNotice.hidden = true;
  if (submitBookingBtn) submitBookingBtn.disabled = false;

  populateTimeSlots(val);
}

dateInput?.addEventListener("change", validateSelectedDate);
populateTimeSlots(localToday);
validateSelectedDate();

// Cambio en servicios y addons para total estimado
serviceSelect?.addEventListener("change", updateEstimateTotal);
document.querySelector("#bookingProductsList")?.addEventListener("change", e => {
  if (e.target.matches("input[name='addonProducts']")) {
    const chk = e.target;
    chk.closest(".booking-addon-item")?.classList.toggle("selected", chk.checked);
    // Sincronizar con el carrito
    if (chk.checked) {
      if (!cart.some(i => i.id === chk.value)) {
        cart.push({ id: chk.value, qty: 1 });
      }
    } else {
      cart = cart.filter(i => i.id !== chk.value);
    }
    updateCartUI();
  }
});

// Validaciones de Formulario (Nombre y Teléfono de México)
const nameInput = document.querySelector("#clientName");
const phoneInput = document.querySelector("#clientPhone");
const nameError = document.querySelector("#nameError");
const phoneError = document.querySelector("#phoneError");

function validateName(name) {
  const trimmed = (name || "").trim();
  if (trimmed.length < 2) {
    return { isValid: false, message: "Ingresa tu nombre (mínimo 2 caracteres)." };
  }
  if (trimmed.length > 70) {
    return { isValid: false, message: "El nombre es demasiado largo (máximo 70 caracteres)." };
  }
  if (/\d/.test(trimmed)) {
    return { isValid: false, message: "El nombre no puede contener números." };
  }
  // Permitir letras latinas con acentos, diéresis, ñ, espacios, apóstrofe y guion
  const validLettersPattern = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+(?:[\s\'-][a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+)*$/;
  if (!validLettersPattern.test(trimmed)) {
    return { isValid: false, message: "Ingresa un nombre válido (solo letras, sin números ni símbolos especiales)." };
  }
  return { isValid: true, cleaned: trimmed };
}

function validateMexicanPhone(phone) {
  if (!phone) {
    return { isValid: false, message: "Por favor ingresa tu número de teléfono." };
  }
  // Eliminar espacios, guiones, paréntesis y puntos
  let cleaned = phone.toString().replace(/[\s\-\(\)\.]/g, "");

  // Si tiene prefijo internacional +52 o 52, retirarlo para evaluar los 10 dígitos nacionales
  if (cleaned.startsWith("+52")) {
    cleaned = cleaned.slice(3);
  } else if (cleaned.startsWith("52") && cleaned.length > 10) {
    cleaned = cleaned.slice(2);
  }

  // Si incluye el antiguo prefijo móvil '1' de México (+52 1 ...), retirarlo si deja 10 dígitos
  if (cleaned.length === 11 && cleaned.startsWith("1")) {
    cleaned = cleaned.slice(1);
  }

  if (!/^\d+$/.test(cleaned)) {
    return { isValid: false, message: "El teléfono solo debe contener números." };
  }

  if (cleaned.length !== 10) {
    return { 
      isValid: false, 
      message: `El número debe tener exactamente 10 dígitos en México (ingresaste ${cleaned.length}).` 
    };
  }

  // En México los códigos de área nacionales inician de 2 a 9 (no 0 ni 1)
  if (!/^[2-9]/.test(cleaned)) {
    return { 
      isValid: false, 
      message: "Código de área inválido. Los números en México inician con dígitos del 2 al 9." 
    };
  }

  const formatted = `${cleaned.slice(0, 2)} ${cleaned.slice(2, 6)} ${cleaned.slice(6)}`;
  return { isValid: true, cleaned, formatted };
}

nameInput?.addEventListener("input", () => {
  if (nameError) nameError.hidden = true;
  nameInput.classList.remove("input-invalid");
});

nameInput?.addEventListener("blur", () => {
  const val = nameInput.value;
  if (!val) return;
  const res = validateName(val);
  if (!res.isValid) {
    if (nameError) {
      nameError.hidden = false;
      nameError.textContent = res.message;
    }
    nameInput.classList.add("input-invalid");
    nameInput.classList.remove("input-valid");
  } else {
    if (nameError) nameError.hidden = true;
    nameInput.classList.remove("input-invalid");
    nameInput.classList.add("input-valid");
  }
});

phoneInput?.addEventListener("input", () => {
  if (phoneError) phoneError.hidden = true;
  phoneInput.classList.remove("input-invalid");
});

phoneInput?.addEventListener("blur", () => {
  const val = phoneInput.value;
  if (!val) return;
  const res = validateMexicanPhone(val);
  if (!res.isValid) {
    if (phoneError) {
      phoneError.hidden = false;
      phoneError.textContent = res.message;
    }
    phoneInput.classList.add("input-invalid");
    phoneInput.classList.remove("input-valid");
  } else {
    if (phoneError) phoneError.hidden = true;
    phoneInput.classList.remove("input-invalid");
    phoneInput.classList.add("input-valid");
    phoneInput.value = res.formatted;
  }
});

// Envío de Formulario de Cita con Validaciones
document.querySelector("#bookingForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const form = e.currentTarget;

  // Validación de Nombre
  const rawName = nameInput ? nameInput.value : "";
  const nameCheck = validateName(rawName);
  if (!nameCheck.isValid) {
    if (nameError) {
      nameError.hidden = false;
      nameError.textContent = nameCheck.message;
    }
    nameInput?.classList.add("input-invalid");
    nameInput?.focus();
    showToast(nameCheck.message, "⚠");
    return;
  } else {
    if (nameError) nameError.hidden = true;
    nameInput?.classList.remove("input-invalid");
    nameInput?.classList.add("input-valid");
  }

  // Validación de Teléfono Mexicano
  const rawPhone = phoneInput ? phoneInput.value : "";
  const phoneCheck = validateMexicanPhone(rawPhone);
  if (!phoneCheck.isValid) {
    if (phoneError) {
      phoneError.hidden = false;
      phoneError.textContent = phoneCheck.message;
    }
    phoneInput?.classList.add("input-invalid");
    phoneInput?.focus();
    showToast(phoneCheck.message, "⚠");
    return;
  } else {
    if (phoneError) phoneError.hidden = true;
    phoneInput?.classList.remove("input-invalid");
    phoneInput?.classList.add("input-valid");
    if (phoneInput) phoneInput.value = phoneCheck.formatted;
  }

  const data = Object.fromEntries(new FormData(form).entries());
  const service = services.find(s => s.id === data.service);

  if (!service) {
    showToast("Por favor selecciona un servicio.", "⚠");
    return;
  }

  // Obtener productos adicionales
  const selectedAddons = [];
  document.querySelectorAll("input[name='addonProducts']:checked").forEach(chk => {
    const p = products.find(x => x.id === chk.value);
    if (p) selectedAddons.push(p);
  });

  const addonTotal = selectedAddons.reduce((sum, p) => sum + p.price, 0);
  const totalEstimado = service.price + addonTotal;

  const message = [
    `Hola, quiero solicitar una cita en ${CONFIG.businessName}.`,
    `----------------------------------------`,
    `Cliente: ${nameCheck.cleaned}`,
    `Teléfono: +52 ${phoneCheck.formatted}`,
    `Servicio: ${service.name} (${money(service.price)})`,
    `Barbero: ${data.barber || "Cualquiera disponible"}`,
    `Fecha: ${data.date}`,
    `Hora: ${data.time}`,
    selectedAddons.length ? `Productos apartados:\n${selectedAddons.map(p => `  • ${p.name} (${money(p.price)})`).join("\n")}` : "",
    `----------------------------------------`,
    `Total estimado: ${money(totalEstimado)}`,
    data.notes ? `Notas: ${data.notes}` : "",
    `Entiendo que la cita queda confirmada una vez que la barbería responda.`
  ].filter(Boolean).join("\n");

  const status = document.querySelector("#formStatus");
  if (!/^\d{10,15}$/.test(CONFIG.whatsappNumber)) {
    status.textContent = "Configura CONFIG.whatsappNumber en app.js con el número real de WhatsApp del negocio.";
    showToast("Falta configurar el número de WhatsApp en CONFIG.", "⚠");
    return;
  }

  status.textContent = "Abriendo WhatsApp para enviar tu solicitud…";
  showToast("¡Solicitud enviada! Abriendo WhatsApp...", "✓");
  window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");

  // Limpiar el formulario automáticamente tras enviar la solicitud
  resetBookingForm();

  setTimeout(() => {
    if (status) status.textContent = "";
  }, 4000);
});

// Función para restablecer el formulario de cita
function resetBookingForm() {
  const form = document.querySelector("#bookingForm");
  if (!form) return;
  form.reset();

  // Limpiar estilos y estados de validación
  nameInput?.classList.remove("input-valid", "input-invalid");
  phoneInput?.classList.remove("input-valid", "input-invalid");
  if (nameError) nameError.hidden = true;
  if (phoneError) phoneError.hidden = true;

  // Restaurar la fecha seleccionable a hoy y recargar horarios válidos
  if (dateInput) dateInput.value = localToday;
  populateTimeSlots(localToday);
  validateSelectedDate();

  // Desmarcar todos los productos adicionales de la cita
  document.querySelectorAll("input[name='addonProducts']").forEach(chk => {
    chk.checked = false;
    chk.closest(".booking-addon-item")?.classList.remove("selected");
  });

  // Restaurar servicio y barbero por defecto
  if (serviceSelect && services.length) {
    serviceSelect.value = services[0].id;
  }
  const barberSelect = document.querySelector("#barberSelect");
  if (barberSelect) barberSelect.selectedIndex = 0;

  // Limpiar campo de notas opcionales
  const notesEl = document.querySelector("#bookingNotes");
  if (notesEl) notesEl.value = "";

  // Recalcular costo estimado base
  updateEstimateTotal();
}

// Inicialización de textos y render inicial
const addressEl = document.querySelector("#businessAddress");
if (addressEl && !addressEl.textContent.trim()) addressEl.textContent = CONFIG.address;
const yearEl = document.querySelector("#year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

renderServices();
renderCuts();
renderProducts();
renderBookingAddons();
updateCartUI();
updateEstimateTotal();

// Registro de Service Worker para PWA Offline
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
