// Read URL parameters
const params = new URLSearchParams(window.location.search);
const studentId = params.get("studentId");
const mode = params.get("mode");

const infoText = document.getElementById("infoText");

if (!studentId || !mode) {
  infoText.innerText = "❌ Invalid session. Go back to Students page.";
} else {
  infoText.innerText = "Student ID: " + studentId + " | Mode: Registration";
}

function generateQR() {
  if (!studentId) {
    alert("Student ID missing");
    return;
  }

  // LOCAL TEST URL (CHANGE IP IF USING MOBILE)
  const baseURL = "https://attendance-system-f89d2.web.app";

  const qrURL =
    baseURL +
    "/register.html" +
    "?mode=register" +
    "&studentId=" +
    encodeURIComponent(studentId);

  // Clear old QR
  document.getElementById("qrcode").innerHTML = "";

  // Generate QR image
  new QRCode(document.getElementById("qrcode"), {
    text: qrURL,
    width: 220,
    height: 220
  });
}

