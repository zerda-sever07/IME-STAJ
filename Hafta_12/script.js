// Kitap Veritabanı
const books = [
    {
        id: 1,
        title: "Nutuk",
        author: "Mustafa Kemal Atatürk",
        category: "Tarih",
        year: "1927",
        price: "150 TL",
        img: "img/nutuk.jpg",
        desc: "Cumhuriyetimizin kurucusu Gazi Mustafa Kemal Atatürk'ün, Kurtuluş Savaşı'nı ve Cumhuriyet'in kuruluşunu anlattığı tarihi ve eşsiz eseri."
    },
    {
        id: 2,
        title: "Olasılıksız",
        author: "Adam Fawer",
        category: "Roman",
        year: "2005",
        price: "125 TL",
        img: "img/olasılıksız.jpg",
        desc: "Olasılıkları önceden görebilen bir adamın, bilim, şans ve kader üçgeninde yaşadığı nefes kesici ve zihin zorlayıcı macerası."
    },
    {
        id: 3,
        title: "Empati",
        author: "Adam Fawer",
        category: "Roman",
        year: "2008",
        price: "130 TL",
        img: "img/empati.jpg",
        desc: "İnsanların duygularını görebilen ve değiştirebilen empatların etrafında şekillenen, psikoloji ve gerilim yüklü bir başyapıt."
    },
    {
        id: 4,
        title: "İstanbul Hatırası",
        author: "Ahmet Ümit",
        category: "Roman",
        year: "2010",
        price: "140 TL",
        img: "img/ahmet.jpg",
        desc: "Tarihi yarımadada işlenen cinayetler zincirini çözerken, bir yandan da İstanbul'un gizemli ve muazzam tarihine yapılan bir yolculuk."
    },
    {
        id: 5,
        title: "Beyoğlu'nun En Güzel Abisi",
        author: "Ahmet Ümit",
        category: "Polisiye",
        year: "2013",
        price: "135 TL",
        img: "img/beyoğlu.jpg",
        desc: "Tarlabaşı'nın arka sokaklarından Beyoğlu'nun ışıltılı caddelerine uzanan, Başkomser Nevzat'ın faili meçhul bir cinayeti aydınlatma çabası."
    },
    {
        id: 6,
        title: "Sefiller",
        author: "Victor Hugo",
        category: "Dünya Klasikleri",
        year: "1862",
        price: "180 TL",
        img: "img/sefiller.jpg",
        desc: "Eski mahkum Jean Valjean'ın kefaret arayışını ve 19. yüzyıl Fransa'sının toplumsal adaletsizliklerini anlatan destansı roman."
    },
    {
        id: 7,
        title: "Savaş ve Barış",
        author: "Lev Tolstoy",
        category: "Dünya Klasikleri",
        year: "1869",
        price: "200 TL",
        img: "img/savaş_ve_barış..jpg",
        desc: "Napolyon'un Rusya'yı işgali zemininde, beş asilzade ailenin hayatını, aşklarını ve yıkımlarını konu alan devasa tarihi eser."
    },
    {
        id: 8,
        title: "Suç ve Ceza",
        author: "Fyodor Dostoyevski",
        category: "Dünya Klasikleri",
        year: "1866",
        price: "145 TL",
        img: "img/suc-ve-ceza.jpg",
        desc: "Raskolnikov'un işlediği cinayet sonrası yaşadığı derin vicdan azabı ve psikolojik buhranları irdeleyen edebi şaheser."
    },
    {
        id: 9,
        title: "Gurur ve Ön Yargı",
        author: "Jane Austen",
        category: "Dünya Klasikleri",
        year: "1813",
        price: "110 TL",
        img: "img/gurur_ve_önyargi.jpg",
        desc: "Elizabeth Bennet ile soylu Mr. Darcy arasındaki aşk, gurur, sınıf farkları ve dönemin toplumsal önyargılarını esprili bir dille anlatan romantik klasik."
    }
];

let selectedBook = null;

// DOM Yüklendiğinde
document.addEventListener("DOMContentLoaded", () => {
    renderBooks(books);
    renderPopularBooks();
});

