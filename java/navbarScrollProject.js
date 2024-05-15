//navbar scroll

// window.addEventListener('scroll', function() {
//     var navbar = document.querySelector('.navbar');
//     var contactSection = document.querySelector('.bodytext-container');
//     var logoSVG = document.getElementById('logo');
  
//     var contactSectionTop = contactSection.offsetTop;
//     var contactSectionHeight = contactSection.offsetHeight;
//     var scrollPosition = window.scrollY;
  
//     if (scrollPosition >= contactSectionTop && scrollPosition < contactSectionTop + contactSectionHeight) {
//         navbar.style.color = '#FFFBEA'; 
//         logoSVG.src = 'assets/logo-w.png'; 
//     } else {
//         navbar.style.color = '#E01F26'; 
//         logoSVG.src = 'assets/logo-r.png';
//     }
//   });

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var contactSection = document.querySelector('.bodytext-container');
    var logoSVG = document.getElementById('logo');
    var bmenu = document.getElementById('bmenu'); // Get the bmenu element
  
    var contactSectionTop = contactSection.offsetTop;
    var contactSectionHeight = contactSection.offsetHeight;
    var scrollPosition = window.scrollY;
  
    if (scrollPosition >= contactSectionTop && scrollPosition < contactSectionTop + contactSectionHeight) {
        navbar.style.color = '#FFFBEA'; // Change text color if needed
        logoSVG.src = 'assets/logo-w.png'; // Change the image file for the SVG
        bmenu.classList.add('white-bmenu'); // Add white-bmenu class
    } else {
        navbar.style.color = '#E01F26'; // Default text color when not over contact section
        logoSVG.src = 'assets/logo-r.png'; // Default image file for the SVG
        bmenu.classList.remove('white-bmenu'); // Remove white-bmenu class
    }
});
