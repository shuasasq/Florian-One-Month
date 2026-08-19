const pic=(window.FLORIAN_IMAGES||[])[0];
if(pic){
  document.querySelectorAll('.polaroid img').forEach(img=>img.src=pic);
  const hero=document.querySelector('.hero-photo');
  const ending=document.querySelector('.ending-photo');
  const letter=document.querySelector('.letter-backdrop');
  if(hero) hero.style.backgroundImage=`url("${pic}")`;
  if(ending) ending.style.backgroundImage=`url("${pic}")`;
  if(letter) letter.style.backgroundImage=`linear-gradient(rgba(15,11,24,.73),rgba(15,11,24,.94)),url("${pic}")`;
}
