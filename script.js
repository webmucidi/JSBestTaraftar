 const futbolcular = [
    { isim: "Lionel Messi", yas: 34, golSayisi: 782, maas: 71, kirmiziKartSayisi: 3,resim: "messi.jpg",kariyerMacSayisi: 900 },
    { isim: "Cristiano Ronaldo", yas: 37, golSayisi: 793, maas: 62, kirmiziKartSayisi: 11,resim: "ronaldo.jpg" ,kariyerMacSayisi: 900},
    { isim: "Neymar Jr.", yas: 29, golSayisi: 256, maas: 41, kirmiziKartSayisi: 4 ,resim: "neymar.jpg",kariyerMacSayisi: 900},
    { isim: "Robert Lewandowski", yas: 33, golSayisi: 327, maas: 25, kirmiziKartSayisi: 2,resim: "lewa.jpg",kariyerMacSayisi: 900 },
    { isim: "Kevin De Bruyne", yas: 30, golSayisi: 86, maas: 20, kirmiziKartSayisi: 1 ,resim: "debruyne.jpg",kariyerMacSayisi: 900},
    { isim: "Kylian Mbappé", yas: 23, golSayisi: 139, maas: 27, kirmiziKartSayisi: 1,resim: "mbappe.jpg",kariyerMacSayisi: 900 },
    { isim: "Mohamed Salah", yas: 29, golSayisi: 153, maas: 20, kirmiziKartSayisi: 0 ,resim: "salah.jpg",kariyerMacSayisi: 900},
    { isim: "Virgil van Dijk", yas: 30, golSayisi: 22, maas: 15, kirmiziKartSayisi: 1 ,resim: "virgil.jpg",kariyerMacSayisi: 900},
    { isim: "Jan Oblak", yas: 29, golSayisi: 0, maas: 12, kirmiziKartSayisi: 0,resim: "oblak.jpg",kariyerMacSayisi: 900},
    { isim: "Luka Modric", yas: 36, golSayisi: 68, maas: 10, kirmiziKartSayisi: 1 ,resim: "modric.jpg",kariyerMacSayisi: 900},
  ];
  
  const kartlarDiv = document.querySelector(".kartlar");
  let secilenKart = null;
  
  function kartOlustur(futbolcu) {
    console.log(futbolcu)
    const kart = document.createElement("div");
    kart.classList.add("kart");
    kart.innerHTML = `
      <img src="${futbolcu.resim}" alt="${futbolcu.isim}" />
      <h3>${futbolcu.isim}</h3>
    `;
    kart.addEventListener("click", () => {

        if (secilenKart !== null) {
            alert("Soruyu yanıtlamadan yeni bir futbolcu veya yeni soru seçemezsiniz!");
            return;
          }
        
      if (secilenKart === kart || kart.classList.contains("cevap") || kart.classList.contains("yanlis")) {
        return;
      }
      secilenKart = kart;
      soruSor(futbolcu);
    });
    kartlarDiv.appendChild(kart);
  }
  
  function soruSor(futbolcu) {
    
    const sorular = [
      {
        soruMetni: `${futbolcu.isim}'in kariyerinde kaç gol atmıştır?`,
        dogruCevap: futbolcu.golSayisi
      },
      {
        soruMetni: `${futbolcu.isim} kaç maçta forma giymiştir?`,
        dogruCevap: futbolcu.kariyerMacSayisi
      },
      {
        soruMetni: `${futbolcu.isim} kaç kırmızı kart görmüştür?`,
        dogruCevap: futbolcu.kirmiziKartSayisi
      },
      {
        soruMetni: `${futbolcu.isim} kaç yaşındadır?`,
        dogruCevap: futbolcu.yas
      },
      {
        soruMetni: `${futbolcu.isim} yıllık ne kadar kazanmaktadır?`,
        dogruCevap: futbolcu.maas
      }
    ];
    const randomSoru = sorular[Math.floor(Math.random() * sorular.length)];
    const cevaplar = [
      randomSoru.dogruCevap,
      randomSoru.dogruCevap+Math.floor((Math.random()*10)+1)
    ];
    cevaplar.sort(() => Math.random() - 0.5);
    const soruMetni = document.createElement("p");
    soruMetni.innerText = randomSoru.soruMetni;
    
    const cevaplarDiv = document.createElement("div");
    cevaplarDiv.classList.add("cevaplar");


    const kartSorulariDiv = document.querySelector(".kart-sorulari");
    kartSorulariDiv.appendChild(soruMetni);
    kartSorulariDiv.appendChild(cevaplarDiv)


    cevaplar.forEach((cevap) => {
      const cevapButonu = document.createElement("button");
      cevapButonu.innerText = cevap;
      cevapButonu.addEventListener("click", () => {
        if (cevap === randomSoru.dogruCevap) {
          secilenKart.classList.add("cevap");
        } else {
          secilenKart.classList.add("yanlis");
        }
        secilenKart = null;
        soruMetni.remove();
        cevaplarDiv.remove();
        sonrakiKart();
      });
      cevaplarDiv.appendChild(cevapButonu);
    });
   
;
    }
    
    function sonrakiKart() {
    const kartlar = document.querySelectorAll(".kart");
    let bitenKartSayisi = 0;
    kartlar.forEach((kart) => {
    if (kart.classList.contains("cevap") || kart.classList.contains("yanlis")) {
    bitenKartSayisi++;
    }
    });
    if (bitenKartSayisi === kartlar.length) {
    oyunBitti();
    }
    }
    
    function oyunBitti() {
    let puan = 0;
    const kartlar = document.querySelectorAll(".kart");
    kartlar.forEach((kart) => {
    if (kart.classList.contains("cevap")) {
    puan += 10;
    }
    kart.remove();
    });
    const sonucDiv = document.createElement("div");
    const sonucResim=document.createElement("img");
    sonucDiv.classList.add("sonuc");
    if (puan >= 80) {
    sonucDiv.innerText = "Tebrikler! Taraftarlık seviyeniz Rambo Okan.";
    sonucResim.src="rambo.jpg";
    } else if (puan >= 50) {
    sonucDiv.innerText = "Netflix yerine daha çok futbol izlemelisiniz.";
    sonucResim.src="netflix.jpg";
    } else {
    sonucDiv.innerText = "Futbolla alaka seviyeniz Kerimcan Durmaz.";
    sonucResim.src="kerimcan.jpg";
    }
    const govde = document.querySelector("body");
    govde.appendChild(sonucDiv);
    govde.appendChild(sonucResim);
    }
    
    futbolcular.forEach((futbolcu) => {
    kartOlustur(futbolcu);
    });