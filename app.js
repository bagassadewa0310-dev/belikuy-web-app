// ==========================================
// DATA PRODUK (DESAIN SAMAKAN DENGAN GAMBAR BELIKUY)
// ==========================================
let products = [
  // ---------------- LAPTOP ----------------
  {
    id: "lt1",
    name: "ASUS ROG Strix G16",
    category: "laptop",
    price: 26999000,
    originalPrice: 28999000,
    rating: 4.9,
    penilaian: 1240,
    terjual: "1.2RB",
    isMall: true,
    sizes: ["i7 / 16GB / 512GB", "i9 / 32GB / 1TB"],
    images: ["https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80"],
    store: { name: "ASUS Official Store", logo: "" },
    description: "Laptop gaming bertenaga tinggi dengan performa maksimal untuk eSports dan kreasi konten heavy duty."
  },
  {
    id: "lt2",
    name: "ASUS TUF Gaming A15",
    category: "laptop",
    price: 15499000,
    originalPrice: 16999000,
    rating: 4.8,
    penilaian: 980,
    terjual: "2.5RB",
    isMall: true,
    sizes: ["Ryzen 7 / 16GB / 512GB"],
    images: ["https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80"],
    store: { name: "ASUS Official Store", logo: "" },
    description: "Daya tahan standar militer dengan performa gaming handal berbasis prosesor AMD Ryzen."
  },
  {
    id: "lt3",
    name: "ASUS Zenbook 14 OLED",
    category: "laptop",
    price: 17299000,
    originalPrice: 18999000,
    rating: 4.9,
    penilaian: 850,
    terjual: "900+",
    isMall: true,
    sizes: ["16GB / 1TB OLED"],
    images: ["https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=600&q=80"],
    store: { name: "ASUS Official Store", logo: "" },
    description: "Desain ultra-tipis nan elegan dipadukan dengan layar OLED visual terbaik kelas profesional."
  },
  {
    id: "lt4",
    name: "ASUS Vivobook 15",
    category: "laptop",
    price: 7499000,
    originalPrice: 8199000,
    rating: 4.7,
    penilaian: 2100,
    terjual: "4RB+",
    isMall: false,
    sizes: ["i3 / 8GB / 512GB", "i5 / 16GB / 512GB"],
    images: ["https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80"],
    store: { name: "ASUS Authorized", logo: "" },
    description: "Laptop harian serbaguna untuk produktivitas kerja dan belajar tanpa hambatan."
  },
  {
    id: "lt5",
    name: "ASUS ExpertBook B1",
    category: "laptop",
    price: 8999000,
    originalPrice: 9999000,
    rating: 4.8,
    penilaian: 430,
    terjual: "800+",
    isMall: true,
    sizes: ["8GB / 256GB SSD", "16GB / 512GB SSD"],
    images: ["https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=600&q=80"],
    store: { name: "ASUS Business Store", logo: "" },
    description: "Laptop bisnis ultra-andal dengan sistem keamanan tingkat tinggi bagi para profesional."
  },
  {
    id: "lt6",
    name: "Acer Predator Helios Neo 16",
    category: "laptop",
    price: 20999000,
    originalPrice: 22999000,
    rating: 4.9,
    penilaian: 760,
    terjual: "1.1RB",
    isMall: true,
    sizes: ["i7 / 16GB / 1TB RTX 4060"],
    images: ["https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80"],
    store: { name: "Acer Official Store", logo: "" },
    description: "Inovasi pendinginan maksimal dan grafis RTX kelas atas untuk pengalaman eSports murni."
  },

  // ---------------- HP (SMARTPHONE) ----------------
  {
    id: "hp1",
    name: "Galaxy S25 Ultra",
    category: "hp",
    price: 21999000,
    originalPrice: 23999000,
    rating: 5.0,
    penilaian: 4200,
    terjual: "3.5RB",
    isMall: true,
    sizes: ["12/256GB", "12/512GB", "12/1TB"],
    images: ["https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80"],
    store: { name: "Samsung Official Store", logo: "" },
    description: "Flagship tercanggih dengan kamera 200MP, dukungan S-Pen built-in, serta Galaxy AI paling advance."
  },
  {
    id: "hp6",
    name: "iPhone 16",
    category: "hp",
    price: 16499000,
    originalPrice: 17999000,
    rating: 4.9,
    penilaian: 3100,
    terjual: "4.2RB",
    isMall: true,
    sizes: ["128GB", "256GB", "512GB"],
    images: ["https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80"],
    store: { name: "iBox Official Store", logo: "" },
    description: "Dilengkapi fitur Camera Control inovatif dan Chip A18 berarsitektur canggih."
  }
];

