// === Musik ===
const music = document.getElementById('bgMusic');
const playBtn = document.getElementById('playMusic');
playBtn.addEventListener('click', () => {
  music.play();
  playBtn.textContent = "🎶 Musik Diputar";
});

// === Motivasi ===
const motivationTexts = [
  "Kamu gak sendirian, aku selalu ada di sini 💛",
  "Jangan pernah berubah yaa 🌻",
  "Aku percaya sama kamu — selalu 🌙",
  "Hari buruk cuma sementara, tapi aku yakin kamu akan tetap hebat 💪",
  "Gak perlu sempurna buat bahagia, cukup jadi kamu 🌷"
];

const popup = document.getElementById('popup');
const text = document.getElementById('motivationText');
const closeBtn = document.getElementById('closePopup');
const buttons = document.querySelectorAll('.motivationBtn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const random = motivationTexts[Math.floor(Math.random() * motivationTexts.length)];
    text.textContent = random;
    popup.classList.add('show'); 
  });
});

closeBtn.addEventListener('click', () => popup.classList.remove('show'));

// === Surat Rahasia ===
const envelopeBtn = document.getElementById('openEnvelope');
const riddlePopup = document.getElementById('riddlePopup');
const letterPopup = document.getElementById('letterPopup');
const submitRiddle = document.getElementById('submitRiddle');
const closeLetter = document.getElementById('closeLetter');
const answerInput = document.getElementById('riddleAnswer');
const feedback = document.getElementById('riddleFeedback');

const correctAnswer = "backstreet"; 

envelopeBtn.addEventListener('click', () => {
  riddlePopup.classList.add('show');
});

submitRiddle.addEventListener('click', () => {
  const answer = answerInput.value.trim().toLowerCase();
  if (answer === correctAnswer) {
    riddlePopup.classList.remove('show');
    letterPopup.classList.add('show');
    feedback.textContent = "";
  } else {
    feedback.textContent = "Hehe salah 😝 coba lagi~";
    feedback.style.color = "red";
  }
});

closeLetter.addEventListener('click', () => {
  letterPopup.classList.remove('show');
});


// ==== Slide Surat Rahasia ====
const slides = document.querySelectorAll(".letter-slide");
let currentSlide = 0;

const prevSlideBtn = document.getElementById("prevSlide");
const nextSlideBtn = document.getElementById("nextSlide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

  // Matikan tombol Next kalau udah di slide terakhir
  if (index === slides.length - 1) {
    nextSlideBtn.disabled = true;
    nextSlideBtn.style.opacity = "0.5";
    nextSlideBtn.style.cursor = "not-allowed";
  } else {
    nextSlideBtn.disabled = false;
    nextSlideBtn.style.opacity = "1";
    nextSlideBtn.style.cursor = "pointer";
  }

  // Matikan tombol Back kalau di slide pertama
  if (index === 0) {
    prevSlideBtn.disabled = true;
    prevSlideBtn.style.opacity = "0.5";
    prevSlideBtn.style.cursor = "not-allowed";
  } else {
    prevSlideBtn.disabled = false;
    prevSlideBtn.style.opacity = "1";
    prevSlideBtn.style.cursor = "pointer";
  }
}

prevSlideBtn.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
  }
});

nextSlideBtn.addEventListener("click", () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    showSlide(currentSlide);
  }
});

// Tampilkan slide pertama saat surat dibuka
showSlide(currentSlide);
