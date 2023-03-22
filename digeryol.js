const futbolcular={
    Messi: {
      soru: "Kariyerindeki gol sayısı?",
      golSayisi: 782
    },
    Ronaldo: {
      soru: "Kariyerindeki gol sayısı?",
      golSayisi: 793
    },
    Neymar: {
      soru: "Kariyerindeki gol sayısı?",
      golSayisi: 256
    }
  };
  

  let secilenFutbolcu = null;
  let soru,secenekler,dogruCevap,kullaniciCevap,bilgiler,secilenKart;
  let puan=0;

  const futbolcuFotolari=document.getElementsByTagName("img");
[...futbolcuFotolari].forEach((futbolcuFoto,index) => {
  futbolcuFoto.addEventListener("click",()=>{
    secilenFutbolcu=futbolcuFoto.getAttribute("alt");
    //Seçilen futbolcuya ait divi belirleyelim
    secilenKart=futbolcuFoto.parentNode;

    soruyuGoster(secilenFutbolcu);
  });
});

function soruyuGoster(secilenFutbolcu){

    //Öncelikle daha önceki sorudan kalan seçenekler varsa temizleyelim
    const silinecekler=document.getElementsByTagName("button");
    [...silinecekler].forEach((silinecek)=>{
        silinecek.remove();
    });
 
    bilgiler=futbolcular[secilenFutbolcu];
    
    soru=bilgiler['soru'];
    secenekler=[bilgiler['golSayisi'],bilgiler['golSayisi']+Math.floor(Math.random()*3+1)];
    dogruCevap=bilgiler.golSayisi;
    //console.log(bilgiler);
    
    document.getElementById("soruBaslik").textContent = soru;

    secenekler.forEach((secenek)=>{
      
      const yeniSecenek=document.createElement("button");
      yeniSecenek.innerHTML=secenek;
      document.getElementById("kart-sorulari").appendChild(yeniSecenek);
      yeniSecenek.addEventListener("click",cevabiKontrolEt);
    });
}

function cevabiKontrolEt(){

    
    kullaniciCevap=this.innerHTML;
    
    console.log(kullaniciCevap,dogruCevap);

    if(kullaniciCevap==dogruCevap){
      alert("Tebrikler. Doğru cevap.");
      //Cevaba göre kırmızı/yeşil renklendirme
      secilenKart.classList.remove("yanlis");
      secilenKart.classList.add("cevap");

      //Doğru cevap için 10 puan ekleme
        puan+=10;
    }
    else{
      alert("Yanlış cevap!!!");
      //Cevaba göre kırmızı/yeşil renklendirme
      secilenKart.classList.remove("cevap");
      secilenKart.classList.add("yanlis");
    }

    console.log(puan)


  }

  
    //Sonuçları değerlendirme ve oyunun bitişi