// ==========================================
// MOCK USERS & SYSTEM AUTHENTICATION
// ==========================================
const registeredUsers = [
  {
    id: "u1",
    name: "BeliKuy Official Admin",
    gmail: "admin.seller@belikuy.id",
    phone: "081234567890",
    pass: "admin123",
    role: "admin", // Admin Seller
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "u2",
    name: "Budi Santoso",
    gmail: "budi.santoso@gmail.com",
    phone: "081987654321",
    pass: "user123",
    role: "user", // Pembeli Biasa
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"
  }
];

// Mode Default saat aplikasi dimuat pertama kali: Pembeli Biasa (Budi Santoso)
let currentUser = registeredUsers[1]; 

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
// RENDER AUTH PROFILE & CONTROLS BAR
// ==========================================
function renderAuthHeader() {
  const container = document.getElementById('authContainer');
  const adminBar = document.getElementById('adminControlBar');
  if (!container) return;

  if (currentUser) {
    container.innerHTML = `
      <div class="flex items-center gap-3 bg-red-700/60 p-1.5 px-3 rounded-full border border-red-500/40">
        <img src="${currentUser.avatar}" class="w-7 h-7 rounded-full object-cover border border-white/50">
        <div class="text-[10px] leading-tight hidden sm:block">
          <div class="font-bold flex items-center gap-1">
            <span>${currentUser.name}</span>
            <span class="bg-${currentUser.role === 'admin' ? 'yellow-400 text-red-900' : 'blue-400 text-white'} font-extrabold px-1 rounded text-[8px] uppercase">${currentUser.role}</span>
          </div>
          <div class="text-white/80 text-[9px]">${currentUser.gmail}</div>
        </div>
        <button onclick="handleLogout()" class="ml-1 text-white/80 hover:text-white p-1 text-xs" title="Keluar">
          <i class="fa-solid fa-right-from-bracket"></i>
        </button>
      </div>
    `;

    // Sembunyikan/Tampilkan Panel Khusus Admin Seller
    if (adminBar) {
      if (currentUser.role === 'admin') {
        adminBar.classList.remove('hidden');
      } else {
        adminBar.classList.add('hidden');
      }
    }
  } else {
    container.innerHTML = `
      <button onclick="toggleLoginModal()" class="bg-white text-red-600 font-bold px-4 py-1.5 rounded-full text-xs shadow hover:bg-slate-50 transition flex items-center gap-1.5">
        <i class="fa-solid fa-right-to-bracket"></i> Masuk
      </button>
    `;
    if (adminBar) adminBar.classList.add('hidden');
  }
}

// ==========================================
// AUTHENTICATION & LOGIN SELLER SYSTEM
// ==========================================
function toggleLoginModal() {
  const modal = document.getElementById('loginModal');
  if (modal) modal.classList.toggle('hidden');
}

function handleLoginSubmit(e) {
  e.preventDefault();
  const inputId = document.getElementById('loginIdentifier').value.trim().toLowerCase();
  const inputPass = document.getElementById('loginPassword') ? document.getElementById('loginPassword').value.trim() : "";

  // Cari user berdasarkan Gmail/HP & Password
  const foundUser = registeredUsers.find(u => 
    (u.gmail.toLowerCase() === inputId || u.phone === inputId) && 
    (!u.pass || u.pass === inputPass)
  );

  if (foundUser) {
    currentUser = foundUser;
    alert(`Berhasil Login!\nSelamat datang kembali, ${currentUser.name} (${currentUser.role.toUpperCase()})`);
  } else {
    // Apabila user mendaftar acak sebagai Buyer
    currentUser = {
      id: "u_" + Date.now(),
      name: "Pengguna Baru",
      gmail: inputId.includes('@') ? inputId : "user@gmail.com",
      phone: inputId.includes('@') ? "081200000000" : inputId,
      role: "user",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"
    };
    alert(`Masuk sebagai Pembeli Biasa (${currentUser.gmail})`);
  }

  toggleLoginModal();
  renderAuthHeader();
  renderProducts();
}

