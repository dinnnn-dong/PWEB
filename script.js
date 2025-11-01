const music = document.getElementById('bgMusic');
const playBtn = document.getElementById('playMusic');
playBtn.addEventListener('click', () => {
  music.play();
  playBtn.textContent = "🎶 Musik Diputar";
});

const motivationTexts = [
  "Kamu gak sendirian, aku selalu ada di sini ",
  "Jangan pernah berubah yaa ",
  "Aku percaya sama kamu — selalu ",
  "Hari buruk cuma sementara, tapi aku yakin kamu akan tetap hebat ",
  "Gak perlu sempurna buat bahagia, cukup jadi kamu "
];

const popup = document.getElementById('popup');
const text = document.getElementById('motivationText');
const closeBtn = document.getElementById('closePopup');
const buttons = document.querySelectorAll('.motivationBtn');

buttons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const random = motivationTexts[Math.floor(Math.random() * motivationTexts.length)];
    text.textContent = random;
    popup.classList.add('show'); 
    createConfetti(e.clientX, e.clientY);
  });
});

closeBtn.addEventListener('click', () => popup.classList.remove('show'));

function createConfetti(x, y) {
  const colors = ['#ffb6c1', '#ff69b4', '#ffd700', '#87cefa', '#98fb98', '#dda0dd'];

  for (let i = 0; i < 50; i++) {
    const conf = document.createElement('div');
    conf.classList.add('confetti');
    conf.style.left = x + 'px';
    conf.style.top = y + 'px';
    conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    conf.style.width = Math.random() * 8 + 6 + 'px';
    conf.style.height = conf.style.width;
    conf.style.borderRadius = '50%';
    conf.style.opacity = 0.9;
    conf.style.position = 'fixed';
    document.body.appendChild(conf);

    const duration = Math.random() * 2 + 1.5;
    const translateX = (Math.random() - 0.5) * 400;
    const translateY = Math.random() * 400 + 200;

    conf.animate([
      { transform: `translate(0, 0) rotate(0deg)`, opacity: 1 },
      { transform: `translate(${translateX}px, ${translateY}px) rotate(1080deg)`, opacity: 0 }
    ], {
      duration: duration * 1000,
      easing: 'ease-out',
      fill: 'forwards'
    });

    setTimeout(() => conf.remove(), duration * 1000);
  }
}

// ==== Surat Rahasia ====
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


// ==== Surat Rahasia Multi-Slide (Tambahan Baru) ====
const slides = document.querySelectorAll('.letter-slide');
const nextBtn = document.getElementById('nextSlide');
const prevBtn = document.getElementById('prevSlide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

nextBtn?.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

prevBtn?.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});
