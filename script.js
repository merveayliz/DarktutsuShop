// --- GLOBAL PRODUCTS DATA ($ and English Incense Shop) ---
const products = [
    { id: 1, name: "Sandalwood Incense Sticks", category: "sticks", desc: "Premium natural sandalwood sticks. Perfect for meditation, deep relaxation, and mental clarity.", price: "$14.00", img: "img/1.jpg" },
    { id: 2, name: "Lavender Peace Cones", category: "cones", desc: "Soothing lavender backflow cones. Creates a beautiful waterfall d烟 effect while calming your mind.", price: "$12.00", img: "img/2.jpg" },
    { id: 3, name: "White Sage Smudge Sticks", category: "sticks", desc: "Organic California white sage. Used for centuries to purify spaces and clear negative energies.", price: "$16.00", img: "img/3.jpg" },
    { id: 4, name: "Ceramic Mountain Burner", category: "holders", desc: "Handcrafted ceramic backflow incense holder. Watch the smoke flow down like a mystical river.", price: "$34.00", img: "img/4.jpg" },
    { id: 5, name: "Tibetan Jasmine Incense", category: "sticks", desc: "Exquisite floral jasmine scent. Brings an uplifting aura, creativity, and sweet warmth to any room.", price: "$15.00", img: "img/5.jpg" },
    { id: 6, name: "Minimalist Wooden Holder", category: "holders", desc: "Sleek and minimalist wooden ash catcher. Elegant design that fits perfectly into any modern home.", price: "$18.00", img: "img/6.jpg" },
    { id: 7, name: "Sandalwood Incense Sticks", category: "sticks", desc: "Premium natural sandalwood sticks. Perfect for meditation, deep relaxation, and mental clarity.", price: "$14.00", img: "img/7.jpg" },
    { id: 8, name: "Lavender Peace Cones", category: "cones", desc: "Soothing lavender backflow cones. Creates a beautiful waterfall d烟 effect while calming your mind.", price: "$12.00", img: "img/8.jpg" },
    { id: 9, name: "White Sage Smudge Sticks", category: "sticks", desc: "Organic California white sage. Used for centuries to purify spaces and clear negative energies.", price: "$16.00", img: "img/9.jpg" },
    { id: 10, name: "Ceramic Mountain Burner", category: "holders", desc: "Handcrafted ceramic backflow incense holder. Watch the smoke flow down like a mystical river.", price: "$34.00", img: "img/10.jpg" }
];

const productList = document.getElementById('product-list');
const modal = document.getElementById('productModal');
const modalImg = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalDesc = document.getElementById('modalDesc');
const modalPrice = document.getElementById('modalPrice');
const modalWA = document.getElementById('modalWhatsApp');
const closeModal = document.querySelector('.close-modal');

// Ürünleri Sayfaya Yükleyen Fonksiyon
function loadProducts(filteredProducts = products) {
    productList.innerHTML = ""; // Mevcut listeyi sıfırla
    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <div style="text-align:center; margin-top:12px;">
                <h3 style="color:var(--deep-charcoal); font-size:1.2rem;">${product.name}</h3>
                <p style="font-weight:700; color:var(--clay-brown); margin-top:5px;">${product.price}</p>
            </div>
        `;
        card.onclick = () => openModal(product);
        productList.appendChild(card);
    });
}

// Detay Pop-up (Modal) Açma Fonksiyonu
function openModal(product) {
    modalImg.src = product.img;
    modalName.innerText = product.name;
    modalDesc.innerText = product.desc;
    modalPrice.innerText = product.price;

    // İngilizce Sipariş Mesaj Şablonu
    const message = `Hello! I visited your shop and I would like to order the "${product.name}" (${product.price}). Could you give me details about shipping?`;
    modalWA.href = `https://wa.me/905xxxxxxxxx?text=${encodeURIComponent(message)}`; 

    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Sayfa arkada kaymasın
}

// Modalı Kapatma İşlemleri
closeModal.onclick = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = (e) => {
    if (e.target == modal) closeModal.onclick();
}

// Ürün Filtreleme Fonksiyonu
function filterProducts(category) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Tıklanan butona active class'ı ekle
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    if (category === 'all') {
        loadProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        loadProducts(filtered);
    }
}

// Sayfa ilk yüklendiğinde tetiklenecek alan
window.onload = () => {
    loadProducts();
};

// --- DAKTİLO EFEKTİ ---
document.addEventListener("DOMContentLoaded", () => {
    const introText = document.querySelector('.intro-text');
    
    if (introText) {
        const textToType = introText.textContent; 
        introText.textContent = ""; 
        let index = 0;

        function typeWriter() {
            if (index < textToType.length) {
                introText.textContent += textToType.charAt(index); 
                index++;
                setTimeout(typeWriter, 150); 
            }
        }
        setTimeout(typeWriter, 500); 
    }
});