function quickLoginAdmin() {
  const adminUser = registeredUsers.find(u => u.role === 'admin');
  if (adminUser) {
    currentUser = adminUser;
    alert("🎉 Akses Terverifikasi!\nAnda sekarang login sebagai Admin Seller BeliKuy.");
    toggleLoginModal();
    renderAuthHeader();
    renderProducts();
  }
}

function handleLogout() {
  if (confirm("Apakah Anda yakin ingin keluar dari akun?")) {
    currentUser = null;
    renderAuthHeader();
    renderProducts();
  }
}

// PERIKSA HAK AKSES ADMIN SELLER SEBELUM MEMBUKA AKSES CRUD
function requireAdminAuth(callback) {
  if (!currentUser || currentUser.role !== 'admin') {
    alert("⛔ Akses Ditolak!\nFitur ini khusus untuk Admin Seller. Silakan login dengan Akun Admin terlebih dahulu.");
    toggleLoginModal();
    return false;
  }
  if (typeof callback === 'function') callback();
  return true;
}

// ==========================================
// RENDER KATALOG & FILTER PRODUK
// ==========================================
function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  const filtered = products.filter(p => {
    const matchCat = currentCategory === 'semua' || p.category.toLowerCase() === currentCategory.toLowerCase();
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

  const isAdmin = currentUser && currentUser.role === 'admin';

  grid.innerHTML = filtered.map(p => {
    const isWish = wishlist.includes(p.id);

    return `
      <div class="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition overflow-hidden group flex flex-col cursor-pointer relative" onclick="openProductDetail('${p.id}')">
        
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

          ${isAdmin ? `
            <!-- Action Bar Khusus Admin Seller -->
            <div class="flex gap-1.5 pt-2 border-t border-slate-100" onclick="event.stopPropagation();">
              <button onclick="openAdminProductModal('${p.id}')" class="flex-1 bg-amber-50 hover:bg-amber-100 text-amber-700 font-bold py-1 rounded text-[10px] border border-amber-200">
                <i class="fa-solid fa-pen-to-square"></i> Edit
              </button>
              <button onclick="deleteProduct('${p.id}')" class="flex-1 bg-red-50 hover:bg-red-100 text-red-600 font-bold py-1 rounded text-[10px] border border-red-200">
                <i class="fa-solid fa-trash"></i> Hapus
              </button>
            </div>
          ` : ''}

        </div>

      </div>
    `;
  }).join('');
}

function filterCategory(cat) {
  currentCategory = cat;
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
// KERANJANG & CHECKOUT
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
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  updateCartBadge();
  renderCartItems();
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  updateCartBadge();
  renderCartItems();
}

function calculateCartTotals() {
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  let ongkir = cart.length > 0 ? 15000 : 0;
  let discount = 0;

  if (selectedVoucher === 'ONGKIR100') ongkir = 0;
  else if (selectedVoucher === 'DISCOUNT10') discount = Math.round(subtotal * 0.1);
  else if (selectedVoucher === 'HEMAT50K' && subtotal >= 500000) discount = 50000;

  const total = Math.max(0, subtotal - discount + ongkir);

  if (document.getElementById('subtotalText')) document.getElementById('subtotalText').innerText = formatRupiah(subtotal);
  if (document.getElementById('ongkirText')) document.getElementById('ongkirText').innerText = formatRupiah(ongkir);
  if (document.getElementById('discountText')) document.getElementById('discountText').innerText = `- ${formatRupiah(discount)}`;
  if (document.getElementById('totalPayText')) document.getElementById('totalPayText').innerText = formatRupiah(total);

  return total;
}

function openCheckoutModal() {
  if (cart.length === 0) {
    alert("Keranjang belanja kosong!");
    return;
  }
  toggleCartModal();
  const totalPay = calculateCartTotals();
  document.getElementById('checkoutTotalPay').innerText = formatRupiah(totalPay);
  toggleCheckoutModal();
}

function toggleCheckoutModal() {
  const modal = document.getElementById('checkoutModal');
  if (modal) modal.classList.toggle('hidden');
}

function processCheckoutOrder(e) {
  e.preventDefault();
  
  if (cart.length === 0) return;

  const total = calculateCartTotals();
  const paymentMethodSelect = document.getElementById('paymentMethod');
  const paymentMethod = paymentMethodSelect ? paymentMethodSelect.value : "QRIS / E-Wallet";

  const newOrder = {
    id: "INV/" + Date.now().toString().slice(-8),
    date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
    items: JSON.parse(JSON.stringify(cart)),
    totalPay: total,
    paymentMethod: paymentMethod,
    user: currentUser ? currentUser.name : "Pembeli Anonim",
    status: "Diproses Seller"
  };

  orders.unshift(newOrder);
  cart = [];
  selectedVoucher = '';
  updateCartBadge();
  toggleCheckoutModal();

  alert(`🎉 Transaksi Berhasil!\nNo. Invoice: ${newOrder.id}\nTotal Bayar: ${formatRupiah(total)}`);
  toggleOrdersModal();
}

// ==========================================
// WISHLIST & ORDERS
// ==========================================
function toggleWishlist(id) {
  const idx = wishlist.indexOf(id);
  if (idx > -1) wishlist.splice(idx, 1);
  else wishlist.push(id);

  updateWishlistBadge();
  renderProducts();
}

function updateWishlistBadge() {
  const badge = document.getElementById('wishlistBadge');
  if (!badge) return;
  badge.innerText = wishlist.length;
  if (wishlist.length > 0) badge.classList.remove('hidden');
  else badge.classList.add('hidden');
}

function updateWishlistDetailBtn() {
  const icon = document.getElementById('detailHeartIcon');
  if (!icon) return;
  const isWish = wishlist.includes(selectedProductId);
  icon.className = isWish ? 'fa-solid fa-heart text-red-600' : 'fa-regular fa-heart';
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
    container.innerHTML = `<div class="py-12 text-center text-slate-400 space-y-2"><i class="fa-solid fa-heart-crack text-4xl mb-2"></i><p class="font-bold text-xs">Wishlist masih kosong</p></div>`;
    return;
  }

  const wishProducts = products.filter(p => wishlist.includes(p.id));

  container.innerHTML = wishProducts.map(p => `
    <div class="flex items-center justify-between p-2.5 border border-slate-100 rounded-xl bg-white shadow-sm">
      <div class="flex items-center gap-3">
        <img src="${p.images[0]}" class="w-12 h-12 object-cover rounded-lg border">
        <div>
          <h4 class="font-bold text-xs text-slate-800 line-clamp-1">${p.name}</h4>
          <p class="font-black text-xs text-red-600">${formatRupiah(p.price)}</p>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <button onclick="quickAddToCart('${p.id}')" class="bg-red-100 text-red-600 font-bold px-2.5 py-1 rounded-lg text-xs hover:bg-red-200">+ Cart</button>
        <button onclick="toggleWishlist('${p.id}'); renderWishlistItems();" class="text-slate-400 hover:text-red-600 text-xs p-1"><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>
  `).join('');
}

