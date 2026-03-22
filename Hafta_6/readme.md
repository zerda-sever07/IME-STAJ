# 6. Hafta – Laravel Eloquent İlişkileri ve Veritabanı Modelleme
## Yapılan Çalışmalar
Bu hafta gerçekleştirilen çalışmalarda Laravel framework kapsamında Eloquent ORM yapısı ve veritabanı ilişkileri detaylı şekilde ele alınmıştır. Süreç boyunca Laravel’in sunduğu ilişki yönetim mekanizmaları incelenmiş ve tablolar arasında nasıl bağlantı kurulacağı uygulamalı olarak öğrenilmiştir.
Çalışma kapsamında, gerçek hayattaki sistemlere benzer bir model oluşturulmuş ve bu model üzerinde farklı ilişki türleri tanımlanarak test edilmiştir. İlk olarak bire bir (One To One) ilişki incelenmiş, bir kaydın yalnızca tek bir kayıtla eşleştiği durumlar üzerinde durulmuştur.
Devamında bire çok (One To Many) ilişkisi ele alınmış ve bir kaydın birden fazla kayıt ile ilişkilendirilebildiği yapı analiz edilmiştir. Bu ilişki türü, bir dersin birden fazla ödeve sahip olması örneği üzerinden uygulanmıştır.
Bunun ardından çoka çok (Many To Many) ilişkiler incelenmiş ve iki tablo arasında çoklu bağlantı kurulabilmesi için pivot tablo kullanımının gerekliliği öğrenilmiştir. Bu yapı sayesinde veri ilişkilerinin daha esnek bir hale getirilebildiği gözlemlenmiştir.
Ayrıca dolaylı ilişki türlerinden biri olan HasManyThrough yapısı üzerinde çalışılmış ve bir modelin başka bir modele doğrudan değil, aracı bir tablo üzerinden erişim sağlayabildiği anlaşılmıştır. Ek olarak polymorphic ilişkiler incelenmiş ve tek bir tablonun birden fazla model tarafından ortak şekilde kullanılabileceği görülmüştür. Bu yapı özellikle resim, yorum ve etiket gibi sistemlerde uygulanmıştır.
## Kullanılan Uygulamalar
- Laravel Herd  
- Visual Studio Code  
- GitHub  
- SQLite  
## Kazanımlar
Bu hafta yapılan çalışmalar sonucunda Laravel Eloquent ORM kullanılarak veritabanı ilişkilerinin nasıl kurulduğu öğrenilmiştir. One To One, One To Many ve Many To Many gibi temel ilişki türleri uygulamalı olarak pekiştirilmiştir. Bunun yanı sıra pivot tablo yapısı ve HasManyThrough gibi dolaylı ilişkiler hakkında bilgi edinilmiştir.
Ayrıca polymorphic ilişkiler sayesinde veritabanı tasarımında daha esnek ve tekrar kullanılabilir yapıların oluşturulabileceği anlaşılmıştır. Çalışma sürecinde farklı kaynaklardan ve yapay zeka destekli araçlardan faydalanılarak konular derinlemesine öğrenilmiş ve uygulama mantığı daha iyi kavranmıştır.
