//navbar scroll

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var contactSection = document.querySelector('.statement');
    var logoSVG = document.getElementById('logo'); // Get the SVG element
  
    var contactSectionTop = contactSection.offsetTop;
    var contactSectionHeight = contactSection.offsetHeight;
    var scrollPosition = window.scrollY;
  
    if (scrollPosition >= contactSectionTop && scrollPosition < contactSectionTop + contactSectionHeight) {
        navbar.style.color = '#FFFBEA'; // Change text color if needed
        logoSVG.src = 'assets/logo-w.png'; // Change the image file for the SVG
    } else {
        navbar.style.color = '#E01F26'; // Default text color when not over contact section
        logoSVG.src = 'assets/logo-r.png'; // Default image file for the SVG
    }
  });