function toggleOrdersModal() {
  const modal = document.getElementById('ordersModal');
  if (!modal) return;
  modal.classList.toggle('hidden');
  if (!modal.classList.contains('hidden')) renderOrdersItems();
}

function renderOrdersItems() {
  const container = document.getElementById('ordersListContainer');
  if (!container) return;

  if (orders.length === 0) {
    container.innerHTML = `<div class="py-12 text-center text-slate-400 space-y-2"><i class="fa-solid fa-receipt text-4xl mb-2"></i><p class="font-bold text-xs">Belum ada riwayat transaksi</p></div>`;
    return;
  }

  container.innerHTML = orders.map(ord => `
    <div class="border border-slate-200 rounded-2xl p-4 bg-white space-y-3 text-xs shadow-sm">
      <div class="flex justify-between items-center border-b border-slate-100 pb-2.5">
        <div>
          <span class="font-black text-slate-800 text-xs">${ord.id}</span>
          <span class="text-slate-400 text-[10px] block">${ord.date} • A.n ${ord.user}</span>
        </div>
        <span class="bg-amber-100 text-amber-800 font-bold text-[10px] px-2.5 py-1 rounded-full">${ord.status}</span>
      </div>
      <div class="space-y-2">
        ${ord.items.map(i => `
          <div class="flex items-center gap-3">
            <img src="${i.images[0]}" class="w-10 h-10 object-cover rounded-lg border">
            <div class="flex-1 min-w-0">
              <div class="font-semibold text-slate-700 text-xs truncate">${i.name}</div>
              <div class="text-[10px] text-slate-400">${i.qty} x ${formatRupiah(i.price)}</div>
            </div>
            <div class="font-bold text-slate-800 text-xs">${formatRupiah(i.price * i.qty)}</div>
          </div>
        `).join('')}
      </div>
      <div class="flex justify-between items-center border-t border-slate-100 pt-2.5">
        <span class="text-slate-500 font-medium text-[11px]">Total Pembayaran:</span>
        <span class="text-red-600 font-black text-sm">${formatRupiah(ord.totalPay)}</span>
      </div>
    </div>
  `).join('');
}

