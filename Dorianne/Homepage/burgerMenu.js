/* Open menu */
function openNav() {
    document.getElementById("myNav").style.display = "block";
  }

/* Close menu */
function closeNav() {
    document.getElementById("myNav").style.display = "none";
  }

//navbar scroll

// window.addEventListener('scroll', function() {
//   var navbar = document.querySelector('.navbar');
//   var contactSection = document.querySelector('.contact');

//   var contactSectionTop = contactSection.offsetTop;
//   var contactSectionHeight = contactSection.offsetHeight;
//   var scrollPosition = window.scrollY;

//   if (scrollPosition >= contactSectionTop && scrollPosition < contactSectionTop + contactSectionHeight) {
//       // navbar.style.backgroundColor = 'white';
//       navbar.style.color = '#FFFBEA'; // Change text color if needed
//   } else {
//       // navbar.style.backgroundColor = '#029B83'; // Default color when not over contact section
//       navbar.style.color = '#E01F26'; // Default text color when not over contact section
//   }
// });
