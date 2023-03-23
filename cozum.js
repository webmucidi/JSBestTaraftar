const futbolcular={
    Messi: {
      sorular: ["Gol sayısı kaç?","Kariyer maç sayısı?","Kırmızı kart sayısı?"],
      cevaplar:[785,900,5] 

    },
    Ronaldo: {
      sorular: ["Gol sayısı kaç?","Kariyer maç sayısı?","Kırmızı kart sayısı?"],
      cevaplar:[850,1000,3] 

    },
    Neymar: {
      sorular: ["Gol sayısı kaç?","Kariyer maç sayısı?","Kırmızı kart sayısı?"],
      cevaplar:[250,500,15] 

    }
  };

  let bilgiler,sorular,cevaplar,randomSoru,randomCevap,secenekler,kullaniciCevap,futbolcuFotolari,secilenFutbolcu,secilenKart;

  futbolcuFotolari=document.getElementsByTagName("img");
[...futbolcuFotolari].forEach((futbolcuFoto,index) => {
  futbolcuFoto.addEventListener("click",()=>{
    secilenFutbolcu=futbolcuFoto.getAttribute("alt");
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
     

    //alert("Maraba ben "+secilenFutbolcu);

    bilgiler=futbolcular[secilenFutbolcu];
    sorular=bilgiler['sorular'];
    let randomSayi=Math.floor(Math.random()*sorular.length);
    randomSoru=sorular[randomSayi];
    cevaplar=bilgiler['cevaplar'];
    randomCevap=cevaplar[randomSayi];

    secenekler=[randomCevap,randomCevap+Math.floor(Math.random()*3+1)];

    
    
    document.getElementById("soruBaslik").textContent = `${secilenFutbolcu} :`+randomSoru;


    secenekler.forEach((secenek)=>{
      
      const yeniSecenek=document.createElement("button");
      yeniSecenek.innerHTML=secenek;
      document.getElementById("kart-sorulari").appendChild(yeniSecenek);
      yeniSecenek.addEventListener("click",cevabiKontrolEt);
      
    });
}

function cevabiKontrolEt(){
  kullaniciCevap=this.innerHTML;
  
  console.log(kullaniciCevap,randomCevap);

  if(kullaniciCevap==randomCevap){
    alert("Tebrikler. Doğru cevap.");
    secilenKart.classList.remove("yanlis");
    secilenKart.classList.add("cevap");
    
  }
  else{
    alert("Yanlış cevap!!!");
    secilenKart.classList.remove("dogru");
    secilenKart.classList.add("yanlis");
  }
}