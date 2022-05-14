function carpmaSonucu() {
    console.log(1)
    var birimFiyat = parseInt(document.getElementById("birim-fiyat").innerHTML);
    var miktar = parseInt(document.getElementById("miktar").innerHTML);


    var sonuc = birimFiyat*miktar;
    document.getElementById("ara-toplam").innerText = sonuc+"₺";
};

carpmaSonucu()

