// ==========================================
// DATA PRODUK (DUMMY DATA)
// ==========================================
const products = [
  {
    id: "p1",
    name: "Kaos Oversize Streetwear Cotton Combed 24s",
    category: "pakaian",
    price: 89000,
    originalPrice: 150000,
    rating: 4.8,
    penilaian: 1420,
    terjual: 3500,
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80"
    ],
    store: { 
      name: "StreetVibe Official", 
      logo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" 
    },
    description: "Kaos oversize berbahan 100% Cotton Combed 24s premium. Sangat nyaman, adem, dan menyerap keringat. Cocok untuk tampilan kasual sehari-hari."
  },
  {
    id: "p2",
    name: "Wireless Headphones ANC Noise Cancelling",
    category: "elektronik",
    price: 459000,
    originalPrice: 899000,
    rating: 4.9,
    penilaian: 850,
    terjual: 1200,
    sizes: ["Black", "Silver", "Navy"],
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"
    ],
    store: { 
      name: "SoundTech ID", 
      logo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80" 
    },
    description: "Nikmati musik tanpa gangguan dengan fitur Active Noise Cancelling. Baterai tahan hingga 40 jam penuh dalam satu kali pengisian daya."
  },
  {
    id: "p3",
    name: "Sneakers Running Aerodynamic Sport",
    category: "sepatu",
    price: 299000,
    originalPrice: 550000,
    rating: 4.7,
    penilaian: 620,
    terjual: 980,
    sizes: ["39", "40", "41", "42", "43"],
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
    ],
    store: { 
      name: "Footwear Central", 
      logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" 
    },
    description: "Sepatu lari ringan dengan sol empuk anti-selip. Didesain khusus untuk memberikan kenyamanan maksimal saat berolahraga."
  },
  {
    id: "p4",
    name: "Smartwatch Sport Fitness Tracker Waterproof",
    category: "aksesoris",
    price: 349000,
    originalPrice: 699000,
    rating: 4.8,
    penilaian: 940,
    terjual: 2100,
    sizes: ["Black", "Rose Gold"],
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80"
    ],
    store: { 
      name: "Gadget Store", 
      logo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" 
    },
    description: "Pantau detak jantung, pola tidur, dan langkah harianmu secara akurat. Tahan air hingga kedalaman 50 meter."
  },
  {
    id: "p5",
    name: "Jaket Parka Waterproof Windproof Canvas",
    category: "pakaian",
    price: 215000,
    originalPrice: 380000,
    rating: 4.6,
    penilaian: 310,
    terjual: 540,
    sizes: ["M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80"
    ],
    store: { 
      name: "StreetVibe Official", 
      logo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" 
    },
    description: "Jaket parka fungsional tahan angin dan cipratan air. Dilengkapi banyak kantong serbaguna untuk kebutuhan berkendara."
  }
];

// ==========================================
// STATE MANAGEMENT GLOBAL
// ==========================================
let cart = [];
let wishlist = [];
let orders = [];
let currentCategory = 'semua';
let searchQuery = '';
let selectedProductId = null;
let selectedSize = null;
let selectedQty = 1;
let selectedVoucher = '';

// ==========================================
// HELPER / UTILS
// ==========================================
function formatRupiah(num) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);
}

