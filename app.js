// ==========================================
// DATA PRODUK (DESAIN SAMAKAN DENGAN GAMBAR BELIKUY)
// ==========================================
const products = [
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
  {
    id: "lt7",
    name: "Acer Nitro V 15",
    category: "laptop",
    price: 10999000,
    originalPrice: 11999000,
    rating: 4.8,
    penilaian: 3100,
    terjual: "5RB+",
    isMall: true,
    sizes: ["i5 / 8GB / 512GB", "i5 / 16GB / 512GB"],
    images: ["https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80"],
    store: { name: "Acer Official Store", logo: "" },
    description: "Pilihan laptop gaming bernilai paling worth-it untuk gamers kasual dan mahasiswa."
  },
  {
    id: "lt8",
    name: "Acer Swift Go 14",
    category: "laptop",
    price: 13499000,
    originalPrice: 14499000,
    rating: 4.8,
    penilaian: 620,
    terjual: "1.5RB",
    isMall: true,
    sizes: ["OLED / 16GB / 512GB"],
    images: ["https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=600&q=80"],
    store: { name: "Acer Official Store", logo: "" },
    description: "Ringan, bertenaga, dan berlayar jernih. Partner mobilitas tinggi paling pas."
  },
  {
    id: "lt9",
    name: "Acer Aspire 5",
    category: "laptop",
    price: 6899000,
    originalPrice: 7499000,
    rating: 4.7,
    penilaian: 4100,
    terjual: "8RB+",
    isMall: false,
    sizes: ["8GB / 512GB SSD"],
    images: ["https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80"],
    store: { name: "Acer Center", logo: "" },
    description: "Solusi laptop terjangkau dengan spesifikasi tangguh untuk kebutuhan harian."
  },
  {
    id: "lt10",
    name: "Acer TravelMate P2",
    category: "laptop",
    price: 8499000,
    originalPrice: 9299000,
    rating: 4.6,
    penilaian: 290,
    terjual: "600+",
    isMall: true,
    sizes: ["Core i5 / 8GB / 512GB"],
    images: ["https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=600&q=80"],
    store: { name: "Acer Business Store", logo: "" },
    description: "Laptop komersial tangguh yang dirancang untuk mendukung kerja kantoran yang efisien."
  },
  {
    id: "lt11",
    name: "Lenovo Legion Pro 5",
    category: "laptop",
    price: 24999000,
    originalPrice: 26999000,
    rating: 4.9,
    penilaian: 1580,
    terjual: "2RB+",
    isMall: true,
    sizes: ["Ryzen 9 / 32GB / 1TB RTX4070"],
    images: ["https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80"],
    store: { name: "Lenovo Official Store", logo: "" },
    description: "Performa kelas pro dengan sistem pendingin Legion Coldfront yang ikonik."
  },
  {
    id: "lt12",
    name: "Lenovo LOQ 15",
    category: "laptop",
    price: 12999000,
    originalPrice: 13999000,
    rating: 4.8,
    penilaian: 2400,
    terjual: "3.8RB",
    isMall: true,
    sizes: ["i5 / 12GB / 512GB RTX3050"],
    images: ["https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80"],
    store: { name: "Lenovo Official Store", logo: "" },
    description: "Gerbang utama masuk ke dunia gaming AAA dengan dana yang bersahabat."
  },
  {
    id: "lt13",
    name: "Lenovo IdeaPad Slim 5",
    category: "laptop",
    price: 10499000,
    originalPrice: 11299000,
    rating: 4.8,
    penilaian: 1900,
    terjual: "3RB+",
    isMall: true,
    sizes: ["16GB / 512GB SSD"],
    images: ["https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=600&q=80"],
    store: { name: "Lenovo Official Store", logo: "" },
    description: "Desain fleksibel, tipis, dan baterai tahan lama untuk menunjang aktivitas padat."
  },
  {
    id: "lt14",
    name: "Lenovo Yoga Pro 7",
    category: "laptop",
    price: 18999000,
    originalPrice: 20499000,
    rating: 4.9,
    penilaian: 510,
    terjual: "750+",
    isMall: true,
    sizes: ["Touchscreen 3K / 16GB / 1TB"],
    images: ["https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=600&q=80"],
    store: { name: "Lenovo Official Store", logo: "" },
    description: "Kombinasi layar sentuh resolusi tinggi dan performa dapur pacu tanpa kompromi."
  },
  {
    id: "lt15",
    name: "Lenovo ThinkPad E14",
    category: "laptop",
    price: 11899000,
    originalPrice: 12999000,
    rating: 4.9,
    penilaian: 1100,
    terjual: "2.1RB",
    isMall: true,
    sizes: ["i5 / 16GB / 512GB"],
    images: ["https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=600&q=80"],
    store: { name: "Lenovo Official Store", logo: "" },
    description: "Keyboard terbaik kelas bisnis dengan ketahanan legendaris khas ThinkPad."
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
    id: "hp2",
    name: "Galaxy S25+",
    category: "hp",
    price: 16999000,
    originalPrice: 18499000,
    rating: 4.9,
    penilaian: 1800,
    terjual: "1.8RB",
    isMall: true,
    sizes: ["12/256GB", "12/512GB"],
    images: ["https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80"],
    store: { name: "Samsung Official Store", logo: "" },
    description: "Layar QHD+ lebih lega dengan bodi ramping, ditenagai chip prosesor generasi terbaru."
  },
  {
    id: "hp3",
    name: "Galaxy S25",
    category: "hp",
    price: 13999000,
    originalPrice: 14999000,
    rating: 4.8,
    penilaian: 2100,
    terjual: "2.8RB",
    isMall: true,
    sizes: ["8/128GB", "8/256GB"],
    images: ["https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80"],
    store: { name: "Samsung Official Store", logo: "" },
    description: "Ukurannya sangat nyaman di genggaman, namun menyimpan performa sekelas flagship murni."
  },
  {
    id: "hp4",
    name: "Galaxy A56",
    category: "hp",
    price: 6499000,
    originalPrice: 6999000,
    rating: 4.8,
    penilaian: 5200,
    terjual: "10RB+",
    isMall: true,
    sizes: ["8/256GB", "12/256GB"],
    images: ["https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80"],
    store: { name: "Samsung Official Store", logo: "" },
    description: "Raja mid-range dengan perlindungan anti air IP67 dan jaminan update OS jangka panjang."
  },
  {
    id: "hp5",
    name: "Galaxy A36",
    category: "hp",
    price: 4499000,
    originalPrice: 4899000,
    rating: 4.7,
    penilaian: 3800,
    terjual: "7RB+",
    isMall: true,
    sizes: ["8/128GB", "8/256GB"],
    images: ["https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80"],
    store: { name: "Samsung Official Store", logo: "" },
    description: "Layar Super AMOLED 120Hz yang sangat mulus dan baterai jumbo tahan lama."
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
  },
  {
    id: "hp7",
    name: "iPhone 16 Plus",
    category: "hp",
    price: 18499000,
    originalPrice: 19999000,
    rating: 4.9,
    penilaian: 1400,
    terjual: "1.9RB",
    isMall: true,
    sizes: ["128GB", "256GB", "512GB"],
    images: ["https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80"],
    store: { name: "iBox Official Store", logo: "" },
    description: "Layar Super Retina XDR 6,7 inci lebih puas dipadukan dengan daya tahan baterai luar biasa."
  },
  {
    id: "hp8",
    name: "iPhone 16 Pro",
    category: "hp",
    price: 20999000,
    originalPrice: 22499000,
    rating: 5.0,
    penilaian: 2900,
    terjual: "3.1RB",
    isMall: true,
    sizes: ["128GB", "256GB", "512GB", "1TB"],
    images: ["https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80"],
    store: { name: "iBox Official Store", logo: "" },
    description: "Desain titanium Pro ringan dan kokoh, perekaman video 4K 120 fps Dolby Vision kelas sinematik."
  },
  {
    id: "hp9",
    name: "iPhone 16 Pro Max",
    category: "hp",
    price: 24999000,
    originalPrice: 26999000,
    rating: 5.0,
    penilaian: 5100,
    terjual: "6.5RB",
    isMall: true,
    sizes: ["256GB", "512GB", "1TB"],
    images: ["https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80"],
    store: { name: "iBox Official Store", logo: "" },
    description: "Layar terbesar 6,9 inci, perfoma A18 Pro terhebat, dan zoom optik 5x super presisi."
  },
  {
    id: "hp10",
    name: "iPhone 16e",
    category: "hp",
    price: 12499000,
    originalPrice: 13499000,
    rating: 4.8,
    penilaian: 920,
    terjual: "1.5RB",
    isMall: true,
    sizes: ["128GB", "256GB"],
    images: ["https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80"],
    store: { name: "iBox Official Store", logo: "" },
    description: "Varian paling hemat dengan dapur pacu bertenaga untuk efisiensi sehari-hari."
  },
  {
    id: "hp11",
    name: "Xiaomi 15 Ultra",
    category: "hp",
    price: 19999000,
    originalPrice: 21999000,
    rating: 4.9,
    penilaian: 880,
    terjual: "1.2RB",
    isMall: true,
    sizes: ["16/512GB", "16/1TB"],
    images: ["https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80"],
    store: { name: "Xiaomi Official Store", logo: "" },
    description: "Sistem kamera profesional hasil kolaborasi Leica dengan sensor raksasa 1 inci."
  },
  {
    id: "hp12",
    name: "Xiaomi 15",
    category: "hp",
    price: 11999000,
    originalPrice: 12999000,
    rating: 4.8,
    penilaian: 1300,
    terjual: "2.2RB",
    isMall: true,
    sizes: ["12/256GB", "12/512GB"],
    images: ["https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80"],
    store: { name: "Xiaomi Official Store", logo: "" },
    description: "Flagship kompak berperforma gahar berkat dukungan chipset Snapdragon paling mutakhir."
  },
  {
    id: "hp13",
    name: "Redmi Note 14 Pro",
    category: "hp",
    price: 3999000,
    originalPrice: 4399000,
    rating: 4.8,
    penilaian: 6200,
    terjual: "12RB+",
    isMall: true,
    sizes: ["8/256GB", "12/512GB"],
    images: ["https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80"],
    store: { name: "Xiaomi Official Store", logo: "" },
    description: "Kamera 200MP dengan OIS serta desain kurva bodi premium nan mewah."
  },
  {
    id: "hp14",
    name: "Redmi Note 14",
    category: "hp",
    price: 2499000,
    originalPrice: 2799000,
    rating: 4.7,
    penilaian: 8900,
    terjual: "20RB+",
    isMall: true,
    sizes: ["6/128GB", "8/256GB"],
    images: ["https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80"],
    store: { name: "Xiaomi Official Store", logo: "" },
    description: "Smartphone harga merakyat dengan kejernihan layar AMOLED 120Hz."
  },
  {
    id: "hp15",
    name: "POCO X7 Pro",
    category: "hp",
    price: 4999000,
    originalPrice: 5499000,
    rating: 4.9,
    penilaian: 4500,
    terjual: "9RB+",
    isMall: true,
    sizes: ["12/512GB"],
    images: ["https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80"],
    store: { name: "POCO Official Store", logo: "" },
    description: "Extreme performance smartphone favorit para gamers kompetitif."
  },

  // ---------------- PC (DESKTOP) ----------------
  {
    id: "pc1",
    name: "ASUS ROG G22CH",
    category: "pc",
    price: 31999000,
    originalPrice: 34999000,
    rating: 4.9,
    penilaian: 320,
    terjual: "450+",
    isMall: true,
    sizes: ["i7 / 32GB / 1TB / RTX4070"],
    images: ["https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=600&q=80"],
    store: { name: "ASUS Official Store", logo: "" },
    description: "Desktop gaming ringkas berukuran 10L dengan performa setara rig berukuran penuh."
  },
  {
    id: "pc2",
    name: "ASUS ROG G16CH",
    category: "pc",
    price: 24999000,
    originalPrice: 26999000,
    rating: 4.8,
    penilaian: 210,
    terjual: "300+",
    isMall: true,
    sizes: ["i7 / 16GB / 1TB / RTX4060"],
    images: ["https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=600&q=80"],
    store: { name: "ASUS Official Store", logo: "" },
    description: "Tower PC gaming berdesain futuristik dengan air-flow pendinginan optimal."
  },
  {
    id: "pc3",
    name: "ASUS ExpertCenter D7",
    category: "pc",
    price: 11499000,
    originalPrice: 12499000,
    rating: 4.7,
    penilaian: 180,
    terjual: "500+",
    isMall: true,
    sizes: ["i5 / 8GB / 512GB SSD"],
    images: ["https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=600&q=80"],
    store: { name: "ASUS Official Store", logo: "" },
    description: "PC desktop enterprise berkinerja tinggi yang mudah di-upgrade untuk kebutuhan bisnis."
  },
  {
    id: "pc4",
    name: "MSI MAG Infinite S3",
    category: "pc",
    price: 18999000,
    originalPrice: 20499000,
    rating: 4.8,
    penilaian: 340,
    terjual: "600+",
    isMall: true,
    sizes: ["i5 / 16GB / 512GB / RTX4060"],
    images: ["https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=600&q=80"],
    store: { name: "MSI Official Store", logo: "" },
    description: "Gaya RGB menarik dengan ventilasi udara besar untuk menjamin kestabilan gaming jam-jaman."
  },
  {
    id: "pc5",
    name: "Dell Alienware Aurora",
    category: "pc",
    price: 45999000,
    originalPrice: 48999000,
    rating: 5.0,
    penilaian: 120,
    terjual: "200+",
    isMall: true,
    sizes: ["i9 / 64GB / 2TB / RTX4090"],
    images: ["https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=600&q=80"],
    store: { name: "Dell Official Store", logo: "" },
    description: "Satu-satunya monster PC desktop gaming untuk kepuasan grafis rata kanan tanpa hambatan."
  },

  // ---------------- TV (SMART TV) ----------------
  {
    id: "tv1",
    name: "Samsung Crystal UHD DU8000",
    category: "tv",
    price: 5899000,
    originalPrice: 6499000,
    rating: 4.8,
    penilaian: 2300,
    terjual: "4.1RB",
    isMall: true,
    sizes: ["43 Inci", "50 Inci", "55 Inci"],
    images: ["https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&q=80"],
    store: { name: "Samsung Electronics", logo: "" },
    description: "Warna krisp nan memukau dengan desain AirSlim yang amat tipis dan estetik."
  },
  {
    id: "tv2",
    name: "Samsung QLED Q70D",
    category: "tv",
    price: 10499000,
    originalPrice: 11999000,
    rating: 4.9,
    penilaian: 890,
    terjual: "1.5RB",
    isMall: true,
    sizes: ["55 Inci", "65 Inci"],
    images: ["https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&q=80"],
    store: { name: "Samsung Electronics", logo: "" },
    description: "Teknologi Motion Xcelerator 120Hz yang sangat pas dipadukan dengan konsol gaming."
  },
  {
    id: "tv3",
    name: "LG OLED C4",
    category: "tv",
    price: 21999000,
    originalPrice: 24999000,
    rating: 5.0,
    penilaian: 740,
    terjual: "950+",
    isMall: true,
    sizes: ["48 Inci", "55 Inci", "65 Inci"],
    images: ["https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&q=80"],
    store: { name: "LG Official Store", logo: "" },
    description: "Pixel Self-lit OLED dengan hitam sempurna, kontras tak terbatas, serta α9 AI Processor Gen7."
  },
  {
    id: "tv4",
    name: "Sony Bravia 8",
    category: "tv",
    price: 27999000,
    originalPrice: 29999000,
    rating: 4.9,
    penilaian: 310,
    terjual: "500+",
    isMall: true,
    sizes: ["55 Inci", "65 Inci"],
    images: ["https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&q=80"],
    store: { name: "Sony Official Store", logo: "" },
    description: "Pengalaman menonton bioskop di rumah ditenagai XR Processor nan mutakhir."
  },
  {
    id: "tv5",
    name: "Xiaomi TV A Pro 55",
    category: "tv",
    price: 5299000,
    originalPrice: 5999000,
    rating: 4.8,
    penilaian: 4100,
    terjual: "8RB+",
    isMall: true,
    sizes: ["55 Inci 4K UHD"],
    images: ["https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&q=80"],
    store: { name: "Xiaomi Official Store", logo: "" },
    description: "Layar 4K bezel-less berharga ekonomis dengan sistem pintar Google TV terintegrasi."
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
