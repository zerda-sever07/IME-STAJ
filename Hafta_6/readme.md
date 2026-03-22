# 6. Hafta – Laravel Eloquent İlişkileri ve Veritabanı Modelleme

## Yapılan Çalışmalar
Bu hafta Laravel framework kullanılarak Eloquent ORM yapısı ve veritabanı ilişkileri üzerine çalışmalar gerçekleştirilmiştir. Çalışma sürecinde Laravel’in sunduğu ilişki yönetimi özellikleri incelenmiş ve tablolar arasında bağlantı kurma yöntemleri uygulamalı olarak öğrenilmiştir.

Projede, gerçek hayata yakın bir sistem modeli oluşturularak tablolar arasında farklı ilişki türleri tanımlanmış ve bu ilişkilerin uygulama içerisindeki davranışları gözlemlenmiştir. Bu kapsamda öncelikle bire bir (One To One) ilişki yapısı ele alınmış ve bir kaydın yalnızca tek bir kayıt ile eşleştiği durumlar incelenmiştir.

Daha sonra bire çok (One To Many) ilişkisi üzerinde çalışılmış ve bir tablodaki kaydın birden fazla kayıt ile ilişkilendirilebildiği görülmüştür. Bu ilişkiye örnek olarak bir dersin birden fazla ödeve sahip olması senaryosu uygulanmıştır.

Devamında çoka çok (Many To Many) ilişki türü ele alınmış ve iki tablonun birbirine çoklu şekilde bağlanabilmesi için pivot tablo kullanımı öğrenilmiştir. Bu yapı sayesinde daha esnek veri ilişkileri kurulabildiği gözlemlenmiştir.

Ayrıca dolaylı ilişkilerden biri olan HasManyThrough yapısı incelenmiş ve bir modelin başka bir modele doğrudan değil, aradaki farklı bir tablo aracılığıyla erişebildiği anlaşılmıştır. Bunun yanında polymorphic ilişkiler üzerinde çalışılarak tek bir tablonun birden fazla model tarafından ortak kullanılabildiği görülmüştür. Bu kapsamda resim, yorum ve etiket sistemleri için polymorphic yapıların kullanımı incelenmiştir.

## Kullanılan Uygulamalar
- Laravel Herd  
- Visual Studio Code  
- GitHub  
- SQLite  

## Kazanımlar
Bu hafta yapılan çalışmalar sonucunda Laravel Eloquent ORM ile veritabanı ilişkilerinin nasıl kurulduğu öğrenilmiştir. One To One, One To Many ve Many To Many gibi temel ilişki türleri uygulamalı olarak anlaşılmıştır. Ayrıca pivot tablo kullanımı ve dolaylı ilişkiler (HasManyThrough) hakkında bilgi edinilmiştir.

Bunun yanında polymorphic ilişkiler sayesinde veritabanında daha esnek ve tekrar kullanılabilir yapılar oluşturulabileceği görülmüştür. Yapılan çalışmalar sırasında farklı kaynaklardan ve yapay zeka destekli araçlardan yararlanılarak konular pekiştirilmiş ve uygulama mantığı daha net bir şekilde kavranmıştır.