// ==========================================
// RENDER KATALOG & FILTER PRODUK
// ==========================================
function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  const filtered = products.filter(p => {
    const matchCat = currentCategory === 'semua' || p.category === currentCategory;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-12 text-center text-slate-400 space-y-2">
        <i class="fa-solid fa-box-open text-4xl mb-2"></i>
        <p class="font-bold text-sm">Produk tidak ditemukan</p>
        <p class="text-xs">Coba kata kunci atau kategori lain.</p>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => {
    const discount = Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100);
    const isWish = wishlist.includes(p.id);

    return `
      <div class="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition overflow-hidden group flex flex-col">
        <div class="relative overflow-hidden cursor-pointer" onclick="openProductDetail('${p.id}')">
          <img src="${p.images[0]}" class="w-full h-44 object-cover group-hover:scale-105 transition duration-300">
          ${discount > 0 ? `<span class="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">-${discount}%</span>` : ''}
          <button onclick="event.stopPropagation(); toggleWishlist('${p.id}');" class="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-600 hover:text-red-600 transition">
            <i class="${isWish ? 'fa-solid text-red-600' : 'fa-regular'} fa-heart text-xs"></i>
          </button>
        </div>

        <div class="p-3 flex-1 flex flex-col justify-between space-y-2">
          <div class="cursor-pointer" onclick="openProductDetail('${p.id}')">
            <h3 class="font-bold text-xs text-slate-800 line-clamp-2 leading-snug">${p.name}</h3>
            <div class="flex items-center gap-1 mt-1 text-[11px] text-amber-500 font-bold">
              <i class="fa-solid fa-star text-[10px]"></i>
              <span>${p.rating}</span>
              <span class="text-slate-400 font-normal">(${p.terjual} terbeli)</span>
            </div>
          </div>

          <div>
            <div class="flex items-baseline gap-1">
              <span class="font-black text-sm text-red-600">${formatRupiah(p.price)}</span>
              ${p.originalPrice ? `<span class="text-[10px] text-slate-400 line-through">${formatRupiah(p.originalPrice)}</span>` : ''}
            </div>
            
            <button onclick="quickAddToCart('${p.id}')" class="w-full mt-2 bg-slate-900 text-white py-1.5 rounded-lg text-[11px] font-bold hover:bg-red-600 transition">
              + Keranjang
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function filterCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.classList.remove('bg-slate-900', 'text-white');
    btn.classList.add('bg-white', 'text-slate-600');
  });
  if (event && event.target) {
    event.target.classList.remove('bg-white', 'text-slate-600');
    event.target.classList.add('bg-slate-900', 'text-white');
  }
  renderProducts();
}

function handleSearch(val) {
  searchQuery = val;
  renderProducts();
}

// ==========================================
// MODAL DETAIL PRODUK
// ==========================================
function openProductDetail(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  selectedProductId = id;
  selectedQty = 1;
  selectedSize = product.sizes ? product.sizes[0] : null;

  document.getElementById('modalBreadcrumbCat').innerText = product.category.toUpperCase();
  document.getElementById('modalBreadcrumbName').innerText = product.name;
  document.getElementById('detailTitle').innerText = product.name;
  document.getElementById('detailRating').innerText = product.rating;
  document.getElementById('detailPenilaian').innerText = product.penilaian;
  document.getElementById('detailTerjual').innerText = product.terjual;
  document.getElementById('detailPrice').innerText = formatRupiah(product.price);
  document.getElementById('detailDescription').innerText = product.description;
  document.getElementById('storeName').innerText = product.store.name;
  document.getElementById('storeLogo').src = product.store.logo;
  document.getElementById('detailMainImg').src = product.images[0];
  document.getElementById('detailQtyInput').value = selectedQty;

  if (product.originalPrice) {
    document.getElementById('detailOriginalPrice').innerText = formatRupiah(product.originalPrice);
    const disc = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    document.getElementById('detailDiscountBadge').innerText = `-${disc}%`;
    document.getElementById('detailOriginalPrice').classList.remove('hidden');
    document.getElementById('detailDiscountBadge').classList.remove('hidden');
  } else {
    document.getElementById('detailOriginalPrice').classList.add('hidden');
    document.getElementById('detailDiscountBadge').classList.add('hidden');
  }

  // Thumbnails
  const thumbsContainer = document.getElementById('detailThumbnails');
  thumbsContainer.innerHTML = product.images.map((img) => `
    <img src="${img}" onclick="document.getElementById('detailMainImg').src='${img}'" class="w-12 h-12 object-cover rounded-lg border cursor-pointer hover:border-red-500">
  `).join('');

  // Ukuran / Varian
  const sizeContainer = document.getElementById('sizeButtonsContainer');
  if (product.sizes && product.sizes.length > 0) {
    document.getElementById('sizeSection').classList.remove('hidden');
    sizeContainer.innerHTML = product.sizes.map(s => `
      <button onclick="selectSize('${s}')" class="size-btn px-3 py-1 text-xs border rounded-lg font-bold transition ${s === selectedSize ? 'border-red-600 bg-red-50 text-red-600' : 'border-slate-200 text-slate-600'}">${s}</button>
    `).join('');
  } else {
    document.getElementById('sizeSection').classList.add('hidden');
  }

  updateWishlistDetailBtn();
  document.getElementById('productDetailModal').classList.remove('hidden');
}

function closeProductDetailModal() {
  document.getElementById('productDetailModal').classList.add('hidden');
}

function selectSize(size) {
  selectedSize = size;
  document.querySelectorAll('.size-btn').forEach(btn => {
    if (btn.innerText === size) {
      btn.className = "size-btn px-3 py-1 text-xs border rounded-lg font-bold transition border-red-600 bg-red-50 text-red-600";
    } else {
      btn.className = "size-btn px-3 py-1 text-xs border rounded-lg font-bold transition border-slate-200 text-slate-600";
    }
  });
}

function changeDetailQty(amount) {
  selectedQty = Math.max(1, selectedQty + amount);
  document.getElementById('detailQtyInput').value = selectedQty;
}

// ==========================================
// KERANJANG (CART)
// ==========================================
function quickAddToCart(id) {
  const p = products.find(item => item.id === id);
  addToCart(id, 1, p.sizes ? p.sizes[0] : null);
}

function addDetailToCart() {
  if (selectedProductId) {
    addToCart(selectedProductId, selectedQty, selectedSize);
    closeProductDetailModal();
  }
}

function buyNowFromDetail() {
  addDetailToCart();
  toggleCartModal();
}

function addToCart(id, qty = 1, size = null) {
  const existing = cart.find(item => item.id === id && item.size === size);
  if (existing) {
    existing.qty += qty;
  } else {
    const product = products.find(p => p.id === id);
    cart.push({ ...product, qty, size });
  }
  updateCartBadge();
}

function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (!badge) return;
  const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
  badge.innerText = totalQty;
}

function toggleCartModal() {
  const modal = document.getElementById('cartModal');
  if (!modal) return;
  modal.classList.toggle('hidden');
  if (!modal.classList.contains('hidden')) {
    renderCartItems();
  }
}

function renderCartItems() {
  const container = document.getElementById('cartItemsList');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="py-12 text-center text-slate-400 space-y-2">
        <i class="fa-solid fa-cart-flatbed text-4xl mb-2"></i>
        <p class="font-bold text-sm">Keranjangmu masih kosong</p>
        <p class="text-xs">Yuk, tambah produk favoritmu!</p>
      </div>`;
    calculateCartTotals();
    return;
  }

  container.innerHTML = cart.map((item, idx) => `
    <div class="flex items-center gap-3 p-3 border border-slate-100 rounded-xl bg-white shadow-sm">
      <img src="${item.images[0]}" class="w-14 h-14 object-cover rounded-lg border">
      <div class="flex-1 min-w-0 space-y-1">
        <h4 class="font-bold text-xs text-slate-800 truncate">${item.name}</h4>
        ${item.size ? `<span class="inline-block bg-slate-100 text-slate-600 text-[10px] font-bold px-1.5 py-0.5 rounded">Varian: ${item.size}</span>` : ''}
        <p class="font-black text-xs text-red-600">${formatRupiah(item.price)}</p>
      </div>

      <div class="flex items-center gap-2">
        <div class="flex items-center border border-slate-200 rounded-lg overflow-hidden text-xs">
          <button onclick="updateCartQty(${idx}, -1)" class="px-2 py-1 bg-slate-100 font-bold hover:bg-slate-200">-</button>
          <span class="px-2 font-bold">${item.qty}</span>
          <button onclick="updateCartQty(${idx}, 1)" class="px-2 py-1 bg-slate-100 font-bold hover:bg-slate-200">+</button>
        </div>
        <button onclick="removeFromCart(${idx})" class="text-slate-400 hover:text-red-600 text-xs p-1">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  `).join('');

  calculateCartTotals();
}

