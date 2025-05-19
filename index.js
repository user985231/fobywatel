document.getElementById("enterButton").addEventListener("click", function () {
  const fileInput = document.getElementById("upload-photo");
  if (fileInput.files.length === 0) {
    alert("⚠️ Załaduj zdjęcie przed przejściem dalej.");
    return;
  }

  // Jeśli zdjęcie zostało dodane, przekieruj do login.html
  window.location.href = "login.html";
});
