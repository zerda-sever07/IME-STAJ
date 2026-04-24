#  10. Hafta İME Staj Raporu

## 1. Giriş

Bu hafta işletmede gerçekleştirilen yazılım geliştirme faaliyetleri kapsamında, ekip projesi olan **Task Orbit** isimli stajyer takip sistemi üzerinde çalışmalar yapılmıştır. Proje; şirketler, mentorlar ve stajyerler arasındaki iletişimi ve iş süreçlerini dijital ortamda yönetmeyi amaçlayan kapsamlı bir web uygulamasıdır. Bu sistem sayesinde stajyer ilanlarının yayınlanması, başvuruların alınması, görev atamaları, ders yönetimi ve performans takibi gibi süreçler merkezi bir yapı üzerinden yürütülebilmektedir.

Staj süresince projede **frontend geliştirici** olarak görev alınmış olup, kullanıcı arayüzlerinin tasarımı ve geliştirilmesi üzerine çalışmalar gerçekleştirilmiştir. Bunun yanı sıra, backend mantığını daha iyi kavrayabilmek amacıyla bireysel bir Laravel projesi geliştirilmiş ve ek olarak API kullanımı üzerine uygulamalı çalışmalar yapılmıştır.

---

## 2. Proje Genel Yapısı ve Sistem Mimarisi

Task Orbit sistemi, rol tabanlı erişim kontrolüne sahip çok kullanıcılı bir platform olarak tasarlanmıştır. Sistem içerisinde dört temel kullanıcı tipi bulunmaktadır:

- Admin (Yönetici)
- Şirket
- Mentor
- Stajyer

Admin kullanıcılar sistemin en yetkili rolüne sahip olup şirket ekleme, mentor atama ve ilan yönetimi gibi işlemleri gerçekleştirebilmektedir. Şirketler kendi bünyelerinde staj ilanları açabilmekte, mentorlar stajyerlere görev ve ders atayabilmekte, stajyerler ise kendilerine verilen görevleri tamamlayarak sisteme yükleyebilmektedir.

Sistemin en önemli özelliklerinden biri, kullanıcıların birden fazla role sahip olabilmesidir. Örneğin bir kullanıcı bir şirkette mentor olarak görev alırken, başka bir şirkette stajyer olarak bulunabilmektedir. Bu nedenle sistemde kullanıcı girişinden sonra rol seçimi yapılabilen dinamik bir yapı tasarlanmıştır.

Aynı zamanda Task Orbit projesinin veri tabanı şeması oluşturulmuştur.

---

## 3. Frontend Geliştirme Çalışmaları

Bu hafta frontend tarafında kullanıcı deneyimini ön planda tutan çeşitli sayfaların geliştirilmesi gerçekleştirilmiştir.

### 3.1 Welcome (Hoş Geldin) Sayfası

Projenin giriş noktası olan welcome sayfası tasarlanmıştır. Bu sayfada sistemin amacı, sunduğu hizmetler ve kullanıcıyı yönlendiren temel bileşenler yer almaktadır. Tasarım sürecinde sade ve anlaşılır bir arayüz tercih edilmiştir.

---

### 3.2 Login (Giriş) Sayfası

Kullanıcıların sisteme giriş yapmasını sağlayan login sayfası geliştirilmiştir. Bu sistemde kullanıcı doğrulama işlemleri GitHub entegrasyonu üzerinden gerçekleştirilmektedir.

---

### 3.3 Dashboard (Profil Seçme)

Dashboard paneli, sistemin en kritik sayfalarından biridir. Kullanıcı giriş yaptıktan sonra sahip olduğu roller doğrultusunda farklı panellere yönlendirilmektedir.

Bu yapı sayesinde:
- Aynı kullanıcı farklı şirketlerde farklı roller üstlenebilir
- Sistem esnek ve ölçeklenebilir hale gelir
- Kullanıcı deneyimi kişiselleştirilmiş olur

---

### 3.4 Intern (Stajyer) Sayfası

Bu sayfada:
- Atanan görevler görüntülenir
- Görevlerin durumu takip edilir
- Ödevler yüklenir ve değerlendirilir

---

### 3.5 Internship Application (Staj Başvuru) Sayfası

Bu sayfa üzerinden kullanıcılar:
- Şirketleri görüntüler
- Staj ilanlarını inceler
- Modal üzerinden başvuru yapar

📌 Süreç:
- Şirket bilgisi → Modal
- İlan detay → Ayrı sayfa
- Başvuru → Modal form

---

## 4. Veritabanı Tasarımı ve Analizi

Projenin veritabanı yapısı ilişkisel modele uygun şekilde tasarlanmıştır.

- `users` → Kullanıcı bilgileri  
- `role`, `profile` → Rol yönetimi  
- `company` → Şirket bilgileri  
- `internship` → Staj ilanları  
- `intern_register` → Başvurular  
- `task`, `task_submissions` → Görev yönetimi  
- `attendance` → Devamsızlık  
- `lesson` → Dersler  
- `comment`, `media` → Etkileşim  

✔ Veri tekrarını önleyen yapı  
✔ Foreign key ile veri bütünlüğü  
✔ Ölçeklenebilir sistem tasarımı  

---

## 5. API Kullanımı (Hava Durumu)

Bu hafta API kullanımı üzerine çalışma yapılmıştır.

- HTTP istekleri ile API bağlantısı kuruldu  
- Hava durumu verisi çekildi  
- JSON veri işlendi ve ekrana aktarıldı  

---

## 6. Bireysel Proje: Motivation App (Laravel)

Laravel kullanılarak geliştirilen bu uygulamada:

- Motivasyon sözü paylaşma
- Söz silme
- Paylaşımları görüntüleme

### Yapılan işlemler:
- Create
- Read
- Delete

---

## 7. Öğrenilen Bilgiler

- Rol tabanlı sistem tasarımı
- Frontend geliştirme
- UX tasarımı
- API kullanımı
- JSON veri yapısı
- Laravel backend temelleri
- CRUD işlemleri

---

## 8. Kullanılan Teknolojiler

- Laravel
- GitHub
- Postman
- SQLite
- Herd
- Visual Studio Code
