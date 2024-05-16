window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var contactSection = document.querySelector('.catalogue');
    var classImageSection = document.querySelector('.classImage'); // Get the .classImage section
    var logoSVG = document.getElementById('logo');
    var bmenu = document.getElementById('bmenu'); // Get the bmenu element
  
    var contactSectionTop = contactSection.offsetTop;
    var contactSectionHeight = contactSection.offsetHeight;
    var classImageSectionTop = classImageSection.offsetTop;
    var classImageSectionHeight = classImageSection.offsetHeight;
    var scrollPosition = window.scrollY;

    // Check if scroll position is within the bounds of contactSection or classImageSection
    if ((scrollPosition >= contactSectionTop && scrollPosition < contactSectionTop + contactSectionHeight) || 
        (scrollPosition >= classImageSectionTop && scrollPosition < classImageSectionTop + classImageSectionHeight)) {
        navbar.style.color = '#FFFBEA'; // Change text color if needed
        logoSVG.src = 'assets/logo-w.png'; // Change the image file for the SVG
        bmenu.classList.add('white-bmenu'); // Add white-bmenu class
    } else {
        navbar.style.color = '#E01F26'; // Default text color when not over contact section
        logoSVG.src = 'assets/logo-r.png'; // Default image file for the SVG
        bmenu.classList.remove('white-bmenu'); // Remove white-bmenu class
    }
});

