const pics = [
  "assets/photo-1.jpg",
  "assets/photo-2.jpg",
  "assets/photo-3.jpg",
  "assets/photo-4.jpg"
];

const galleryImages = [...document.querySelectorAll('.polaroid img')];
galleryImages.forEach((img, index) => {
  if (pics[index]) img.src = pics[index];
});

const hero = document.querySelector('.hero-photo');
const ending = document.querySelector('.ending-photo');
const letter = document.querySelector('.letter-backdrop');

if (hero && pics[1]) hero.style.backgroundImage = `url("${pics[1]}")`;
if (ending && pics[3]) ending.style.backgroundImage = `url("${pics[3]}")`;
if (letter && pics[2]) {
  letter.style.backgroundImage = `linear-gradient(rgba(15,11,24,.73),rgba(15,11,24,.94)),url("${pics[2]}")`;
}
