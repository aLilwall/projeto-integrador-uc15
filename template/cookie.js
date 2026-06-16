//function para criar o coookie
if (!localStorage.getItem("cookiesAceitos")) {
  document.getElementById("cookie-banner").style.display = "block";
}

function aceitarCookies() {
  localStorage.setItem("cookiesAceitos", "sim");
  document.getElementById("cookie-banner").style.display = "none";
}