function updateCartQty(idx, amount) {
  cart[idx].qty += amount;
  if (cart[idx].qty <= 0) {
    cart.splice(idx, 1);
  }
  updateCartBadge();
  renderCartItems();
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  updateCartBadge();
  renderCartItems();
}

function selectVoucher(val) {
  selectedVoucher = val;
  const tag = document.getElementById('activeVoucherTag');
  if (!tag) return;
  
  if (val === 'ONGKIR100') tag.innerText = '✓ Gratis Ongkir Terpasang';
  else if (val === 'DISCOUNT10') tag.innerText = '✓ Diskon 10% Terpasang';
  else if (val === 'HEMAT50K') tag.innerText = '✓ Potongan Rp50.000 Terpasang';
  else tag.innerText = '';

  calculateCartTotals();
}

function calculateCartTotals() {
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  let discount = 0;
  let ongkir = cart.length > 0 ? 15000 : 0;

  if (selectedVoucher === 'ONGKIR100') {
    ongkir = 0;
  } else if (selectedVoucher === 'DISCOUNT10') {
    discount = subtotal * 0.1;
  } else if (selectedVoucher === 'HEMAT50K') {
    discount = Math.min(50000, subtotal);
  }

  const total = Math.max(0, subtotal - discount + ongkir);

  if (document.getElementById('subtotalText')) document.getElementById('subtotalText').innerText = formatRupiah(subtotal);
  if (document.getElementById('ongkirText')) document.getElementById('ongkirText').innerText = formatRupiah(ongkir);
  if (document.getElementById('totalPayText')) document.getElementById('totalPayText').innerText = formatRupiah(total);

  const discRow = document.getElementById('discountRow');
  if (discRow) {
    if (discount > 0) {
      discRow.classList.remove('hidden');
      document.getElementById('discountText').innerText = `-${formatRupiah(discount)}`;
    } else {
      discRow.classList.add('hidden');
    }
  }
}

