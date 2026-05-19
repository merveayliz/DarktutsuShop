// --- GLOBAL PRODUCTS DATA (Vibrant Art Shop) ---
const products = [
    { id: 1, name: "Neon Rainbow Incense", category: "incense", desc: "Light up your space with vibrant colorful aura. Mix of premium tropical fruits and sweet bubblegum scents.", price: "$15.00", img: "img/1.jpg" },
    { id: 2, name: "Pop-Art Ceramic Ash Catcher", category: "ash", desc: "Hand-painted neon pink and cyan wavy ash catcher. Adds a huge splash of color to your table.", price: "$24.00", img: "img/2.jpg" },
    { id: 3, name: "Pastel Terrazzo Candle Holder", category: "holder", desc: "Eco-friendly Jesmonite holder with colorful terrazzo chips. Perfect fit for your tea-lights or small jars.", price: "$19.00", img: "img/3.jpg" },
    { id: 4, name: "Electric Purple Incense Sticks", category: "incense", desc: "Infused with magical lavender and wild berries. Deep calming effects wrapped in a joyful vibrant vibe.", price: "$14.00", img: "img/4.jpg" },
    { id: 5, name: "Wavy Holographic Ash Tray", category: "ash", desc: "Shines in different colors under the sun! Glossy, beautiful, and absolutely unique handmade design.", price: "$26.00", img: "img/5.jpg" },
    { id: 6, name: "Neon Pink Star Candle Jar", category: "holder", desc: "Bright star-shaped casting jar. Safe, heavy-duty, and glows beautifully when the candle inside is lit.", price: "$22.00", img: "img/6.jpg" },
    { id: 7, name: "Neon Rainbow Incense", category: "incense", desc: "Light up your space with vibrant colorful aura. Mix of premium tropical fruits and sweet bubblegum scents.", price: "$15.00", img: "img/7.jpg" },
    { id: 8, name: "Pop-Art Ceramic Ash Catcher", category: "ash", desc: "Hand-painted neon pink and cyan wavy ash catcher. Adds a huge splash of color to your table.", price: "$24.00", img: "img/8.jpg" },
    { id: 9, name: "Pastel Terrazzo Candle Holder", category: "holder", desc: "Eco-friendly Jesmonite holder with colorful terrazzo chips. Perfect fit for your tea-lights or small jars.", price: "$19.00", img: "img/11.jpg" },
    { id: 10, name: "Electric Purple Incense Sticks", category: "incense", desc: "Infused with magical lavender and wild berries. Deep calming effects wrapped in a joyful vibrant vibe.", price: "$14.00", img: "img/12.jpg" },
    { id: 11, name: "Wavy Holographic Ash Tray", category: "ash", desc: "Shines in different colors under the sun! Glossy, beautiful, and absolutely unique handmade design.", price: "$26.00", img: "img/22.jpg" },
    { id: 12, name: "Neon Pink Star Candle Jar", category: "holder", desc: "Bright star-shaped casting jar. Safe, heavy-duty, and glows beautifully when the candle inside is lit.", price: "$22.00", img: "img/33.jpg" },
    { id: 13, name: "Neon Rainbow Incense", category: "incense", desc: "Light up your space with vibrant colorful aura. Mix of premium tropical fruits and sweet bubblegum scents.", price: "$15.00", img: "img/44.jpg" },
    { id: 14, name: "Pop-Art Ceramic Ash Catcher", category: "ash", desc: "Hand-painted neon pink and cyan wavy ash catcher. Adds a huge splash of color to your table.", price: "$24.00", img: "img/55.jpg" }
];


const productList = document.getElementById('product-list');
const modal = document.getElementById('productModal');
const modalImg = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalDesc = document.getElementById('modalDesc');
const modalPrice = document.getElementById('modalPrice');
const modalWA = document.getElementById('modalWhatsApp');
const closeModal = document.querySelector('.close-modal');

// Ürünleri Sayfaya Yükleyen Dinamik Fonksiyon
function loadProducts(filteredProducts = products) {
    productList.innerHTML = ""; 
    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <div>
                <h3>${product.name}</h3>
                <p>${product.price}</p>
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

    // İngilizce Global Sipariş Mesaj Şablonu
    const message = `Hello! I visited your shop and I'm in love with "${product.name}" (${product.price}). Can I get information about shipping?`;
    modalWA.href = `https://wa.me/905xxxxxxxxx?text=${encodeURIComponent(message)}`; 

    modal.style.display = "block";
    document.body.style.overflow = "hidden"; 
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

// Sayfa ilk açıldığında tetikleyici
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
                setTimeout(typeWriter, 130); 
            }
        }
        setTimeout(typeWriter, 500); 
    }
});