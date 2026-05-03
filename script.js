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

const addQRLibrary = () => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js";
    document.body.appendChild(script);
}

const init = () => {
    document.addEventListener('DOMContentLoaded', addQRLibrary);

    const generateButton =
        document.getElementById('generate-button');

    if (!generateButton) {
        console.log('generate button not found');
    }

    generateButton
        .addEventListener('click', generateQR)

    const downloadButton = document.getElementById('download-button');
    if (!downloadButton) {
        console.log('download button not found');
    }

    downloadButton.addEventListener('click', () => {
        const canvas = document.querySelector('canvas');
        const dataUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'qrcode.png';
        link.click();
    })
}

init();

