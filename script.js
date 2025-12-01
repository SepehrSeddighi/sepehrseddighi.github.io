// JavaScript for parallax effect
document.addEventListener("scroll", function() {
    const scrollPosition = window.scrollY;
  
    // Adjust scroll speed for each layer
    document.querySelector(".layerhome1").style.transform = `translateY(${scrollPosition * 0.0}px)`;
    document.querySelector(".layerhome2").style.transform = `translateY(${scrollPosition * 0.2}px)`;
    document.querySelector(".layerhome3").style.transform = `translateY(${scrollPosition * 0.4}px)`;
    document.querySelector(".layerhome4").style.transform = `translateY(${scrollPosition * 0.6}px)`;
    document.querySelector(".layerhome5").style.transform = `translateY(${scrollPosition * 0.8}px)`;
    document.querySelector(".layerhome6").style.transform = `translateY(${scrollPosition * 1}px)`;
    
  });
  $(document).ready(function(){
    console.log($('#carouselwithIndicators1').css('height')); // check the initial height of the carousel;
    
    // now apply this height as a max-height on all the image items; css will handle the rest;
    $('#carouselwithIndicators1').find('.carousel-item img').css('max-height', $('#carouselwithIndicators1').css('height'))
  });


const thumbs = document.querySelectorAll('.gallery-thumb');
const overlay = document.getElementById('imageOverlay');
const overlayImg = document.getElementById('overlayImg');

thumbs.forEach(img => {
  img.addEventListener('click', () => {
    overlayImg.src = img.dataset.full || img.src;
    overlay.style.display = 'flex';
  });
});

// Click anywhere to close
overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
  overlayImg.src = '';
});