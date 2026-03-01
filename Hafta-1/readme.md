 ### 1. Hafta: Docker Altyapısı ve Kurulumlar
Bu hafta geliştirme ortamının standartlaştırılması için Docker altyapısı üzerine çalışılmıştır.

### Yapılan İşlemler:
Docker Desktop kurulumu ve konfigürasyonu tamamlandı.
ubuntu:22.04 imajı kullanılarak izole bir konteyner oluşturuldu.
Konteyner içerisinde Linux terminal komutları ile dosya sistemi manipülasyonu yapıldı.
echo komutu ile merdo.php dosyası oluşturulup cat komutu ile içeriği doğrulandı.
Tailscale kurulumu yapılarak cihazlar arası güvenli ağ erişimi (Mesh VPN) test edildi.
### Kullanılan Komutlar:
docker pull ubuntu:22.04
docker run -it ubuntu:22.04 bash
echo "merhaba dunya" > zerda.php
docker info
docker container ls -l
### Kullanılan Uygulamalar
Docker
Tailscale
