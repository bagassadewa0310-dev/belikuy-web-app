// ==========================================
// DATA PRODUK (DESAIN SAMAKAN DENGAN GAMBAR BELIKUY)
// ==========================================
const products = [
  {
    id: "p1",
    name: "Apple iPhone 15 Pro Max 256GB - Natural Titanium",
    category: "smartphone",
    price: 22499000,
    originalPrice: 24999000,
    rating: 4.9,
    penilaian: 2890,
    terjual: "1.2RB",
    isMall: true,
    sizes: ["128GB", "256GB", "512GB", "1TB"],
    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80"
    ],
    store: { name: "Apple Official Store", logo: "" },
    description: "iPhone 15 Pro Max. Didesain dengan titanium yang kuat dan ringan, dilengkapi tombol Tindakan yang dapat disesuaikan, dan sistem kamera iPhone paling andal."
  },
  {
    id: "p2",
    name: "Samsung Galaxy S24 Ultra 12/512GB AI Smartphone",
    category: "smartphone",
    price: 19999000,
    originalPrice: 21999000,
    rating: 4.9,
    penilaian: 3400,
    terjual: "2.4RB",
    isMall: true,
    sizes: ["12/256GB", "12/512GB", "12/1TB"],
    images: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80"
    ],
    store: { name: "Samsung Official Store", logo: "" },
    description: "Selamat datang di era AI seluler. Dengan Galaxy S24 Ultra di tangan Anda, Anda dapat melepaskan tingkat kreativitas, produktivitas, dan potensi baru."
  },
  {
    id: "p3",
    name: "Xiaomi Redmi Note 13 Pro 5G 12/256GB",
    category: "smartphone",
    price: 4399000,
    originalPrice: 4799000,
    rating: 4.8,
    penilaian: 1820,
    terjual: "5RB+",
    isMall: true,
    sizes: ["8/256GB", "12/256GB"],
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80"
    ],
    store: { name: "Xiaomi Official Store", logo: "" },
    description: "Kamera flagship 200MP dengan OIS, layar AMOLED 1.5K 120Hz, dan pengisian daya turbo 67W."
  },
  {
    id: "p4",
    name: "OPPO Reno 11 Pro 5G 12/512GB - Portrait Expert",
    category: "smartphone",
    price: 8999000,
    originalPrice: 9499000,
    rating: 4.8,
    penilaian: 920,
    terjual: "1.5RB",
    isMall: true,
    sizes: ["12/512GB"],
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
    ],
    store: { name: "OPPO Official Store", logo: "" },
    description: "Sistem Kamera Portrait Ultra-Jernih dengan pengisian super cepat 80W SUPERVOOC."
  },
  {
    id: "p5",
    name: "vivo V30 5G 12/512GB - Aura Light Portrait",
    category: "smartphone",
    price: 5999000,
    originalPrice: 6499000,
    rating: 4.8,
    penilaian: 1400,
    terjual: "3RB+",
    isMall: true,
    sizes: ["8/256GB", "12/512GB"],
    images: [
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=600&q=80"
    ],
    store: { name: "vivo Official Store", logo: "" },
    description: "Aura Light Portrait pintar yang memberikan pencahayaan studio pada setiap foto portrait Anda."
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
  return 'Rp' + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
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
        <p class="font-bold text-xs">Produk tidak ditemukan</p>
        <p class="text-[11px]">Coba kata kunci atau kategori lain.</p>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => {
    const isWish = wishlist.includes(p.id);

    return `
      <div class="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition overflow-hidden group flex flex-col cursor-pointer" onclick="openProductDetail('${p.id}')">
        
        <!-- Image Container -->
        <div class="relative overflow-hidden aspect-square bg-slate-100">
          <img src="${p.images[0]}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300">
          
          ${p.isMall ? `<span class="absolute top-2 left-2 bg-red-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded">Mall</span>` : ''}
          
          <button onclick="event.stopPropagation(); toggleWishlist('${p.id}');" class="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-600 hover:text-red-600 transition shadow">
            <i class="${isWish ? 'fa-solid text-red-600' : 'fa-regular'} fa-heart text-[11px]"></i>
          </button>
        </div>

        <!-- Info Container -->
        <div class="p-2.5 flex-1 flex flex-col justify-between space-y-2">
          <div>
            <h3 class="font-semibold text-xs text-slate-800 line-clamp-2 leading-snug">${p.name}</h3>
            
            <div class="mt-2">
              <div class="font-black text-xs text-red-600">${formatRupiah(p.price)}</div>
              ${p.originalPrice ? `<div class="text-[10px] text-slate-400 line-through">${formatRupiah(p.originalPrice)}</div>` : ''}
            </div>
          </div>

          <div class="flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-slate-50">
            <div class="flex items-center gap-1 text-amber-500 font-bold">
              <i class="fa-solid fa-star text-[9px]"></i>
              <span>${p.rating}</span>
            </div>
            <span>Terjual ${p.terjual}</span>
          </div>
        </div>

      </div>
    `;
  }).join('');
}

function filterCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.classList.remove('bg-red-600', 'text-white', 'font-bold');
    btn.classList.add('bg-white', 'text-slate-600', 'font-medium');
  });
  if (event && event.target) {
    event.target.classList.remove('bg-white', 'text-slate-600', 'font-medium');
    event.target.classList.add('bg-red-600', 'text-white', 'font-bold');
  }
  renderProducts();
}

function handleSearch(val) {
  searchQuery = val;
  renderProducts();
}

