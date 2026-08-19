const surpriseBtn = document.getElementById('openSurprise');
const intro = document.getElementById('intro');
const letterBtn = document.getElementById('openLetter');
const letterCard = document.getElementById('letterCard');
const cards = [...document.querySelectorAll('.polaroid')];
const count = document.getElementById('photoCount');
let current = 0;

surpriseBtn?.addEventListener('click', () => {
  intro.scrollIntoView({ behavior: 'smooth' });
  burstHearts(12);
});

function showCard(index) {
  current = (index + cards.length) % cards.length;
  cards.forEach((card, i) => card.classList.toggle('active', i === current));
  count.textContent = `${current + 1} / ${cards.length}`;
}

document.getElementById('nextPhoto')?.addEventListener('click', () => showCard(current + 1));
document.getElementById('prevPhoto')?.addEventListener('click', () => showCard(current - 1));

let touchStartX = 0;
const stack = document.getElementById('polaroidStack');
stack?.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, {passive:true});
stack?.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].screenX - touchStartX;
  if (Math.abs(dx) > 45) showCard(current + (dx < 0 ? 1 : -1));
}, {passive:true});

letterBtn?.addEventListener('click', () => {
  letterCard.classList.add('open');
  letterCard.setAttribute('aria-hidden', 'false');
  letterBtn.style.display = 'none';
  setTimeout(() => letterCard.scrollIntoView({ behavior: 'smooth', block: 'center' }), 160);
  burstHearts(18);
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: .14 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

function burstHearts(amount = 10) {
  const holder = document.querySelector('.floating-hearts');
  for (let i = 0; i < amount; i++) {
    const heart = document.createElement('span');
    heart.textContent = Math.random() > .45 ? '♡' : '♥';
    heart.style.left = `${8 + Math.random() * 84}%`;
    heart.style.fontSize = `${12 + Math.random() * 18}px`;
    heart.style.animationDuration = `${3.2 + Math.random() * 3}s`;
    heart.style.animationDelay = `${Math.random() * .7}s`;
    holder.appendChild(heart);
    setTimeout(() => heart.remove(), 7200);
  }
}

setTimeout(() => document.querySelector('.hero .reveal')?.classList.add('visible'), 120);
