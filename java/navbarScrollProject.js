//navbar scroll

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var contactSection = document.querySelector('.bodytext-container');
    var logoSVG = document.getElementById('logo');
  
    var contactSectionTop = contactSection.offsetTop;
    var contactSectionHeight = contactSection.offsetHeight;
    var scrollPosition = window.scrollY;
  
    if (scrollPosition >= contactSectionTop && scrollPosition < contactSectionTop + contactSectionHeight) {
        navbar.style.color = '#FFFBEA'; 
        logoSVG.src = 'assets/logo-w.png'; 
    } else {
        navbar.style.color = '#E01F26'; 
        logoSVG.src = 'assets/logo-r.png';
    }
  });