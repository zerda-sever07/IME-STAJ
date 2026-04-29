# 📅 11. Hafta İME Staj Raporu

## 1. Giriş
Bu hafta işletmede gerçekleştirilen yazılım geliştirme faaliyetleri kapsamında, ekip projesi olan **Task Orbit stajyer takip sistemi** üzerinde hem teorik hem de uygulamalı çalışmalar yürütülmüştür.

Haftanın teorik kısmında:
- Senkron (synchronous) ve asenkron (asynchronous) işlemler
- Job Queue yapısı
- CLI, GUI ve TUI kavramları  

ele alınmıştır.

Bu teorik bilgilerin ardından proje özelinde uygulamaya geçilmiş ve:
- Task Orbit sistemi içerisindeki iş akışları analiz edilmiş  
- Frontend tarafında mevcut sayfalar geliştirilmiş  
- Yeni özellikler eklenerek kullanıcı deneyimi iyileştirilmiştir  

---

## 2. Teorik Çalışmalar

Bu hafta ders kapsamında aşağıdaki konular ele alınmış, bu yapıların **nerede ve nasıl kullanıldığı kavranmıştır**:

- **Senkron (Synchronous) işlemler:**  
  Sıralı ve birbirine bağlı iş akışlarında kullanıldığı öğrenilmiştir.

- **Asenkron (Asynchronous) işlemler:**  
  Uzun süren işlemlerin sistemi bloklamadan arka planda çalıştırılmasını sağladığı kavranmıştır.

- **Job Queue (İş Kuyruğu):**  
  Bildirim gönderme ve veri işleme gibi işlemlerin arka planda yönetilmesinde kullanıldığı öğrenilmiştir.

- **CLI (Command Line Interface):**  
  Terminal üzerinden komutlar ile sistem yönetimi ve geliştirme işlemlerinde kullanıldığı görülmüştür.

- **GUI (Graphical User Interface):**  
  Kullanıcı ile etkileşim sağlamak amacıyla web ve uygulama arayüzlerinde kullanıldığı kavranmıştır.

- **TUI (Text-based User Interface):**  
  Metin tabanlı ancak düzenli arayüz gerektiren sistemlerde kullanıldığı öğrenilmiştir.

- **Console Komutları:**  
  Proje geliştirme sürecinde uygulamayı çalıştırma ve yönetme amacıyla kullanıldığı anlaşılmıştır.

---

## 2.1 Ödev: Task Orbit Projesinde İş Akışlarının Analizi

Bu hafta verilen ödev kapsamında:

- Task Orbit projesi içerisindeki iş süreçleri incelenmiştir  
- Özellikle **sıralı (senkron) iş akışları** analiz edilmiştir  
- Kullanıcı etkileşimleri, rol geçişleri, başvuru süreçleri ve görev yönetimi değerlendirilmiştir  

Sıralı işlemler belirlenmiş ve **Markdown formatına getirilerek GitHub Gist olarak paylaşılmıştır.**

🔗 **Ödev Linki:**  
https://gist.github.com/zerda-sever07/1ff0a4dac0925ba215b8f49c649e3178  

---

## 3. Frontend Geliştirme Çalışmaları

Bu hafta frontend tarafında yeni özellikler eklenmiş ve mevcut yapılar geliştirilmiştir.

### 3.1 User Panel (Kullanıcı Paneli Yeniden Tasarım)

Kullanıcı paneli tamamen yeniden tasarlanmıştır:

- Modern bir arayüz oluşturulmuştur  
- Şirketler kart yapısında listelenmiştir  
- “İncele” butonu ile şirket detay sayfalarına yönlendirme sağlanmıştır  
- Tüm ilanlar ayrı bir alanda toplanarak erişim kolaylaştırılmıştır  
- Navigasyon daha anlaşılır hale getirilmiştir  

➡️ Bu geliştirmeler ile kullanıcıların sistem içerisinde daha rahat hareket etmesi sağlanmıştır.

---

### 3.2 Intern Sayfası Güncellemeleri

Intern (stajyer) sayfasına eklenen özellikler:

- Stajyerler ders içeriklerine yorum yapabilmektedir  
- Yapılan yorumlar diğer stajyerler tarafından görüntülenebilmektedir  
- Topluluk etkileşimi oluşturulmuştur  

Ayrıca:

- Mentor tarafından oluşturulan ders müfredatı stajyer sayfasında görüntülenebilir hale getirilmiştir  
- Veri senkronizasyonu sağlanmıştır  

---

### 3.3 Mentor Sayfası Geliştirmeleri

#### 📚 Ders Yönetimi
- Mentorlar yeni ders ekleyebilmektedir  
- İlk 4 haftalık hazır müfredat düzenlenebilir hale getirilmiştir  
- Haftalık ders içerikleri eklenebilmektedir  
- Dersler silinebilmektedir  

#### 👥 Stajyer Listesi
- Her ders altında o dersi alan stajyerler listelenmektedir  

#### 💬 Yorum Sistemi
- Her ders için “topluluk yorumları” alanı eklenmiştir  
- Stajyer yorumları mentor tarafından görüntülenebilmektedir  

---

### 3.4 Staj Oluşturma Sistemi

Mentorlara staj oluşturabilme özelliği eklenmiştir:

- Mentorlar kendi staj programlarını oluşturabilir  
- Süreci doğrudan yönetebilir  

---

### 3.5 Telegram Entegrasyonu ve Bildirim Sistemi

Sisteme Telegram entegrasyonu eklenmiştir:

- Ders saatinden önce mentorlara bildirim gönderilmektedir  

Mentor:
- Katılım durumunu kontrol edebilir  
- Kaç kişinin katılacağını görebilir  
- Dersi işleyip işlemeyeceğine karar verebilir  

Ek olarak:
- Mentorun Telegram grubuna yönlendirilmesini sağlayan bir buton eklenmiştir  

---

### 3.6 Sertifika / Değerlendirme Belgesi (PDF)

Mentor paneline staj sonunda kullanılmak üzere değerlendirme sistemi eklenmiştir:

- Mentor, stajyerleri değerlendirebilmektedir  

#### Değerlendirme Kriterleri:
- Devam durumu  
- Derse katılım  
- Görev tamamlama  
- Genel performans  

---

## 5. Genel Değerlendirme

Bu hafta yapılan çalışmalar hem teorik hem de uygulama açısından verimli geçmiştir.

Öne çıkan kazanımlar:

- Senkron ve asenkron yapıların öğrenilmesi  
- Job Queue mantığının kavranması  
- Gerçek projeye yeni özelliklerin entegre edilmesi  
- Kullanıcı deneyiminin iyileştirilmesi  

---

## 6. Öğrenilen Bilgiler

- Senkron ve asenkron programlama  
- Job Queue mantığı  
- CLI, GUI, TUI farkları  
- Frontend geliştirmede kullanıcı deneyimi  

---

## 7. Kullanılan Teknolojiler

- Laravel  
- GitHub  
- Visual Studio Code  
