const futbolcular={
    Messi: {
      soru: "Gol sayısı kaç?",
      golSayisi: 789,

    },
    Ronaldo: {
      soru: "Gol sayısı kaç?",
      golSayisi: 796,

    },
    Neymar: {
      soru: "Gol sayısı kaç?",
      golSayisi:250,

    }
  };

  let bilgiler,soru,dogruCevap,secenekler,kullaniciCevap,futbolcuFotolari,secilenFutbolcu;

  futbolcuFotolari=document.getElementsByTagName("img");
[...futbolcuFotolari].forEach((futbolcuFoto,index) => {
  futbolcuFoto.addEventListener("click",()=>{
    secilenFutbolcu=futbolcuFoto.getAttribute("alt");
    soruyuGoster(secilenFutbolcu);
  });
});

function soruyuGoster(secilenFutbolcu){

        //Öncelikle daha önceki sorudan kalan seçenekler varsa temizleyelim
        const silinecekler=document.getElementsByTagName("button");
        [...silinecekler].forEach((silinecek)=>{
            silinecek.remove();
        });
     

    alert("Maraba ben "+secilenFutbolcu);

    bilgiler=futbolcular[secilenFutbolcu];
    soru=bilgiler['soru'];
    secenekler=[bilgiler['golSayisi'],bilgiler['golSayisi']+Math.floor(Math.random()*3+1)];
    dogruCevap=bilgiler.golSayisi;
    console.log(dogruCevap);
    
    
    document.getElementById("soruBaslik").textContent = soru;


    secenekler.forEach((secenek)=>{
      
      const yeniSecenek=document.createElement("button");
      yeniSecenek.innerHTML=secenek;
      document.getElementById("kart-sorulari").appendChild(yeniSecenek);
      
    });
}