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
  let secilenKart=null;
  let soru,secenekler,dogruCevap,kullaniciCevap,bilgiler;
  let puan=0;
  let hak=0;

  //Sonuç ekranında kullanılacak nesneler tanımlanıp değişkene aktarıldı.
  const yenidenButon=document.createElement("button");
  const sonucDiv = document.createElement("div");
  const sonucResim=document.createElement("img");

  const futbolcuFotolari=document.getElementsByTagName("img");
[...futbolcuFotolari].forEach((futbolcuFoto,index) => {
  futbolcuFoto.addEventListener("click",()=>{
    secilenFutbolcu=futbolcuFoto.getAttribute("alt");
    //Seçilen futbolcuya ait divi belirleyelim
    secilenKart=futbolcuFoto.parentNode;

    //Soruyu göstermeden önce daha önce cevap hakkını kullanmış mı bakıyoruz!
    if (secilenKart.classList.contains("cevap") || secilenKart.classList.contains("yanlis")) {
      alert("Yalnızca 1 kez soru seçme ve cevaplama hakkınız var! Başka kart seçiniz.");
              //Uyarıyı yapıp cevap seçeneklerini ekrandan kaldırıyoruz.
              const silinecekler=document.getElementsByTagName("button");
              [...silinecekler].forEach((silinecek)=>{
                  silinecek.remove();
              });
    }
    else{
      soruyuGoster(secilenFutbolcu);
    }
    
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

  //Her cevap kontrolü 1 hakkımızdan götürüyor,maks 10 hakkımız dolana kadar devam ediyor.
    hak++;
    if(hak<=10){
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

    
  }
  else{
    
        //10 hakkımız dolduktan sonra kartları,soruyu ve cevap butonlarını gizliyoruz.
        const gizlenecekler=document.getElementsByClassName("kart");
        
        [...gizlenecekler].forEach((gizlenecek)=>{
          gizlenecek.classList.remove("acik");
            gizlenecek.classList.add("gizli");
        });

    const silinecekler=document.getElementsByTagName("button");
    [...silinecekler].forEach((silinecek)=>{
        silinecek.remove();
    });

    document.getElementById("soruBaslik").classList.add("gizli");


    //Sonuçları göstermek için yeni div oluşturup puana göre resim ve mesaj gösteriyoruz.
 
    sonucDiv.classList.add("sonuc");
   
    sonucResim.classList.add("sonucResim");
    const govde = document.querySelector("body");
    govde.appendChild(sonucDiv);
    govde.appendChild(sonucResim);

    if (puan >= 80) {
    sonucDiv.innerText = "Tebrikler! Taraftarlık seviyeniz Rambo Okan.";
    sonucResim.src="images/rambo.jpg";
    } else if (puan >= 50) {
    sonucDiv.innerText = "Netflix yerine daha çok futbol izlemelisiniz.";
    sonucResim.src="images/netflix.jpg";
    } else {
    sonucDiv.innerText = "Futbolla alaka seviyeniz Kerimcan Durmaz.";
    sonucResim.src="images/kerimcan.jpg";
    }



    //Yukarıda global oluşturduğumuz yeniden oyna butonunu ilgi fn.a yönlendiriyoruz.
    yenidenButon.innerHTML="Yeniden Oyna";
    document.getElementById("kart-sorulari").appendChild(yenidenButon);
    yenidenButon.addEventListener("click",yenidenOyna);

  }

  }

/*
  Yeniden oynatmadan önce eski sonuçları sildik,puan ve hakları sıfırladık,
  oyun bitince gizlediğimiz soru kartlarını görünür hale getirdik.
*/
  function yenidenOyna(){

    sonucDiv.remove();
    sonucResim.remove();

    hak=0;
    puan=0;


    const gizlenenler=document.getElementsByClassName("gizli");
    
    [...gizlenenler].forEach((gizlenen)=>{
        gizlenen.classList.remove("gizli");
        gizlenen.classList.remove("cevap");
        gizlenen.classList.remove("yanlis");
        gizlenen.classList.add("acik");

    });
    
    yenidenButon.remove();
  }

  
