const formFutbolcu=document.getElementById("formFutbolcu");
const txtAd=document.getElementById("txtAd");
const txtYas=document.getElementById("txtYas");
const txtGol=document.getElementById("txtGol");
const txtMaas=document.getElementById("txtMaas");
const txtKirmizi=document.getElementById("txtKirmizi");
const txtSari=document.getElementById("txtSari");
const txtMac=document.getElementById("txtMac");
const fileFoto=document.getElementById("fileFoto");


formFutbolcu.addEventListener("submit",verileriKaydet);

async function verileriKaydet(e){
    e.preventDefault();

    let futbolcuAd=txtAd.value;
    let futbolcuYas=txtYas.value;
    let futbolcuGol=txtGol.value;
    let futbolcuMaas=txtMaas.value;
    let futbolcuKirmizi=txtKirmizi.value;
    let futbolcuSari=txtSari.value;
    let futbolcuMac=txtMac.value;
    let futbolcuFoto=fileFoto.files[0].name;

    const sunucuYaniti=await fetch('http://localhost:3000/futbolcular',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ad:futbolcuAd,
        yas: futbolcuYas,
        gol: futbolcuGol,
        maas: futbolcuMaas,
        kirmizi:futbolcuKirmizi ,
        sari: futbolcuSari,
        mac:futbolcuMac,
        foto:"images/"+futbolcuFoto
      })
    
    });
  
    let veriler=await sunucuYaniti.json();

    alert("Veri kaydı yapıldı.");
    
  }