// ==========================================
// CHECKOUT & PESANAN
// ==========================================
function openCheckoutModal() {
  if (cart.length === 0) {
    alert('Keranjang belanjaanmu masih kosong!');
    return;
  }
  toggleCartModal();
  document.getElementById('checkoutTotalPay').innerText = document.getElementById('totalPayText').innerText;
  toggleCheckoutModal();
}

function toggleCheckoutModal() {
  const modal = document.getElementById('checkoutModal');
  if (modal) modal.classList.toggle('hidden');
}

function processCheckoutOrder(e) {
  e.preventDefault();
  const orderId = 'BK-' + Math.floor(100000 + Math.random() * 900000);
  const totalPay = document.getElementById('checkoutTotalPay').innerText;
  const paymentMethod = document.getElementById('paymentMethod').value;

  const newOrder = {
    id: orderId,
    date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }),
    items: [...cart],
    totalPrice: totalPay,
    paymentMethod: paymentMethod,
    status: 'Diproses'
  };

  orders.unshift(newOrder);
  cart = [];
  updateCartBadge();

  toggleCheckoutModal();
  alert(`Pesanan Berhasil dibuat!\nID Transaksi: ${orderId}`);
  toggleOrdersModal();
}

// ==========================================
// WISHLIST / FAVORIT
// ==========================================
function toggleWishlist(id) {
  const idx = wishlist.indexOf(id);
  if (idx > -1) {
    wishlist.splice(idx, 1);
  } else {
    wishlist.push(id);
  }
  updateWishlistBadge();
  renderProducts();
}

function updateWishlistBadge() {
  const badge = document.getElementById('wishlistBadge');
  if (!badge) return;
  if (wishlist.length > 0) {
    badge.innerText = wishlist.length;
    badge.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
  }
}

function toggleWishlistFromDetail() {
  if (selectedProductId) {
    toggleWishlist(selectedProductId);
    updateWishlistDetailBtn();
  }
}

function updateWishlistDetailBtn() {
  const isWish = wishlist.includes(selectedProductId);
  const icon = document.getElementById('detailHeartIcon');
  const text = document.getElementById('detailFavoritText');

  if (icon && text) {
    if (isWish) {
      icon.className = "fa-solid fa-heart text-red-600";
      text.innerText = "Suka";
    } else {
      icon.className = "fa-regular fa-heart";
      text.innerText = "Favorit";
    }
  }
}

