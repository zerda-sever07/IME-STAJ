// sağ kolu seçiyoruz
let kol = document.getElementById("kol");

// kolun dönme açısı
let aci = 0;

// hareket yönü
let yon = 1;

// sürekli çalışacak animasyon
setInterval(function(){

    // açı değiştir
    aci += yon * 5;

    // sınır kontrolü
    if(aci > 85 || aci < -40){
        yon *= -1; // yönü değiştir
    }

    // kolu döndür
    kol.style.transform = "rotate(" + aci + "deg)";

},100);
