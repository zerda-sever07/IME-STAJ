1. Hafta: Docker Altyapısı ve Kurulum Çalışmaları

Bu hafta, geliştirme ortamlarını daha düzenli, standart ve taşınabilir hale getirmek amacıyla Docker altyapısı üzerinde çalışmalar yapılmıştır. Uygulamalara geçmeden önce konteyner tabanlı mimari kavramı hakkında genel bir araştırma gerçekleştirilmiş ve Docker’ın yazılım geliştirme süreçlerindeki işlevi incelenmiştir.

Yapılan Çalışmalar

Bu doğrultuda Docker Desktop kurulumu tamamlanmış ve gerekli temel yapılandırmalar gerçekleştirilmiştir. Sonrasında ubuntu:22.04 imajı kullanılarak izole bir Docker konteyneri oluşturulmuş, konteyner içerisinde Linux tabanlı terminal komutları aracılığıyla dosya sistemi üzerinde çeşitli işlemler uygulanmıştır.

Konteyner ortamında echo komutu kullanılarak zerda.php isimli bir dosya oluşturulmuş, ardından cat komutu ile dosya içeriği görüntülenerek yapılan işlemin doğruluğu kontrol edilmiştir. Böylece konteyner içerisinde dosya oluşturma ve içerik kontrolü süreçleri uygulamalı olarak deneyimlenmiştir.

Bunun yanında, cihazlar arasında güvenli ve özel bir ağ bağlantısı kurmak amacıyla Tailscale kurulumu yapılmış ve Mesh VPN yapısı test edilmiştir. Bu çalışma sayesinde farklı cihazların güvenli bir ağ üzerinden iletişim kurması sağlanmış, ağ erişimi ve bağlantı yönetimi konularında pratik bilgi edinilmiştir.

Ayrıca Docker sisteminin genel durumu ve aktif konteynerler, ilgili Docker komutları yardımıyla kontrol edilerek sistem yapısı hakkında detaylı inceleme yapılmıştır.

Öğrenilen Bilgiler

Docker konteyner mantığı ve temel çalışma prensipleri

Linux terminal komutları ile dosya sistemi işlemleri

Docker imaj ve konteyner kavramlarının farkı

Konteynerlerin izole çalışma yapısı

Tailscale ile güvenli ağ (Mesh VPN) kurulumu

Kullanılan Teknolojiler ve Araçlar

Docker

Ubuntu 22.04

Linux Terminal Komutları

Tailscale

GitHub

https://github.com/zerda-sever07/IME-STAJ




