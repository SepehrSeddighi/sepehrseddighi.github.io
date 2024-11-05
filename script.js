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
