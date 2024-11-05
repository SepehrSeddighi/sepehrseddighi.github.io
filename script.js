// JavaScript for parallax effect
document.addEventListener("scroll", function() {
    const scrollPosition = window.scrollY;
  
    // Adjust scroll speed for each layer
    document.querySelector(".layer1").style.transform = `translateY(${scrollPosition * 0.3}px)`;
    document.querySelector(".layer2").style.transform = `translateY(${scrollPosition * 0.5}px)`;
    document.querySelector(".layer3").style.transform = `translateY(${scrollPosition * 0.7}px)`;
    
  });
