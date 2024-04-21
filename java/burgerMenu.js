/* Open menu */
function openNav() {
    document.getElementById("myNav").style.display = "block";
  }

/* Close menu */
function closeNav() {
    document.getElementById("myNav").style.display = "none";
  }

function closeNav() {
    var navOverlay = document.getElementById('myNav');
    navOverlay.style.display = 'none'; 
  }

//arrow smooth scroll

document.addEventListener('DOMContentLoaded', function() {
  var scrollArrow = document.getElementById('scrollArrow');
  scrollArrow.addEventListener('click', function(event) {
      event.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
          target.scrollIntoView({
              behavior: 'smooth'
          });
      }
  });
});