// Popüler Kitapları Çiz
function renderPopularBooks() {
    const popularGrid = document.getElementById("popularGrid");
    if (!popularGrid) return;
    
    // Öne çıkarmak istediğimiz kitapları (Gurur ve Ön Yargı, Sefiller, İstanbul Hatırası, Olasılıksız)
    const popularBooks = [books[8], books[5], books[3], books[1]]; 
    
    popularGrid.innerHTML = "";
    popularBooks.forEach(b => {
        popularGrid.innerHTML += `
            <div class="book-card" style="border-color: var(--primary);">
                <div class="card-img-wrapper">
                    <span class="badge-cat" style="background: rgba(212, 175, 55, 0.2); border: 1px solid rgba(212, 175, 55, 0.4); color: var(--primary);"><i class="fa-solid fa-star" style="color: var(--primary); margin-right: 4px;"></i>Popüler</span>
                    <img src="${b.img}" alt="${b.title}">
                </div>
                <div class="book-info">
                    <h3>${b.title}</h3>
                    <p class="author">${b.author}</p>
                </div>
                <div class="card-footer">
                    <span class="price">${b.price}</span>
                    <button class="btn-icon" onclick="openBookDetail(${b.id})" title="İncele">
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        `;
    });
}

// Kitapları Ekrana Çiz (Grid)
function renderBooks(bookArray) {
    const grid = document.getElementById("mainGrid");
    grid.innerHTML = "";
    
    if (bookArray.length === 0) {
        grid.innerHTML = `<p style="color:var(--text-muted); grid-column:1/-1; text-align:center;">Bu kategoride kitap bulunamadı.</p>`;
        return;
    }

    bookArray.forEach(b => {
        grid.innerHTML += `
            <div class="book-card">
                <div class="card-img-wrapper">
                    <span class="badge-cat">${b.category}</span>
                    <img src="${b.img}" alt="${b.title}">
                </div>
                <div class="book-info">
                    <h3>${b.title}</h3>
                    <p class="author">${b.author}</p>
                </div>
                <div class="card-footer">
                    <span class="price">${b.price}</span>
                    <button class="btn-icon" onclick="openBookDetail(${b.id})" title="İncele">
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        `;
    });
}

// Arama Fonksiyonu
function searchBooks() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filtered = books.filter(b => 
        b.title.toLowerCase().includes(query) || 
        b.author.toLowerCase().includes(query)
    );
    renderBooks(filtered);
}

// Filtreleri Temizle
function clearSearch() {
    document.getElementById("searchInput").value = "";
    renderBooks(books);
    showToast("Tüm kitaplar listelendi.");
}

// Kategori Filtreleme
function filterCategory(catName) {
    const filtered = books.filter(b => b.category === catName);
    renderBooks(filtered);
    showToast(`${catName} kategorisindeki kitaplar listelendi.`);
}

