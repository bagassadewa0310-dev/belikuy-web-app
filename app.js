// ==========================================
// DATA UTAMA PRODUK (LENGKAP 15 KATEGORI)
// ==========================================

const INITIAL_PRODUCTS = [
  // 1. Smartphone
  {
    id: "PROD-101",
    name: "Apple iPhone 15 Pro Max 256GB - Natural Titanium",
    category: "Smartphone",
    price: 22499000,
    originalPrice: 24999000,
    rating: 4.9,
    soldCount: "1.2RB",
    ratingCount: "850",
    favCount: "3.2RB",
    sizes: ["128GB", "256GB", "512GB", "1TB"],
    images: ["https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&auto=format&fit=crop&q=80"],
    store: { name: "iBox Official Store", logo: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=100&auto=format&fit=crop&q=80" },
    description: "Apple iPhone 15 Pro Max dengan bodi titanium ringan, chip A17 Pro super kencang, dan tombol Action Button intuitif."
  },
  {
    id: "PROD-102",
    name: "Samsung Galaxy S24 Ultra 12/512GB AI Smartphone",
    category: "Smartphone",
    price: 19999000,
    originalPrice: 21999000,
    rating: 4.9,
    soldCount: "2.4RB",
    ratingCount: "1.1RB",
    favCount: "4.5RB",
    sizes: ["256GB", "512GB", "1TB"],
    images: ["https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&auto=format&fit=crop&q=80"],
    store: { name: "Samsung Official", logo: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=100&auto=format&fit=crop&q=80" },
    description: "Didukung Galaxy AI, kamera 200MP, S-Pen terintegrasi, dan rangka Titanium kokoh."
  },
  {
    id: "PROD-103",
    name: "Xiaomi Redmi Note 13 Pro 5G 12/256GB",
    category: "Smartphone",
    price: 4399000,
    originalPrice: 4799000,
    rating: 4.8,
    soldCount: "5RB+",
    ratingCount: "2.8RB",
    favCount: "6.1RB",
    sizes: ["8/256GB", "12/256GB"],
    images: ["https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=80"],
    store: { name: "Xiaomi Official Store", logo: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=100&auto=format&fit=crop&q=80" },
    description: "Kamera 200MP OIS, layar AMOLED 120Hz 1.5K, fast charging 67W Turbo Charge."
  },
  {
    id: "PROD-104",
    name: "OPPO Reno 11 Pro 5G 12/512GB - Portrait Expert",
    category: "Smartphone",
    price: 8999000,
    originalPrice: 9499000,
    rating: 4.8,
    soldCount: "1.5RB",
    ratingCount: "720",
    favCount: "2.1RB",
    sizes: ["12/512GB"],
    images: ["https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&auto=format&fit=crop&q=80"],
    store: { name: "OPPO Official", logo: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=100&auto=format&fit=crop&q=80" },
    description: "Kamera Telephoto Portrait 32MP, pengisian daya 80W SUPERVOOC, dan desain 3D Curved."
  },
  {
    id: "PROD-105",
    name: "vivo V30 5G 12/512GB - Aura Light Portrait",
    category: "Smartphone",
    price: 5999000,
    originalPrice: 6499000,
    rating: 4.8,
    soldCount: "3RB+",
    ratingCount: "1.4RB",
    favCount: "3.8RB",
    sizes: ["8/256GB", "12/512GB"],
    images: ["https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600&auto=format&fit=crop&q=80"],
    store: { name: "vivo Official Store", logo: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=100&auto=format&fit=crop&q=80" },
    description: "Aura Light Portrait 3.0 cerdas, Baterai 5000mAh tertipis dengan FlashCharge 80W."
  },

  // 2. Laptop
  {
    id: "PROD-201",
    name: "ASUS Vivobook 14 OLED Intel Core i5 16GB 512GB SSD",
    category: "Laptop",
    price: 10499000,
    originalPrice: 11999000,
    rating: 4.9,
    soldCount: "800+",
    ratingCount: "410",
    favCount: "1.9RB",
    sizes: ["i5 / 16GB / 512GB"],
    images: ["https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=80"],
    store: { name: "ASUS Official Store", logo: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=100&auto=format&fit=crop&q=80" },
    description: "Layar FHD OLED memukau, bodi tipis ringan, ditenagai prosesor Intel Core generasi terbaru."
  },
  {
    id: "PROD-202",
    name: "Apple MacBook Air M2 13 Inchi 8GB 256GB SSD",
    category: "Laptop",
    price: 15999000,
    originalPrice: 17499000,
    rating: 5.0,
    soldCount: "2.1RB",
    ratingCount: "1.3RB",
    favCount: "5.4RB",
    sizes: ["256GB", "512GB"],
    images: ["https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80"],
    store: { name: "iBox Official Store", logo: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=100&auto=format&fit=crop&q=80" },
    description: "Chip M2 powerful, daya tahan baterai hingga 18 jam, layar Liquid Retina 13,6 inci."
  },
  {
    id: "PROD-203",
    name: "Lenovo IdeaPad Slim 3 Ryzen 5 16GB 512GB SSD",
    category: "Laptop",
    price: 8299000,
    originalPrice: 8999000,
    rating: 4.8,
    soldCount: "1.1RB",
    ratingCount: "620",
    favCount: "2.3RB",
    sizes: ["Ryzen 5 / 16GB"],
    images: ["https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&auto=format&fit=crop&q=80"],
    store: { name: "Lenovo Official Store", logo: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=100&auto=format&fit=crop&q=80" },
    description: "Laptop ringan ideal untuk kerja dan kuliah, RAM 16GB multitasking lancar."
  },

  // 3. Komputer Desktop
  {
    id: "PROD-301",
    name: "PC Gaming Intel Core i7 RTX 4060 16GB DDR5 1TB NVMe",
    category: "Komputer Desktop",
    price: 16500000,
    originalPrice: 18000000,
    rating: 4.9,
    soldCount: "350",
    ratingCount: "190",
    favCount: "1.2RB",
    sizes: ["RTX 4060", "RTX 4070"],
    images: ["https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&auto=format&fit=crop&q=80"],
    store: { name: "BeliKuy Rig Store", logo: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=100&auto=format&fit=crop&q=80" },
    description: "Komputer Gaming rakitan high performance dengan pendingin liquid & RGB Casing."
  },

  // 4. Televisi (Smart TV)
  {
    id: "PROD-401",
    name: "Samsung 55 Inchi Crystal UHD 4K Smart TV",
    category: "Smart TV",
    price: 6899000,
    originalPrice: 8299000,
    rating: 4.9,
    soldCount: "1.8RB",
    ratingCount: "920",
    favCount: "3.1RB",
    sizes: ["43 Inchi", "50 Inchi", "55 Inchi", "65 Inchi"],
    images: ["https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&auto=format&fit=crop&q=80"],
    store: { name: "Samsung Electronics", logo: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=100&auto=format&fit=crop&q=80" },
    description: "Layar Ultra HD 4K Crystal Processor dengan OS Tizen dan konektivitas AirPlay 2."
  },
  {
    id: "PROD-402",
    name: "LG Smart TV 43 Inchi 4K UHD ThinQ AI",
    category: "Smart TV",
    price: 4599000,
    originalPrice: 5299000,
    rating: 4.8,
    soldCount: "2.5RB",
    ratingCount: "1.2RB",
    favCount: "2.8RB",
    sizes: ["43 Inchi", "50 Inchi"],
    images: ["https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&auto=format&fit=crop&q=80"],
    store: { name: "LG Official Store", logo: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=100&auto=format&fit=crop&q=80" },
    description: "Dilengkapi Magic Remote, ThinQ AI voice command, dan HDR10 Pro."
  },

  // 5. Tablet
  {
    id: "PROD-501",
    name: "Apple iPad Air Gen 5 10.9 Inchi M1 Chip 64GB WiFi",
    category: "Tablet",
    price: 9499000,
    originalPrice: 10999000,
    rating: 5.0,
    soldCount: "1.9RB",
    ratingCount: "1.1RB",
    favCount: "4.1RB",
    sizes: ["64GB", "256GB"],
    images: ["https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&auto=format&fit=crop&q=80"],
    store: { name: "iBox Official Store", logo: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=100&auto=format&fit=crop&q=80" },
    description: "Performa sekelas komputer dengan chip M1, dukung Apple Pencil Gen 2 dan Magic Keyboard."
  },

  // 6. Smartwatch
  {
    id: "PROD-601",
    name: "Apple Watch Series 9 GPS 45mm Aluminium Case",
    category: "Smartwatch",
    price: 6799000,
    originalPrice: 7499000,
    rating: 4.9,
    soldCount: "950",
    ratingCount: "510",
    favCount: "2.7RB",
    sizes: ["41mm", "45mm"],
    images: ["https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&auto=format&fit=crop&q=80"],
    store: { name: "iBox Official Store", logo: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=100&auto=format&fit=crop&q=80" },
    description: "Chip S9 Sip, fitur Double Tap gesture, monitor kesehatan jantung dan kadar oksigen darah."
  },

  // 7. Headphone & Earphone
  {
    id: "PROD-701",
    name: "Apple AirPods Pro Gen 2 dengan MagSafe Charging Case (USB-C)",
    category: "Headphone & Earphone",
    price: 3899000,
    originalPrice: 4299000,
    rating: 4.9,
    soldCount: "4RB+",
    ratingCount: "2.3RB",
    favCount: "5.8RB",
    sizes: [],
    images: ["https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600&auto=format&fit=crop&q=80"],
    store: { name: "iBox Official Store", logo: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=100&auto=format&fit=crop&q=80" },
    description: "Active Noise Cancellation hingga 2x lebih kuat, Transparansi Audio, dan Spatial Audio kustom."
  },
  {
    id: "PROD-702",
    name: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
    category: "Headphone & Earphone",
    price: 5299000,
    originalPrice: 5999000,
    rating: 5.0,
    soldCount: "1.2RB",
    ratingCount: "780",
    favCount: "3.9RB",
    sizes: ["Black", "Silver"],
    images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80"],
    store: { name: "Sony Audio Store", logo: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&auto=format&fit=crop&q=80" },
    description: "Noise canceling terbaik kelas dunia, baterai hingga 30 jam, dan kualitas suara Hi-Res."
  },

  // 8. Speaker
  {
    id: "PROD-801",
    name: "JBL Flip 6 Portable Bluetooth Speaker IP67 Waterproof",
    category: "Speaker",
    price: 1899000,
    originalPrice: 2299000,
    rating: 4.9,
    soldCount: "3.5RB",
    ratingCount: "2.1RB",
    favCount: "4.2RB",
    sizes: ["Hitam", "Biru", "Merah"],
    images: ["https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format&fit=crop&q=80"],
    store: { name: "JBL Official Store", logo: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=100&auto=format&fit=crop&q=80" },
    description: "Suara lebih kencang & ngebass, tahan air dan debu IP67, daya tahan baterai 12 jam."
  },

  // 9. Kamera
  {
    id: "PROD-901",
    name: "Sony Alpha A6700 Mirrorless Camera Body Only",
    category: "Kamera",
    price: 21999000,
    originalPrice: 22999000,
    rating: 4.9,
    soldCount: "210",
    ratingCount: "115",
    favCount: "1.5RB",
    sizes: ["Body Only", "Kit 16-50mm"],
    images: ["https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop&q=80"],
    store: { name: "Sony Camera Center", logo: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=100&auto=format&fit=crop&q=80" },
    description: "Sensor APS-C Exmor R 26MP, perekaman video 4K 120p, dan Autofokus AI Autofocus."
  },

  // 10. Printer
  {
    id: "PROD-1001",
    name: "Epson EcoTank L3210 All-in-One Ink Tank Printer",
    category: "Printer",
    price: 2350000,
    originalPrice: 2600000,
    rating: 4.8,
    soldCount: "6RB+",
    ratingCount: "3.8RB",
    favCount: "4.7RB",
    sizes: [],
    images: ["https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&auto=format&fit=crop&q=80"],
    store: { name: "Epson Official", logo: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=100&auto=format&fit=crop&q=80" },
    description: "Printer Print, Scan, Copy ultra hemat tinta dengan teknologi Heat-Free."
  },

  // 11. Peralatan Rumah Tangga Elektronik
  {
    id: "PROD-1101",
    name: "Air Fryer Digital 4.5L Low Watt Anti Lengket",
    category: "Peralatan Rumah Tangga",
    price: 599000,
    originalPrice: 999000,
    rating: 4.9,
    soldCount: "10RB+",
    ratingCount: "6.2RB",
    favCount: "8.9RB",
    sizes: ["4.5 Liter"],
    images: ["https://images.unsplash.com/photo-1585515320310-259814833e62?w=600&auto=format&fit=crop&q=80"],
    store: { name: "HomeAppliances ID", logo: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=100&auto=format&fit=crop&q=80" },
    description: "Goreng makanan sehat tanpa minyak, hemat daya 650W, dengan touch screen LED."
  },

  // 12. Perangkat Jaringan
  {
    id: "PROD-1201",
    name: "TP-Link Archer AX12 WiFi 6 Router Gigabit Dual-Band",
    category: "Perangkat Jaringan",
    price: 549000,
    originalPrice: 699000,
    rating: 4.8,
    soldCount: "2.8RB",
    ratingCount: "1.4RB",
    favCount: "2.2RB",
    sizes: [],
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&auto=format&fit=crop&q=80"],
    store: { name: "TP-Link Official", logo: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=100&auto=format&fit=crop&q=80" },
    description: "Kecepatan WiFi 6 hingga 1.5 Gbps, jangkauan luas dengan 4 antena eksternal."
  },

  // 13. Perangkat Gaming
  {
    id: "PROD-1301",
    name: "Sony PlayStation 5 PS5 Console Slim Disc Edition",
    category: "Perangkat Gaming",
    price: 8999000,
    originalPrice: 9699000,
    rating: 5.0,
    soldCount: "1.7RB",
    ratingCount: "980",
    favCount: "4.8RB",
    sizes: ["Disc Edition", "Digital Edition"],
    images: ["https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&auto=format&fit=crop&q=80"],
    store: { name: "PlayStation Official", logo: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=100&auto=format&fit=crop&q=80" },
    description: "Sensasi gaming 4K 120Hz, SSD ultra cepat, serta DualSense Wireless Controller."
  },

  // 14. Penyimpanan Data
  {
    id: "PROD-1401",
    name: "SanDisk Extreme Portable SSD 1TB USB 3.2 Gen 2",
    category: "Penyimpanan Data",
    price: 1699000,
    originalPrice: 2100000,
    rating: 4.9,
    soldCount: "3.1RB",
    ratingCount: "1.9RB",
    favCount: "3.5RB",
    sizes: ["500GB", "1TB", "2TB"],
    images: ["https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&auto=format&fit=crop&q=80"],
    store: { name: "SanDisk Official", logo: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=100&auto=format&fit=crop&q=80" },
    description: "Kecepatan baca hingga 1050MB/s, tahan jatuh hingga 2 meter, dan sertifikasi tahan air IP55."
  },

  // 15. Aksesoris Komputer
  {
    id: "PROD-1501",
    name: "Logitech MX Master 3S Wireless Performance Mouse",
    category: "Aksesoris Komputer",
    price: 1549000,
    originalPrice: 1799000,
    rating: 5.0,
    soldCount: "2.3RB",
    ratingCount: "1.5RB",
    favCount: "3.7RB",
    sizes: ["Graphite", "Pale Gray"],
    images: ["https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&auto=format&fit=crop&q=80"],
    store: { name: "Logitech Official", logo: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=100&auto=format&fit=crop&q=80" },
    description: "Klik super hening (Quiet Clicks), scroll MagSpeed elektromagnetik, sensor 8000 DPI."
  }
];

// USER STATE & LOCAL STORAGE
let currentUser = {
  name: "Budi Santoso",
  email: "budi.santoso@gmail.com",
  isLoggedIn: true,
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80"
};

let products = INITIAL_PRODUCTS;
let cart = JSON.parse(localStorage.getItem('belikuy_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('belikuy_wishlist')) || [];
let orders = JSON.parse(localStorage.getItem('belikuy_orders')) || [];

let currentCategory = 'ALL';
let activeModalProduct = null;
let activeModalQty = 1;
let activeSelectedSize = null;
let activeVoucherCode = "";

// UTILS FORMAT RUPIAH
function formatRupiah(number) {
  return "Rp" + new Intl.NumberFormat("id-ID").format(number);
}

function saveData() {
  localStorage.setItem('belikuy_cart', JSON.stringify(cart));
  localStorage.setItem('belikuy_wishlist', JSON.stringify(wishlist));
  localStorage.setItem('belikuy_orders', JSON.stringify(orders));
  updateCartBadge();
}

// ==========================================
// LOGIKA WISHLIST (FAVORIT)
// ==========================================
function isWishlisted(prodId) {
  return wishlist.some(item => item.id === prodId);
}

function toggleWishlist(prodId, event) {
  if (event) event.stopPropagation(); // Mencegah modal terbuka saat icon diklik

  const prod = products.find(p => p.id === prodId);
  if (!prod) return;

  const index = wishlist.findIndex(item => item.id === prodId);
  if (index > -1) {
    wishlist.splice(index, 1); // Hapus dari wishlist
  } else {
    wishlist.push(prod); // Tambahkan ke wishlist
  }

  saveData();
  renderProducts(); // Refresh icon kartu produk
  
  if (activeModalProduct && activeModalProduct.id === prodId) {
    updateDetailModalWishlistButton(); // Refresh status di modal detail jika terbuka
  }
}

function toggleWishlistFromDetail() {
  if (activeModalProduct) {
    toggleWishlist(activeModalProduct.id);
  }
}

function updateDetailModalWishlistButton() {
  if (!activeModalProduct) return;
  const isFav = isWishlisted(activeModalProduct.id);
  const heartIcon = document.getElementById('detailHeartIcon');
  const favText = document.getElementById('detailFavoritText');

  if (isFav) {
    heartIcon.className = "fa-solid fa-heart text-red-500 text-base";
    favText.textContent = "Disukai";
  } else {
    heartIcon.className = "fa-regular fa-heart text-slate-400 text-base";
    favText.textContent = "Favorit";
  }
}

// ==========================================
// RENDER KATALOG PRODUK
// ==========================================
function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  const searchVal = (document.getElementById('searchInput')?.value || '').toLowerCase();
  
  const filtered = products.filter(p => {
    const matchCat = (currentCategory === 'ALL') || (p.category === currentCategory);
    const matchSearch = p.name.toLowerCase().includes(searchVal) || p.category.toLowerCase().includes(searchVal);
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-12 text-center text-slate-400 space-y-2">
        <i class="fa-solid fa-box-open text-4xl mb-2"></i>
        <p class="font-bold text-sm">Produk tidak ditemukan</p>
        <p class="text-xs">Coba cari dengan kata kunci lain atau kategori lain.</p>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => {
    const fav = isWishlisted(p.id);
    return `
      <div onclick="openProductDetailModal('${p.id}')" class="bg-white rounded-2xl border border-slate-200/80 overflow-hidden hover:shadow-xl hover:border-red-300 transition-all duration-300 cursor-pointer flex flex-col justify-between group relative">
        
        <!-- Tombol Wishlist Love Icon -->
        <button onclick="toggleWishlist('${p.id}', event)" class="absolute top-2 right-2 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-sm hover:scale-110 transition">
          <i class="${fav ? 'fa-solid fa-heart text-red-500' : 'fa-regular fa-heart text-slate-400'} text-sm"></i>
        </button>

        <div>
          <div class="relative w-full h-44 sm:h-48 bg-slate-50 overflow-hidden">
            <img src="${p.images[0]}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="${p.name}">
            <span class="absolute top-2 left-2 bg-red-600 text-white text-[9px] font-black px-2 py-0.5 rounded shadow">Mall</span>
          </div>
          <div class="p-3 space-y-1.5">
            <h3 class="font-bold text-xs text-slate-800 line-clamp-2 leading-snug group-hover:text-red-600 transition">
              ${p.name}
            </h3>
            <div class="flex items-baseline gap-1.5">
              <span class="text-sm font-black text-red-600">${formatRupiah(p.price)}</span>
              ${p.originalPrice ? `<span class="text-[10px] text-slate-400 line-through">${formatRupiah(p.originalPrice)}</span>` : ''}
            </div>
          </div>
        </div>
        <div class="px-3 pb-3 pt-1 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100/80">
          <div class="flex items-center gap-1 font-bold text-amber-500">
            <i class="fa-solid fa-star text-[10px]"></i>
            <span>${p.rating}</span>
          </div>
          <span>Terjual ${p.soldCount}</span>
        </div>
      </div>
    `;
  }).join('');
}

function setCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.remove('bg-slate-900', 'text-white');
    btn.classList.add('bg-white', 'text-slate-600');
  });
  if (event && event.currentTarget) {
    event.currentTarget.classList.remove('bg-white', 'text-slate-600');
    event.currentTarget.classList.add('bg-slate-900', 'text-white');
  }
  renderProducts();
}

function filterProducts() {
  renderProducts();
}

function searchByTheme(keyword) {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.value = keyword;
    renderProducts();
  }
}

// ==========================================
// DETAIL PRODUK & VARIANT SIZE
// ==========================================
function openProductDetailModal(prodId) {
  const p = products.find(x => x.id === prodId);
  if (!p) return;

  activeModalProduct = p;
  activeModalQty = 1;

  document.getElementById('modalBreadcrumbCat').textContent = p.category;
  document.getElementById('modalBreadcrumbName').textContent = p.name;
  document.getElementById('detailTitle').textContent = p.name;
  document.getElementById('detailRating').textContent = p.rating;
  document.getElementById('detailPenilaian').textContent = p.ratingCount || "1,2RB";
  document.getElementById('detailTerjual').textContent = p.soldCount;
  document.getElementById('detailPrice').textContent = formatRupiah(p.price);
  document.getElementById('detailOriginalPrice').textContent = p.originalPrice ? formatRupiah(p.originalPrice) : "";
  document.getElementById('detailDiscountBadge').textContent = p.originalPrice ? `-${Math.round((1 - p.price / p.originalPrice) * 100)}%` : "";
  document.getElementById('detailDescription').textContent = p.description;
  document.getElementById('detailQtyInput').value = activeModalQty;

  document.getElementById('storeName').textContent = p.store?.name || "BeliKuy Official";
  document.getElementById('storeLogo').src = p.store?.logo || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80";

  document.getElementById('detailMainImg').src = p.images[0];
  const thumbContainer = document.getElementById('detailThumbnails');
  thumbContainer.innerHTML = p.images.map(img => `
    <img src="${img}" onclick="document.getElementById('detailMainImg').src='${img}'" class="w-12 h-12 rounded-lg border border-slate-200 object-cover cursor-pointer hover:border-red-500 transition">
  `).join('');

  // Sembunyikan/Tampilkan Opsi Ukuran/Varian
  const sizeSection = document.getElementById('sizeSection');
  const sizeContainer = document.getElementById('sizeButtonsContainer');

  if (p.sizes && p.sizes.length > 0) {
    sizeSection.style.display = 'flex';
    activeSelectedSize = p.sizes[0];

    sizeContainer.innerHTML = p.sizes.map((size, idx) => `
      <button type="button" onclick="selectSize(this, '${size}')" class="size-btn px-4 py-1.5 border rounded-md font-semibold text-xs transition ${idx === 0 ? 'border-red-600 bg-red-600 text-white' : 'border-slate-300 text-slate-700 hover:border-red-600'}">
        ${size}
      </button>
    `).join('');
  } else {
    sizeSection.style.display = 'none';
    activeSelectedSize = null;
  }

  updateDetailModalWishlistButton();
  document.getElementById('productDetailModal').classList.remove('hidden');
}

function closeProductDetailModal() {
  document.getElementById('productDetailModal').classList.add('hidden');
}

function selectSize(btnElement, sizeValue) {
  activeSelectedSize = sizeValue;
  document.querySelectorAll('.size-btn').forEach(b => {
    b.classList.remove('bg-red-600', 'text-white', 'border-red-600');
    b.classList.add('border-slate-300', 'text-slate-700');
  });
  btnElement.classList.add('bg-red-600', 'text-white', 'border-red-600');
  btnElement.classList.remove('border-slate-300', 'text-slate-700');
}

function changeDetailQty(amount) {
  activeModalQty += amount;
  if (activeModalQty < 1) activeModalQty = 1;
  document.getElementById('detailQtyInput').value = activeModalQty;
}

// ==========================================
// KERANJANG & CHECKOUT
// ==========================================
function addDetailToCart() {
  if (!activeModalProduct) return;

  const existingIdx = cart.findIndex(c => c.id === activeModalProduct.id && c.selectedSize === activeSelectedSize);

  if (existingIdx > -1) {
    cart[existingIdx].qty += activeModalQty;
  } else {
    cart.push({
      id: activeModalProduct.id,
      name: activeModalProduct.name,
      price: activeModalProduct.price,
      image: activeModalProduct.images[0],
      selectedSize: activeSelectedSize,
      qty: activeModalQty
    });
  }

  saveData();
  closeProductDetailModal();
  toggleCartModal();
}

function buyNowFromDetail() {
  addDetailToCart();
  openCheckoutModal();
}

function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (badge) {
    badge.textContent = cart.reduce((acc, item) => acc + item.qty, 0);
  }
}

function renderCartItems() {
  const container = document.getElementById('cartItemsList');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="py-12 text-center text-slate-400 space-y-2">
        <i class="fa-solid fa-cart-shopping text-4xl mb-2"></i>
        <p class="font-bold text-sm">Keranjang Belanja Kosong</p>
      </div>`;
    calculateCartTotals();
    return;
  }

  container.innerHTML = cart.map((item, index) => `
    <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center justify-between gap-3">
      <img src="${item.image}" class="w-14 h-14 object-cover rounded-lg border border-slate-200" alt="${item.name}">
      <div class="flex-1 space-y-1">
        <h4 class="font-bold text-xs text-slate-800 line-clamp-1">${item.name}</h4>
        ${item.selectedSize ? `<span class="bg-slate-200 text-slate-700 text-[10px] font-bold px-1.5 py-0.5 rounded">Varian: ${item.selectedSize}</span>` : ''}
        <div class="text-xs font-black text-red-600">${formatRupiah(item.price)}</div>
      </div>
      <div class="flex flex-col items-end gap-2">
        <button onclick="removeFromCart(${index})" class="text-slate-400 hover:text-red-600 text-xs"><i class="fa-solid fa-trash"></i></button>
        <div class="flex items-center border border-slate-300 rounded-md bg-white overflow-hidden text-xs">
          <button onclick="updateCartQty(${index}, -1)" class="px-2 py-0.5 bg-slate-100 font-bold">-</button>
          <span class="px-2 font-bold">${item.qty}</span>
          <button onclick="updateCartQty(${index}, 1)" class="px-2 py-0.5 bg-slate-100 font-bold">+</button>
        </div>
      </div>
    </div>
  `).join('');

  calculateCartTotals();
}

function updateCartQty(index, amount) {
  cart[index].qty += amount;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  saveData();
  renderCartItems();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveData();
  renderCartItems();
}

function selectVoucher(val) {
  activeVoucherCode = val;
  const tag = document.getElementById('activeVoucherTag');
  if (tag) tag.textContent = val ? `Voucher: ${val}` : "Belum Dipilih";
  calculateCartTotals();
}

function calculateCartTotals() {
  const subtotal = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);
  let discount = 0;
  let ongkir = cart.length > 0 ? 15000 : 0;

  if (activeVoucherCode === 'ONGKIR100') ongkir = 0;
  else if (activeVoucherCode === 'DISCOUNT10') discount = Math.round(subtotal * 0.10);
  else if (activeVoucherCode === 'HEMAT50K') discount = 50000;

  const grandTotal = Math.max(0, subtotal - discount + ongkir);

  document.getElementById('subtotalText').textContent = formatRupiah(subtotal);
  document.getElementById('ongkirText').textContent = formatRupiah(ongkir);
  document.getElementById('totalPayText').textContent = formatRupiah(grandTotal);

  const discountRow = document.getElementById('discountRow');
  if (discount > 0) {
    discountRow.classList.remove('hidden');
    document.getElementById('discountText').textContent = "-" + formatRupiah(discount);
  } else {
    discountRow.classList.add('hidden');
  }

  const checkoutTotal = document.getElementById('checkoutTotalPay');
  if (checkoutTotal) checkoutTotal.textContent = formatRupiah(grandTotal);
}

function toggleCartModal() {
  const modal = document.getElementById('cartModal');
  modal.classList.toggle('hidden');
  if (!modal.classList.contains('hidden')) renderCartItems();
}

function openCheckoutModal() {
  if (cart.length === 0) {
    alert("Keranjang kamu masih kosong!");
    return;
  }
  toggleCartModal();
  document.getElementById('checkoutModal').classList.remove('hidden');
}

function toggleCheckoutModal() {
  document.getElementById('checkoutModal').classList.toggle('hidden');
}

function processCheckoutOrder(event) {
  event.preventDefault();

  const newOrder = {
    id: "TRX-" + Math.floor(100000 + Math.random() * 900000),
    date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }),
    items: [...cart],
    totalPrice: document.getElementById('totalPayText').textContent,
    recipient: document.getElementById('shipName').value,
    phone: document.getElementById('shipPhone').value,
    address: document.getElementById('shipAddress').value,
    paymentMethod: document.getElementById('paymentMethod').value,
    status: "Dikemas"
  };

  orders.unshift(newOrder);
  cart = [];
  saveData();

  toggleCheckoutModal();
  alert(`🎉 Pesanan Berhasil dibuat!\nNomor Transaksi: ${newOrder.id}`);
  toggleOrdersModal();
}

// ==========================================
// WISHLIST MODAL RENDER & USER PROFILE
// ==========================================
function toggleWishlistModal() {
  const modal = document.getElementById('wishlistModal');
  modal.classList.toggle('hidden');
  if (!modal.classList.contains('hidden')) renderWishlistItems();
}

function renderWishlistItems() {
  const container = document.getElementById('wishlistItemsList');
  if (!container) return;

  if (wishlist.length === 0) {
    container.innerHTML = `
      <div class="py-12 text-center text-slate-400 space-y-2">
        <i class="fa-solid fa-heart text-4xl mb-2 text-slate-300"></i>
        <p class="font-bold text-sm">Wishlist kamu masih kosong</p>
      </div>`;
    return;
  }

  container.innerHTML = wishlist.map((p) => `
    <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center justify-between gap-3">
      <img src="${p.images[0]}" class="w-14 h-14 object-cover rounded-lg border border-slate-200">
      <div class="flex-1 space-y-1">
        <h4 class="font-bold text-xs text-slate-800 line-clamp-1">${p.name}</h4>
        <div class="text-xs font-black text-red-600">${formatRupiah(p.price)}</div>
      </div>
      <div class="flex items-center gap-2">
        <button onclick="openProductDetailModal('${p.id}'); toggleWishlistModal();" class="px-3 py-1.5 bg-red-600 text-white font-bold text-xs rounded-lg hover:bg-red-700 transition">
          Beli
        </button>
        <button onclick="toggleWishlist('${p.id}'); renderWishlistItems();" class="text-slate-400 hover:text-red-600 p-2 text-xs">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  `).join('');
}

function renderUserProfile() {
  const userSection = document.getElementById('userProfileSection');
  if (!userSection) return;

  userSection.innerHTML = `
    <div class="flex items-center gap-2 cursor-pointer group relative" onclick="toggleUserDropdown()">
      <img src="${currentUser.avatar}" class="w-8 h-8 rounded-full border border-red-500 object-cover">
      <span class="hidden md:inline text-xs font-bold text-slate-800 group-hover:text-red-600">${currentUser.name}</span>
      <i class="fa-solid fa-chevron-down text-[10px] text-slate-400"></i>

      <div id="userDropdown" class="absolute right-0 top-10 w-48 bg-white border border-slate-200 rounded-xl shadow-xl p-2 hidden z-40 space-y-1">
        <button onclick="toggleOrdersModal()" class="w-full text-left px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 rounded-lg flex items-center gap-2">
          <i class="fa-solid fa-box text-red-600"></i> Pesanan Saya
        </button>
        <button onclick="toggleWishlistModal()" class="w-full text-left px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 rounded-lg flex items-center gap-2">
          <i class="fa-solid fa-heart text-red-500"></i> Wishlist Favorit
        </button>
      </div>
    </div>
  `;
}

function toggleUserDropdown() {
  const dropdown = document.getElementById('userDropdown');
  if (dropdown) dropdown.classList.toggle('hidden');
}

function toggleOrdersModal() {
  const modal = document.getElementById('ordersModal');
  modal.classList.toggle('hidden');
  if (!modal.classList.contains('hidden')) renderOrdersList();
}

function renderOrdersList() {
  const container = document.getElementById('ordersItemsList');
  if (!container) return;

  if (orders.length === 0) {
    container.innerHTML = `
      <div class="py-12 text-center text-slate-400 space-y-2">
        <i class="fa-solid fa-receipt text-4xl mb-2"></i>
        <p class="font-bold text-sm">Belum Ada Transaksi</p>
      </div>`;
    return;
  }

  container.innerHTML = orders.map(ord => `
    <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
      <div class="flex justify-between items-center text-xs border-b border-slate-200 pb-2">
        <div>
          <span class="font-extrabold text-slate-900">${ord.id}</span>
          <span class="text-slate-400 ml-2">${ord.date}</span>
        </div>
        <span class="bg-amber-100 text-amber-800 font-extrabold px-2 py-0.5 rounded text-[10px]">${ord.status}</span>
      </div>
      <div class="space-y-2">
        ${ord.items.map(item => `
          <div class="flex items-center gap-3">
            <img src="${item.image}" class="w-12 h-12 object-cover rounded-lg border border-slate-200">
            <div class="flex-1 text-xs">
              <h5 class="font-bold text-slate-800 line-clamp-1">${item.name}</h5>
              <div class="text-slate-500 text-[11px]">${item.qty} x ${formatRupiah(item.price)}</div>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="flex justify-between items-center text-xs pt-2 border-t border-slate-200 font-bold">
        <span>Total Bayar: <span class="text-red-600 font-black">${ord.totalPrice}</span></span>
      </div>
    </div>
  `).join('');
}

// INIT
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderUserProfile();
  updateCartBadge();
});
// =========================================================
// LOGIKA FITUR PROFIL USER, LOGIN & LOGOUT (OTOMATIS)
// =========================================================

(function () {
  // Data User Default
  const defaultUserData = {
    isLoggedIn: true,
    nama: "Budi Santoso",
    email: "budi.santoso@gmail.com",
    noHP: "0812-3456-7890",
    alamat: "Jl. Jendral Sudirman No. 45, Jakarta"
  };

  // Inisialisasi Data ke LocalStorage jika belum ada
  if (!localStorage.getItem('belikuy_user')) {
    localStorage.setItem('belikuy_user', JSON.stringify(defaultUserData));
  }

  // Fungsi Render Tampilan Profil di Top Bar / Header
  window.renderProfileHeader = function () {
    const userSection = document.getElementById('userProfileSection');
    if (!userSection) return;

    const user = JSON.parse(localStorage.getItem('belikuy_user'));

    if (user && user.isLoggedIn) {
      userSection.innerHTML = `
        <button onclick="openProfileDetailModal()" class="flex items-center gap-2 bg-red-700/50 hover:bg-red-700 p-1.5 px-3 rounded-full transition border border-red-400/30">
          <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(user.nama)}&background=ffffff&color=dc2626" class="w-6 h-6 rounded-full font-bold">
          <span class="text-xs font-bold hidden sm:inline truncate max-w-[100px]">${user.nama}</span>
          <i class="fa-solid fa-chevron-down text-[10px] opacity-80"></i>
        </button>
      `;
    } else {
      userSection.innerHTML = `
        <button onclick="openLoginModal()" class="bg-white text-red-600 hover:bg-yellow-300 hover:text-red-900 font-extrabold text-xs px-3 py-1.5 rounded-xl shadow transition flex items-center gap-1.5">
          <i class="fa-solid fa-right-to-bracket"></i> Masuk
        </button>
      `;
    }
  };

  // Fungsi Buka Modal Detail Profil
  window.openProfileDetailModal = function () {
    const user = JSON.parse(localStorage.getItem('belikuy_user'));
    if (!user) return;

    document.getElementById('userModalName').innerText = user.nama;
    document.getElementById('userModalEmail').innerText = user.email;
    document.getElementById('userModalPhone').innerText = user.noHP;
    document.getElementById('userModalAddress').innerText = user.alamat;
    document.getElementById('userModalAvatar').src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.nama)}&background=dc2626&color=fff`;

    document.getElementById('profileDetailModal').classList.remove('hidden');
  };

  // Fungsi Buka Modal Login
  window.openLoginModal = function () {
    document.getElementById('loginModal').classList.remove('hidden');
  };

  // Fungsi Tutup Custom Modal
  window.closeModalCustom = function (modalId) {
    document.getElementById(modalId).classList.add('hidden');
  };

  // Fungsi Handle Login Submit
  window.handleUserLogin = function (event) {
    event.preventDefault();
    const email = document.getElementById('loginEmailInput').value;
    const nameFromEmail = email.split('@')[0].replace('.', ' ');

    const updatedUser = {
      isLoggedIn: true,
      nama: nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1),
      email: email,
      noHP: "0812-9876-5432",
      alamat: "Jl. Gatot Subroto No. 88, Jakarta"
    };

    localStorage.setItem('belikuy_user', JSON.stringify(updatedUser));
    window.closeModalCustom('loginModal');
    window.renderProfileHeader();
    alert(`Selamat datang kembali, ${updatedUser.nama}!`);
  };

  // Fungsi Handle Logout
  window.handleUserLogout = function () {
    const user = JSON.parse(localStorage.getItem('belikuy_user'));
    user.isLoggedIn = false;
    localStorage.setItem('belikuy_user', JSON.stringify(user));

    window.closeModalCustom('profileDetailModal');
    window.renderProfileHeader();
    alert("Anda telah berhasil keluar dari akun BeliKuy.");
  };
// Function untuk memilih warna variasi di Modal Detail Produk
function selectColor(element) {
  // Reset semua tombol warna ke style normal
  const buttons = document.querySelectorAll('#colorOptions .color-btn');
  buttons.forEach(btn => {
    btn.className = "color-btn border border-slate-300 hover:border-slate-400 bg-white text-slate-700 px-3 py-1.5 rounded-lg font-bold text-[11px]";
    // Hapus ikon centang jika ada
    const checkIcon = btn.querySelector('.fa-check');
    if (checkIcon) checkIcon.remove();
  });

  // Terapkan style aktif pada tombol yang diklik
  element.className = "color-btn border-2 border-red-600 bg-red-50 text-red-600 px-3 py-1.5 rounded-lg font-bold text-[11px] flex items-center gap-1";
  element.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-check text-[10px]"></i> ');
}
  // Auto Render saat Halaman Selesai di-load
  document.addEventListener("DOMContentLoaded", function () {
    window.renderProfileHeader();
  });
})();
