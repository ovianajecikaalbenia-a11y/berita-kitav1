// login.js

function loginUser(event) {
  event.preventDefault(); // Mencegah halaman reload

  // Ambil nilai dari input
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Data login yang benar
  const validUsername = "Tesalonika";
  const validPassword = "TU23";

  // Verifikasi login
  if (username === validUsername && password === validPassword) {
    alert("Login berhasil! Selamat datang, " + username + "!");
    window.location.href = "index.html"; // Arahkan ke halaman beranda
  } else {
    alert("Username atau password salah. Silakan coba lagi.");
  }
}