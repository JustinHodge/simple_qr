const generateQR = () => {
  const url = document.getElementById("urlInput").value.trim();
  const qrContainer = document.getElementById("qrcode");

  qrContainer.innerHTML = "";

  if (!url) {
    alert("Please enter a URL");
    return;
  }

  new QRCode(qrContainer, {
    text: url,
    width: 200,
    height: 200
  });
}

const generateButton = 
  document.getElementById('generate-button');

if (!generateButton) {
  console.log('generate button not found');
}

generateButton
  .addEventListener('click', generateQR)
