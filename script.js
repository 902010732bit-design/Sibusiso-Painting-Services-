const menuToggle=document.getElementById('menuToggle');const nav=document.getElementById('mainNav');menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.textContent=open?'×':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.textContent='☰'}));document.getElementById('year').textContent=new Date().getFullYear();
const lightbox=document.getElementById('lightbox'),lightboxImage=document.getElementById('lightboxImage'),lightboxCaption=document.getElementById('lightboxCaption');document.querySelectorAll('.gallery-item').forEach(item=>{const img=item.querySelector('img');img.addEventListener('error',()=>{item.hidden=true});item.addEventListener('click',()=>{if(!img.complete||img.naturalWidth===0)return;lightboxImage.src=img.src;lightboxImage.alt=img.alt;lightboxCaption.textContent=item.querySelector('.gallery-caption').innerText.replace('↗','').trim();lightbox.showModal()})});document.getElementById('lightboxClose').addEventListener('click',()=>lightbox.close());lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close()});
let siswati=false;document.getElementById('languageToggle').addEventListener('click',()=>{siswati=!siswati;document.documentElement.lang=siswati?'ss':'en';document.querySelectorAll('[data-en][data-ss]').forEach(el=>{el.innerHTML=siswati?el.dataset.ss:el.dataset.en});document.getElementById('languageToggle').textContent=siswati?'🇬🇧 English':'🇸🇿 SiSwati'});
// Hero background slideshow: cross-fades through three backgrounds every 10 seconds.
const heroSlides = Array.from(document.querySelectorAll('.hero-background'));
let heroSlideIndex = 0;
if (heroSlides.length > 1) {
  window.setInterval(() => {
    heroSlides[heroSlideIndex].classList.remove('is-active');
    heroSlideIndex = (heroSlideIndex + 1) % heroSlides.length;
    heroSlides[heroSlideIndex].classList.add('is-active');
  }, 10000);
}