function searchTag(tag) {
  const input = document.getElementById('searchInput');
  if (input) {
    input.value = tag;
    handleSearch(tag);
  }
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
  document.getElementById('detailStoreName').innerText = product.store.name;
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
    <img src="${img}" onclick="document.getElementById('detailMainImg').src='${img}'" class="w-10 h-10 object-cover rounded-lg border cursor-pointer hover:border-red-600">
  `).join('');

  // Ukuran / Varian
  const sizeContainer = document.getElementById('sizeButtonsContainer');
  if (product.sizes && product.sizes.length > 0) {
    document.getElementById('sizeSection').classList.remove('hidden');
    sizeContainer.innerHTML = product.sizes.map(s => `
      <button onclick="selectSize('${s}')" class="size-btn px-2.5 py-1 text-[11px] border rounded-lg font-semibold transition ${s === selectedSize ? 'border-red-600 bg-red-50 text-red-600' : 'border-slate-200 text-slate-600'}">${s}</button>
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
      btn.className = "size-btn px-2.5 py-1 text-[11px] border rounded-lg font-semibold transition border-red-600 bg-red-50 text-red-600";
    } else {
      btn.className = "size-btn px-2.5 py-1 text-[11px] border rounded-lg font-semibold transition border-slate-200 text-slate-600";
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
        <p class="font-bold text-xs">Keranjangmu masih kosong</p>
        <p class="text-[11px]">Yuk, tambah produk impianmu!</p>
      </div>`;
    calculateCartTotals();
    return;
  }

  container.innerHTML = cart.map((item, idx) => `
    <div class="flex items-center gap-3 p-2.5 border border-slate-100 rounded-xl bg-white shadow-sm">
      <img src="${item.images[0]}" class="w-12 h-12 object-cover rounded-lg border">
      <div class="flex-1 min-w-0 space-y-0.5">
        <h4 class="font-bold text-xs text-slate-800 truncate">${item.name}</h4>
        ${item.size ? `<span class="inline-block bg-slate-100 text-slate-600 text-[9px] font-bold px-1.5 py-0.5 rounded">Varian: ${item.size}</span>` : ''}
        <p class="font-black text-xs text-red-600">${formatRupiah(item.price)}</p>
      </div>

      <div class="flex items-center gap-2">
        <div class="flex items-center border border-slate-200 rounded-lg overflow-hidden text-xs">
          <button onclick="updateCartQty(${idx}, -1)" class="px-2 py-0.5 bg-slate-100 font-bold hover:bg-slate-200">-</button>
          <span class="px-2 font-bold text-[11px]">${item.qty}</span>
          <button onclick="updateCartQty(${idx}, 1)" class="px-2 py-0.5 bg-slate-100 font-bold hover:bg-slate-200">+</button>
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

  if (icon) {
    if (isWish) {
      icon.className = "fa-solid fa-heart text-red-600";
    } else {
      icon.className = "fa-regular fa-heart";
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
        <p class="font-bold text-xs">Wishlist masih kosong</p>
      </div>`;
    return;
  }

  const items = products.filter(p => wishlist.includes(p.id));
  container.innerHTML = items.map(p => `
    <div class="flex items-center gap-3 p-2.5 border border-slate-100 rounded-xl bg-white shadow-sm">
      <img src="${p.images[0]}" class="w-12 h-12 object-cover rounded-lg border">
      <div class="flex-1 min-w-0 space-y-0.5">
        <h4 class="font-bold text-xs text-slate-800 truncate">${p.name}</h4>
        <p class="font-black text-xs text-red-600">${formatRupiah(p.price)}</p>
      </div>
      <div class="flex items-center gap-1">
        <button onclick="quickAddToCart('${p.id}')" class="bg-red-100 text-red-600 text-[11px] font-bold px-2 py-1 rounded-lg hover:bg-red-200">
          + Keranjang
        </button>
        <button onclick="toggleWishlist('${p.id}'); renderWishlistItems();" class="text-slate-400 hover:text-red-600 text-xs px-1">
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
        <p class="font-bold text-xs">Belum ada transaksi</p>
      </div>`;
    return;
  }

  container.innerHTML = orders.map(order => `
    <div class="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm space-y-2.5">
      <div class="flex items-center justify-between border-b border-slate-100 pb-2 text-[11px]">
        <div>
          <span class="font-bold text-slate-800">${order.id}</span>
          <span class="text-slate-400 mx-1">•</span>
          <span class="text-slate-500">${order.date}</span>
        </div>
        <span class="px-2 py-0.5 rounded-full font-bold bg-amber-100 text-amber-700 text-[10px]">
          ${order.status}
        </span>
      </div>

      <div class="space-y-2">
        ${order.items.map(item => `
          <div class="flex items-center gap-2.5">
            <img src="${item.images[0]}" class="w-10 h-10 rounded-lg object-cover border border-slate-100">
            <div class="flex-1 min-w-0">
              <p class="text-xs font-bold text-slate-800 truncate">${item.name}</p>
              <p class="text-[10px] text-slate-500">${item.qty} x ${formatRupiah(item.price)}</p>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="flex items-center justify-between border-t border-slate-100 pt-2 text-[11px]">
        <div>
          <span class="text-slate-500">Total:</span>
          <span class="font-black text-red-600 ml-1">${order.totalPrice}</span>
        </div>
        <span class="text-slate-400">${order.paymentMethod}</span>
      </div>
    </div>
  `).join('');
}

// INITIALIZATION ON LOAD
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartBadge();
  updateWishlistBadge();
});