// Özel Toast Mesajı (Küçük Popup)
function showToast(message) {
    const toast = document.getElementById("customToast");
    document.getElementById("toastMessage").innerText = message;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

// Tüm Modalları Kapat
function closeAllModals() {
    document.getElementById("modalOverlay").classList.remove("show");
    const modals = document.querySelectorAll('.custom-modal');
    modals.forEach(m => m.classList.remove("show"));
}

// Arka plan tıklamasıyla modalları kapatma
document.getElementById("modalOverlay").addEventListener("click", closeAllModals);

// 1. Kitap Detay Sayfasını Aç (Modal)
function openBookDetail(id) {
    selectedBook = books.find(b => b.id === id);
    if (!selectedBook) return;

    closeAllModals();

    const body = document.getElementById("detailModalBody");
    body.innerHTML = `
        <div class="detail-layout">
            <img src="${selectedBook.img}" class="detail-img" alt="${selectedBook.title}">
            <div class="detail-info">
                <span class="badge">${selectedBook.category}</span>
                <h2>${selectedBook.title}</h2>
                <p class="detail-meta"><i class="fa-solid fa-pen-nib"></i> Yazar: <strong>${selectedBook.author}</strong> | Yıl: ${selectedBook.year}</p>
                <div class="detail-desc">
                    <p>${selectedBook.desc}</p>
                </div>
                <div class="detail-price-box">
                    <div>
                        <span style="color:var(--text-muted); font-size:0.9rem;">Fiyat</span>
                        <h3>${selectedBook.price}</h3>
                    </div>
                    <button class="btn btn-primary" onclick="openOrderForm()">Satın Al <i class="fa-solid fa-cart-shopping"></i></button>
                </div>
            </div>
        </div>
    `;

    document.getElementById("modalOverlay").classList.add("show");
    document.getElementById("bookDetailModal").classList.add("show");
}

// 2. Sipariş Formunu Aç (Satın Al Tıklandığında)
function openOrderForm() {
    closeAllModals();
    
    // Form alanlarını sıfırla ve hata mesajını gizle
    document.getElementById("orderName").value = "";
    document.getElementById("orderPhone").value = "";
    document.getElementById("orderAddress").value = "";
    document.getElementById("payOnDoor").checked = false; // Kapıda ödeme seçimi sıfırlansın
    document.getElementById("paymentMethodContainer").classList.remove("active"); // Görsel seçili durumu da sıfırla
    document.getElementById("formAlertMessage").style.display = "none";

    document.getElementById("modalOverlay").classList.add("show");
    document.getElementById("orderFormModal").classList.add("show");
}

// 3. Siparişi İşle ve Kontrol Et
function processOrder() {
    const name = document.getElementById("orderName").value.trim();
    const phone = document.getElementById("orderPhone").value.trim();
    const address = document.getElementById("orderAddress").value.trim();
    const isPayOnDoor = document.getElementById("payOnDoor").checked;
    
    const alertBox = document.getElementById("formAlertMessage");

    // Ödeme yöntemi seçilmiş mi kontrolü
    if (!isPayOnDoor) {
        alertBox.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> <span>Lütfen bir ödeme yöntemi seçin! (Kapıda Ödeme)</span>`;
        alertBox.style.display = "flex";
        return;
    }

    // Algoritma Adım 9.2: Eksik bilgi varsa uyarı ver ve formda kal
    if (!name || !phone || !address) {
        alertBox.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> <span>Lütfen tüm alanları doldurun!</span>`;
        alertBox.style.display = "flex";
        return; // İşlemi durdur
    }

    // Her şey tamam, siparişi onayla
    closeAllModals();
    
    // Algoritma Adım 9.1: Başarı Mesajı
    document.getElementById("successDesc").innerHTML = "<strong>Siparişiniz kapıda ödeme yöntemiyle alınmıştır.</strong>";
    
    // Fiş Dökümü
    document.getElementById("receiptBox").innerHTML = `
        <p><strong>Kitap:</strong> ${selectedBook.title}</p>
        <p><strong>Fiyat:</strong> <span style="color:var(--primary); font-weight:bold;">${selectedBook.price}</span></p>
        <p><strong>Alıcı:</strong> ${name}</p>
        <p><strong>Adres:</strong> ${address}</p>
        <p><strong>Ödeme:</strong> Kapıda Ödeme Onaylı</p>
    `;

    document.getElementById("modalOverlay").classList.add("show");
    document.getElementById("successModal").classList.add("show");
}

// 4. İletişim Formu Submit Algoritma
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Sayfa yenilenmesini engelle
    showToast("Mesajınız yetkililere ulaştırıldı. Teşekkür ederiz!");
    this.reset();
});

// Mobile Menu Toggle
document.querySelector(".menu-btn").addEventListener("click", () => {
    const links = document.querySelector(".nav-links");
    if (links.style.display === "flex") {
        links.style.display = "none";
    } else {
        links.style.display = "flex";
        links.style.flexDirection = "column";
        links.style.position = "absolute";
        links.style.top = "70px";
        links.style.right = "0";
        links.style.background = "var(--surface)";
        links.style.padding = "20px";
        links.style.borderRadius = "var(--radius-md)";
    }
});