function toggleWishlistModal() {
  const modal = document.getElementById('wishlistModal');
  if (!modal) return;
  modal.classList.toggle('hidden');
  if (!modal.classList.contains('hidden')) renderWishlistItems();
}

function renderWishlistItems() {
  const container = document.getElementById('wishlistItemsList');
  if (!container) return;

  if (wishlist.length === 0) {
    container.innerHTML = `
      <div class="py-12 text-center text-slate-400 space-y-2">
        <i class="fa-solid fa-heart-crack text-4xl mb-2 text-slate-300"></i>
        <p class="font-bold text-sm">Wishlist masih kosong</p>
        <p class="text-xs">Klik ikon hati pada produk untuk menyimpannya.</p>
      </div>`;
    return;
  }

  const items = products.filter(p => wishlist.includes(p.id));
  container.innerHTML = items.map(p => `
    <div class="flex items-center gap-3 p-3 border border-slate-100 rounded-xl bg-white shadow-sm">
      <img src="${p.images[0]}" class="w-14 h-14 object-cover rounded-lg border">
      <div class="flex-1 min-w-0 space-y-1">
        <h4 class="font-bold text-xs text-slate-800 truncate">${p.name}</h4>
        <p class="font-black text-xs text-red-600">${formatRupiah(p.price)}</p>
      </div>
      <div class="flex items-center gap-1">
        <button onclick="quickAddToCart('${p.id}')" class="bg-red-100 text-red-600 text-xs font-bold px-2.5 py-1.5 rounded-lg hover:bg-red-200">
          + Keranjang
        </button>
        <button onclick="toggleWishlist('${p.id}'); renderWishlistItems();" class="text-slate-400 hover:text-red-600 text-sm px-2">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  `).join('');
}

// ==========================================
// RIWAYAT TRANSAKSI / PESANAN
// ==========================================
function toggleOrdersModal() {
  const modal = document.getElementById('ordersModal');
  if (!modal) return;
  modal.classList.toggle('hidden');
  if (!modal.classList.contains('hidden')) renderOrdersList();
}

function renderOrdersList() {
  const container = document.getElementById('ordersListContainer');
  if (!container) return;

  if (orders.length === 0) {
    container.innerHTML = `
      <div class="py-12 text-center text-slate-400 space-y-2">
        <i class="fa-solid fa-receipt text-4xl mb-2 text-slate-300"></i>
        <p class="font-bold text-sm">Belum ada transaksi</p>
        <p class="text-xs">Yuk, mulai belanja produk impianmu sekarang!</p>
      </div>`;
    return;
  }

  container.innerHTML = orders.map(order => `
    <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-3">
      <div class="flex items-center justify-between border-b border-slate-100 pb-2.5 text-xs">
        <div>
          <span class="font-bold text-slate-800">${order.id}</span>
          <span class="text-slate-400 mx-1">•</span>
          <span class="text-slate-500">${order.date}</span>
        </div>
        <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700">
          ${order.status}
        </span>
      </div>

      <div class="space-y-2">
        ${order.items.map(item => `
          <div class="flex items-center gap-3">
            <img src="${item.images[0]}" class="w-12 h-12 rounded-lg object-cover border border-slate-100">
            <div class="flex-1 min-w-0">
              <p class="text-xs font-bold text-slate-800 truncate">${item.name}</p>
              <p class="text-[11px] text-slate-500">${item.qty} x ${formatRupiah(item.price)}</p>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="flex items-center justify-between border-t border-slate-100 pt-2.5 text-xs">
        <div>
          <span class="text-slate-500">Total Pembayaran:</span>
          <span class="font-black text-red-600 ml-1">${order.totalPrice}</span>
        </div>
        <span class="text-[11px] text-slate-400">${order.paymentMethod}</span>
      </div>
    </div>
  `).join('');
}

// ==========================================
// INITIALIZATION ON LOAD
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartBadge();
  updateWishlistBadge();
});
