# 📅 12. Hafta İME Staj Raporu

## 1. Giriş

Bu hafta gerçekleştirilen staj faaliyetleri kapsamında, yazılım geliştirme süreçlerine hem teorik hem de uygulamalı olarak devam edilmiştir. Haftanın teorik bölümünde yazılım sistemlerinde kullanılan farklı arayüz yaklaşımları olan:

- CLI (Command Line Interface)  
- GUI (Graphical User Interface)  
- TUI (Text-based User Interface)  

kavramları detaylı şekilde incelenmiştir. Bu kavramların çalışma prensipleri, kullanım alanları ve birbirlerine göre avantajları değerlendirilmiştir.

Teorik çalışmaların ardından uygulama kısmına geçilmiş ve ekip projesi olan **Task Orbit stajyer takip sistemi** üzerinde CLI tabanlı çalışan bir WebSocket uygulaması geliştirilmiştir. Geliştirilen bu yapı, terminal üzerinden tek satırlık bir komut ile çalıştırılabilecek şekilde tasarlanmış ve sistem içerisine entegre edilmiştir.

Bu uygulama kapsamında, istemci ile sunucu arasında sürekli açık bir bağlantı kurularak WebSocket protokolünün **kalıcı (persistent) bağlantı** yapısı gözlemlenmiştir. Klasik HTTP isteklerinden farklı olarak bağlantının her işlemde yeniden kurulmadığı, bunun yerine tek bir bağlantı üzerinden **çift yönlü (bidirectional) veri iletişimi** sağlandığı uygulamalı olarak deneyimlenmiştir.

### Task Orbit Üzerinde Yapılan Çalışmalar

- CLI üzerinden WebSocket sunucusu başlatılmış  
- Sisteme bağlanan istemciler üzerinden aktif bağlantılar yönetilmiştir  
- Gerçek zamanlı veri iletimi test edilerek anlık güncellemelerin mümkün olduğu görülmüştür  

### Süreçte Gözlemlenenler

- Bağlantı kurma, sürdürme ve sonlandırma aşamaları analiz edilmiştir  
- Terminal üzerinden veri gönderme ve alma işlemleri gerçekleştirilmiştir  
- Gerçek zamanlı sistemlerde düşük gecikme (low latency) avantajı gözlemlenmiştir  

Bu uygulama sayesinde Task Orbit projesinde ilerleyen aşamalarda kullanılabilecek:

- Anlık bildirim sistemleri  
- Canlı etkileşim mekanizmaları  
- Gerçek zamanlı veri güncellemeleri  

gibi yapıların temeli oluşturulmuştur.

Ayrıca bu hafta bireysel proje olarak **“Kitap Dünyası”** isimli bir online kitap satış web sitesi geliştirilmiştir. Bu proje ile frontend geliştirme becerileri pekiştirilmiş ve kullanıcı etkileşimi odaklı bir sistem oluşturulmuştur.

---

## 2. CLI ile WebSocket

Uygulama geliştirme sürecinde CLI tabanlı WebSocket yapısının daha iyi anlaşılabilmesi için **PowerShell üzerinde üç ayrı terminal penceresi** kullanılarak sistem modüler şekilde çalıştırılmıştır.

### Sistem Yapısı

#### 🖥️ 1. Pencere – Sunucu (Server)
- WebSocket sunucusu başlatılmıştır  
- Belirlenen port üzerinden gelen bağlantılar dinlenmiştir  
- İstemciler arası veri iletimi yönetilmiştir  

#### 👂 2. Pencere – İstemci (Dinleyici / Listener)
- Sunucuya bağlanarak gelen veriler dinlenmiştir  
- Gerçek zamanlı veri akışı terminal üzerinden izlenmiştir  
- Gönderilen mesajlar anlık olarak görüntülenmiştir  

#### 📤 3. Pencere – İstemci (Gönderici / Sender)
- Sunucuya veri gönderimi gerçekleştirilmiştir  
- Gönderilen mesajların diğer istemcilere iletilmesi sağlanmıştır  

---

## 3. Kitap Dünyası (Bireysel Proje)

### 3.1 Ana Sayfa (Home Page)

- Navigasyon menüsü (Ana Sayfa, Kitaplar, İletişim vb.) bulunmaktadır  
- Arama butonu eklenmiştir  
- Öne çıkan kitaplar kart yapısı ile listelenmiştir  
- Her kitap için:
  - Kitap görseli  
  - Kitap adı  
  - Fiyat bilgisi  
  - Detay alanı bulunmaktadır  

---

### 3.2 Kitap Listeleme ve Arama

- Tüm kitaplar liste halinde gösterilmektedir  
- Arama çubuğu ile filtreleme yapılabilmektedir  
- Sonuçlar dinamik olarak güncellenmektedir  


---

### 3.3 Kitap Detay Sayfası

- Kitap adı  
- Görsel  
- Açıklama  
- Yazar bilgisi  
- Fiyat  


---

### 3.4 Satın Alma Sistemi

- Kullanıcı kitap satın alabilmektedir  
- Satın alma süreci basit ve anlaşılır şekilde tasarlanmıştır  


---

### 3.5 İletişim Sayfası

- İletişim formu (ad, e-posta, mesaj) bulunmaktadır  
- Kullanıcı mesaj gönderebilmektedir  
- Basit ve kullanıcı dostu tasarım tercih edilmiştir  


---

### 3.6 Hakkımızda Sayfası

- Projenin amacı açıklanmıştır  
- Kullanıcılara sunulan hizmetler belirtilmiştir  
- Kitaplara kolay erişim hedeflenmiştir  


---

## 4. Genel Değerlendirme

Bu hafta yapılan çalışmalar hem teorik hem de uygulama açısından verimli geçmiştir.

- CLI, GUI ve TUI yapıları öğrenilmiştir  
- WebSocket ile gerçek zamanlı iletişim kavranmıştır  
- Bireysel proje geliştirme süreci tamamlanmıştır  

“Kitap Dünyası” projesi, frontend geliştirme açısından önemli bir deneyim sağlamıştır.

---

## 5. Öğrenilen Bilgiler

- CLI, GUI ve TUI farkları  
- WebSocket mantığı  
- JavaScript ile dinamik geliştirme  
- Kullanıcı deneyimi (UX) tasarımı  

---

## 6. Kullanılan Teknolojiler

- HTML  
- CSS  
- JavaScript  
- WebSocket  
- Visual Studio Code  
- Terminal (CLI)  

---
