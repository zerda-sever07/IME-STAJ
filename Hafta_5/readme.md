# 5. Hafta – Laravel ile Dinamik Ürün Yönetimi ve Veritabanı Entegrasyonu
## Yapılan Çalışmalar

Bu hafta **Laravel framework kullanılarak veritabanı tabanlı bir kitap listeleme sistemi geliştirilmiştir. Çalışma sırasında Laravel’in MVC (Model–View–Controller) mimarisi uygulanarak uygulamanın daha düzenli ve sürdürülebilir bir yapıda geliştirilmesi sağlanmıştır.

Projede geliştirme ortamı olarak Laravel Herd kullanılmış ve veritabanı tarafında hafif ve taşınabilir yapısı nedeniyle SQLite tercih edilmiştir. SQLite kullanılarak ürün bilgilerini saklayan bir veritabanı oluşturulmuş ve Laravel ile bağlantısı sağlanmıştır.

Veritabanı mimarisi oluşturulurken Laravel’in Migration yapısı kullanılmış ve books adlı tablo oluşturulmuştur. Bu tabloda aşağıdaki alanlar tanımlanmıştır:

id

title

author

pages

Migration işlemi çalıştırılarak veritabanı şeması oluşturulmuştur.

Daha sonra uygulama ile veritabanı arasında bağlantı kurmak amacıyla Book Modeli oluşturulmuştur. Test aşamasında kullanılmak üzere Factory ve Faker kütüphanesi yardımıyla 20 adet rastgele kitap verisi üretilmiş ve veritabanına eklenmiştir.

Backend tarafında BookController oluşturularak verilerin sayfalar halinde gösterilmesi sağlanmıştır. Bunun için Laravel’in paginate(5) metodu kullanılmış ve kitapların her sayfada 5 adet olacak şekilde listelenmesi sağlanmıştır.

Son olarak kullanıcıların bu verilere web arayüzünden erişebilmesi için /odev-sonuc adlı bir rota tanımlanmış ve sistem tarayıcı üzerinden test edilmiştir.

## Kullanılan Teknolojiler

Laravel

Laravel Herd

Visual Studio Code

GitHub

SQLite

## Kazanımlar

Bu hafta yapılan çalışmalar sonucunda aşağıdaki konularda deneyim kazanılmıştır:

Laravel MVC mimarisi

Migration kullanarak veritabanı tablosu oluşturma

Model yapısı ile veritabanı bağlantısı kurma

Eloquent ORM kullanarak veri çekme ve veri üretme

Factory ve Faker ile test verisi oluşturma

Pagination (sayfalama) işlemi

Laravel Herd ile modern geliştirme ortamı kullanımı

SQLite veritabanı ile entegrasyon
