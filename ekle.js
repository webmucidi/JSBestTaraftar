const formIletisim=document.getElementById("futbolcu");
const txtAdSoyad=document.getElementById("txtAdSoyad");
const txtMevki=document.getElementById("txtMevki");


async function postJSON() {

    let futbolcuAd=txtAdSoyad.value;
    let futbolcuMevki=txtMevki.value;

    try {
      const response = await fetch("http://localhost:3000/futbolcular", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            ad:futbolcuAd,
            mevki:futbolcuMevki

      })
      });
  
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  

