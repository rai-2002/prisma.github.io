/* Open menu */
function openNav() {
    document.getElementById("myNav").style.display = "block";
  }

/* Close menu */
function closeNav() {
    document.getElementById("myNav").style.display = "none";
  }

//navbar scroll

window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  var contactSection = document.querySelector('.catalogue');
  var logoSVG = document.getElementById('logo'); // Get the SVG element

  var contactSectionTop = contactSection.offsetTop;
  var contactSectionHeight = contactSection.offsetHeight;
  var scrollPosition = window.scrollY;

  if (scrollPosition >= contactSectionTop && scrollPosition < contactSectionTop + contactSectionHeight) {
      navbar.style.color = '#FFFBEA'; // Change text color if needed
      logoSVG.src = 'logo-w.png'; // Change the image file for the SVG
  } else {
      navbar.style.color = '#E01F26'; // Default text color when not over contact section
      logoSVG.src = 'logo-r.png'; // Default image file for the SVG
  }
});


