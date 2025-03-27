
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage")
let qrText = document.getElementById("qrText")


function generatorQR(){
  qrImage.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
  imgBox.classList.add("show-img");
}

function downloadQR() {
  if (!qrImage.src || qrImage.src.includes("blank")) {
    alert("Please generate a QR code first!");
    return;
  }

  // Fetch the QR code image and convert it to a blob
  fetch(qrImage.src)
    .then(response => response.blob())
    .then(blob => {
      let link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "QRCode.png"; // File name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch(error => {
      console.error("Error downloading QR Code:", error);
      alert("Failed to download QR Code. Try again!");
    });
}