// ==========================================
// ADMIN SELLER CRUD SYSTEM (DI-PROTEKSI AUTH ADMIN)
// ==========================================
function openAdminProductModal(prodId = null) {
  // Verifikasi Validasi Admin Seller terlebih dahulu
  requireAdminAuth(() => {
    const modal = document.getElementById('adminProductModal');
    const form = document.getElementById('adminProductForm');
    const title = document.getElementById('adminModalTitle');
    if (!modal || !form) return;

    form.reset();

    if (prodId) {
      const p = products.find(item => item.id === prodId);
      if (!p) return;
      title.innerHTML = `<i class="fa-solid fa-pen-to-square text-amber-400"></i> Edit Produk: ${p.name}`;
      document.getElementById('adminProdId').value = p.id;
      document.getElementById('adminProdNama').value = p.name;
      document.getElementById('adminProdKategori').value = p.category;
      document.getElementById('adminProdHarga').value = p.price;
      document.getElementById('adminProdHargaDiskon').value = p.originalPrice || '';
      document.getElementById('adminProdGambar').value = p.images[0];
    } else {
      title.innerHTML = `<i class="fa-solid fa-box text-amber-400"></i> Tambah Produk Baru`;
      document.getElementById('adminProdId').value = '';
    }

    modal.classList.remove('hidden');
  });
}

function closeAdminProductModal() {
  const modal = document.getElementById('adminProductModal');
  if (modal) modal.classList.add('hidden');
}

function handleSaveProduct(e) {
  e.preventDefault();

  // Validasi Ganda Akses Admin
  if (!requireAdminAuth()) return;

  const id = document.getElementById('adminProdId').value;
  const name = document.getElementById('adminProdNama').value.trim();
  const category = document.getElementById('adminProdKategori').value;
  const price = parseInt(document.getElementById('adminProdHarga').value) || 0;
  const originalPriceVal = document.getElementById('adminProdHargaDiskon').value;
  const originalPrice = originalPriceVal ? parseInt(originalPriceVal) : null;
  const image = document.getElementById('adminProdGambar').value.trim() || "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=600&q=80";

  if (id) {
    // Edit Produk
    const idx = products.findIndex(p => p.id === id);
    if (idx > -1) {
      products[idx].name = name;
      products[idx].category = category;
      products[idx].price = price;
      products[idx].originalPrice = originalPrice;
      products[idx].images[0] = image;
      alert("Produk berhasil diperbarui!");
    }
  } else {
    // Tambah Produk Baru
    const newProduct = {
      id: "p_" + Date.now(),
      name: name,
      category: category,
      price: price,
      originalPrice: originalPrice,
      rating: 5.0,
      penilaian: 1,
      terjual: "0",
      isMall: true,
      sizes: ["Standard"],
      images: [image],
      store: { name: currentUser ? currentUser.name : "Official Store", logo: "" },
      description: "Produk terbaru yang baru saja ditambahkan oleh Admin Seller BeliKuy."
    };
    products.unshift(newProduct);
    alert("Produk baru berhasil ditambahkan!");
  }

  closeAdminProductModal();
  renderProducts();
}

function deleteProduct(id) {
  requireAdminAuth(() => {
    if (confirm("Apakah Anda yakin ingin menghapus produk ini dari katalog?")) {
      products = products.filter(p => p.id !== id);
      renderProducts();
      alert("Produk berhasil dihapus!");
    }
  });
}

// ==========================================
// INITIALIZATION ON PAGE LOAD
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  renderAuthHeader();
  renderProducts();
  updateCartBadge();
  updateWishlistBadge();
});
